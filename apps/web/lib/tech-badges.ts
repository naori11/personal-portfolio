export interface BadgeStyle {
  bg: string;
  text: string;
  border: string;
  slug: string;
}

const techStylesDark: Record<string, BadgeStyle> = {
  FLUTTER: {
    bg: "bg-[#02569B]/10",
    text: "text-[#4fc3f7]",
    border: "border-[#02569B]/20",
    slug: "flutter",
  },
  SUPABASE: {
    bg: "bg-[#3ecf8e]/10",
    text: "text-[#3ecf8e]",
    border: "border-[#3ecf8e]/20",
    slug: "supabase",
  },
  ESP32: {
    bg: "bg-[#e7352c]/10",
    text: "text-[#ff6b6b]",
    border: "border-[#e7352c]/20",
    slug: "espressif",
  },
  ARDUINO: {
    bg: "bg-[#00979C]/10",
    text: "text-[#00979C]",
    border: "border-[#00979C]/20",
    slug: "arduino",
  },
  FASTAPI: {
    bg: "bg-[#009485]/10",
    text: "text-[#00f2fe]",
    border: "border-[#009485]/20",
    slug: "fastapi",
  },
  "GEMINI API": {
    bg: "bg-[#4285f4]/10",
    text: "text-[#8ab4f8]",
    border: "border-[#4285f4]/20",
    slug: "googlegemini",
  },
  DOCKER: {
    bg: "bg-[#2496ed]/10",
    text: "text-[#70b5ff]",
    border: "border-[#2496ed]/20",
    slug: "docker",
  },
  AZURE: {
    bg: "bg-[#0078d4]/10",
    text: "text-[#79c0ff]",
    border: "border-[#0078d4]/20",
    slug: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft-azure.svg",
  },
  "AZURE BICEP": {
    bg: "bg-[#0078d4]/10",
    text: "text-[#79c0ff]",
    border: "border-[#0078d4]/20",
    slug: "azure",
  },
  "GOOGLE CLOUD": {
    bg: "bg-[#4285F4]/10",
    text: "text-[#4285F4]",
    border: "border-[#4285F4]/20",
    slug: "googlecloud",
  },
  TERRAFORM: {
    bg: "bg-[#844FBA]/10",
    text: "text-[#aa80e0]",
    border: "border-[#844FBA]/20",
    slug: "terraform",
  },
  LINUX: {
    bg: "bg-[#FCC624]/10",
    text: "text-[#FCC624]",
    border: "border-[#FCC624]/20",
    slug: "linux",
  },
  NETWORKING: {
    bg: "bg-[#005F73]/10",
    text: "text-[#0a9396]",
    border: "border-[#005F73]/20",
    slug: "",
  },
  POSTGRESQL: {
    bg: "bg-[#336791]/10",
    text: "text-[#336791]",
    border: "border-[#336791]/20",
    slug: "postgresql",
  },
  "NEXT.JS": {
    bg: "bg-white/5",
    text: "text-white",
    border: "border-white/10",
    slug: "nextdotjs",
  },
  TURBOREPO: {
    bg: "bg-[#ea580c]/10",
    text: "text-[#ff9248]",
    border: "border-[#ea580c]/20",
    slug: "turborepo",
  },
  PHP: {
    bg: "bg-[#777bb4]/10",
    text: "text-[#b0b3ff]",
    border: "border-[#777bb4]/20",
    slug: "php",
  },
  MYSQL: {
    bg: "bg-[#00758f]/10",
    text: "text-[#ffad33]",
    border: "border-[#00758f]/20",
    slug: "mysql",
  },
  JAVASCRIPT: {
    bg: "bg-[#f7df1e]/10",
    text: "text-[#f7df1e]",
    border: "border-[#f7df1e]/20",
    slug: "javascript",
  },
  PYTHON: {
    bg: "bg-[#3776ab]/10",
    text: "text-[#ffd43b]",
    border: "border-[#3776ab]/20",
    slug: "python",
  },
  "GITHUB ACTIONS": {
    bg: "bg-[#2088ff]/10",
    text: "text-[#58a6ff]",
    border: "border-[#2088ff]/20",
    slug: "githubactions",
  },
  "TAILWIND CSS": {
    bg: "bg-[#38bdf8]/10",
    text: "text-[#38bdf8]",
    border: "border-[#38bdf8]/20",
    slug: "tailwindcss",
  },
  "GITHUB API": {
    bg: "bg-[#24292e]/30",
    text: "text-[#e6edf3]",
    border: "border-[#30363d]",
    slug: "github",
  },
};

