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
const secondaryButtonLight = `${buttonBase} border border-white/40 text-white hover:bg-white/10 hover:border-white/60`;

const painPoints = [
	{
		title: "Sessions don't track margin",
		description:
			"MPP sessions stream micropayments but never reconcile cost vs. revenue. You see spend, not profit.",
		icon: AlertTriangle,
	},
	{
		title: "No cross-provider normalization",
		description:
			"GPT-4 tokens, Claude tokens, vector DB queries — MPP records each payment separately with no unified cost basis.",
		icon: CreditCard,
	},
	{
		title: "No ledger, no attribution",
		description:
			"Thousands of micro-transactions aggregate into a single settlement. Which agent run drove which cost?",
		icon: BarChart3,
	},
];

const primitives = [
	{
		title: "Authorize then capture",
		description:
			"Set a max, stream usage, capture only what was consumed. Dynamic ceilings, not static session caps.",
		icon: ShieldCheck,
	},
	{
		title: "Credits & prepaid balances",
		description:
			"Package usage into credits with discounts and flexible terms. MPP has no native credit system.",
		icon: Coins,
	},
	{
		title: "Double-entry ledger",
		description:
			"Every tool call becomes a debit and credit. Margin is visible per run, per agent, per customer.",
		icon: Scale,
	},
	{
		title: "Usage caps & budgets",
		description:
			"Per-user, per-agent, per-org limits. MPP session caps are a single number, not a policy engine.",
		icon: Lock,
	},
	{
		title: "Refunds & reversals",
		description:
			"Failed runs reversed cleanly with full audit trail. MPP refunds are manual Stripe Dashboard operations.",
		icon: RefreshCw,
	},
	{
		title: "Normalized costs",
		description:
			"Unified cost basis across stablecoins, fiat SPTs, and all providers. One ledger for everything.",
		icon: Layers,
	},
];

const comparisons = [
	{
		label: "Cost visibility",
		without: "Aggregate settlement total",
		with: "Line-item ledger per run",
	},
	{
		label: "Margin tracking",
		without: "Not available",
		with: "Real-time P&L per agent",
	},
	{
		label: "Refunds",
		without: "Manual via Stripe Dashboard",
		with: "Automatic reversals",
	},
	{
		label: "Business models",
		without: "Pay-per-call only",
		with: "Prepaid, postpaid, credits",
	},
	{
		label: "Budget controls",
		without: "Session cap (single number)",
		with: "Per-user, per-org policies",
	},
	{
		label: "Multi-agent attribution",
		without: "Flat list of PaymentIntents",
		with: "Parent-child cost trees",
	},
];

const steps = [
	{
		num: "01",
		title: "Agent hits MPP endpoint",
		description:
			"Server returns HTTP 402 challenge. OpenRind intercepts before payment executes.",
		icon: ArrowRightLeft,
	},
	{
		num: "02",
		title: "OpenRind opens ledger",
		description:
			"Authorization ceiling set, signed session issued, double-entry ledger started.",
		icon: ShieldCheck,
	},
	{
		num: "03",
		title: "Micropayments stream",
		description:
			"Each token, tool call, and compute step recorded as a line item with cost and revenue.",
		icon: Zap,
	},
	{
		num: "04",
		title: "Settle & reconcile",
		description:
			"MPP settles the payment. OpenRind captures the exact amount, refunds the delta, closes the books.",
		icon: Coins,
	},
];

