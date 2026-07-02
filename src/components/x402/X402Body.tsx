import React from "react";
import {
	AlertTriangle,
	ArrowRight,
	ArrowRightLeft,
	BarChart3,
	CheckCircle2,
	Coins,
	CreditCard,
	Layers,
	Lock,
	RefreshCw,
	Scale,
	ShieldCheck,
	Sparkles,
	X,
	Zap,
} from "lucide-react";

const buttonBase =
	"inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-matter font-semibold transition-all duration-200";
const primaryButton = `${buttonBase} bg-[#210F26] text-white hover:bg-[#0D0D0D] hover:scale-[1.02] active:scale-[0.98]`;
const secondaryButton = `${buttonBase} border border-brand-accent-300 text-brand-text-secondary hover:bg-brand-accent-100/60`;
const secondaryButtonLight = `${buttonBase} border border-white/40 text-white hover:bg-white/10 hover:border-white/60`;

const painPoints = [
	{
		title: "Unknown costs at request time",
		description: "Agent workflows are variable. You can't price a multi-step run upfront.",
		icon: AlertTriangle,
	},
	{
		title: "Overpay or stall",
		description: "Pay-then-serve forces users to prepay and hope. That kills trust.",
		icon: CreditCard,
	},
	{
		title: "No ledger, no margin",
		description: "Without line-item accounting, you can't know what each run cost or earned.",
		icon: BarChart3,
	},
];

const primitives = [
	{
		title: "Authorize then capture",
		description: "Set a max, stream usage, capture only what was consumed.",
		icon: ShieldCheck,
	},
	{
		title: "Credits & prepaid balances",
		description: "Package usage into credits with discounts and flexible terms.",
		icon: Coins,
	},
	{
		title: "Double-entry ledger",
		description: "Every tool call becomes a debit and credit. Margin is visible.",
		icon: Scale,
	},
	{
		title: "Usage caps & budgets",
		description: "Guardrail spend with per-user, per-agent, per-org limits.",
		icon: Lock,
	},
	{
		title: "Refunds & reversals",
		description: "Failed runs reversed cleanly with full audit trail.",
		icon: RefreshCw,
	},
	{
		title: "Normalized costs",
		description: "Unified cost basis across all providers and tools.",
		icon: Layers,
	},
];

const comparisons = [
	{ label: "Pricing model", without: "Guessing before the run", with: "Auth max, capture exact" },
	{ label: "Refunds", without: "Manual support tickets", with: "Automatic reversals" },
	{ label: "Visibility", without: "One total bill", with: "Line-item ledger" },
	{ label: "Business models", without: "Pay-per-call only", with: "Prepaid, postpaid, credits" },
	{ label: "Risk control", without: "No caps or guardrails", with: "Budgets and limits" },
	{ label: "Credit", without: "Prefunded wallet only", with: "Credit + postpaid" },
];

const steps = [
	{
		num: "01",
		title: "Client hits your endpoint",
		description: "Gateway replies with a payment-required challenge if no active session exists.",
		icon: ArrowRightLeft,
	},
	{
		num: "02",
		title: "OpenRind opens session",
		description: "We create an authorization ceiling, issue a signed session, start a ledger.",
		icon: ShieldCheck,
	},
	{
		num: "03",
		title: "Usage streams through",
		description: "Each token, tool call, compute step becomes a line item with cost and revenue.",
		icon: Zap,
	},
	{
		num: "04",
		title: "Settle & capture",
		description: "Capture exact amount used, return the remainder, close the books.",
		icon: Coins,
	},
];

