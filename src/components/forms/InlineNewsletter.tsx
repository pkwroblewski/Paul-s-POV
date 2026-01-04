/**
 * InlineNewsletter Component
 * 
 * A compact newsletter form for use in article pages
 */
export function InlineNewsletter() {
  return (
    <div className="bg-void-light border border-white/10 p-8 md:p-12 text-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-safety/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      <div className="relative z-10">
        <p className="mb-2 font-header text-xl text-bleach">
          Enjoyed this?
        </p>
        <p className="mb-4 font-mono text-sm text-dust">
          Newsletter signup coming soon.
        </p>
        <div className="inline-block bg-void border border-white/10 px-6 py-3">
          <p className="font-mono text-sm text-dust">
            <span className="text-safety">Signal_In</span> coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
