import React from "react";
import { Zap, Settings, Lightbulb, Lock, ArrowRight } from 'lucide-react';

const buttonBase = "inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-matter font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]";
const primaryButton = `${buttonBase} bg-[#210F26] text-white hover:bg-[#0D0D0D]`;
const secondaryButton = `${buttonBase} border border-brand-accent-300 text-brand-text-secondary hover:bg-brand-accent-100/60`;
const tertiaryButton = `${buttonBase} border border-transparent text-brand-text-secondary hover:text-brand-text-primary`;

const accentTags = [
	{label: "Revenue-first", color: "bg-brand-accent-100 text-brand-text-secondary"},
	{label: "Audit-ready", color: "bg-brand-accent-200 text-brand-text-primary"},
	{label: "Agent-native", color: "bg-brand-accent-300 text-white"},
];

export function HeroSection() {
	return (
		<section id='overview' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-8 py-[72px] sm:py-[100px] lg:py-[128px]'>
				<span className='font-body text-[15px] uppercase tracking-[0.3em] text-brand-text-muted font-medium'>AI Accounting Infrastructure</span>
				<div className='flex flex-col gap-6 max-w-3xl'>
					<h1 className='font-display text-[28px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-bold tracking-tight leading-[1.1] text-balance'>
						OpenRind:<br />Cloudflare meets SAP for AI.
					</h1>
					<p className='font-body text-lg leading-[1.55] text-brand-text-secondary text-pretty'>Think Cloudflare for AI Accounting—we sit in front of your API and automatically calculate per-user, per-agent, per-outcome costs.</p>
					<div className='flex flex-wrap gap-2 pt-1'>
						{accentTags.map((tag) => (
							<span key={tag.label} className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tag.color}`}>
								{tag.label}
							</span>
						))}
					</div>
				</div>

				{/* a16z Outcome-Based Pricing Callout */}
				<div className='max-w-3xl rounded-2xl border border-brand-accent-300 bg-brand-accent-300/10 p-6 shadow-sm mesh-gradient-bg'>
					<div className='flex flex-col gap-4'>
						<div className='flex flex-col sm:flex-row items-start sm:items-center gap-3'>
							<div className='flex-shrink-0'>
								<img src='/img/a16z-logo.svg' alt='a16z' className='h-8 w-auto' />
							</div>
							<div className='sm:flex-1'>
								<p className='font-body text-base font-semibold text-brand-text-primary sm:text-lg'>
									<a href='https://a16z.com/newsletter/december-2024-enterprise-newsletter-ai-is-driving-a-shift-towards-outcome-based-pricing/' target='_blank' rel='noopener noreferrer' className='hover:underline'>
										Andreessen Horowitz just declared:
									</a>
								</p>
								<p className='mt-2 font-body text-base italic text-brand-text-secondary sm:text-lg'>
									<em>&ldquo;AI is driving a shift towards <strong className='underline-hand text-brand-text-primary'>outcome-based pricing</strong>. Software is becoming labor.&rdquo;</em>
								</p>
							</div>
						</div>
						<div className='border-l-4 border-brand-accent-200 pl-4'>
							<p className='font-body text-lg font-semibold text-brand-text-primary sm:text-xl'>
								But where is the infrastructure for outcome-based <strong className='underline-hand text-brand-text-primary'>billing &amp; accounting</strong>?
							</p>
							<p className='mt-2 font-body text-base text-brand-text-secondary'>
								This is <span className='line-through'>not a <strong>payments</strong> problem</span>—it&apos;s an <strong>accounting</strong> problem. The future is outcome-based, but the tools to build it don&apos;t exist.
								<br />
								<span className='highlight-hand mt-2 font-display font-semibold text-brand-text-primary text-lg sm:text-xl'>
									Until now.
								</span>
							</p>
						</div>
					</div>
				</div>

				<div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
					<span className="cta-glow">
						<a
							href='http://app.openrind.com/'
							className={primaryButton}
						>
							Protect Your Margins — Free
							<ArrowRight className="w-4 h-4 ml-2" />
						</a>
					</span>
					<a
						href='http://app.openrind.com/'
						className={secondaryButton}
					>
						See It in Action
					</a>
				</div>
				<p className="text-xs text-brand-text-muted mt-3 tracking-wide">Trusted by YC and a16z-backed teams</p>
			</div>
		</section>
	);
}

export function RootCauseSection() {
	return (
		<section id='rootcause' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-8 py-[72px] lg:py-[100px]'>
				<div className='max-w-3xl'><h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>The Root Cause: A New Cost Paradigm</h2></div>
				<p className='max-w-3xl text-lg leading-[1.55] text-brand-text-secondary text-pretty'>Why is monetizing AI agents so difficult? Because the financial models that powered the last decade of SaaS are fundamentally broken in the world of Generative AI.</p>
				<div className='flex flex-col md:flex-row gap-6 items-center'>
					<article className='flex-1 flex flex-col gap-4 p-6 rounded-2xl border border-brand-overlay/60 bg-brand-surface shadow-sm'>
						<div className='flex items-center gap-3'>
							<span className='inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700'>OLD</span>
							<h3 className='text-lg font-matter font-semibold text-brand-text-primary'>SaaS APIs</h3>
						</div>
						<div className='space-y-4 text-sm text-brand-text-secondary'>
							<div>
								<p className='font-semibold text-brand-text-primary mb-1'>Predictable, Per-Call Cost</p>
								<p>API calls have fixed, predictable costs. Payload size barely affects price.</p>
							</div>
							<div>
								<p className='font-semibold text-brand-text-primary mb-1'>Billed by the Request</p>
								<p>The billable event is the API call itself.</p>
							</div>
						</div>
					</article>

					<div className='flex items-center justify-center'>
						<div className='rounded-full bg-brand-accent-200 text-brand-text-primary w-12 h-12 flex items-center justify-center text-sm font-bold'>
							VS
						</div>
					</div>

					<article className='flex-1 flex flex-col gap-4 p-6 rounded-2xl border border-brand-accent-300 bg-brand-accent-300/15 shadow-sm mesh-gradient-bg mesh-gradient-bg-delay-2'>
						<div className='flex items-center gap-3'>
							<span className='inline-flex items-center rounded-full bg-brand-accent-300 px-3 py-1 text-xs font-semibold text-white'>NEW</span>
							<h3 className='text-lg font-matter font-semibold text-brand-text-primary'>Agentic APIs</h3>
						</div>
						<div className='space-y-4 text-sm text-brand-text-secondary'>
							<div>
								<p className='font-semibold text-brand-text-primary mb-1'>Variable, Computational Cost</p>
								<p>An agent&apos;s cost is tied to the work it performs—a metered computational resource, not a fixed endpoint.</p>
							</div>
							<div>
								<p className='font-semibold text-brand-text-primary mb-1'>Billed by the Computation</p>
								<p>Billable events include <strong className='text-brand-text-primary'>input tokens</strong>, <strong className='text-brand-text-primary'>output tokens</strong>, <strong className='text-brand-text-primary'>reasoning steps</strong>, and every <strong className='text-brand-text-primary'>downstream tool call</strong>.</p>
							</div>
						</div>
					</article>
				</div>
				<p className='max-w-3xl text-lg leading-[1.55] text-brand-text-secondary text-pretty'>This creates a <strong className='text-brand-text-primary'>massive accounting problem</strong> traditional billing can&apos;t solve. Pricing variable, multi-step agent workflows like simple API calls forces you to guess—consistently <strong className='underline-hand text-brand-text-primary'>underbill or overcharge</strong>—or build brittle accounting systems from scratch.</p>
			</div>
		</section>
	);
}

export function TrilemmaSection() {
	return (
		<section id='trilemma' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-8 py-[72px] lg:py-[100px]'>
				<div className='max-w-3xl'><h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>The AI Agent Trilemma is Stalling Your Go-to-Market.</h2></div>
				<p className='max-w-3xl text-lg leading-[1.55] text-brand-text-secondary text-pretty'>This new cost paradigm forces enterprises to choose between three conflicting demands. Getting one right often means sacrificing the others.</p>
				<div className='rounded-2xl border border-brand-overlay/60 bg-brand-surface shadow-sm mesh-gradient-bg'>
					<div className='grid divide-y divide-brand-border/60 text-left md:grid-cols-3 md:divide-y-0 md:divide-x'>
						<article className='flex flex-col gap-3 p-6'>
							<span className='inline-flex w-fit items-center rounded-full bg-brand-accent-100 px-3 py-1 text-xs font-semibold text-brand-text-secondary'>Flexibility</span>
							<h3 className='text-sm font-semibold text-brand-text-primary'>Engineering</h3>
							<p className='text-sm text-brand-text-secondary'>Engineers need to build custom agents with complex logic—Tree-of-Thought, custom loops, chained tool use—to solve real problems.</p>
						</article>
						<article className='flex flex-col gap-3 p-6'>
							<span className='inline-flex w-fit items-center rounded-full bg-brand-accent-300 px-3 py-1 text-xs font-semibold text-white'>Scalability</span>
							<h3 className='text-sm font-semibold text-brand-text-primary'>Platform</h3>
							<p className='text-sm text-brand-text-secondary'>Platform teams need to deploy agents globally on scalable infrastructure without getting locked into proprietary, black-box runtimes.</p>
						</article>
						<article className='flex flex-col gap-3 p-6'>
							<span className='inline-flex w-fit items-center rounded-full bg-brand-accent-200 px-3 py-1 text-xs font-semibold text-brand-text-primary'>Profitability</span>
							<h3 className='text-sm font-semibold text-brand-text-primary'>Business</h3>
						<p className='text-sm text-brand-text-secondary'>Finance teams need to meter usage and implement flexible billing without <strong className='text-brand-text-primary'>underbilling or overcharging</strong>—a problem that kills margins and trust.</p>
						</article>
					</div>
				</div>
				<p className='max-w-3xl text-lg leading-[1.55] text-brand-text-secondary text-pretty'>Solving this trilemma forces teams into months of brittle, internal billing workarounds—delaying revenue and innovation.</p>
			</div>
		</section>
	);
}

export function RevenueFirstSection() {
	return (
		<section id='framework' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom py-[72px] lg:py-[100px]'>
				<div className='space-y-8'>
					<div className='max-w-3xl space-y-4'>
						<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>The Double-Entry Ledger for AI Agent Operations</h2>
						<blockquote className='border-l-4 border-brand-accent-200 bg-brand-surface/50 pl-5 py-4 italic text-brand-text-secondary rounded-r-lg'>
							<p className='text-sm sm:text-base'>Simple token counters and API proxies are failing. They see the token count and total bill from your model provider, but they <strong className='underline-hand text-brand-text-primary'>can&apos;t tell you the profitability of a single agent run</strong>.</p>
						</blockquote>
					</div>
					<div className='space-y-6'>
						<div className='flex flex-col lg:flex-row gap-6 items-center'>
							<div className='flex-1 rounded-2xl border border-brand-accent-100 bg-brand-accent-100/20 p-6 shadow-sm w-full'>
								<h3 className='text-lg font-matter font-semibold text-brand-text-primary'>Deep Runtime Inspection</h3>
								<p className='mt-3 text-sm text-brand-text-secondary'>OpenRind isn&apos;t a library that invades your code—it&apos;s a <strong className='underline-hand-green text-brand-text-primary'>runtime-aware control plane</strong> that inspects your agent&apos;s traffic at the network level via a <strong className='underline-hand-green text-brand-text-primary'>secure, signed-URL architecture</strong>. Requests flow through an <strong className='underline-hand-green text-brand-text-primary'>asynchronous deep prompt inspection engine</strong> that classifies business intent with zero added latency.</p>
							</div>
							<div className='flex items-center justify-center'>
								<div className='rounded-full bg-brand-accent-300 text-white w-12 h-12 flex items-center justify-center text-2xl font-bold'>
									+
								</div>
							</div>
							<div className='flex-1 rounded-2xl border border-brand-accent-200 bg-brand-accent-200/20 p-6 shadow-sm w-full'>
								<h3 className='text-lg font-matter font-semibold text-brand-text-primary'>Every Action is a Ledger Entry</h3>
								<p className='mt-3 text-sm text-brand-text-secondary'>Our sidecar and asynchronous classifier record every computational action—LLM calls, tool invocations—as a distinct line item with two sides:</p>
								<ul className='mt-3 space-y-2 text-sm text-brand-text-secondary'>
									<li className='flex items-start gap-2'>
										<span className='mt-1 inline-block size-1.5 rounded-full bg-brand-accent-200' />
										<span><strong className='text-brand-text-primary'>Cost Side (Debits):</strong> Tokens paid to your provider, tool call costs, compute time.</span>
									</li>
									<li className='flex items-start gap-2'>
										<span className='mt-1 inline-block size-1.5 rounded-full bg-brand-accent-200' />
										<span><strong className='text-brand-text-primary'>Revenue Side (Credits):</strong> The billable event for your customer based on your pricing model.</span>
									</li>
								</ul>
							</div>
						</div>
						<div className='flex items-center justify-center'>
							<svg className='w-8 h-8 text-brand-accent-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
							</svg>
						</div>
						<div className='max-w-3xl mx-auto rounded-2xl border border-brand-accent-300 bg-brand-accent-300/15 p-6 shadow-sm mesh-gradient-bg'>
							<p className='text-sm text-brand-text-secondary'>The result: an auditable, real-time <strong className='text-brand-text-primary'>P&amp;L for every agent run</strong>. Finally answer: <em>&ldquo;Which agents are most profitable?&rdquo;</em> <em>&ldquo;Which tools drive the most cost?&rdquo;</em> <em>&ldquo;What&apos;s our true AI margin?&rdquo;</em></p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function SystemSection() {
	return (
		<section id='system' className='bg-gradient-to-br from-[#210F26] to-[#3D1F4A] text-white'>
			<div className='container-custom flex flex-col gap-10 py-[72px] lg:py-[100px]'>
				<div className='text-center max-w-4xl mx-auto space-y-4'>
					<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>One Financial Endpoint for Your Entire AI Stack</h2>
					<p className='text-lg leading-[1.55] text-white/80'>Zero-time integration. No SDK. 250+ providers, one API.</p>
					<p className='text-sm font-light italic text-white/70 mt-2'>OpenAI, Anthropic, Gemini, Cohere, Groq, and hundreds more—through a single, OpenAI-compatible proxy.</p>
				</div>
				
				<div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-4 sm:p-8">
					<img src="/img/financial-architecture.svg" alt="OpenRind Financial Architecture" className="w-full h-auto rounded-lg" />
				</div>

				
			</div>
		</section>
	);
}

export function SourceOfTruthSection() {
	return (
		<section id='ledger' className='bg-brand-base text-brand-text-primary overflow-hidden relative'>
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,193,215,0.15),transparent_50%)]'></div>
			<div className='container-custom flex flex-col gap-10 py-[72px] lg:py-[100px] relative z-10'>
				<div className='flex flex-col lg:flex-row gap-10 items-start'>
					<div className='lg:w-1/2 space-y-6'>
						<div className='inline-block px-4 py-2 rounded-full bg-brand-accent-100 text-brand-text-secondary text-xs font-semibold uppercase tracking-wider'>
							Double-Entry Accounting
						</div>
						<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>A True Ledger, Not Just a Token Counter</h2>
						<p className='text-lg leading-[1.55] text-brand-text-secondary text-pretty'>Your AI bill is a black box. OpenRind gives you X-ray vision.</p>
						<p className='text-lg leading-[1.55] text-brand-text-secondary text-pretty border-l-4 border-brand-accent-300 pl-6 py-2'>While other proxies just count total tokens, we provide a <strong className='text-brand-text-primary'>double-entry ledger</strong> for every agent run. Our asynchronous background worker inspects every prompt to give you a true P&L statement for your AI.</p>
					</div>
					<div className='lg:w-1/2 space-y-6'>
						<div className='relative p-6 rounded-2xl bg-gradient-to-br from-brand-accent-100/50 to-transparent border-l-4 border-brand-accent-100 shadow-lg'>
							<div className='absolute -left-8 top-8 w-12 h-12 rounded-full bg-brand-accent-100 flex items-center justify-center text-brand-text-primary shadow-md'>
								<Zap className="w-6 h-6" />
							</div>
							<h3 className='text-lg font-matter font-bold mb-2'>Zero-Latency Accounting</h3>
							<p className='text-sm text-brand-text-secondary'>Our <code className='text-xs bg-white px-2 py-1 rounded border border-brand-accent-100'>Event Collector</code> logs events instantly and returns responses with zero delay.</p>
						</div>
						<div className='relative p-6 rounded-2xl bg-gradient-to-br from-brand-accent-300/20 to-transparent border-l-4 border-brand-accent-300 shadow-lg'>
							<div className='absolute -left-8 top-8 w-12 h-12 rounded-full bg-brand-accent-300 flex items-center justify-center text-white shadow-md'>
								<Settings className="w-6 h-6" />
							</div>
							<h3 className='text-lg font-matter font-bold mb-2'>Asynchronous Classification</h3>
							<p className='text-sm text-brand-text-secondary'>A background <code className='text-xs bg-white px-2 py-1 rounded border border-brand-accent-300'>Worker</code> polls every 200ms, calling a meta-classifier to tag each request with an <code className='text-xs bg-white px-2 py-1 rounded border border-brand-accent-300'>action_type</code>: <em>synthesis</em>, <em>tool_selection</em>, <em>evaluation</em>, etc.</p>
						</div>
						<div className='relative p-6 rounded-2xl bg-gradient-to-br from-brand-accent-200/30 to-transparent border-l-4 border-brand-accent-200 shadow-lg'>
							<div className='absolute -left-8 top-8 w-12 h-12 rounded-full bg-brand-accent-200 flex items-center justify-center text-brand-text-primary shadow-md'>
								<Lightbulb className="w-6 h-6" />
							</div>
							<h3 className='text-lg font-matter font-bold mb-2'>Know Your &ldquo;Why&rdquo;</h3>
							<p className='text-sm text-brand-text-secondary'>Finally answer critical questions: What&apos;s the P&amp;L of your Tree-of-Thought agent? Are evaluation steps costing more than synthesis? OpenRind tells you.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function AccountingSection() {
	return (
		<section id='security' className='bg-gradient-to-b from-brand-accent-100/20 via-white to-brand-accent-200/10 text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-12 py-[72px] lg:py-[100px]'>
				<div className='text-center max-w-3xl mx-auto space-y-4'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200'>
						<Lock className="w-5 h-5 text-red-600" />
						<span className='text-xs font-bold text-red-600 uppercase tracking-wider'>Security First</span>
					</div>
					<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>Unbreakable Security: No More Static API Keys</h2>
					<p className='text-lg leading-[1.55] text-brand-text-secondary text-pretty'>Stop embedding <code className='text-xs bg-red-50 border border-red-200 px-2 py-1 rounded text-red-600 font-mono'>sk-xxx</code> keys in your code. Our <strong>dynamic, signed-URL model</strong> makes key leakage impossible.</p>
				</div>
				<div className='relative max-w-5xl mx-auto w-full'>
					<div className='absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent-100 via-brand-accent-300 to-brand-accent-200 transform -translate-y-1/2 hidden lg:block'></div>
					<div className='grid gap-8 lg:gap-12 lg:grid-cols-3 relative'>
						<article className='flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-white border-2 border-brand-accent-100 shadow-lg relative mesh-gradient-bg'>
							<div className='w-20 h-20 rounded-full bg-gradient-to-br from-brand-accent-100 to-brand-accent-200 flex items-center justify-center text-brand-text-primary font-black text-3xl shadow-lg ring-4 ring-white z-10'>
								1
							</div>
							<h3 className='text-lg font-matter font-bold'>Request a One-Time URL</h3>
							<p className='text-sm text-brand-text-secondary'>Your app asks the <code className='text-xs bg-brand-accent-100 px-2 py-1 rounded font-mono'>Control Plane</code> for permission to make a call.</p>
						</article>
						<article className='flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-white border-2 border-brand-accent-300 shadow-lg relative mesh-gradient-bg mesh-gradient-bg-delay-1'>
							<div className='w-20 h-20 rounded-full bg-gradient-to-br from-brand-accent-300 to-[#210F26] flex items-center justify-center text-white font-black text-3xl shadow-lg ring-4 ring-white z-10'>
								2
							</div>
							<h3 className='text-lg font-matter font-bold'>Get a Signed URL</h3>
							<p className='text-sm text-brand-text-secondary'>The <code className='text-xs bg-brand-accent-100 px-2 py-1 rounded font-mono'>Control Plane</code> returns a short-lived, single-use signed URL with encrypted credentials.</p>
						</article>
						<article className='flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-white border-2 border-brand-accent-200 shadow-lg relative mesh-gradient-bg mesh-gradient-bg-delay-2'>
							<div className='w-20 h-20 rounded-full bg-gradient-to-br from-brand-accent-200 to-brand-accent-100 flex items-center justify-center text-brand-text-primary font-black text-3xl shadow-lg ring-4 ring-white z-10'>
								3
							</div>
							<h3 className='text-lg font-matter font-bold'>Call the Gateway</h3>
							<p className='text-sm text-brand-text-secondary'>Your agent calls the <code className='text-xs bg-brand-accent-100 px-2 py-1 rounded font-mono'>Gateway</code> with this URL. We validate the signature, check for replay attacks, and proxy the call.</p>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}

export function BYOKSection() {
	return (
		<section id='byok' className='bg-gradient-to-br from-brand-accent-100/30 via-brand-base to-brand-accent-200/20 text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-10 py-[72px] lg:py-[100px]'>
				<div className='max-w-3xl space-y-3'>
					<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>The Enterprise Feature You&apos;ve Been Waiting For: &ldquo;Bring Your Own Key&rdquo; (BYOK)</h2>
					<p className='text-lg leading-[1.55] text-brand-text-secondary text-pretty'>Stop subsidizing your customers&apos; AI usage. Let them provide their <em>own</em> provider keys.</p>
				</div>
				<div className='grid gap-6 lg:grid-cols-3'>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-100 bg-white p-6 shadow-sm'>
						<h3 className='text-lg font-matter font-semibold'>Client-Provided Keys</h3>
						<p className='text-sm text-brand-text-secondary'>Let your customers enter their own OpenAI, Gemini, or Anthropic keys.</p>
					</article>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-300 bg-white p-6 shadow-sm'>
						<h3 className='text-lg font-matter font-semibold'>Secure &amp; Temporary Storage</h3>
						<p className='text-sm text-brand-text-secondary'>Keys encrypted at rest with <code className='text-xs bg-brand-accent-100 px-2 py-1 rounded'>pgcrypto</code> and configurable TTL.</p>
					</article>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-200 bg-white p-6 shadow-sm'>
						<h3 className='text-lg font-matter font-semibold'>Automatic Cleanup</h3>
						<p className='text-sm text-brand-text-secondary'><code className='text-xs bg-brand-accent-100 px-2 py-1 rounded'>pg_cron</code> automatically deletes expired keys. All benefits of BYOK, none of the liability.</p>
					</article>
				</div>
			</div>
		</section>
	);
}

export function DeploymentSection() {
	return (
		<section id='deployment' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-10 py-[72px] lg:py-[100px]'>
				<div className='max-w-3xl space-y-3'>
					<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>Built for Enterprise Scale &amp; Data Control</h2>
					<p className='text-lg leading-[1.55] text-brand-text-secondary text-pretty'>Not a simple SaaS tool—a production-grade stack for enterprise deployment. On-prem control with cloud flexibility.</p>
				</div>
				<div className='grid gap-6 lg:grid-cols-2'>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-100 bg-brand-surface p-6 shadow-sm'>
						<h3 className='text-lg font-matter font-semibold'>Your Cloud, Your Data</h3>
						<p className='text-sm text-brand-text-secondary'>Run the <strong>Gateway</strong> and <strong>Control Plane</strong> in your own K8s cluster. Prompts, keys, and responses never leave your network.</p>
					</article>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-300 bg-brand-accent-300/15 p-6 shadow-sm'>
						<h3 className='text-lg font-matter font-semibold'>Flexible Hybrid Model</h3>
						<p className='text-sm text-brand-text-secondary'>Use our managed <strong>Classifier</strong> in our cloud, or deploy the entire stack in your VPC. Your choice.</p>
					</article>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-200 bg-brand-accent-200/25 p-6 shadow-sm'>
						<h3 className='text-lg font-matter font-semibold'>Kubernetes-Native</h3>
						<p className='text-sm text-brand-text-secondary'>K8s-native, packaged with <strong>Helm</strong> for easy deployment to GKE, EKS, AKS, or self-hosted clusters.</p>
					</article>
					<article className='flex flex-col gap-4 rounded-2xl border border-brand-accent-100 bg-brand-surface p-6 shadow-sm'>
						<h3 className='text-lg font-matter font-semibold'>Idempotent &amp; Safe Deployments</h3>
						<p className='text-sm text-brand-text-secondary'>Database migrations run automatically as K8s Jobs before services start. Safe, idempotent, clean rollbacks.</p>
					</article>
				</div>
			</div>
		</section>
	);
}

export function FinalCtaSection() {
	return (
		<section id='demo' className='bg-brand-base text-brand-text-primary'>
			<div className='container-custom flex flex-col gap-6 py-[72px] text-center lg:py-[100px]'>
				<div className='mx-auto flex max-w-3xl flex-col gap-4 rounded-3xl border border-brand-accent-100 bg-brand-surface p-10 shadow-sm mesh-gradient-bg'>
					<h2 className='text-[26px] sm:text-[34px] lg:text-[38px] font-matter font-semibold tracking-tight leading-[1.26] text-balance'>Get the Control You Need and the Scalability You Deserve.</h2>
					<p className='text-lg leading-[1.55] text-brand-text-secondary text-pretty'>Stop building brittle, insecure AI apps. Start building on a true enterprise-grade control plane.</p>
					<div className='flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row'>
						<a href='http://app.openrind.com/' className={primaryButton}>
							Start Saving on AI Costs
							<ArrowRight className="w-4 h-4 ml-2" />
						</a>
					</div>
					<p className="text-xs text-brand-text-muted mt-3 tracking-wide">Trusted by YC and a16z-backed teams</p>
				</div>
			</div>
		</section>
	);
}