export function X402Hero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white min-h-[90vh] flex items-center">
			{/* Subtle gradient overlays */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(217,193,215,0.25),transparent_50%)]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(217,185,167,0.15),transparent_40%)]" />

			{/* Animated grid background */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute inset-0" style={{
					backgroundImage: `linear-gradient(rgba(217,193,215,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(217,193,215,0.1) 1px, transparent 1px)`,
					backgroundSize: '60px 60px',
				}} />
			</div>

			{/* Floating orbs - reduced and subtle */}
			<div className="glow-orb glow-orb--rose float-slow -top-32 -left-32 h-64 w-64 opacity-40" />
			<div className="glow-orb glow-orb--peach float-medium -bottom-20 right-0 h-80 w-80 opacity-30" />

			<div className="container-custom relative z-10 py-[100px] lg:py-[140px]">
				<div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
					<div className="space-y-8">
						<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm">
							<Sparkles className="h-4 w-4 text-brand-accent-200" />
							<span className="text-sm font-medium text-white/80">Proxy Accounting for x402</span>
						</div>

						<h1 className="font-display text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold tracking-tight leading-[1.05]">
							<span className="x402-glow-text font-mono">x402</span> needs accounting.
							<br />
							<span className="bg-gradient-to-r from-white via-brand-accent-100 to-brand-accent-200 bg-clip-text text-transparent">
								OpenRind delivers it.
							</span>
						</h1>

						<p className="font-body text-lg sm:text-xl leading-[1.6] text-white/80 max-w-xl text-pretty">
							Payments are the last step. The hard part is everything before: <span className="underline-hand-green text-white">credits</span>, <span className="underline-hand-green text-white">prepaid plans</span>, <span className="underline-hand-green text-white">refunds</span>, <span className="underline-hand-green text-white">usage caps</span>, and <span className="underline-hand-green text-white">line-item audit trails</span>.
						</p>

						<div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-2">
							<span className="cta-glow">
								<a href="http://app.openrind.com/" className={primaryButton}>
									Ship x402 Billing Today
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</span>
							<a href="http://app.openrind.com/" className={secondaryButtonLight}>
								Explore the Dashboard
							</a>
						</div>
						<p className="text-xs text-white/50 mt-3 tracking-wide">Processing 10K+ API calls daily</p>
					</div>

					{/* Hero visual - animated ledger card */}
					<div className="relative hidden lg:block">
						<div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-accent-100/20 via-transparent to-brand-accent-200/20 blur-2xl" />

						<div className="glow-card relative rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl">
							<div className="glow-sheen" />

							<div className="flex items-center justify-between mb-8">
								<span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Live Session</span>
								<span className="pulse-ring inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
									<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
									Active
								</span>
							</div>

							<div className="space-y-4">
								<div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
									<div>
										<p className="text-xs uppercase tracking-wider text-white/60">Authorization</p>
										<p className="text-2xl font-bold text-white mt-1">$2,000</p>
									</div>
									<div className="h-12 w-12 rounded-xl bg-brand-accent-300/20 flex items-center justify-center">
										<ShieldCheck className="h-6 w-6 text-brand-accent-200" />
									</div>
								</div>

								<div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
									<div>
										<p className="text-xs uppercase tracking-wider text-white/60">Usage</p>
										<p className="text-2xl font-bold text-white mt-1">$134.22</p>
									</div>
									<div className="h-2 flex-1 mx-6 rounded-full bg-white/10 overflow-hidden">
										<div className="h-full w-[7%] rounded-full bg-gradient-to-r from-brand-accent-100 to-brand-accent-200 animate-pulse" />
									</div>
								</div>

								<div className="grid grid-cols-2 gap-3">
									<div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
										<p className="text-xs text-rose-300">Debits</p>
										<p className="text-lg font-semibold text-rose-400 mt-1">-$1.02</p>
									</div>
									<div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
										<p className="text-xs text-emerald-300">Credits</p>
										<p className="text-lg font-semibold text-emerald-400 mt-1">+$1.55</p>
									</div>
								</div>

								<div className="pt-4 border-t border-white/10">
									<div className="flex items-center justify-between text-sm">
										<span className="text-white/70">Margin</span>
										<span className="font-semibold text-emerald-400">+$0.53 (52%)</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function X402Content() {
	return (
		<>
			{/* Problem Statement */}
			<section className="relative bg-brand-base text-brand-text-primary overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,193,215,0.2),transparent_60%)]" />

				<div className="container-custom relative z-10 py-[80px] lg:py-[120px]">
					<div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
						<h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-matter font-bold tracking-tight leading-[1.15]">
							<code className="text-brand-accent-300 font-mono text-[0.85em]">x402</code> is a payment signal,
							<br />
							<span className="underline-hand">not an accounting system</span>
						</h2>
						<p className="text-lg text-brand-text-secondary text-pretty">
							The moment you meter real workloads, payment alone breaks down. You need authorization ceilings, credits, refunds, and a ledger that reconciles every token.
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-3">
						{painPoints.map((point, index) => (
							<article
								key={point.title}
								className="group relative rounded-2xl border border-brand-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand-accent-300 hover:-translate-y-1"
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<div className="flex items-start gap-4">
									<div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-accent-100/60 to-brand-accent-200/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<point.icon className="h-6 w-6 text-brand-text-secondary" />
									</div>
									<div>
										<h3 className="text-base font-semibold text-brand-text-primary mb-2">{point.title}</h3>
										<p className="text-sm text-brand-text-secondary leading-relaxed">{point.description}</p>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Solution - Primitives */}
			<section className="bg-brand-surface border-y border-brand-border/40">
				<div className="container-custom py-[80px] lg:py-[120px]">
					<div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
						<div className="space-y-6 lg:sticky lg:top-24">
							<div className="inline-flex items-center gap-2 rounded-full bg-brand-accent-100/50 px-4 py-2">
								<Scale className="h-4 w-4 text-brand-text-secondary" />
								<span className="text-sm font-medium text-brand-text-secondary">Accounting Primitives</span>
							</div>

							<h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-matter font-bold tracking-tight leading-[1.2]">
								The missing layer that makes <code className="text-brand-accent-300 font-mono text-[0.85em]">x402</code> viable
							</h2>

							<p className="text-lg leading-[1.6] text-brand-text-secondary text-pretty">
								We sit in front of your agent traffic as a proxy. We meter the full workflow, compute the ledger, and settle the exact amount—whether prepaid, postpaid, or credit-based.
							</p>

							<div className="rounded-2xl border border-brand-accent-300 bg-brand-accent-300/10 p-6 mesh-gradient-bg">
								<p className="text-sm font-medium text-brand-text-primary">
									Finally answer: <em>"What's the P&L of each agent run?"</em>
								</p>
							</div>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							{primitives.map((primitive, index) => (
								<article
									key={primitive.title}
									className="group flex flex-col gap-3 rounded-2xl border border-brand-border bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-accent-200"
								>
									<div className="flex items-center gap-3">
										<div className="h-10 w-10 rounded-xl bg-brand-accent-100/40 flex items-center justify-center group-hover:bg-brand-accent-200/40 transition-colors duration-300">
											<primitive.icon className="h-5 w-5 text-brand-text-secondary" />
										</div>
										<h3 className="text-sm font-semibold text-brand-text-primary">{primitive.title}</h3>
									</div>
									<p className="text-sm text-brand-text-secondary leading-relaxed">{primitive.description}</p>
								</article>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Credit Rails Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(217,193,215,0.15),transparent_50%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(217,185,167,0.1),transparent_40%)]" />

				<div className="container-custom relative z-10 py-[80px] lg:py-[120px]">
					<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
						<div className="space-y-8">
							<h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-matter font-bold tracking-tight leading-[1.2]">
								Credit rails for agents,
								<br />
								<span className="text-brand-accent-200">not prefunded wallets</span>
							</h2>

							<p className="text-lg leading-[1.6] text-white/80 text-pretty">
								Run a credit-style model on top of <code className="text-brand-accent-200 font-mono">x402</code>. Agents transact independently within limits set by human or org owners.
							</p>

							<div className="grid grid-cols-2 gap-4">
								<div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
									<p className="text-xs uppercase tracking-wider text-white/60 mb-2">Micro</p>
									<p className="text-3xl font-bold text-white">$0.001</p>
									<p className="text-sm text-white/70 mt-2">Single tool call</p>
								</div>
								<div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
									<p className="text-xs uppercase tracking-wider text-white/60 mb-2">Macro</p>
									<p className="text-3xl font-bold text-white">$1,000</p>
									<p className="text-sm text-white/70 mt-2">High-value workflow</p>
								</div>
							</div>

							<p className="text-sm text-white/60 border-l-2 border-brand-accent-200 pl-4">
								Same accounting backbone handles both—no prefunded wallet required.
							</p>
						</div>

						<div className="relative">
							<div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-accent-100/10 to-brand-accent-200/10 blur-2xl" />

							<div className="relative rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl space-y-4">
								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Credit Flow</span>
									<span className="text-xs text-brand-accent-200">Auth → Capture</span>
								</div>

								{[
									{ step: "1", title: "Account ID + limits", desc: "Agent maps to KYC'd owner with set limits" },
									{ step: "2", title: "402 detected", desc: "SDK detects challenge, requests authorization" },
									{ step: "3", title: "Draw credit", desc: "OpenRind draws from pool, opens ledger" },
									{ step: "4", title: "Settle merchants", desc: "Pay in stablecoins while usage accrues" },
									{ step: "5", title: "Capture exact", desc: "Close run, refund delta automatically" },
								].map((item, index) => (
									<div key={item.step} className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
										<div className="flex-shrink-0 h-8 w-8 rounded-lg bg-brand-accent-300/30 flex items-center justify-center text-xs font-bold text-brand-accent-200">
											{item.step}
										</div>
										<div>
											<h4 className="text-sm font-semibold text-white">{item.title}</h4>
											<p className="text-xs text-white/70 mt-0.5">{item.desc}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Comparison Section */}
			<section className="bg-brand-base text-brand-text-primary">
				<div className="container-custom py-[80px] lg:py-[120px]">
					<div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
						<h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-matter font-bold tracking-tight leading-[1.2]">
							<code className="text-brand-accent-300 font-mono text-[0.85em]">x402</code> without OpenRind
							<br />
							<span className="underline-hand">is a billing dead end</span>
						</h2>
						<p className="text-lg text-brand-text-secondary">
							Payment protocols don't replace accounting. Here's what you're missing.
						</p>
					</div>

					<div className="max-w-4xl mx-auto">
						<div className="rounded-2xl border border-brand-border bg-white shadow-sm overflow-hidden">
							{/* Header */}
							<div className="grid grid-cols-[1fr_1fr_1fr] bg-brand-surface border-b border-brand-border">
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-brand-text-muted"></div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-rose-600 border-x border-brand-border/50">
									Without OpenRind
								</div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-emerald-600">
									With OpenRind
								</div>
							</div>

							{/* Rows */}
							{comparisons.map((row, index) => (
								<div
									key={row.label}
									className={`grid grid-cols-[1fr_1fr_1fr] ${index !== comparisons.length - 1 ? 'border-b border-brand-border/50' : ''}`}
								>
									<div className="p-4 flex items-center">
										<span className="text-sm font-medium text-brand-text-primary">{row.label}</span>
									</div>
									<div className="p-4 flex items-center justify-center border-x border-brand-border/30 bg-rose-50/50">
										<div className="flex items-center gap-2 text-sm text-rose-700">
											<X className="h-4 w-4 text-rose-400" />
											{row.without}
										</div>
									</div>
									<div className="p-4 flex items-center justify-center bg-emerald-50/50">
										<div className="flex items-center gap-2 text-sm text-emerald-700">
											<CheckCircle2 className="h-4 w-4 text-emerald-500" />
											{row.with}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="relative overflow-hidden bg-brand-surface border-y border-brand-border/40">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(217,193,215,0.15),transparent_50%)]" />

				<div className="container-custom relative z-10 py-[80px] lg:py-[120px]">
					<div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
						<h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-matter font-bold tracking-tight leading-[1.2]">
							How proxy accounting
							<br />
							<span className="highlight-hand-inline">makes it work</span>
						</h2>
						<p className="text-lg text-brand-text-secondary">
							<code className="text-brand-accent-300 font-mono">x402</code> signals payment required. OpenRind turns that into a session that prices variable workloads in real time.
						</p>
					</div>

					<div className="relative">
						{/* Connection line */}
						<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-accent-100 via-brand-accent-300 to-brand-accent-200 -translate-y-1/2" />

						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
							{steps.map((step, index) => (
								<article
									key={step.title}
									className="group relative rounded-2xl border border-brand-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
								>
									<div className="flex items-center gap-3 mb-4">
										<div className="relative">
											<div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-accent-100 to-brand-accent-200 flex items-center justify-center ring-4 ring-white shadow-md">
												<span className="text-sm font-bold text-brand-text-primary">{step.num}</span>
											</div>
										</div>
										<div className="h-10 w-10 rounded-xl bg-brand-accent-100/30 flex items-center justify-center">
											<step.icon className="h-5 w-5 text-brand-text-secondary" />
										</div>
									</div>
									<h3 className="text-base font-semibold text-brand-text-primary mb-2">{step.title}</h3>
									<p className="text-sm text-brand-text-secondary leading-relaxed">{step.description}</p>
								</article>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(217,193,215,0.15),transparent_60%)]" />
				<div className="glow-orb glow-orb--rose float-slow -top-20 -right-20 h-64 w-64 opacity-30" />
				<div className="glow-orb glow-orb--peach float-medium -bottom-20 -left-20 h-64 w-64 opacity-30" />

				<div className="container-custom relative z-10 py-[100px] lg:py-[140px]">
					<div className="max-w-3xl mx-auto text-center space-y-8">
						<h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-matter font-bold tracking-tight leading-[1.15]">
							Make <span className="x402-glow-text font-mono">x402</span> actually work
							<br />
							<span className="bg-gradient-to-r from-white via-brand-accent-100 to-brand-accent-200 bg-clip-text text-transparent">
								for the agent economy
							</span>
						</h2>

						<p className="text-lg text-white/80 max-w-xl mx-auto">
							Proxy accounting, credits, and settlements in one stack. Built for usage-based AI.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
							<a
								href="http://app.openrind.com/"
								className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-matter font-semibold transition-all duration-200 bg-white text-[#210F26] hover:bg-brand-accent-100 hover:scale-[1.02] active:scale-[0.98]"
							>
								Go Live — No SDK Required
								<ArrowRight className="ml-2 h-5 w-5" />
							</a>
						</div>

						<div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-white/70">
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-emerald-400" />
								<span>No integration required</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-emerald-400" />
								<span>Works with any provider</span>
							</div>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-emerald-400" />
								<span>Enterprise ready</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
