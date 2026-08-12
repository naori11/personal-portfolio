import type React from "react";
import { act, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import PDFViewer from "./PDFViewer";

const pageSpy = vi.fn();
let documentLoadSuccess: ((value: { numPages: number }) => void) | undefined;

vi.mock("react-pdf", () => ({
  pdfjs: {
    version: "5.5.207",
    GlobalWorkerOptions: { workerSrc: "" },
  },
  Document: ({
    children,
    onLoadSuccess,
  }: {
    children: React.ReactNode;
    onLoadSuccess: (value: { numPages: number }) => void;
  }) => {
    documentLoadSuccess = onLoadSuccess;
    return <div data-testid="document">{children}</div>;
  },
  Page: (props: Record<string, unknown>) => {
    pageSpy(props);
    return <div data-testid="page" />;
  },
}));

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

let resizeCallback: ResizeObserverCallback;
const observe = vi.fn();
const disconnect = vi.fn();

class MockResizeObserver {
  constructor(callback: ResizeObserverCallback) {
    resizeCallback = callback;
  }

  observe = observe;
  disconnect = disconnect;
  unobserve = vi.fn();
}

beforeEach(() => {
  pageSpy.mockClear();
  observe.mockClear();
  disconnect.mockClear();
  vi.stubGlobal("ResizeObserver", MockResizeObserver);
});

describe("PDFViewer", () => {
  it("renders every loaded page with text and annotation layers", () => {
    render(<PDFViewer fileUrl="/assets/resume.pdf" />);

    act(() => {
      documentLoadSuccess?.({ numPages: 1 });
    });

    expect(screen.getAllByTestId("page")).toHaveLength(1);
    expect(pageSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        pageNumber: 1,
        renderTextLayer: true,
        renderAnnotationLayer: true,
      }),
    );
  });

  it("tracks container resizing and caps the rendered page at 800 pixels", () => {
    const { container, unmount } = render(
      <PDFViewer fileUrl="/assets/resume.pdf" />,
    );

    const wrapper = container.firstElementChild as HTMLDivElement;
    expect(observe).toHaveBeenCalledWith(wrapper);

    act(() => {
      documentLoadSuccess?.({ numPages: 1 });
      resizeCallback(
        [
          {
            target: wrapper,
            contentRect: { width: 1024 },
          } as unknown as ResizeObserverEntry,
        ],
        {} as ResizeObserver,
      );
    });

    expect(pageSpy).toHaveBeenLastCalledWith(
      expect.objectContaining({ width: 800 }),
    );

    act(() => {
      resizeCallback(
        [
          {
            target: wrapper,
            contentRect: { width: 640 },
          } as unknown as ResizeObserverEntry,
        ],
        {} as ResizeObserver,
      );
    });

    expect(pageSpy).toHaveBeenLastCalledWith(
      expect.objectContaining({ width: 608 }),
    );

    unmount();
    expect(disconnect).toHaveBeenCalledOnce();
  });
});