export function MppHero() {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white min-h-[90vh] flex items-center">
			{/* Subtle gradient overlays */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(217,193,215,0.25),transparent_50%)]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(217,185,167,0.15),transparent_40%)]" />

			{/* Animated grid background */}
			<div className="absolute inset-0 opacity-20">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `linear-gradient(rgba(217,193,215,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(217,193,215,0.1) 1px, transparent 1px)`,
						backgroundSize: "60px 60px",
					}}
				/>
			</div>

			{/* Floating orbs */}
			<div className="glow-orb glow-orb--rose float-slow -top-32 -left-32 h-64 w-64 opacity-40" />
			<div className="glow-orb glow-orb--peach float-medium -bottom-20 right-0 h-80 w-80 opacity-30" />

			<div className="container-custom relative z-10 py-[100px] lg:py-[140px]">
				<div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
					<div className="space-y-8">
						<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm">
							<Sparkles className="h-4 w-4 text-brand-accent-200" />
							<span className="text-sm font-medium text-white/80">
								Proxy Accounting for Stripe MPP
							</span>
						</div>

						<h1 className="font-display text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold tracking-tight leading-[1.05]">
							<span className="font-mono">MPP</span> streams
							payments.
							<br />
							<span className="bg-gradient-to-r from-white via-brand-accent-100 to-brand-accent-200 bg-clip-text text-transparent">
								OpenRind accounts for them.
							</span>
						</h1>

						<p className="font-body text-lg sm:text-xl leading-[1.6] text-white/80 max-w-xl text-pretty">
							Stripe&apos;s Machine Payments Protocol is{" "}
							<span className="underline-hand-green text-white">
								OAuth for money
							</span>
							. But OAuth doesn&apos;t give you a P&amp;L.
							OpenRind adds{" "}
							<span className="underline-hand-green text-white">
								credits
							</span>
							,{" "}
							<span className="underline-hand-green text-white">
								double-entry ledgers
							</span>
							,{" "}
							<span className="underline-hand-green text-white">
								usage caps
							</span>
							, and{" "}
							<span className="underline-hand-green text-white">
								chargebacks
							</span>{" "}
							on top of every MPP session.
						</p>

						<div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-2">
							<span className="cta-glow">
								<a
									href="http://app.openrind.com/"
									className={primaryButton}
								>
									Ship MPP Billing Today
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
							</span>
							<a
								href="http://app.openrind.com/"
								className={secondaryButtonLight}
							>
								Explore the Dashboard
							</a>
						</div>
						<p className="text-xs text-white/50 mt-3 tracking-wide">
							Trusted by YC and a16z-backed teams
						</p>
					</div>

					{/* Hero visual - live MPP session card */}
					<div className="relative hidden lg:block">
						<div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-accent-100/20 via-transparent to-brand-accent-200/20 blur-2xl" />

						<div className="glow-card relative rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl">
							<div className="glow-sheen" />

							<div className="flex items-center justify-between mb-8">
								<span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
									MPP Session
								</span>
								<span className="pulse-ring inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
									<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
									Streaming
								</span>
							</div>

							<div className="space-y-4">
								<div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
									<div>
										<p className="text-xs uppercase tracking-wider text-white/60">
											Session Cap
										</p>
										<p className="text-2xl font-bold text-white mt-1">
											$500
										</p>
									</div>
									<div className="h-12 w-12 rounded-xl bg-brand-accent-300/20 flex items-center justify-center">
										<ShieldCheck className="h-6 w-6 text-brand-accent-200" />
									</div>
								</div>

								<div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
									<div>
										<p className="text-xs uppercase tracking-wider text-white/60">
											Micropayments Streamed
										</p>
										<p className="text-2xl font-bold text-white mt-1">
											$47.83
										</p>
									</div>
									<div className="h-2 flex-1 mx-6 rounded-full bg-white/10 overflow-hidden">
										<div className="h-full w-[10%] rounded-full bg-gradient-to-r from-brand-accent-100 to-brand-accent-200 animate-pulse" />
									</div>
								</div>

								<div className="grid grid-cols-2 gap-3">
									<div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
										<p className="text-xs text-rose-300">
											Your Cost (Debits)
										</p>
										<p className="text-lg font-semibold text-rose-400 mt-1">
											-$31.20
										</p>
									</div>
									<div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
										<p className="text-xs text-emerald-300">
											Revenue (Credits)
										</p>
										<p className="text-lg font-semibold text-emerald-400 mt-1">
											+$47.83
										</p>
									</div>
								</div>

								<div className="pt-4 border-t border-white/10">
									<div className="flex items-center justify-between text-sm">
										<span className="text-white/70">
											Run Margin
										</span>
										<span className="font-semibold text-emerald-400">
											+$16.63 (35%)
										</span>
									</div>
									<p className="text-xs text-white/40 mt-2">
										MPP sees $47.83. OpenRind sees the
										margin.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function MppContent() {
	return (
		<>
			{/* Problem Statement */}
			<section className="relative bg-brand-base text-brand-text-primary overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,193,215,0.2),transparent_60%)]" />

				<div className="container-custom relative z-10 py-[80px] lg:py-[120px]">
					<div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
						<h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-matter font-bold tracking-tight leading-[1.15]">
							MPP is a payment protocol,
							<br />
							<span className="underline-hand">
								not an accounting system
							</span>
						</h2>
						<p className="text-lg text-brand-text-secondary text-pretty">
							Stripe calls MPP &ldquo;OAuth for money.&rdquo;
							But OAuth doesn&apos;t give you a general ledger.
							The moment you meter real agent workloads, payment
							alone breaks down.
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-3">
						{painPoints.map((point, index) => (
							<article
								key={point.title}
								className="group relative rounded-2xl border border-brand-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand-accent-300 hover:-translate-y-1"
								style={{
									animationDelay: `${index * 100}ms`,
								}}
							>
								<div className="flex items-start gap-4">
									<div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-accent-100/60 to-brand-accent-200/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<point.icon className="h-6 w-6 text-brand-text-secondary" />
									</div>
									<div>
										<h3 className="text-base font-semibold text-brand-text-primary mb-2">
											{point.title}
										</h3>
										<p className="text-sm text-brand-text-secondary leading-relaxed">
											{point.description}
										</p>
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
								<span className="text-sm font-medium text-brand-text-secondary">
									Accounting Primitives
								</span>
							</div>

							<h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-matter font-bold tracking-tight leading-[1.2]">
								The missing layer that makes MPP viable for
								business
							</h2>

							<p className="text-lg leading-[1.6] text-brand-text-secondary text-pretty">
								MPP settles payments via Stripe. OpenRind
								sits in front of your agent traffic as a proxy
								— metering the full workflow, computing the
								ledger, and settling the exact amount across
								stablecoins and fiat.
							</p>

							<div className="rounded-2xl border border-brand-accent-300 bg-brand-accent-300/10 p-6 mesh-gradient-bg">
								<p className="text-sm font-medium text-brand-text-primary">
									Finally answer:{" "}
									<em>
										&ldquo;What&apos;s the P&amp;L of each
										MPP session?&rdquo;
									</em>
								</p>
							</div>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							{primitives.map((primitive) => (
								<article
									key={primitive.title}
									className="group flex flex-col gap-3 rounded-2xl border border-brand-border bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-accent-200"
								>
									<div className="flex items-center gap-3">
										<div className="h-10 w-10 rounded-xl bg-brand-accent-100/40 flex items-center justify-center group-hover:bg-brand-accent-200/40 transition-colors duration-300">
											<primitive.icon className="h-5 w-5 text-brand-text-secondary" />
										</div>
										<h3 className="text-sm font-semibold text-brand-text-primary">
											{primitive.title}
										</h3>
									</div>
									<p className="text-sm text-brand-text-secondary leading-relaxed">
										{primitive.description}
									</p>
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
								<span className="text-brand-accent-200">
									not just session caps
								</span>
							</h2>

							<p className="text-lg leading-[1.6] text-white/80 text-pretty">
								MPP sessions commit funds upfront with a
								single cap. OpenRind adds a full credit
								system on top — prepaid balances, volume
								discounts, postpaid invoicing, and dynamic
								limits that adjust in real time.
							</p>

							<div className="grid grid-cols-2 gap-4">
								<div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
									<p className="text-xs uppercase tracking-wider text-white/60 mb-2">
										Micro
									</p>
									<p className="text-3xl font-bold text-white">
										$0.01
									</p>
									<p className="text-sm text-white/70 mt-2">
										USDC on Tempo
									</p>
								</div>
								<div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
									<p className="text-xs uppercase tracking-wider text-white/60 mb-2">
										Macro
									</p>
									<p className="text-3xl font-bold text-white">
										$10,000
									</p>
									<p className="text-sm text-white/70 mt-2">
										Multi-agent workflow
									</p>
								</div>
							</div>

							<p className="text-sm text-white/60 border-l-2 border-brand-accent-200 pl-4">
								Same accounting backbone handles stablecoins
								and fiat SPTs — no prefunded wallet required.
							</p>
						</div>

						<div className="relative">
							<div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-accent-100/10 to-brand-accent-200/10 blur-2xl" />

							<div className="relative rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl space-y-4">
								<div className="flex items-center justify-between">
									<span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
										Credit Flow
									</span>
									<span className="text-xs text-brand-accent-200">
										Auth → Capture
									</span>
								</div>

								{[
									{
										step: "1",
										title: "Agent identity + limits",
										desc: "Agent maps to organization with credit policies and spending ceilings",
									},
									{
										step: "2",
										title: "MPP 402 intercepted",
										desc: "OpenRind catches the challenge before payment executes",
									},
									{
										step: "3",
										title: "Draw from credit pool",
										desc: "OpenRind draws from prepaid balance, opens double-entry ledger",
									},
									{
										step: "4",
										title: "MPP settles payment",
										desc: "Stablecoins or fiat SPTs flow through Stripe as normal",
									},
									{
										step: "5",
										title: "Capture exact, refund delta",
										desc: "Close the run, return unused credit, reconcile the books",
									},
								].map((item) => (
									<div
										key={item.step}
										className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
									>
										<div className="flex-shrink-0 h-8 w-8 rounded-lg bg-brand-accent-300/30 flex items-center justify-center text-xs font-bold text-brand-accent-200">
											{item.step}
										</div>
										<div>
											<h4 className="text-sm font-semibold text-white">
												{item.title}
											</h4>
											<p className="text-xs text-white/70 mt-0.5">
												{item.desc}
											</p>
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
							MPP without OpenRind
							<br />
							<span className="underline-hand">
								is a billing blind spot
							</span>
						</h2>
						<p className="text-lg text-brand-text-secondary">
							Stripe&apos;s MPP handles the payment. But
							payments don&apos;t replace accounting.
						</p>
					</div>

					<div className="max-w-4xl mx-auto">
						<div className="rounded-2xl border border-brand-border bg-white shadow-sm overflow-hidden">
							{/* Header */}
							<div className="grid grid-cols-[1fr_1fr_1fr] bg-brand-surface border-b border-brand-border">
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-brand-text-muted"></div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-rose-600 border-x border-brand-border/50">
									MPP Alone
								</div>
								<div className="p-4 text-xs font-semibold uppercase tracking-wider text-center text-emerald-600">
									MPP + OpenRind
								</div>
							</div>

							{/* Rows */}
							{comparisons.map((row, index) => (
								<div
									key={row.label}
									className={`grid grid-cols-[1fr_1fr_1fr] ${index !== comparisons.length - 1 ? "border-b border-brand-border/50" : ""}`}
								>
									<div className="p-4 flex items-center">
										<span className="text-sm font-medium text-brand-text-primary">
											{row.label}
										</span>
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

			{/* How OpenRind Works - Architecture */}
			<section className="relative overflow-hidden bg-gradient-to-br from-[#120A14] via-[#231029] to-[#3D1F4A] text-white">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(217,193,215,0.15),transparent_50%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(217,185,167,0.1),transparent_40%)]" />

				<div className="container-custom relative z-10 py-[80px] lg:py-[120px]">
					<div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
						<h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-matter font-bold tracking-tight leading-[1.2]">
							Under the Hood:
							<br />
							<span className="bg-gradient-to-r from-white via-brand-accent-100 to-brand-accent-200 bg-clip-text text-transparent">
								How OpenRind Actually Works
							</span>
						</h2>
						<p className="text-lg text-white/80 max-w-2xl mx-auto">
							OpenRind is a runtime-aware proxy — not a library that invades your code. It inspects agent traffic at the network level via a secure, signed-URL architecture.
						</p>
					</div>

					{/* Signed URL Flow - 3 Steps */}
					<div className="max-w-5xl mx-auto mb-16">
						<div className="grid gap-6 lg:grid-cols-3 relative">
							{/* Connection line */}
							<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-accent-100 via-brand-accent-300 to-brand-accent-200 -translate-y-1/2 z-0" />

							<article className="relative flex flex-col items-center text-center gap-4 p-8 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm z-10">
								<div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-accent-100 to-brand-accent-200 flex items-center justify-center text-brand-text-primary font-black text-2xl shadow-lg ring-4 ring-white/10">
									1
								</div>
								<h3 className="text-lg font-matter font-bold text-white">Request a One-Time URL</h3>
								<p className="text-sm text-white/70">
									Your app asks the <code className="text-xs bg-white/10 px-2 py-1 rounded font-mono text-brand-accent-200">Control Plane</code> for permission to make a call. No static API keys — ever.
								</p>
							</article>

							<article className="relative flex flex-col items-center text-center gap-4 p-8 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm z-10">
								<div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-accent-300 to-[#210F26] flex items-center justify-center text-white font-black text-2xl shadow-lg ring-4 ring-white/10">
									2
								</div>
								<h3 className="text-lg font-matter font-bold text-white">Get a Signed URL</h3>
								<p className="text-sm text-white/70">
									The <code className="text-xs bg-white/10 px-2 py-1 rounded font-mono text-brand-accent-200">Control Plane</code> returns a short-lived, single-use signed URL with encrypted credentials. Key leakage is impossible.
								</p>
							</article>

							<article className="relative flex flex-col items-center text-center gap-4 p-8 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm z-10">
								<div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-accent-200 to-brand-accent-100 flex items-center justify-center text-brand-text-primary font-black text-2xl shadow-lg ring-4 ring-white/10">
									3
								</div>
								<h3 className="text-lg font-matter font-bold text-white">Call the Gateway</h3>
								<p className="text-sm text-white/70">
									Your agent calls the <code className="text-xs bg-white/10 px-2 py-1 rounded font-mono text-brand-accent-200">Gateway</code> with this URL. We validate the signature, check for replay attacks, proxy the call, and record every action to the ledger.
								</p>
							</article>
						</div>
					</div>

					{/* Architecture Diagram */}
					<div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-4 sm:p-8 mb-16">
						<img src="/img/financial-architecture.svg" alt="OpenRind Financial Architecture" className="w-full h-auto rounded-lg" />
					</div>

					{/* Double-Entry Ledger Explanation */}
					<div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
						<div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
							<h3 className="text-lg font-matter font-bold text-white mb-3">Deep Runtime Inspection</h3>
							<p className="text-sm text-white/70 leading-relaxed">
								Every request flows through an asynchronous deep prompt inspection engine. A background worker polls every 200ms, calling a meta-classifier to tag each request with an action type — <em>synthesis</em>, <em>tool_selection</em>, <em>evaluation</em> — with zero added latency.
							</p>
						</div>
						<div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
							<h3 className="text-lg font-matter font-bold text-white mb-3">Every Action is a Ledger Entry</h3>
							<p className="text-sm text-white/70 leading-relaxed mb-3">
								Every computational action — LLM calls, tool invocations, MPP micropayments — becomes a distinct line item with two sides:
							</p>
							<ul className="space-y-2 text-sm text-white/70">
								<li className="flex items-start gap-2">
									<span className="mt-1 inline-block size-1.5 rounded-full bg-rose-400 flex-shrink-0" />
									<span><strong className="text-white">Cost Side (Debits):</strong> Tokens paid to your provider, tool call costs, compute time.</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="mt-1 inline-block size-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
									<span><strong className="text-white">Revenue Side (Credits):</strong> The billable event for your customer based on your pricing model.</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="max-w-3xl mx-auto mt-8">
						<div className="rounded-2xl border border-brand-accent-300/30 bg-brand-accent-300/10 p-6 text-center">
							<p className="text-sm font-medium text-white/90">
								The result: an auditable, real-time <strong className="text-white">P&amp;L for every MPP session</strong>. Which agents are most profitable? Which tools drive the most cost? What&apos;s your true AI margin?
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works - Steps */}
			<section className="relative overflow-hidden bg-brand-surface border-y border-brand-border/40">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(217,193,215,0.15),transparent_50%)]" />

				<div className="container-custom relative z-10 py-[80px] lg:py-[120px]">
					<div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
						<h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-matter font-bold tracking-tight leading-[1.2]">
							How proxy accounting
							<br />
							<span className="underline-hand-green">
								makes MPP viable
							</span>
						</h2>
						<p className="text-lg text-brand-text-secondary">
							MPP returns a 402 challenge. OpenRind turns that
							into a metered session with real-time cost
							attribution across every provider.
						</p>
					</div>

					<div className="relative">
						{/* Connection line */}
						<div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-accent-100 via-brand-accent-300 to-brand-accent-200 -translate-y-1/2" />

						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
							{steps.map((step) => (
								<article
									key={step.title}
									className="group relative rounded-2xl border border-brand-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
								>
									<div className="flex items-center gap-3 mb-4">
										<div className="relative">
											<div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-accent-100 to-brand-accent-200 flex items-center justify-center ring-4 ring-white shadow-md">
												<span className="text-sm font-bold text-brand-text-primary">
													{step.num}
												</span>
											</div>
										</div>
										<div className="h-10 w-10 rounded-xl bg-brand-accent-100/30 flex items-center justify-center">
											<step.icon className="h-5 w-5 text-brand-text-secondary" />
										</div>
									</div>
									<h3 className="text-base font-semibold text-brand-text-primary mb-2">
										{step.title}
									</h3>
									<p className="text-sm text-brand-text-secondary leading-relaxed">
										{step.description}
									</p>
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
							Make Stripe&apos;s MPP actually work
							<br />
							<span className="bg-gradient-to-r from-white via-brand-accent-100 to-brand-accent-200 bg-clip-text text-transparent">
								for the agent economy
							</span>
						</h2>

						<p className="text-lg text-white/80 max-w-xl mx-auto">
							Proxy accounting, credits, and settlements in one
							stack. Built for usage-based AI — across
							stablecoins and fiat.
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