const techStylesLight: Record<string, BadgeStyle> = {
  FLUTTER: {
    bg: "bg-[#02569B]/8",
    text: "text-[#02569B]",
    border: "border-[#02569B]/20",
    slug: "flutter",
  },
  SUPABASE: {
    bg: "bg-[#3ecf8e]/12",
    text: "text-[#1f8758]",
    border: "border-[#3ecf8e]/30",
    slug: "supabase",
  },
  ESP32: {
    bg: "bg-[#e7352c]/8",
    text: "text-[#b32015]",
    border: "border-[#e7352c]/20",
    slug: "espressif",
  },
  ARDUINO: {
    bg: "bg-[#00979C]/8",
    text: "text-[#007377]",
    border: "border-[#00979C]/20",
    slug: "arduino",
  },
  FASTAPI: {
    bg: "bg-[#009485]/8",
    text: "text-[#006e62]",
    border: "border-[#009485]/20",
    slug: "fastapi",
  },
  "GEMINI API": {
    bg: "bg-[#4285f4]/8",
    text: "text-[#1a56db]",
    border: "border-[#4285f4]/20",
    slug: "googlegemini",
  },
  DOCKER: {
    bg: "bg-[#2496ed]/8",
    text: "text-[#115e9b]",
    border: "border-[#2496ed]/20",
    slug: "docker",
  },
  AZURE: {
    bg: "bg-[#0078d4]/8",
    text: "text-[#005a9e]",
    border: "border-[#0078d4]/20",
    slug: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/microsoft-azure.svg",
  },
  "AZURE BICEP": {
    bg: "bg-[#0078d4]/8",
    text: "text-[#005a9e]",
    border: "border-[#0078d4]/20",
    slug: "azure",
  },
  "GOOGLE CLOUD": {
    bg: "bg-[#4285F4]/8",
    text: "text-[#1a56db]",
    border: "border-[#4285F4]/20",
    slug: "googlecloud",
  },
  TERRAFORM: {
    bg: "bg-[#844FBA]/8",
    text: "text-[#5c358c]",
    border: "border-[#844FBA]/20",
    slug: "terraform",
  },
  LINUX: {
    bg: "bg-[#FCC624]/12",
    text: "text-[#7f5a00]",
    border: "border-[#FCC624]/30",
    slug: "linux",
  },
  NETWORKING: {
    bg: "bg-[#005F73]/8",
    text: "text-[#004e5f]",
    border: "border-[#005F73]/20",
    slug: "",
  },
  POSTGRESQL: {
    bg: "bg-[#336791]/8",
    text: "text-[#244b6b]",
    border: "border-[#336791]/20",
    slug: "postgresql",
  },
  "NEXT.JS": {
    bg: "bg-canvas-surface-subtle",
    text: "text-content-text",
    border: "border-structure-border",
    slug: "nextdotjs",
  },
  TURBOREPO: {
    bg: "bg-[#ea580c]/8",
    text: "text-[#a03800]",
    border: "border-[#ea580c]/20",
    slug: "turborepo",
  },
  PHP: {
    bg: "bg-[#777bb4]/8",
    text: "text-[#4d5080]",
    border: "border-[#777bb4]/20",
    slug: "php",
  },
  MYSQL: {
    bg: "bg-[#00758f]/8",
    text: "text-[#00596d]",
    border: "border-[#00758f]/20",
    slug: "mysql",
  },
  JAVASCRIPT: {
    bg: "bg-[#f7df1e]/15",
    text: "text-[#7f6f00]",
    border: "border-[#f7df1e]/30",
    slug: "javascript",
  },
  PYTHON: {
    bg: "bg-[#3776ab]/8",
    text: "text-[#1f5075]",
    border: "border-[#3776ab]/20",
    slug: "python",
  },
  "GITHUB ACTIONS": {
    bg: "bg-[#2088ff]/8",
    text: "text-[#0052cc]",
    border: "border-[#2088ff]/20",
    slug: "githubactions",
  },
  "TAILWIND CSS": {
    bg: "bg-[#38bdf8]/8",
    text: "text-[#0369a1]",
    border: "border-[#38bdf8]/20",
    slug: "tailwindcss",
  },
  "GITHUB API": {
    bg: "bg-canvas-surface-subtle",
    text: "text-content-text",
    border: "border-structure-border",
    slug: "github",
  },
};

const defaultStyleDark: BadgeStyle = {
  bg: "bg-[var(--secondary-container)]/20",
  text: "text-[var(--on-secondary-container)]",
  border: "border-[var(--secondary-container)]/30",
  slug: "",
};
const defaultStyleLight: BadgeStyle = {
  bg: "bg-[var(--surface-container-low)]",
  text: "text-[var(--on-surface-variant)]",
  border: "border-[var(--outline)]",
  slug: "",
};

export function getTechBadgeStyle(
  tech: string,
  theme: "light" | "dark",
): BadgeStyle {
  if (theme === "light") {
    return techStylesLight[tech] || defaultStyleLight;
  }
  return techStylesDark[tech] || defaultStyleDark;
}
