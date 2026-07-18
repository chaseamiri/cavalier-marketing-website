const tools = ['Twilio', 'ServiceTitan', 'Supabase', 'Cal.com', 'Housecall Pro', 'Jobber']

export function TrustBar() {
  return (
    <section className="border-y border-border bg-panel/50">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-subtle">
          Integrates with the tools you already use
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {tools.map((tool) => (
            <span
              key={tool}
              className="font-display text-lg font-medium tracking-wide text-subtle/70 transition-colors hover:text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
