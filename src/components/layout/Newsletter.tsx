export function Newsletter() {
  return (
    <section id="newsletter" className="py-24 px-6 relative overflow-hidden bg-void">
      <div className="max-w-3xl mx-auto relative z-10 border border-white/10 bg-void-light p-8 md:p-12">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-void via-safety to-void" />

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left content */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 text-safety text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 bg-safety animate-pulse" />
              Signal Active
            </div>
            <h2 className="font-header text-2xl md:text-3xl mb-4 text-bleach">
              Want to follow along?
            </h2>
            <p className="text-dust font-mono text-sm leading-relaxed">
              I send occasional updates when I publish something new. No spam, just signal.
            </p>
          </div>

          {/* Coming Soon */}
          <div className="flex-1 w-full">
            <div className="bg-void border border-white/10 p-4 text-center">
              <p className="font-mono text-sm text-dust">
                <span className="text-safety">Signal_In</span> coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

