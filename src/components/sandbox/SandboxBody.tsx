import React from "react";
import CodeBlock from "@theme/CodeBlock";
import {
	ArrowRight,
	Check,
	ChevronRight,
	Database,
	FolderLock,
	GitBranch,
	Github,
	HelpCircle,
	MessageSquareText,
	PlugZap,
	RefreshCw,
	ShieldAlert,
	Sparkles,
	Terminal,
	X,
} from "lucide-react";

const buttonBase =
	"inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-matter font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]";
const primaryButton = `${buttonBase} bg-white text-[#210F26] hover:bg-brand-accent-100 shadow-[0_20px_50px_-28px_rgba(255,255,255,0.85)]`;
const darkButton = `${buttonBase} bg-[#210F26] text-white hover:bg-[#0D0D0D]`;
const secondaryButtonLight = `${buttonBase} border border-white/35 text-white hover:bg-white/10 hover:border-white/60`;

const heroCode = `export ANTHROPIC_API_KEY='sk-ant-...'
npx openeral

# Optional: meter usage
export OPENRIND_API_KEY='sk-openrind-...'

# Optional: persist files
export DATABASE_URL='postgresql://user:pass@host:5432/db'
export OPENERAL_WORKSPACE_ID='project-alpha'

npx openeral`;

const quickSteps = [
	{
		id: "01",
		title: "Start local",
		desc: "Claude gets its own isolated $HOME. No Postgres or Docker required.",
		code: `export ANTHROPIC_API_KEY='sk-ant-...'
npx openeral`,
	},
	{
		id: "02",
		title: "Meter calls",
		desc: "Set one OpenRind key and every Anthropic call is tracked by session and workspace.",
		code: `export OPENRIND_API_KEY='sk-openrind-...'
npx openeral`,
	},
	{
		id: "03",
		title: "Persist files",
		desc: "Add Postgres when you want files to survive after the session ends.",
		code: `export DATABASE_URL='postgresql://user:pass@host:5432/db'
npx openeral`,
	},
	{
		id: "04",
		title: "Name workspace",
		desc: "Use the same workspace ID to restore the same files next session.",
		code: `export OPENERAL_WORKSPACE_ID='project-alpha'
npx openeral`,
	},
];

const features = [
	{
		icon: FolderLock,
		title: "Isolated home",
		desc: "$HOME points at an OpenEral workspace, not your real laptop home.",
		featured: true,
	},
	{
		icon: Database,
		title: "Stateful by Postgres",
		desc: "Workspace files restore on startup and sync back while the agent works.",
	},
	{
		icon: Terminal,
		title: "Database from bash",
		desc: "Claude can run pg queries directly from its sandboxed shell.",
	},
	{
		icon: PlugZap,
		title: "Metered egress",
		desc: "Anthropic calls route through OpenRind when the API key exists.",
	},
	{
		icon: MessageSquareText,
		title: "Spend in the prompt",
		desc: "Claude can inspect session spend, set task limits, and warn mid-run.",
	},
	{
		icon: GitBranch,
		title: "Workspace isolation",
		desc: "Different workspace IDs produce different state and attribution boundaries.",
	},
	{
		icon: RefreshCw,
		title: "Memory refresh",
		desc: "Regenerate project memory around fresh workspace context.",
	},
];

const envVars = [
	{ key: "ANTHROPIC_API_KEY", purpose: "Claude Code provider key", required: true, example: "sk-ant-..." },
	{ key: "OPENRIND_API_KEY", purpose: "Turns on proxy metering", required: false, example: "sk-openrind-..." },
	{ key: "DATABASE_URL", purpose: "Turns on persistence + pg access", required: false, example: "postgresql://..." },
	{ key: "OPENERAL_WORKSPACE_ID", purpose: "Names the persistent workspace", required: false, example: "project-alpha" },
];

const promptTools = [
	{ label: "get_session_cost", desc: "current run spend" },
	{ label: "get_workspace_cost", desc: "project-level spend" },
	{ label: "set_budget_limit", desc: "warn or stop at threshold" },
	{ label: "get_recommendations", desc: "find expensive calls" },
];

