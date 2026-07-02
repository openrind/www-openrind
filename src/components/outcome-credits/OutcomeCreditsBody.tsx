import React from "react";
import { Zap, AlertTriangle, ShieldCheck, PieChart, Coins, Scale, CheckCircle, BarChart3, Lock, RefreshCw, Layers, ArrowRightLeft, Cpu, Server, Code, ArrowRight } from 'lucide-react';

const buttonBase = "inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-matter font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]";
const primaryButton = `${buttonBase} bg-[#210F26] text-white hover:bg-[#0D0D0D]`;
const secondaryButton = `${buttonBase} border border-brand-accent-300 text-brand-text-secondary hover:bg-brand-accent-100/60`;

const creditTags = [
	{label: "Protect Margins", color: "bg-brand-accent-100 text-brand-text-secondary"},
	{label: "Prevent Bill Shock", color: "bg-brand-accent-200 text-brand-text-primary"},
	{label: "Ship Faster", color: "bg-brand-accent-300 text-white"},
];

export function OutcomeCreditsHero() {
	return (
		<section className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-8 py-[72px] sm:py-[100px] lg:py-[128px]'>
				<span className='font-body text-[15px] uppercase tracking-[0.3em] text-brand-text-muted font-medium'>Billing Infrastructure for Agents</span>
				<div className='flex flex-col gap-6 max-w-4xl'>
					<h1 className='font-display text-[34px] sm:text-[52px] lg:text-[76px] font-bold tracking-tight leading-[1.04] text-balance'>
						OpenRind:<br />Credit-based Billing for AI Companies.
					</h1>
					<div className='space-y-5 max-w-2xl'>
						<p className='font-display text-lg sm:text-xl font-medium leading-[1.4] text-brand-text-primary text-pretty border-l-4 border-brand-accent-300 pl-4'>
							OpenRind automatically creates and <span className='highlight-hand-inline font-semibold'>prices credits</span> from your underlying token, reasoning, and MCP costs. Then <span className='underline-hand'>calculates consumption</span>, <span className='underline-hand'>margin</span>, handles <span className='underline-hand'>billing overages</span> and <span className='underline-hand'>invoicing</span> with complex <span className='underline-hand'>Cost-Plus</span> calculations.
						</p>

						<p className='font-body text-lg leading-[1.55] text-brand-text-secondary text-pretty'>
							Implement the credit-based billing model used by <strong className='text-brand-text-primary'>Lovable</strong> without building the backend yourself. Without integrating any complex code or SDKs.
						</p>
					</div>

					<div className='flex flex-wrap gap-2 pt-1'>
						{creditTags.map((tag) => (
							<span key={tag.label} className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tag.color}`}>
								{tag.label}
							</span>
						))}
					</div>

					<div className='flex flex-col gap-3 sm:flex-row sm:items-center pt-2'>
						<span className="cta-glow">
							<a
								href='http://app.openrind.com/'
								className={primaryButton}
							>
								Launch Credit Billing Free
								<ArrowRight className="w-4 h-4 ml-2" />
							</a>
						</span>
						<a
							href='http://app.openrind.com/'
							className={secondaryButton}
						>
							Take a Quick Tour
						</a>
					</div>
					<p className="text-xs text-brand-text-muted tracking-wide">Used by AI-first companies worldwide</p>
				</div>
			</div>
		</section>
	);
}

export function OutcomeCreditsContent() {
	return (
		<>
			{/* Testimonials Section - Social Proof */}
			<section className='bg-brand-surface border-b border-brand-border/40 py-16'>
				<div className='container-custom flex flex-col gap-12'>
					<div className='max-w-4xl mx-auto text-center'>
						<h3 className='font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-text-primary leading-tight text-balance'>
							A production-grade credit system needs to handle complex logic that billing providers like <span className='text-[#635BFF]'>Stripe</span> don&apos;t support.
						</h3>
					</div>
					<div className='grid gap-8 md:grid-cols-3'>
						<blockquote className='flex flex-col h-full p-8 rounded-3xl bg-white border border-brand-border shadow-sm hover:shadow-md transition-shadow duration-300'>
							<p className='font-display text-lg font-medium leading-relaxed text-brand-text-primary flex-grow italic'>
								&ldquo;You must use Credit-based billing for your AI agent startup, or you are NGMI.&rdquo;
							</p>
							<footer className='mt-6 pt-6 border-t border-brand-border/20'>
								<strong className='block text-sm font-bold text-brand-text-primary uppercase tracking-wide'>Founder</strong>
								<div className='flex items-center gap-2 mt-1'>
									<span className='text-xs font-medium text-brand-text-secondary'>YC AI Startup</span>
									<img src='/img/yc-logo.svg' alt='YC' className='h-5 w-auto' />
								</div>
							</footer>
						</blockquote>
						<blockquote className='flex flex-col h-full p-8 rounded-3xl bg-white border border-brand-border shadow-sm hover:shadow-md transition-shadow duration-300'>
							<p className='font-display text-lg font-medium leading-relaxed text-brand-text-primary flex-grow italic'>
								&ldquo;Everyone burns 3/4 of their funding and then realizes you should have been on Credit-based billing instead of usage-based billing.&rdquo;
							</p>
							<footer className='mt-6 pt-6 border-t border-brand-border/20'>
								<strong className='block text-sm font-bold text-brand-text-primary uppercase tracking-wide'>CEO</strong>
								<div className='flex items-center gap-2 mt-1'>
									<span className='text-xs font-medium text-brand-text-secondary'>a16z Voice Agent Startup</span>
									<img src='/img/a16z-logo.svg' alt='a16z' className='h-4 w-auto' />
								</div>
							</footer>
						</blockquote>
						<blockquote className='flex flex-col h-full p-8 rounded-3xl bg-white border border-brand-border shadow-sm hover:shadow-md transition-shadow duration-300'>
							<p className='font-display text-lg font-medium leading-relaxed text-brand-text-primary flex-grow italic'>
								&ldquo;It is so much easier selling Credit based billing &amp; pricing to enterprises than convince their CFO to sign off on unpredictable usage costs.&rdquo;
							</p>
							<footer className='mt-6 pt-6 border-t border-brand-border/20'>
								<strong className='block text-sm font-bold text-brand-text-primary uppercase tracking-wide'>Senior FDE</strong>
								<span className='text-xs font-medium text-brand-text-secondary mt-1 block'>Banking &amp; Financial Services</span>
							</footer>
						</blockquote>
					</div>
				</div>
			</section>

			{/* Learning from Lovable Section - Reordered as First */}
			<section className='bg-brand-base text-brand-text-primary pb-[72px] pt-[40px]'>
				<div className='container-custom flex flex-col lg:flex-row gap-10 items-start'>
					<div className='lg:w-2/3 space-y-6'>
						<h3 className='font-display text-2xl font-semibold text-brand-text-primary'>Why AI Companies Must Learn to Stop Worrying and Love Credits</h3>
						<div className='p-8 rounded-2xl bg-brand-surface border border-brand-accent-200 shadow-sm'>
							<div className='flex items-center gap-3 mb-6'>
								<div className='flex items-center justify-center p-1.5 rounded-md border border-brand-accent-100 bg-white'>
									<img src='/img/lovable-logo.svg' alt='Lovable' className='h-4 w-auto' />
								</div>
								<h4 className='text-xl font-matter font-bold text-brand-text-primary'>Real-World Example: AI Builder &ldquo;Lovable&rdquo;</h4>
							</div>
							
							<p className='text-brand-text-secondary mb-6'>
								Lovable transitioned to a credit-based billing system with its Agent Mode launch on July 23, 2025, making complex AI tasks cost variable credits. On the surface, it&apos;s a <span className='underline-hand-green'>great</span> example of outcome-based billing. But the implementation revealed critical lessons:
							</p>

							<div className='grid gap-6 md:grid-cols-2'>
								<div className='space-y-2'>
									<h5 className='font-bold text-red-700 flex items-center gap-2'>
										<AlertTriangle className="w-4 h-4" /> Rapid, Opaque Burn
									</h5>
									<p className='text-sm text-brand-text-secondary'>
										Users saw credits vanish without explanation. One user spent $225 in a month with zero transparency on <em>why</em>. <strong className='text-brand-text-primary'>OpenRind solves this with audit logs for every deduction.</strong>
									</p>
								</div>
								<div className='space-y-2'>
									<h5 className='font-bold text-red-700 flex items-center gap-2'>
										<AlertTriangle className="w-4 h-4" /> Failures Cost Money
									</h5>
									<p className='text-sm text-brand-text-secondary'>
										If the AI errored 3x, Lovable still charged. Users felt punished for the tool&apos;s mistakes. <strong className='text-brand-text-primary'>OpenRind lets you programmatically refund failed tool calls.</strong>
									</p>
								</div>
								<div className='space-y-2'>
									<h5 className='font-bold text-red-700 flex items-center gap-2'>
										<AlertTriangle className="w-4 h-4" /> Unpredictable Costs
									</h5>
									<p className='text-sm text-brand-text-secondary'>
										A feature that cost 5 credits one day might cost 8 the next. <strong className='text-brand-text-primary'>OpenRind provides strict rate-limiting and cost-capping per user.</strong>
									</p>
								</div>
								<div className='space-y-2'>
									<h5 className='font-bold text-brand-accent-300 flex items-center gap-2'>
										<CheckCircle className="w-4 h-4" /> Strategic Friction
									</h5>
									<p className='text-sm text-brand-text-secondary'>
										Positive friction: Users admitted the credit cost forced them to &ldquo;think strategically&rdquo; and reduce waste. Used correctly, credits align incentives.
									</p>
								</div>
							</div>
							
							<div className='mt-6 pt-6 border-t border-brand-border/20'>
								<p className='text-sm font-medium text-brand-text-primary italic'>
									The takeaway: Credits are the right model, but a poor implementation alienates users. OpenRind gives you the Lovable model—without the user backlash.
								</p>
							</div>
						</div>
					</div>

					{/* Validation Callout - Sticky Side */}
					<div className='lg:w-1/3 lg:sticky lg:top-24 space-y-6'>
						<div className='rounded-2xl border border-brand-accent-300 bg-brand-accent-300/10 p-6 shadow-sm mesh-gradient-bg'>
							<div className='flex flex-col gap-4'>
								<div className='flex items-center gap-3'>
									<div className='flex-shrink-0'>
										<img src='/img/a16z-logo.svg' alt='a16z' className='h-8 w-auto' />
									</div>
								</div>
								<div>
									<p className='font-body text-base font-semibold text-brand-text-primary'>
										<a href='https://a16z.com/newsletter/december-2024-enterprise-newsletter-ai-is-driving-a-shift-towards-outcome-based-pricing/' target='_blank' rel='noopener noreferrer' className='hover:underline'>
											Andreessen Horowitz just declared:
										</a>
									</p>
									<p className='mt-2 font-body text-base italic text-brand-text-secondary'>
										<em>&ldquo;AI is driving a shift towards <strong className='underline-hand text-brand-text-primary'>outcome-based pricing</strong>. Software is becoming labor.&rdquo;</em>
									</p>
								</div>
								<div className='border-l-4 border-brand-accent-200 pl-4 pt-2'>
									<p className='font-body text-base font-semibold text-brand-text-primary'>
										In practice, &ldquo;Outcome-based Billing&rdquo; means <strong className='underline-hand text-brand-text-primary'>Credits</strong>.
									</p>
									<p className='mt-2 font-body text-sm text-brand-text-secondary'>
										Look at the industry leaders: <strong className='text-brand-text-primary'>Lovable</strong>, <strong className='text-brand-text-primary'>Gamma</strong>, and <strong className='text-brand-text-primary'>Miro</strong> have all shifted to credit-based models to solve usage volatility.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* The Billing Model Showdown Section */}
			<section className='bg-brand-base text-brand-text-primary'>
				<div className='max-w-6xl mx-auto space-y-12 border-y border-brand-border/40 py-16 px-4'>
					<div className='text-center max-w-3xl mx-auto space-y-6'>
						<h3 className='font-display text-3xl md:text-4xl font-semibold text-brand-text-primary'>Why the Math Doesn&apos;t Work for Subscription & Usage Billing</h3>
						<p className='text-brand-text-secondary text-lg text-pretty'>
							You are building an agent. You have two traditional choices for billing, and both of them fail. The third choice is the only one that scales.
						</p>
					</div>

					<div className='grid gap-6 lg:grid-cols-3 items-stretch'>
						{/* Choice A: Subscription */}
						<div className='flex flex-col p-8 rounded-3xl bg-white border border-red-100 relative shadow-sm hover:shadow-md transition-shadow group'>
							<div className='absolute -top-4 left-8 bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-red-200 shadow-sm'>Old Way</div>
							
							<div className='flex items-center gap-4 mb-8'>
								<div className='p-3 bg-red-50 text-red-600 rounded-xl group-hover:bg-red-100 transition-colors'><BarChart3 className="w-8 h-8"/></div>
								<div>
									<h4 className='font-matter font-bold text-red-900 text-2xl'>Subscription</h4>
									<p className='text-red-700/80 text-sm font-medium'>The &quot;Unlimited&quot; Trap</p>
								</div>
							</div>

							<div className='space-y-8 flex-grow'>
								<div className='space-y-2 pb-6 border-b border-red-50'>
									<p className='text-3xl font-display font-bold text-brand-text-primary'>$20<span className='text-lg text-brand-text-secondary font-normal'>/mo</span></p>
									<p className='text-sm text-brand-text-secondary'>Flat fee for access.</p>
								</div>
								
								<div className='space-y-4'>
									<div className='space-y-2'>
										<span className='text-xs font-bold text-red-700 uppercase tracking-wide'>Scenario</span>
										<p className='text-sm font-medium text-brand-text-primary'>Power User Loop</p>
										<p className='text-xs text-brand-text-secondary leading-relaxed'>
											A user runs a complex agent loop (GPT-4o, 30 iterations) to fix a bug. They do this 5 times a week.
										</p>
									</div>
									<div className='p-4 bg-red-50/50 rounded-xl border border-red-100/50 space-y-3'>
										<div className='flex justify-between text-sm'>
											<span className='text-red-800'>Infra Cost:</span> 
											<span className='font-mono font-bold text-red-700'>$25.00/mo</span>
										</div>
										<div className='flex justify-between text-sm'>
											<span className='text-brand-text-secondary'>Revenue:</span> 
											<span className='font-mono font-bold text-brand-text-primary'>$20.00/mo</span>
										</div>
										<div className='pt-2 border-t border-red-200/50 flex justify-between text-sm'>
											<span className='font-bold text-red-900'>Net Loss:</span> 
											<span className='font-mono font-bold text-red-600'>-$5.00</span>
										</div>
									</div>
								</div>

								<div className='space-y-3'>
									<div className='flex gap-3 text-sm text-brand-text-secondary'>
										<span className='text-red-500 font-bold text-lg leading-none mt-0.5'>×</span>
										<span><strong>Margin Collapse:</strong> Your best users are your biggest expense. 4 heavy users wipe out profit from 100 light ones.</span>
									</div>
									<div className='flex gap-3 text-sm text-brand-text-secondary'>
										<span className='text-red-500 font-bold text-lg leading-none mt-0.5'>×</span>
										<span><strong>Static:</strong> You can&apos;t ship new, expensive models because you can&apos;t charge more for them.</span>
									</div>
								</div>
							</div>
						</div>

						{/* Choice B: Usage */}
						<div className='flex flex-col p-8 rounded-3xl bg-white border border-orange-100 relative shadow-sm hover:shadow-md transition-shadow group'>
							<div className='absolute -top-4 left-8 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-orange-200 shadow-sm'>Old Way</div>
							
							<div className='flex items-center gap-4 mb-8'>
								<div className='p-3 bg-orange-50 text-orange-600 rounded-xl group-hover:bg-orange-100 transition-colors'><AlertTriangle className="w-8 h-8"/></div>
								<div>
									<h4 className='font-matter font-bold text-orange-900 text-2xl'>Usage Billing</h4>
									<p className='text-orange-700/80 text-sm font-medium'>The &quot;Taxi Meter&quot;</p>
								</div>
							</div>

							<div className='space-y-8 flex-grow'>
								<div className='space-y-2 pb-6 border-b border-orange-50'>
									<p className='text-3xl font-display font-bold text-brand-text-primary'>$0.03<span className='text-lg text-brand-text-secondary font-normal'>/run</span></p>
									<p className='text-sm text-brand-text-secondary'>Pay-as-you-go metering.</p>
								</div>

								<div className='space-y-4'>
									<div className='space-y-2'>
										<span className='text-xs font-bold text-orange-700 uppercase tracking-wide'>Scenario</span>
										<p className='text-sm font-medium text-brand-text-primary'>The Cost Anxiety</p>
										<p className='text-xs text-brand-text-secondary leading-relaxed'>
											You show a live cost meter. User stares at the "Run Agent" button and hesitates.
										</p>
									</div>
									<div className='p-4 bg-orange-50/50 rounded-xl border border-orange-100/50'>
										<p className='italic text-sm text-orange-900/80 leading-relaxed'>
											&ldquo;Will this run cost $0.10 or loop 50 times and cost $10.00? I better not click it.&rdquo;
										</p>
									</div>
								</div>

								<div className='space-y-3'>
									<div className='flex gap-3 text-sm text-brand-text-secondary'>
										<span className='text-orange-500 font-bold text-lg leading-none mt-0.5'>×</span>
										<span><strong>Adoption Freeze:</strong> Users are afraid to explore your product because costs are uncapped.</span>
									</div>
									<div className='flex gap-3 text-sm text-brand-text-secondary'>
										<span className='text-orange-500 font-bold text-lg leading-none mt-0.5'>×</span>
										<span><strong>Cognitive Load:</strong> Users don&apos;t know what a &quot;token&quot; is. You are forcing them to do math.</span>
									</div>
								</div>
							</div>
						</div>

						{/* Choice C: Credits */}
						<div className='flex flex-col p-8 rounded-3xl bg-brand-surface border-2 border-brand-accent-300 shadow-2xl relative transform lg:scale-105 z-10 overflow-hidden mesh-gradient-bg'>
							<div className='absolute top-0 right-0 w-40 h-40 bg-brand-accent-300/10 rounded-bl-full -mr-8 -mt-8'></div>
							<div className='absolute -top-4 left-8 bg-brand-accent-300 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md'>The Fix</div>
							
							<div className='flex items-center gap-4 mb-8 relative z-10'>
								<div className='p-3 bg-brand-accent-300 text-white rounded-xl shadow-md'><CheckCircle className="w-8 h-8"/></div>
								<div>
									<h4 className='font-matter font-bold text-brand-text-primary text-2xl'>Credits Billing</h4>
									<p className='text-brand-text-secondary text-sm font-medium'>Value-Based Pricing</p>
								</div>
							</div>
							
							<div className='space-y-8 flex-grow relative z-10'>
								<div className='space-y-2 pb-6 border-b border-brand-accent-100'>
									<p className='text-3xl font-display font-bold text-brand-text-primary'>Prepaid &amp; Postpaid</p>
									<p className='text-sm text-brand-text-secondary'>Users buy packs (e.g. 500 credits for $20).</p>
								</div>
								
								<div className='space-y-4'>
									<div className='space-y-2'>
										<span className='text-xs font-bold text-brand-accent-300 uppercase tracking-wide'>Scenario</span>
										<p className='text-sm font-medium text-brand-text-primary'>Outcome Alignment</p>
										<p className='text-xs text-brand-text-secondary leading-relaxed'>
											User spends credits on <strong>results</strong> (e.g. "Fix Bug"). They already paid, so they feel safe.
										</p>
									</div>
									
									<div className='grid grid-cols-1 gap-3'>
										<div className='flex items-start gap-3 p-3 rounded-xl bg-white border border-brand-accent-100/50 shadow-sm'>
											<div className='mt-1 text-brand-accent-300'><ShieldCheck className="w-5 h-5"/></div>
											<div>
												<span className='block font-bold text-brand-text-primary text-sm'>Guaranteed Margin</span>
												<span className='text-xs text-brand-text-secondary leading-tight'>Price "Research Task" at 50 credits. If cost is $0.50, you lock in 50% margin.</span>
											</div>
										</div>
										<div className='flex items-start gap-3 p-3 rounded-xl bg-white border border-brand-accent-100/50 shadow-sm'>
											<div className='mt-1 text-brand-accent-300'><Lock className="w-5 h-5"/></div>
											<div>
												<span className='block font-bold text-brand-text-primary text-sm'>Predictability Cap</span>
												<span className='text-xs text-brand-text-secondary leading-tight'>Prepayment acts as a spending cap. Zero surprise bills = Zero anxiety.</span>
											</div>
										</div>
										<div className='flex items-start gap-3 p-3 rounded-xl bg-white border border-brand-accent-100/50 shadow-sm'>
											<div className='mt-1 text-brand-accent-300'><RefreshCw className="w-5 h-5"/></div>
											<div>
												<span className='block font-bold text-brand-text-primary text-sm'>Flexible Pricing</span>
												<span className='text-xs text-brand-text-secondary leading-tight'>Change "Fast Mode" cost to 2x credits on the fly without changing plans.</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='mt-8 pt-4 border-t border-brand-accent-100 relative z-10'>
								<p className='font-bold text-brand-accent-300 flex items-center gap-2'>
									Result: Aligns Price, Cost & Value.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Financial Reporting Preview */}
			<section className='bg-brand-base text-brand-text-primary pb-[72px] lg:pb-[100px]'>
				<div className='container-custom'>
					<div className='mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-brand-border bg-white shadow-2xl'>
						<img
							src='/img/report-hero.webp'
							alt='OpenRind financial reports dashboard showing vendor token spend, COGS, revenue, and gross margin'
							width={1354}
							height={909}
							loading='lazy'
							className='h-auto w-full'
						/>
					</div>
				</div>
			</section>

			{/* The Hidden Complexity Section - Restored and Enhanced */}
			<section className='bg-white text-brand-text-primary py-[72px] lg:py-[100px]'>
				<div className='container-custom flex flex-col gap-10'>
					<div className='max-w-3xl'>
						<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>
							The Hidden Complexity of <span className='whitespace-nowrap'>Credit-based</span> Billing for AI Startups
						</h2>
						<p className='mt-4 text-lg leading-[1.55] text-brand-text-secondary text-pretty'>
							<em className='underline-hand text-brand-text-primary'>&ldquo;We&apos;ll just add a column to the users table.&rdquo;</em>
						</p>
					</div>

					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						<div className='space-y-3 p-6 rounded-2xl bg-brand-surface border border-brand-accent-100/50'>
							<div className='inline-flex items-center gap-2 font-semibold text-brand-text-primary'>
								<span className='flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent-100 text-xs'>1</span>
								Non-Linear Burn Rates
							</div>
							<p className='text-sm text-brand-text-secondary'>Not all agents are equal. You need to charge different rates for "Fast Mode" (GPT-4) vs "Standard Mode" (GPT-3.5) dynamically based on the model selected at runtime.</p>
						</div>
						<div className='space-y-3 p-6 rounded-2xl bg-brand-surface border border-brand-accent-100/50'>
							<div className='inline-flex items-center gap-2 font-semibold text-brand-text-primary'>
								<span className='flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent-100 text-xs'>2</span>
								Real-Time Blocking
							</div>
							<p className='text-sm text-brand-text-secondary'>If a user runs out of credits <em>during</em> a stream, you must cut the connection instantly. Polling every minute isn&apos;t enough; you need millisecond-level gatekeeping.</p>
						</div>
						<div className='space-y-3 p-6 rounded-2xl bg-brand-surface border border-brand-accent-100/50'>
							<div className='inline-flex items-center gap-2 font-semibold text-brand-text-primary'>
								<span className='flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent-100 text-xs'>3</span>
								Rollover Logic
							</div>
							<p className='text-sm text-brand-text-secondary'>Enterprise contracts are messy. "Monthly credits expire, but Top-Up credits roll over." Your ledger must distinguish between different <em>types</em> of credits in the same wallet.</p>
						</div>
						<div className='space-y-3 p-6 rounded-2xl bg-brand-surface border border-brand-accent-100/50'>
							<div className='inline-flex items-center gap-2 font-semibold text-brand-text-primary'>
								<span className='flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent-100 text-xs'>4</span>
								Concurrency &amp; Locking
							</div>
							<p className='text-sm text-brand-text-secondary'>When a user fires 5 parallel agent requests, you can&apos;t just read/write the balance. You need atomic locking to prevent double-spending and race conditions.</p>
						</div>
						<div className='space-y-3 p-6 rounded-2xl bg-brand-surface border border-brand-accent-100/50'>
							<div className='inline-flex items-center gap-2 font-semibold text-brand-text-primary'>
								<span className='flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent-100 text-xs'>5</span>
								Input-Cost Awareness
							</div>
							<p className='text-sm text-brand-text-secondary'>To guarantee margin, the burn rate must be tied to live input costs (tokens). A static "1 credit per run" kills your margin if the run loops 50 times.</p>
						</div>
						<div className='space-y-3 p-6 rounded-2xl bg-brand-surface border border-brand-accent-100/50'>
							<div className='inline-flex items-center gap-2 font-semibold text-brand-text-primary'>
								<span className='flex items-center justify-center w-6 h-6 rounded-full bg-brand-accent-100 text-xs'>6</span>
								Refills &amp; Top-Ups
							</div>
							<p className='text-sm text-brand-text-secondary'>When a user hits 0, you need an auto-recharge trigger that pings Stripe. Building this orchestration securely is a full product in itself.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Why This Had to Be a Proxy Section */}
			<section className='bg-gradient-to-br from-[#210F26] to-[#3D1F4A] text-white py-[72px] lg:py-[100px]'>
				<div className='container-custom flex flex-col gap-10'>
					<div className='max-w-4xl mx-auto text-center space-y-6'>
						<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>
							Credits Require a New Kind of Infrastructure
						</h2>
						<p className='text-lg leading-[1.55] text-white/80 max-w-2xl mx-auto'>
							<em>Only a proxy can see the full economic picture — and turn usage chaos into clean, trustable credits.</em>
						</p>
						<p className='text-lg leading-[1.55] text-white/90 max-w-3xl mx-auto'>
							The AI economy needed a new billing unit — the <strong>credit</strong>. But to make credits programmable, cost-aware, and fair, we had to observe everything. That&apos;s why we built <strong className='underline-hand-green'>OpenRind as a proxy</strong>.
						</p>
					</div>

					<div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-4 sm:p-8">
						<img src="/img/financial-architecture.svg" alt="OpenRind Financial Architecture" className="w-full h-auto rounded-lg" />
					</div>

					<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto'>
						<div className='p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm'>
							<h4 className='font-bold mb-2'>Total Observability</h4>
							<p className='text-sm text-white/70'>Every token, tool call, reasoning loop — captured at the edge.</p>
						</div>
						<div className='p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm'>
							<h4 className='font-bold mb-2'>Real-Time Costs</h4>
							<p className='text-sm text-white/70'>Live cost visibility across 250+ LLMs and APIs instantly.</p>
						</div>
						<div className='p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm'>
							<h4 className='font-bold mb-2'>Dynamic Burn</h4>
							<p className='text-sm text-white/70'>Adjust credit burn per call, per agent, per product line.</p>
						</div>
						<div className='p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm'>
							<h4 className='font-bold mb-2'>Policy Engine</h4>
							<p className='text-sm text-white/70'>Built-in pricing logic, expiry, and economic policy enforcement.</p>
						</div>
					</div>

					<div className='mt-16 pt-12 border-t border-white/10'>
						<div className='max-w-3xl mx-auto text-center mb-10'>
							<h3 className='font-display text-2xl font-semibold text-white'>Flexible Consumption Mapping</h3>
							<p className='text-white/70 mt-2 text-sm text-pretty'>
								The hardest part of the complexity is simply deciding how many credits each action &ldquo;costs&rdquo;. OpenRind supports flexible mapping strategies:
							</p>
						</div>
						<div className='grid gap-6 md:grid-cols-3'>
							<div className='flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors'>
								<div className='w-8 h-8 rounded-full bg-brand-accent-300 flex items-center justify-center shrink-0 font-bold text-white text-sm shadow-md'>1</div>
								<div>
									<h4 className='font-bold text-white mb-2'>Dynamic Proportional</h4>
									<p className='text-sm text-white/70'>Tie credits to measurable units like 1 credit per 1,000 tokens. Abstraction keeps it simple for users, while protecting your margin.</p>
								</div>
							</div>
							<div className='flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors'>
								<div className='w-8 h-8 rounded-full bg-brand-accent-200 flex items-center justify-center shrink-0 font-bold text-brand-text-primary text-sm shadow-md'>2</div>
								<div>
									<h4 className='font-bold text-white mb-2'>Tiered & Fast-Lane</h4>
									<p className='text-sm text-white/70'>Charge non-linearly. A &ldquo;Fast Agent&rdquo; using a premier model consumes credits faster than a standard agent. You define the rate.</p>
								</div>
							</div>
							<div className='flex flex-col gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors'>
								<div className='w-8 h-8 rounded-full bg-brand-accent-100 flex items-center justify-center shrink-0 font-bold text-brand-text-primary text-sm shadow-md'>3</div>
								<div>
									<h4 className='font-bold text-white mb-2'>Outcome-Based Bundles</h4>
									<p className='text-sm text-white/70'>Price per coarse outcome (e.g., &ldquo;Video Gen = 20 credits&rdquo;). Crucially, our proxy ensures the burn is proportional to actual backend costs.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* How it Works - Technical / Functional */}
			<section className='bg-brand-base text-brand-text-primary py-[72px] lg:py-[100px]'>
				<div className='container-custom flex flex-col gap-10'>
					<div className='max-w-4xl mx-auto text-center space-y-6'>
						<div className='inline-block px-4 py-2 rounded-full bg-brand-accent-300 text-white text-xs font-semibold uppercase tracking-wider'>
							How It Works
						</div>
						<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>Drop-in Billing Infrastructure</h2>
						<p className='text-lg leading-[1.55] text-brand-text-secondary text-pretty max-w-2xl mx-auto'>
							You don&apos;t need to build a ledger, write a proxy, or handle race conditions in Postgres. OpenRind handles the plumbing.
						</p>
					</div>

					<div className='grid gap-6 md:grid-cols-3'>
						<div className='relative p-6 rounded-2xl bg-white border border-brand-accent-100 shadow-sm hover:shadow-md transition-shadow'>
							<div className='flex items-center gap-3 mb-3'>
								<div className='p-2 bg-brand-accent-100 rounded-lg'><Server className="w-5 h-5 text-brand-text-primary"/></div>
								<h3 className='text-lg font-matter font-bold'>1. The Proxy</h3>
							</div>
							<p className='text-sm text-brand-text-secondary'>
								Route your LLM calls through `api.openrind.com`. We act as a gateway between your app and OpenAI/Anthropic.
							</p>
						</div>
						<div className='relative p-6 rounded-2xl bg-white border border-brand-accent-100 shadow-sm hover:shadow-md transition-shadow'>
							<div className='flex items-center gap-3 mb-3'>
								<div className='p-2 bg-brand-accent-100 rounded-lg'><Code className="w-5 h-5 text-brand-text-primary"/></div>
								<h3 className='text-lg font-matter font-bold'>2. The Ledger</h3>
							</div>
							<p className='text-sm text-brand-text-secondary'>
								We meter tokens in real-time. We calculate the cost, check the user&apos;s wallet balance, and deduct credits instantly.
							</p>
						</div>
						<div className='relative p-6 rounded-2xl bg-white border border-brand-accent-100 shadow-sm hover:shadow-md transition-shadow'>
							<div className='flex items-center gap-3 mb-3'>
								<div className='p-2 bg-brand-accent-100 rounded-lg'><Lock className="w-5 h-5 text-brand-text-primary"/></div>
								<h3 className='text-lg font-matter font-bold'>3. The Gatekeeper</h3>
							</div>
							<p className='text-sm text-brand-text-secondary'>
								Zero balance? Request blocked. You never pay for an API call that you haven&apos;t already been paid for.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className='bg-brand-base text-brand-text-primary pb-[72px] lg:pb-[100px]'>
				<div className='container-custom flex flex-col gap-6 text-center'>
					<div className='mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-brand-accent-100 bg-brand-surface p-10 shadow-sm mesh-gradient-bg'>
						<h2 className='text-[26px] sm:text-[34px] lg:text-[44px] font-matter font-semibold tracking-tight leading-[1.1] text-balance text-brand-text-primary'>
							Stripe handles the Charge.<br/><br/>
							We handle the Credits Modelling, Consumption & Billing.
						</h2>
						<p className='text-lg leading-[1.55] text-brand-text-secondary text-pretty max-w-2xl mx-auto'>
							Building a credit system is hard. You need to handle top-ups, expirations, decimals, and concurrency. OpenRind gives you a robust Credits Proxy Gateway so you can focus on building your agent, not your billing engine.
						</p>
						<div className='flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row'>
							<a href='http://app.openrind.com/' className={primaryButton}>
								Launch Credits Today
								<ArrowRight className="w-4 h-4 ml-2" />
							</a>
						</div>
						<p className="text-xs text-brand-text-muted mt-3 tracking-wide">Used by AI-first companies worldwide</p>
					</div>
				</div>
			</section>
		</>
	);
}
