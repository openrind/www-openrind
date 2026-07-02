import React from "react";
import {
	AlertTriangle,
	ArrowRight,
	BarChart3,
	CheckCircle2,
	ShieldCheck,
	Sparkles,
	Zap,
} from "lucide-react";

const buttonBase =
	"inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-matter font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]";
const primaryButton = `${buttonBase} bg-[#210F26] text-white hover:bg-[#0D0D0D]`;
const heroPrimaryButton = `${buttonBase} bg-white text-[#210F26] hover:bg-brand-accent-100 shadow-[0_18px_36px_-20px_rgba(255,255,255,0.9)]`;
const secondaryButton = `${buttonBase} border border-brand-accent-300 text-brand-text-secondary hover:bg-brand-accent-100/60`;
const secondaryButtonLight = `${buttonBase} border border-white/30 text-white hover:bg-white/10 hover:border-white/50`;

const headlineStats = [
	{value: "15 min", label: "Detection window", tone: "text-emerald-400"},
	{value: "250x", label: "Variance between users", tone: "text-white"},
	{value: "$1,500", label: "Weekend runaway session", tone: "text-rose-400"},
];

const vendorComparisons = [
	{
		dimension: "User-level tracking",
		copilot: "Native (Usage Metrics API)",
		cursor: "Native (Analytics API)",
		claude: "Native (Analytics API)",
	},
	{
		dimension: "Project / repo tracking",
		copilot: "Native (Cost Centers)",
		cursor: "Limited (custom polling)",
		claude: "Proxy headers required",
	},
	{
		dimension: "Departmental chargeback",
		copilot: "Automated (Azure Subs)",
		cursor: "Highly manual",
		claude: "Infrastructure dependent",
	},
	{
		dimension: "Anomaly alerts",
		copilot: "Soft budgets",
		cursor: "External tooling needed",
		claude: "Cloud gateway required",
	},
	{
		dimension: "Pricing predictability",
		copilot: "Seat + premium requests",
		cursor: "Pooled credits + overages",
		claude: "Pure token consumption",
	},
];

const claudeRolloutSteps = [
	{
		kicker: "01",
		title: "Contain",
		description:
			"Claude Code runs in an OpenShell-based container instead of directly on laptops with SSH keys, cloud credentials, and production env files.",
		icon: ShieldCheck,
	},
	{
		kicker: "02",
		title: "Route",
		description:
			"Model calls, tool calls, and CLI sessions exit through a customer-prem OpenRind proxy before they become vendor spend.",
		icon: Zap,
	},
	{
		kicker: "03",
		title: "Govern",
		description:
			"The managed plane maps usage to user, repo, team, and cost center, then applies limits, alerts, and chargeback.",
		icon: BarChart3,
	},
];

const claudeSessionRows = [
	{label: "Developer", value: "Normal Claude CLI workflow"},
	{label: "Platform", value: "Egress and key controls"},
	{label: "Finance", value: "Live spend by owner, repo, vendor"},
];

const runtimePressurePoints = [
	{
		title: "Agent runtime traffic",
		description: "Parallel sessions create spend long before procurement or finance sees a vendor invoice.",
	},
	{
		title: "CLI and tool loops",
		description: "Generated code, bash commands, and tool retries are now the real metered surface.",
	},
	{
		title: "Invoice lag",
		description: "By the time the bill arrives, the only thing left to do is explain the overage.",
	},
];

const heroLiveMetrics = [
	{label: "Today", value: "$482.70", tone: "text-white"},
	{label: "Flagged", value: "03", tone: "text-rose-300"},
	{label: "Protected", value: "$1.2k", tone: "text-emerald-300"},
];

const heroAttributionLines = [
	"agent-coder-12 -> payments-api -> platform",
	"cursor-credit-burst -> akhil -> engineering",
	"claude-code-session -> rollout client -> chargeback",
];

const heroVendorMix = [
	{label: "Cursor", amount: "$182.40", width: "78%"},
	{label: "Claude Code", amount: "$149.20", width: "61%"},
	{label: "Copilot", amount: "$94.60", width: "42%"},
];