const comparisonRows = [
	{ feature: "Isolated home directory", openeral: true, claude: false, docker: true, custom: "manual" },
	{ feature: "PostgreSQL persistence", openeral: true, claude: false, docker: false, custom: "manual" },
	{ feature: "Database from bash", openeral: true, claude: false, docker: false, custom: "manual" },
	{ feature: "Automatic cost tracking", openeral: true, claude: false, docker: false, custom: "manual" },
	{ feature: "Session isolation", openeral: true, claude: false, docker: true, custom: "manual" },
	{ feature: "Zero-config start", openeral: true, claude: false, docker: false, custom: false },
];

const securityRows = [
	{ risk: "SSH keys", fix: "Not mounted into agent home" },
	{ risk: "Cloud credentials", fix: "Kept outside sandbox path" },
	{ risk: ".env files", fix: "Passed through proxy, not filesystem" },
	{ risk: "Git remotes", fix: "Explicit workspace policy required" },
];

const faqItems = [
	{
		q: "Do I need PostgreSQL to start?",
		a: "No. Without DATABASE_URL, OpenEral runs with a local temp home directory. Add PostgreSQL when you need persistence.",
	},
	{
		q: "Can I use this with agents other than Claude Code?",
		a: "Yes. The TypeScript API works with any agent that has bash access.",
	},
	{
		q: "How does cost tracking work?",
		a: "When OPENRIND_API_KEY is set, OpenEral presigns your Anthropic key with OpenRind and routes API calls through the proxy.",
	},
	{
		q: "What happens if PostgreSQL is down?",
		a: "The agent continues working with local files. Sync resumes when the database reconnects.",
	},
];

const customAgentCode = `import { createOpeneralShell, createToolHandler } from 'openeral-js'

const shell = await createOpeneralShell({
  connectionString: process.env.DATABASE_URL,
  workspaceId: 'project-alpha',
})

const handleBash = createToolHandler(shell)

await shell.exec('echo "hello" > /home/agent/notes.txt')
await shell.exec('cat /home/agent/notes.txt')`;

