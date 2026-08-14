import { capabilities } from "./home-content";

export function Capabilities() {
  return (
    <section className="px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.2em] text-[var(--tertiary)]">
            02 / Capabilities
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-black tracking-tight text-[var(--foreground)] sm:text-5xl">
            What I build and how it connects.
          </h2>
        </header>

        <div className="mt-12 grid border-t border-[var(--outline-variant)]/30 md:grid-cols-3">
          {capabilities.map((capability, index) => (
            <article
              key={capability.title}
              className={`py-8 md:px-8 md:py-10 ${
                index > 0
                  ? "border-t border-[var(--outline-variant)]/30 md:border-l md:border-t-0"
                  : "md:pl-0"
              } ${index === capabilities.length - 1 ? "md:pr-0" : ""}`}
            >
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[var(--tertiary)]">
                {capability.index}
              </p>
              <h3 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[var(--foreground)]">
                {capability.title}
              </h3>
              <p className="mt-4 leading-7 text-[var(--secondary)]">
                {capability.description}
              </p>
              <p className="mt-6 border-l-2 border-[var(--primary)]/50 pl-4 text-sm leading-6 text-[var(--secondary)]/75">
                {capability.evidence}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
