import { capabilities } from "./home-content";

export function Capabilities() {
  return (
    <section className="px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.2em] text-[#6bd8cb]">
            02 / Capabilities
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-black tracking-tight text-[#dae2fd] sm:text-5xl">
            What I build and how it connects.
          </h2>
        </header>

        <div className="mt-12 grid border-t border-[#494456]/30 md:grid-cols-3">
          {capabilities.map((capability, index) => (
            <article
              key={capability.title}
              className={`py-8 md:px-8 md:py-10 ${
                index > 0
                  ? "border-t border-[#494456]/30 md:border-l md:border-t-0"
                  : "md:pl-0"
              } ${index === capabilities.length - 1 ? "md:pr-0" : ""}`}
            >
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#6bd8cb]">
                {capability.index}
              </p>
              <h3 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[#dae2fd]">
                {capability.title}
              </h3>
              <p className="mt-4 leading-7 text-[#b9c7df]">
                {capability.description}
              </p>
              <p className="mt-6 border-l-2 border-[#cfbdff]/50 pl-4 text-sm leading-6 text-[#b9c7df]/75">
                {capability.evidence}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