function SectionLabel({children, light = false}: {children: React.ReactNode; light?: boolean}) {
	return (
		<div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm ${light ? "border-white/20 bg-white/5 text-white/80" : "border-brand-accent-100 bg-white text-brand-text-secondary"}`}>
			<Sparkles className={`h-4 w-4 ${light ? "text-brand-accent-200" : "text-brand-accent-300"}`} />
			<span>{children}</span>
		</div>
	);
}

function HighlightedCode({children, language, title}: {children: string; language: string; title: string}) {
	return (
		<div className="sandbox-code overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D0D] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.75)]">
			<div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
				<div className="flex items-center gap-1.5">
					<span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
					<span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
					<span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
				</div>
				<span className="text-xs font-medium text-white/45">{title}</span>
			</div>
			<CodeBlock language={language}>{children}</CodeBlock>
		</div>
	);
}

function ComparisonCell({value}: {value: boolean | string}) {
	if (value === true) return <Check className="mx-auto h-4 w-4 text-emerald-500" />;
	if (value === false) return <X className="mx-auto h-4 w-4 text-rose-400" />;
	return <span className="text-xs text-brand-text-muted">{value}</span>;
}

export function SandboxHero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
			<div className="absolute inset-0 spend-grid opacity-40" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_22%,rgba(217,193,215,0.24),transparent_50%)]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_86%_76%,rgba(217,185,167,0.16),transparent_42%)]" />
			<div className="glow-orb glow-orb--rose float-slow -left-24 -top-24 h-72 w-72 opacity-45" />
			<div className="glow-orb glow-orb--peach float-medium -bottom-24 right-0 h-96 w-96 opacity-30" />

			<div className="container-custom relative z-10 py-[92px] lg:py-[134px]">
				<div className="mx-auto max-w-4xl text-center">
					<SectionLabel light>OpenEral sandbox</SectionLabel>
					<h1 className="mt-6 font-display text-[42px] font-bold leading-[0.98] tracking-tight sm:text-[64px] lg:text-[88px]">
						Run Claude Code.
						<br />
						<span className="text-white/58">Keep it contained.</span>
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8 text-balance">
						Isolated home directory, PostgreSQL-backed workspace state, and OpenRind metering for agent runs. No Docker. No SDK rewrite.
					</p>
					<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<span className="cta-glow">
							<a href="#quick-start" className={`${primaryButton} w-full sm:w-auto`}>
								Get started
								<ArrowRight className="ml-2 h-4 w-4" />
							</a>
						</span>
						<a href="https://github.com/sandys/openeral" className={`${secondaryButtonLight} w-full sm:w-auto`}>
							<Github className="mr-2 h-4 w-4" />
							GitHub
						</a>
					</div>
				</div>

				<div className="mx-auto mt-12 max-w-5xl">
					<div className="glow-card spend-hero-glow rounded-[32px] border border-white/14 spend-dark-panel p-4 shadow-2xl sm:p-5 lg:p-6">
						<div className="glow-sheen" />
						<div className="mb-4 flex flex-col gap-2 px-1 sm:flex-row sm:items-center sm:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.2em] text-white/45">Start here</p>
								<p className="mt-1 text-lg font-semibold text-white">Local sandbox, then optional metering + persistence</p>
							</div>
							<span className="self-start rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 sm:self-auto">copy / paste</span>
						</div>
						<HighlightedCode language="bash" title="terminal">
							{heroCode}
						</HighlightedCode>
					</div>
				</div>

				<div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-4 text-center sm:grid-cols-4">
					{[["1 command", "start local"], ["0 SDK changes", "drop-in CLI"], ["Postgres", "persistent home"], ["OpenRind", "metered egress"]].map(([val, label]) => (
						<div key={val} className="rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-4 backdrop-blur-sm">
							<p className="font-semibold text-white">{val}</p>
							<p className="mt-1 text-xs text-white/48">{label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export function SandboxContent() {
	return (
		<>
			<section id="quick-start" className="bg-brand-base">
				<div className="container-custom py-[60px] lg:py-[84px]">
					<div className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
						<div className="max-w-2xl space-y-3">
							<SectionLabel>Quick start</SectionLabel>
							<h2 className="font-display text-[30px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance sm:text-[40px] lg:text-[48px]">
								Progressively add power.
							</h2>
							<p className="text-base text-brand-text-secondary text-balance">Start with just an API key. Add metering, persistence, and workspace isolation only when you need them.</p>
						</div>
						<a href="https://github.com/sandys/openeral" className={`${darkButton} self-start lg:self-end`}>
							<Github className="mr-2 h-4 w-4" />
							Open repo
						</a>
					</div>

					<div className="grid gap-4">
						{quickSteps.map((step) => (
							<article key={step.id} className="grid gap-5 rounded-[28px] border border-brand-border bg-white p-5 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl lg:grid-cols-[280px_minmax(0,1fr)] lg:items-center lg:p-6">
								<div>
									<p className="font-mono text-sm font-semibold text-brand-accent-300">{step.id}</p>
									<h3 className="mt-2 text-lg font-semibold text-brand-text-primary">{step.title}</h3>
									<p className="mt-1 text-sm leading-6 text-brand-text-secondary">{step.desc}</p>
								</div>
								<HighlightedCode language="bash" title="terminal">{step.code}</HighlightedCode>
							</article>
						))}
					</div>
				</div>
			</section>

			<div className="bg-gradient-to-r from-brand-accent-100/30 via-brand-accent-200/20 to-brand-accent-100/30">
				<div className="container-custom grid grid-cols-2 gap-4 py-7 sm:grid-cols-4">
					{[["local-first", "starts without Postgres"], ["1 env var", "OpenRind metering"], ["workspace", "persistent home"], ["pg", "database from bash"]].map(([val, label]) => (
						<div key={val}>
							<p className="text-2xl font-bold text-brand-text-primary">{val}</p>
							<p className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-text-muted">{label}</p>
						</div>
					))}
				</div>
			</div>

			<section className="bg-brand-surface">
				<div className="container-custom py-[60px] lg:py-[84px]">
					<div className="mb-10 max-w-2xl space-y-3">
						<SectionLabel>Infrastructure</SectionLabel>
						<h2 className="font-display text-[30px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance sm:text-[40px] lg:text-[48px]">
							Fast, stateful, metered.
						</h2>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{features.map((f) => {
							const Icon = f.icon;
							return (
								<article key={f.title} className={`group rounded-[28px] border border-brand-border bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl ${f.featured ? "sm:col-span-2 lg:row-span-2" : ""}`}>
									<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent-100/50 transition-colors group-hover:bg-brand-accent-200/50">
										<Icon className="h-5 w-5 text-brand-text-secondary" />
									</div>
									<h3 className="text-base font-semibold text-brand-text-primary">{f.title}</h3>
									<p className="mt-2 text-sm leading-6 text-brand-text-secondary">{f.desc}</p>
									{f.featured && (
										<div className="mt-8 rounded-2xl border border-brand-accent-300/40 bg-white p-4 shadow-sm">
											<code className="text-xs font-semibold text-brand-text-primary">$HOME=/tmp/openeral-&lt;workspace-id&gt;</code>
										</div>
									)}
								</article>
							);
						})}
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
				<div className="absolute inset-0 spend-grid opacity-30" />
				<div className="container-custom relative z-10 py-[64px] lg:py-[92px]">
					<div className="mx-auto mb-10 max-w-3xl text-center">
						<SectionLabel light>Runtime map</SectionLabel>
						<h2 className="mt-5 font-display text-[30px] font-bold leading-[1.08] tracking-tight text-balance sm:text-[40px] lg:text-[52px]">
							Claude Code stays normal. The boundary changes.
						</h2>
					</div>

					<div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
						{[
							{icon: Terminal, title: "Claude Code", desc: "agent runtime"},
							{icon: FolderLock, title: "/home/agent", desc: "isolated workspace"},
							{icon: Database, title: "PostgreSQL", desc: "optional persistence"},
							{icon: PlugZap, title: "OpenRind", desc: "optional metering"},
						].map((item, index) => {
							const Icon = item.icon;
							return (
								<React.Fragment key={item.title}>
									<div className="rounded-[28px] border border-white/12 bg-white/[0.06] p-5 text-center backdrop-blur-sm">
										<Icon className="mx-auto mb-3 h-6 w-6 text-brand-accent-200" />
										<p className="font-semibold text-white">{item.title}</p>
										<p className="mt-1 text-xs text-white/50">{item.desc}</p>
									</div>
									{index < 3 && <ChevronRight className="hidden h-5 w-5 text-white/30 lg:block" />}
								</React.Fragment>
							);
						})}
					</div>
				</div>
			</section>

			<section className="bg-brand-base">
				<div className="container-custom py-[60px] lg:py-[84px]">
					<div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
						<div className="space-y-3">
							<SectionLabel>Environment</SectionLabel>
							<h2 className="font-display text-[30px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance sm:text-[40px] lg:text-[48px]">
								Set only what you need.
							</h2>
							<p className="text-base leading-7 text-brand-text-secondary text-balance">Start with Anthropic. Add OpenRind and Postgres when ready.</p>
						</div>

						<div className="overflow-hidden rounded-[28px] border border-brand-border bg-white shadow-md">
							<div className="grid grid-cols-[1fr_104px] gap-3 border-b border-brand-border bg-brand-accent-100/30 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-text-muted md:grid-cols-[220px_1fr_104px]">
								<span>Variable</span>
								<span className="hidden md:block">Purpose</span>
								<span className="text-right">Need</span>
							</div>
							{envVars.map((v) => (
								<div key={v.key} className="grid grid-cols-[1fr_104px] gap-3 border-b border-brand-border/60 px-5 py-4 last:border-b-0 md:grid-cols-[220px_1fr_104px] md:items-center">
									<code className="text-[13px] font-semibold text-brand-text-primary">{v.key}</code>
									<p className="col-span-2 text-sm leading-6 text-brand-text-secondary md:col-span-1">{v.purpose}</p>
									<span className={`col-start-2 row-start-1 min-w-[96px] whitespace-nowrap rounded-full px-3 py-1 text-center text-[11px] font-medium uppercase tracking-[0.08em] md:col-auto md:row-auto ${v.required ? "bg-brand-accent-300 text-white" : "border border-brand-border bg-brand-base text-brand-text-muted"}`}>
										{v.required ? "required" : "optional"}
									</span>
								</div>
							))}
							<div className="border-t border-brand-border bg-brand-base/70 p-4">
								<HighlightedCode language="bash" title=".env">
									{`ANTHROPIC_API_KEY='sk-ant-...'
OPENRIND_API_KEY='sk-openrind-...'
DATABASE_URL='postgresql://user:pass@host:5432/db'
OPENERAL_WORKSPACE_ID='project-alpha'`}
								</HighlightedCode>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-brand-surface">
				<div className="container-custom py-[60px] lg:py-[84px]">
					<div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
						<div className="space-y-4">
							<SectionLabel>Persistence</SectionLabel>
							<h2 className="font-display text-[30px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance sm:text-[40px] lg:text-[48px]">
								Files survive across sessions.
							</h2>
							<p className="text-base text-brand-text-secondary text-balance">Same workspace ID means the same files come back. Claude can query Postgres from bash via pg.</p>
							<div className="rounded-xl border-l-4 border-brand-accent-300 bg-brand-accent-300/10 p-4">
								<p className="text-sm text-brand-text-secondary"><strong className="text-brand-text-primary">Sync strategy:</strong> restore on session start, sync on write, final sync on exit.</p>
							</div>
						</div>

						<div className="space-y-4">
							<HighlightedCode language="bash" title="session 1">{`echo "notes" > $HOME/notes.txt`}</HighlightedCode>
							<HighlightedCode language="bash" title="session 2">{`cat $HOME/notes.txt
# Output: notes`}</HighlightedCode>
							<HighlightedCode language="bash" title="database queries">{`pg "SELECT count(*) FROM users"
pg "\\d public.orders"`}</HighlightedCode>
						</div>
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
				<div className="absolute inset-0 spend-grid opacity-30" />
				<div className="container-custom relative z-10 py-[60px] lg:py-[84px]">
					<div className="mx-auto mb-10 max-w-2xl text-center">
						<SectionLabel light>Prompt controls</SectionLabel>
						<h2 className="mt-5 font-display text-[30px] font-bold leading-[1.08] tracking-tight text-balance sm:text-[40px] lg:text-[48px]">Let Claude see what it costs.</h2>
						<p className="mt-3 text-base text-white/70 text-balance">Package a native OpenEral skill so the agent can inspect spend, set limits, and warn inside the conversation.</p>
					</div>

					<div className="mx-auto mb-8 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
						{promptTools.map((t) => (
							<div key={t.label} className="rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3">
								<p className="font-mono text-sm text-white">{t.label}</p>
								<p className="mt-1 text-xs text-white/50">{t.desc}</p>
							</div>
						))}
					</div>

					<div className="mx-auto max-w-2xl">
						<HighlightedCode language="bash" title="inside Claude Code">{`"How much did this workspace spend today?"
"Warn me at $5 for this task. Stop at $8."
"Which calls in this session were expensive?"`}</HighlightedCode>
					</div>
				</div>
			</section>

			<div className="bg-gradient-to-r from-brand-accent-200/20 via-brand-accent-300/10 to-brand-accent-200/20">
				<div className="container-custom grid grid-cols-3 gap-4 py-7 text-center">
					{[["presigned", "API calls route through proxy"], ["per-session", "cost tracked per invocation"], ["per-workspace", "aggregate project spend"]].map(([val, label]) => (
						<div key={val}>
							<p className="text-2xl font-bold text-brand-text-primary">{val}</p>
							<p className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-text-muted">{label}</p>
						</div>
					))}
				</div>
			</div>

			<section className="bg-brand-base">
				<div className="container-custom py-[60px] lg:py-[84px]">
					<div className="mb-10 max-w-2xl space-y-3">
						<p className="text-4xl font-bold text-brand-accent-300">1 command</p>
						<p className="text-sm text-brand-text-muted">vs. 50+ lines of Docker config</p>
						<h2 className="!mt-6 font-display text-[30px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance sm:text-[40px] lg:text-[48px]">How OpenEral compares</h2>
					</div>

					<div className="hidden md:block">
						<div className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-md">
							<div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] border-b border-brand-border bg-brand-accent-100/30">
								{["Feature", "OpenEral", "Plain Claude", "Docker", "Scripts"].map((head) => (
									<div key={head} className="p-4 text-center text-xs font-semibold uppercase tracking-wider text-brand-text-muted first:text-left">{head}</div>
								))}
							</div>
							{comparisonRows.map((row, i) => (
								<div key={row.feature} className={`grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] ${i % 2 === 1 ? "bg-brand-surface/50" : ""} ${i !== comparisonRows.length - 1 ? "border-b border-brand-border/50" : ""}`}>
									<div className="p-4 text-sm font-medium text-brand-text-primary">{row.feature}</div>
									<div className="flex items-center justify-center p-4"><ComparisonCell value={row.openeral} /></div>
									<div className="flex items-center justify-center p-4"><ComparisonCell value={row.claude} /></div>
									<div className="flex items-center justify-center p-4"><ComparisonCell value={row.docker} /></div>
									<div className="flex items-center justify-center p-4"><ComparisonCell value={row.custom} /></div>
								</div>
							))}
						</div>
					</div>

					<div className="space-y-3 md:hidden">
						{comparisonRows.map((row) => (
							<div key={row.feature} className="rounded-xl border border-brand-border bg-white p-4 shadow-sm">
								<p className="mb-3 font-semibold text-brand-text-primary">{row.feature}</p>
								<div className="grid grid-cols-2 gap-2 text-sm">
									<div className="flex items-center gap-2"><ComparisonCell value={row.openeral} /> <span className="text-brand-text-secondary">OpenEral</span></div>
									<div className="flex items-center gap-2"><ComparisonCell value={row.claude} /> <span className="text-brand-text-secondary">Claude</span></div>
									<div className="flex items-center gap-2"><ComparisonCell value={row.docker} /> <span className="text-brand-text-secondary">Docker</span></div>
									<div className="flex items-center gap-2"><ComparisonCell value={row.custom} /> <span className="text-brand-text-secondary">Scripts</span></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="bg-brand-surface">
				<div className="container-custom py-[60px] lg:py-[84px]">
					<div className="mb-10 max-w-2xl space-y-3">
						<SectionLabel>Security</SectionLabel>
						<h2 className="font-display text-[30px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance sm:text-[40px] lg:text-[48px]">Safe by default.</h2>
						<p className="text-base text-brand-text-secondary text-balance">The sandbox makes the safe path the default: isolated home, explicit secrets, auditable state.</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{securityRows.map((row) => (
							<div key={row.risk} className="rounded-2xl border border-brand-border bg-white p-5 shadow-sm">
								<ShieldAlert className="mb-3 h-5 w-5 text-rose-500" />
								<p className="mb-1 font-semibold text-brand-text-primary">{row.risk}</p>
								<p className="text-sm leading-relaxed text-brand-text-secondary">{row.fix}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="bg-brand-base">
				<div className="container-custom py-[60px] lg:py-[84px]">
					<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
						<div className="space-y-4">
							<SectionLabel>Custom agents</SectionLabel>
							<h2 className="font-display text-[30px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance sm:text-[40px] lg:text-[48px]">Works with any agent that has bash.</h2>
							<p className="text-base text-brand-text-secondary text-balance">Use the shell directly for custom agents. The TypeScript API wraps everything into a single createOpeneralShell call.</p>
						</div>
						<HighlightedCode language="typescript" title="custom-agent.ts">{customAgentCode}</HighlightedCode>
					</div>
				</div>
			</section>

			<section className="bg-brand-surface">
				<div className="container-custom py-[60px] lg:py-[84px]">
					<div className="mx-auto max-w-3xl">
						<h2 className="mb-8 font-display text-[30px] font-bold leading-[1.08] tracking-tight text-brand-text-primary text-balance sm:text-[40px] lg:text-[48px]">FAQ</h2>
						<div className="space-y-3">
							{faqItems.map((item) => (
								<div key={item.q} className="rounded-2xl border border-brand-border bg-white p-5 shadow-sm">
									<div className="flex items-start gap-3">
										<HelpCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-accent-300" />
										<div>
											<h3 className="font-semibold text-brand-text-primary">{item.q}</h3>
											<p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">{item.a}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(217,193,215,0.16),transparent_60%)]" />
				<div className="glow-orb glow-orb--rose float-slow -right-20 -top-20 h-64 w-64 opacity-30" />
				<div className="container-custom relative z-10 py-[80px] lg:py-[116px]">
					<div className="mx-auto max-w-3xl text-center">
						<SectionLabel light>Ready</SectionLabel>
						<h2 className="mt-6 font-display text-[32px] font-bold leading-[1.08] tracking-tight text-balance sm:text-[44px] lg:text-[56px]">Start with the sandbox. Add metering when it matters.</h2>
						<div className="mt-8 inline-flex max-w-full items-center gap-3 overflow-x-auto whitespace-nowrap rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-mono text-base text-white backdrop-blur-sm">
							<span className="text-white/50">$</span> npx openeral
						</div>
						<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
							<span className="cta-glow">
								<a href="https://github.com/sandys/openeral" className={primaryButton}>
									View on GitHub
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</span>
							<a href="http://app.openrind.com/" className={secondaryButtonLight}>Open OpenRind</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
