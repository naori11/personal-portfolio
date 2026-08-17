import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const mockSend = vi.fn();

vi.mock('resend', () => {
  return {
    Resend: class {
      constructor() {
        this.emails = {
          send: mockSend,
        };
      }
    },
  };
});

import { contactHandler } from '../functions/contact.js';

function createMockContext() {
  return {
    warn: vi.fn(),
    error: vi.fn(),
    info: vi.fn(),
  };
}

function createMockRequest(body) {
  return {
    json: async () => body,
  };
}

describe('Contact Azure Function Handler', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env = { ...originalEnv, RESEND_API_KEY: 'test_resend_api_key' };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('Configuration Validation', () => {
    it('returns 500 when RESEND_API_KEY is not set', async () => {
      delete process.env.RESEND_API_KEY;
      const context = createMockContext();
      const request = createMockRequest({
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Inquiry',
        message: 'Hello world',
      });

      const response = await contactHandler(request, context);

      expect(response.status).toBe(500);
      expect(response.jsonBody).toEqual({ error: 'Email service not configured' });
      expect(context.warn).toHaveBeenCalledWith('Email service not configured.');
      expect(mockSend).not.toHaveBeenCalled();
    });
  });

  describe('Payload & Field Validation', () => {
    it('returns 400 if request body is empty or null', async () => {
      const context = createMockContext();
      const request = createMockRequest(null);

      const response = await contactHandler(request, context);

      expect(response.status).toBe(400);
      expect(response.jsonBody).toEqual({ error: 'All fields are required' });
      expect(mockSend).not.toHaveBeenCalled();
    });

    it.each([
      ['name', { email: 'john@example.com', subject: 'Subject', message: 'Message' }],
      ['email', { name: 'John Doe', subject: 'Subject', message: 'Message' }],
      ['subject', { name: 'John Doe', email: 'john@example.com', message: 'Message' }],
      ['message', { name: 'John Doe', email: 'john@example.com', subject: 'Subject' }],
    ])('returns 400 when %s is missing', async (missingField, body) => {
      const context = createMockContext();
      const request = createMockRequest(body);

      const response = await contactHandler(request, context);

      expect(response.status).toBe(400);
      expect(response.jsonBody).toEqual({ error: 'All fields are required' });
      expect(mockSend).not.toHaveBeenCalled();
    });

    it('returns 400 when email format is invalid (missing @)', async () => {
      const context = createMockContext();
      const request = createMockRequest({
        name: 'John Doe',
        email: 'invalid-email-string',
        subject: 'Hello',
        message: 'Test message',
      });

      const response = await contactHandler(request, context);

      expect(response.status).toBe(400);
      expect(response.jsonBody).toEqual({ error: 'Invalid email address' });
      expect(mockSend).not.toHaveBeenCalled();
    });
  });

  describe('Successful Email Dispatch', () => {
    it('sends email via Resend and returns 200 on valid payload', async () => {
      mockSend.mockResolvedValueOnce({ data: { id: 'msg_123' }, error: null });

      const context = createMockContext();
      const request = createMockRequest({
        name: 'Jane Doe',
        email: 'jane@example.com',
        subject: 'Project Opportunity',
        message: 'Line 1\nLine 2',
      });

      const response = await contactHandler(request, context);

      expect(response.status).toBe(200);
      expect(response.jsonBody).toEqual({ success: true });
      expect(mockSend).toHaveBeenCalledTimes(1);
      expect(mockSend).toHaveBeenCalledWith(
        expect.objectContaining({
          from: 'noreply@contact.juvan.tech',
          to: 'juvanpaulo1@gmail.com',
          replyTo: 'jane@example.com',
          subject: 'Portfolio Contact: Project Opportunity',
          html: expect.stringContaining('Line 1<br />Line 2'),
        })
      );
    });
  });

  describe('Error Handling', () => {
    it('returns 500 when Resend returns an error object', async () => {
      mockSend.mockResolvedValueOnce({ data: null, error: { message: 'Invalid API key' } });

      const context = createMockContext();
      const request = createMockRequest({
        name: 'Jane Doe',
        email: 'jane@example.com',
        subject: 'Test',
        message: 'Hello',
      });

      const response = await contactHandler(request, context);

      expect(response.status).toBe(500);
      expect(response.jsonBody).toEqual({ error: 'Failed to send message. Please try again.' });
      expect(context.error).toHaveBeenCalled();
    });

    it('returns 500 when Resend throws an unexpected exception', async () => {
      mockSend.mockRejectedValueOnce(new Error('Resend network failure'));

      const context = createMockContext();
      const request = createMockRequest({
        name: 'Jane Doe',
        email: 'jane@example.com',
        subject: 'Test',
        message: 'Hello',
      });

      const response = await contactHandler(request, context);

      expect(response.status).toBe(500);
      expect(response.jsonBody).toEqual({ error: 'Failed to send message. Please try again.' });
      expect(context.error).toHaveBeenCalled();
    });
  });
});