function SectionLabel({
	children,
	light = false,
}: {
	children: React.ReactNode;
	light?: boolean;
}) {
	return (
		<div
			className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-sm ${
				light
					? "border-white/20 bg-white/5 text-white/80"
					: "border-brand-accent-100 bg-white text-brand-text-secondary"
			}`}
		>
			<Sparkles className={`h-4 w-4 ${light ? "text-brand-accent-200" : "text-brand-accent-300"}`} />
			<span>{children}</span>
		</div>
	);
}

function HeroSummaryCard({className = ""}: {className?: string}) {
	return (
		<div
			className={`glow-card spend-hero-glow rounded-[28px] border border-white/14 spend-dark-panel p-5 shadow-xl ${className}`}
		>
			<div className="flex items-start justify-between gap-4">
				<div>
					<p className="text-xs uppercase tracking-[0.22em] text-white/45">Live proxy snapshot</p>
					<p className="mt-2 text-lg font-semibold text-white">Spend control before the invoice exists</p>
				</div>
				<span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
					Live
				</span>
			</div>

			<div className="mt-5 rounded-2xl border border-rose-400/18 bg-rose-500/10 p-4">
				<div className="flex items-start justify-between gap-3">
					<div className="min-w-0">
						<p className="text-[10px] uppercase tracking-[0.22em] text-rose-200/70">Proxy event</p>
						<p className="mt-2 text-sm font-semibold text-white">Agent loop exceeded baseline by 18x</p>
						<p className="mt-1 text-sm leading-6 text-white/68">
							Paused after 15 minutes with repo mapping and chargeback preserved.
						</p>
					</div>
					<AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-300" />
				</div>
			</div>

			<div className="mt-4 grid gap-3 sm:grid-cols-3">
				{heroLiveMetrics.map((stat) => (
					<div
						key={stat.label}
						className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
					>
						<p className="text-[10px] uppercase tracking-[0.18em] text-white/45">{stat.label}</p>
						<p className={`mt-3 text-xl font-semibold ${stat.tone}`}>{stat.value}</p>
					</div>
				))}
			</div>

			<div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm">
				<div className="flex items-center justify-between gap-3">
					<span className="text-white/72">Incident rule</span>
					<span className="font-semibold text-white">Suspend at 8x baseline</span>
				</div>
			</div>
		</div>
	);
}

export function SpendHero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
			<div className="absolute inset-0 spend-grid opacity-40" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_25%,rgba(217,193,215,0.24),transparent_50%)]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_78%,rgba(217,185,167,0.16),transparent_40%)]" />
			<div className="glow-orb glow-orb--rose float-slow -left-24 -top-24 h-72 w-72 opacity-45" />
			<div className="glow-orb glow-orb--peach float-medium -bottom-24 right-0 h-96 w-96 opacity-30" />

			<div className="container-custom relative z-10 py-[84px] lg:py-[104px] xl:py-[128px]">
				<div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_420px] xl:items-start xl:gap-16">
					<div className="max-w-[640px] space-y-10 lg:space-y-12">
						<SectionLabel light>OpenShell-based runtime + customer-prem proxy</SectionLabel>

						<div className="space-y-8">
							<h1 className="font-display text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-bold tracking-tight leading-[1.06] text-balance">
								Control AI spend where agents run.
								<br />
								<span className="text-white/65">Not after the invoice lands.</span>
							</h1>
							<div className="max-w-[560px] space-y-4 text-base sm:text-[1.0625rem] lg:text-lg leading-[1.7] text-white/70 text-pretty">
								<p>
									OpenRind gives enterprises an OpenShell-based runtime for coding agents and a proxy
									deployed in the customer environment.
								</p>
								<p>
									Every model call, tool call, and CLI session flows through that proxy, while the managed
									control plane handles policy, reporting, and governance.
								</p>
							</div>
						</div>

						<div className="grid max-w-[620px] gap-3 sm:grid-cols-3">
							{headlineStats.map((stat) => (
								<div
									key={stat.label}
									className="flex min-h-[112px] flex-col justify-between rounded-2xl border border-white/15 bg-white/10 px-5 py-6 backdrop-blur-sm"
								>
									<p className={`text-[28px] font-semibold leading-none ${stat.tone}`}>{stat.value}</p>
									<p className="pt-4 text-[11px] uppercase tracking-[0.18em] text-white/52 sm:text-xs sm:tracking-[0.2em]">
										{stat.label}
									</p>
								</div>
							))}
						</div>

						<div className="flex flex-col gap-3 pt-3 sm:flex-row sm:items-center sm:gap-4">
							<span className="cta-glow">
								<a href="http://app.openrind.com/" className={`${heroPrimaryButton} w-full sm:w-auto`}>
									Track your AI spend
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</span>
							<a
								href="https://calendar.app.google/hjN2HkZBLJMtSuku7"
								className={`${secondaryButtonLight} w-full sm:w-auto`}
							>
								Contact sales
							</a>
						</div>

						<div className="xl:hidden">
							<HeroSummaryCard />
						</div>
					</div>

					<div className="relative hidden w-full max-w-[420px] justify-self-start xl:block xl:justify-self-end xl:pt-12">
						<div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-white/10 via-transparent to-brand-accent-200/15 blur-3xl" />
						<HeroSummaryCard />
					</div>
				</div>
			</div>
		</section>
	);
}

export function SpendReportPreview() {
	return (
		<section className="bg-brand-surface text-brand-text-primary">
			<div className="container-custom py-[48px] lg:py-[72px]">
				<div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-brand-border bg-white shadow-2xl">
					<img
						src="/img/report-hero.webp"
						alt="OpenRind financial reports dashboard showing vendor token spend, COGS, revenue, and gross margin"
						width={1354}
						height={909}
						loading="lazy"
						className="h-auto w-full"
					/>
				</div>
			</div>
		</section>
	);
}

export function SpendContent() {
	return (
		<>
			<section className="relative overflow-hidden bg-brand-surface border-y border-brand-border/40">
				<div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,193,215,0.28),transparent_68%)]" />
				<div className="container-custom relative z-10 py-[72px] lg:py-[96px]">
					<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div className="max-w-3xl">
							<SectionLabel>Enterprise Claude rollout</SectionLabel>
							<h2 className="mt-5 text-[28px] sm:text-[36px] lg:text-[46px] font-display font-bold tracking-tight leading-[1.08] text-balance text-brand-text-primary">
								Start using Claude without giving up control of spend, keys, or data.
							</h2>
							<p className="mt-5 max-w-2xl text-lg leading-8 text-brand-text-secondary text-pretty">
								The first enterprise rollout should feel normal for developers and controlled for platform,
								security, and finance.
							</p>
						</div>
						<div className="w-full rounded-[28px] border border-emerald-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm lg:w-[300px]">
							<div className="flex items-center justify-between gap-4">
								<p className="text-xs uppercase tracking-[0.22em] text-brand-text-muted">Rollout state</p>
								<span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
									<span className="h-2 w-2 rounded-full bg-emerald-500" />
									Live policy
								</span>
							</div>
							<p className="mt-4 text-2xl font-display font-bold text-brand-text-primary">Claude-ready boundary</p>
							<p className="mt-2 text-sm leading-6 text-brand-text-secondary">
								Container, proxy, and ledger aligned before broad adoption.
							</p>
						</div>
					</div>

					<div className="mt-10 glow-card spend-panel rounded-[36px] border border-brand-border p-5 shadow-lg sm:p-6 lg:p-7">
						<div className="grid gap-4 lg:grid-cols-3">
							{claudeRolloutSteps.map((step, index) => (
								<div key={step.title} className="relative rounded-[28px] border border-brand-border/70 bg-white p-5 shadow-sm">
									{index < claudeRolloutSteps.length - 1 && (
										<div className="absolute left-[calc(100%-0.5rem)] top-1/2 z-10 hidden h-px w-8 bg-gradient-to-r from-brand-accent-200 to-transparent lg:block" />
									)}
									<div className="flex items-start gap-4 lg:block">
										<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent-100/55 ring-1 ring-brand-accent-200/30">
											<step.icon className="h-5 w-5 text-brand-text-secondary" />
										</div>
										<div className="lg:mt-5">
											<p className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">{step.kicker}</p>
											<p className="mt-2 text-xl font-semibold text-brand-text-primary">{step.title}</p>
											<p className="mt-2 text-sm leading-6 text-brand-text-secondary">{step.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>

						<div className="mt-5 grid overflow-hidden rounded-[24px] border border-brand-border/70 bg-brand-base sm:grid-cols-3">
							{claudeSessionRows.map((row, index) => (
								<div
									key={row.label}
									className={`px-5 py-4 ${index !== claudeSessionRows.length - 1 ? "border-b border-brand-border/70 sm:border-b-0 sm:border-r" : ""}`}
								>
									<p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-text-muted">
										{row.label}
									</p>
									<p className="mt-2 text-sm font-medium text-brand-text-primary">{row.value}</p>
								</div>
							))}
						</div>

						<div className="mt-5 rounded-2xl border border-brand-accent-300/50 bg-brand-accent-300/10 px-5 py-4">
							<p className="text-sm font-medium leading-6 text-brand-text-primary">
								The result: developers can start with Claude Code, while enterprise controls exist before
								usage becomes a procurement surprise.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden bg-brand-base text-brand-text-primary">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,193,215,0.2),transparent_60%)]" />

				<div className="container-custom relative z-10 py-[60px] lg:py-[84px]">
					<div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
						<SectionLabel>Runaway spend</SectionLabel>
						<h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-display font-bold tracking-tight leading-[1.1] text-balance">
							The budget breaks inside the runtime.
						</h2>
						<p className="text-lg text-brand-text-secondary max-w-2xl mx-auto text-pretty">
							AI coding tools moved cost from flat seats to live execution. Agent loops, CLI sessions, and tool
							calls now create spend before a vendor invoice exists.
						</p>
					</div>

					<div className="flex flex-col md:flex-row gap-6 items-center">
						<article className="flex-1 flex flex-col gap-4 p-6 rounded-2xl border border-brand-overlay/60 bg-brand-surface shadow-sm w-full">
							<div className="flex items-center gap-3">
								<span className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
									OLD
								</span>
								<h3 className="text-lg font-matter font-semibold text-brand-text-primary">
									Traditional SaaS
								</h3>
							</div>
							<div className="space-y-4 text-sm text-brand-text-secondary">
								<div>
									<p className="font-semibold text-brand-text-primary mb-1">Predictable per-seat cost</p>
									<p>$20/seat/month, same every month. Budget once, forget about it.</p>
								</div>
								<div>
									<p className="font-semibold text-brand-text-primary mb-1">Static utilization</p>
									<p>Every seat costs the same regardless of usage.</p>
								</div>
							</div>
						</article>

						<div className="flex items-center justify-center">
							<div className="rounded-full bg-brand-accent-200 text-brand-text-primary w-12 h-12 flex items-center justify-center text-sm font-bold">
								VS
							</div>
						</div>

						<article className="flex-1 flex flex-col gap-4 p-6 rounded-2xl border border-brand-accent-300 bg-brand-accent-300/15 shadow-sm mesh-gradient-bg mesh-gradient-bg-delay-2 w-full">
							<div className="flex items-center gap-3">
								<span className="inline-flex items-center rounded-full bg-brand-accent-300 px-3 py-1 text-xs font-semibold text-white">
									NEW
								</span>
								<h3 className="text-lg font-matter font-semibold text-brand-text-primary">
									AI coding assistants
								</h3>
							</div>
							<div className="space-y-4 text-sm text-brand-text-secondary">
								<div>
									<p className="font-semibold text-brand-text-primary mb-1">Volatile per-token cost</p>
									<p>A single runtime loop can 10x your bill before anyone sees the invoice.</p>
								</div>
								<div>
									<p className="font-semibold text-brand-text-primary mb-1">Dynamic consumption</p>
									<p>Power users, CLIs, and tool retries can cost 50x more than light users.</p>
								</div>
							</div>
						</article>
					</div>

					<div className="spend-signal-mask mt-8">
						<div className="spend-signal-track py-2">
							{Array.from({length: 2}).map((_, copyIndex) => (
								<div
									key={copyIndex}
									className="spend-signal-group"
									aria-hidden={copyIndex === 1}
								>
									{runtimePressurePoints.map((point) => (
										<div
											key={`${copyIndex}-${point.title}`}
											className="w-[280px] sm:w-[320px] rounded-2xl border border-brand-overlay/60 bg-white/85 px-5 py-5 shadow-sm backdrop-blur-sm"
										>
											<p className="text-xs uppercase tracking-[0.2em] text-brand-text-muted">
												{point.title}
											</p>
											<p className="mt-3 text-sm leading-6 text-brand-text-secondary">
												{point.description}
											</p>
										</div>
									))}
								</div>
							))}
						</div>
					</div>

				</div>
			</section>

			<div className="bg-gradient-to-r from-brand-accent-100/30 via-brand-accent-200/20 to-brand-accent-100/30">
				<div className="container-custom py-8 flex flex-wrap items-center justify-center gap-10 sm:gap-20 text-center">
					<div>
						<p className="text-3xl sm:text-4xl font-bold text-brand-text-primary">250x</p>
						<p className="text-xs text-brand-text-muted uppercase tracking-wider mt-1">
							Cost variance between users
						</p>
					</div>
					<div className="hidden sm:block w-px h-12 bg-brand-border/50" />
					<div>
						<p className="text-3xl sm:text-4xl font-bold text-brand-text-primary">$1,500</p>
						<p className="text-xs text-brand-text-muted uppercase tracking-wider mt-1">
							Single runaway agent session
						</p>
					</div>
					<div className="hidden sm:block w-px h-12 bg-brand-border/50" />
					<div>
						<p className="text-3xl sm:text-4xl font-bold text-brand-text-primary">15 min</p>
						<p className="text-xs text-brand-text-muted uppercase tracking-wider mt-1">
							OpenRind detection time
						</p>
					</div>
				</div>
			</div>

			<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(217,193,215,0.15),transparent_50%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(217,185,167,0.1),transparent_40%)]" />

				<div className="container-custom relative z-10 py-[60px] lg:py-[84px]">
					<div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
						<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm mx-auto">
							<Zap className="h-4 w-4 text-brand-accent-200" />
							<span className="text-sm font-medium text-white/80">The CLI is the new runtime</span>
						</div>

						<h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-display font-bold tracking-tight leading-[1.1] text-balance">
							<span className="bg-gradient-to-r from-white via-brand-accent-100 to-brand-accent-200 bg-clip-text text-transparent">
								Your compliance &amp; spend boundary is the CLI.
							</span>
						</h2>
						<p className="text-lg text-white/80 max-w-2xl mx-auto text-pretty">
							Modern agents package work as shell commands, generated code, and tool calls. Run them inside an
							OpenShell-based runtime, route egress through a OpenRind proxy in your environment, and the
							managed control plane gets the budget, attribution, and audit trail.
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto mt-8">
						<div className="rounded-2xl border border-brand-accent-200/50 bg-brand-accent-300/10 p-6 shadow-sm mesh-gradient-bg">
							<div className="flex flex-col gap-4">
								<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
									<div className="sm:flex-1">
										<p className="font-body text-base font-semibold text-white sm:text-lg">
											<a
												href="https://www.fastcompany.com/91520702/y-combinator-garry-tan-agentic-ai-social-media"
												target="_blank"
												rel="noopener noreferrer"
												className="hover:underline"
											>
												Fast Company:
											</a>
										</p>
										<p className="mt-2 font-body text-base italic text-white/72 sm:text-lg">
											<em>
												&ldquo;Y Combinator&apos;s CEO says he ships{" "}
												<strong className="underline-hand text-white">37,000 lines of AI code per day</strong>.
												A developer looked under the hood.&rdquo;
											</em>
										</p>
									</div>
								</div>
								<div className="border-l-4 border-brand-accent-200 pl-4">
									<p className="font-body text-sm text-white/72">
										When one developer can ship that much AI-generated code, the real meter is runtime
										execution, not seat count. Without a proxy on that path, the extra velocity turns straight
										into <strong className="text-brand-text-primary">uncapped token burn</strong> and{" "}
										<strong className="text-brand-text-primary">runaway invoices</strong>.
									</p>
								</div>
							</div>
						</div>

						<div className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-sm">
							<div className="flex items-center gap-3 mb-4">
								<div className="h-10 w-10 rounded-full bg-brand-accent-100/30 flex items-center justify-center text-sm font-bold text-white/72">
									GT
								</div>
								<div>
									<a
										href="https://x.com/garrytan/status/2031910564344262988"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm font-semibold text-white hover:underline"
									>
										@garrytan
									</a>
									<p className="text-xs text-white/55">Y Combinator CEO</p>
								</div>
							</div>
							<blockquote className="text-sm text-white/72 leading-relaxed italic mb-4">
								&ldquo;I&apos;m working on 3 different big projects simultaneously across 15 sessions all the time.
								In the last 7 days I&apos;m averaging{" "}
								<strong className="underline-hand text-white not-italic">17k lines of code per day</strong>,
								35% tests.&rdquo;
							</blockquote>
							<div className="border-l-4 border-brand-accent-200 pl-3">
								<p className="text-xs text-white/55">
									Fifteen concurrent sessions means fifteen live cost surfaces. The control point is the runtime
									and proxy boundary, not the invoice artifact at month-end.
								</p>
							</div>
						</div>
					</div>

					<div className="max-w-3xl mx-auto mt-8">
						<div className="rounded-2xl border border-white/15 bg-white/5 p-5">
							<p className="text-sm font-medium text-white text-center">
								78% of IT leaders report unexpected charges from AI consumption tiers. The flat-rate SaaS budget
								is a myth in the age of LLM inference.
							</p>
						</div>
					</div>

					<div className="max-w-3xl mx-auto mb-10">
						<div className="border-l-2 border-brand-accent-200 pl-5 py-2">
							<p className="text-sm text-white/70">
								<strong className="text-white">OpenClaw</strong> (60K+ GitHub stars) proves the point. It
								isn&apos;t an assistant that happens to code. It&apos;s a coding agent that happens to assist.
								Built on Pi&apos;s philosophy: only 4 core tools (Read, Write, Edit, Bash). Everything else is
								generated code. Agents write their own skills as Markdown files, hot-reloaded in 250ms. Extension
								through code generation, not protocol integration, and{" "}
								<strong className="text-white">every extension burns tokens</strong>.
							</p>
						</div>
					</div>

					</div>
				</section>

			<section className="bg-brand-base">
				<div className="container-custom py-[60px] lg:py-[84px]">
					<div className="max-w-3xl space-y-4 mb-10">
						<SectionLabel>Vendor governance</SectionLabel>
						<h2 className="text-[28px] sm:text-[36px] lg:text-[46px] font-display font-bold tracking-tight leading-[1.1] text-balance text-brand-text-primary">
							Native vendor tracking is not enough.
						</h2>
						<p className="text-lg leading-8 text-brand-text-secondary text-pretty">
							Each AI tool provides a different level of visibility and control. OpenRind fills the gaps across
							all of them.
						</p>
					</div>

					<div className="overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-md">
						<div className="min-w-[760px] overflow-hidden">
							<div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] bg-brand-accent-100/30 border-b border-brand-border">
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-brand-text-muted">
									Dimension
								</div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-brand-text-muted border-x border-brand-border/50">
									GitHub Copilot
								</div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-brand-text-muted border-r border-brand-border/50">
									Cursor
								</div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-brand-text-muted">
									Claude Code
								</div>
							</div>

							{vendorComparisons.map((row, index) => (
								<div
									key={row.dimension}
									className={`grid grid-cols-[1.2fr_1fr_1fr_1fr] ${
										index % 2 === 1 ? "bg-brand-surface/50" : ""
									} ${index !== vendorComparisons.length - 1 ? "border-b border-brand-border/50" : ""}`}
								>
									<div className="p-4 flex items-center">
										<span className="text-sm font-medium text-brand-text-primary">{row.dimension}</span>
									</div>
									<div className="p-4 flex items-center justify-center border-x border-brand-border/30 text-sm text-brand-text-secondary text-center">
										{row.copilot}
									</div>
									<div className="p-4 flex items-center justify-center border-r border-brand-border/30 text-sm text-brand-text-secondary text-center">
										{row.cursor}
									</div>
									<div className="p-4 flex items-center justify-center text-sm text-brand-text-secondary text-center">
										{row.claude}
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="mt-8">
						<div className="rounded-2xl bg-brand-accent-300/10 p-6 border-l-4 border-brand-accent-300">
							<p className="text-base font-medium text-brand-text-primary">
								OpenRind unifies all three into a single pane of glass with real-time attribution, anomaly
								detection, and automated chargebacks.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(217,193,215,0.16),transparent_60%)]" />
				<div className="glow-orb glow-orb--rose float-slow -right-20 -top-20 h-64 w-64 opacity-30" />
				<div className="glow-orb glow-orb--peach float-medium -bottom-24 -left-20 h-72 w-72 opacity-30" />

				<div className="container-custom relative z-10 py-[104px] lg:py-[132px]">
					<div className="mx-auto max-w-3xl text-center">
						<SectionLabel light>Final step</SectionLabel>
						<h2 className="mt-6 font-display text-[30px] sm:text-[40px] lg:text-[54px] font-bold tracking-tight leading-[1.08] text-balance">
							Stop budgeting AI like it is static software.
							<br />
							Start managing it like live infrastructure.
						</h2>
						<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/78 text-pretty">
							OpenRind gives you the control layer between developer-tool velocity and financial exposure:
							user-level tracking, project-level attribution, anomaly detection, and budget enforcement in one
							system.
						</p>
						<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
							<a href="http://app.openrind.com/" className={primaryButton}>
								Track your AI spend
								<ArrowRight className="ml-2 h-4 w-4" />
							</a>
							<a
								href="https://calendar.app.google/hjN2HkZBLJMtSuku7"
								className={secondaryButton}
							>
								Contact sales
							</a>
						</div>
						<div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/65">
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-emerald-400" />
								<span>Works across vendors</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-emerald-400" />
								<span>Built for finance and engineering</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-emerald-400" />
								<span>Designed for enterprise rollout</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
