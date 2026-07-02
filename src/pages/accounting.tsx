import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import {
	HeroSection,
	RootCauseSection,
	RevenueFirstSection,
	SystemSection,
	SourceOfTruthSection,
	AccountingSection,
	BYOKSection,
	DeploymentSection,
	FinalCtaSection,
} from "../components/home/sections";

export default function AccountingPage() {
	return (
		<Layout title="AI Accounting Infrastructure | OpenRind" description="Cloudflare meets SAP for AI. A runtime-aware proxy that automatically calculates per-user, per-agent, per-outcome costs with a double-entry ledger.">
			<Head>
				<meta property="og:image" content="https://www.openrind.com/img/og-accounting.png" />
				<meta property="og:image:secure_url" content="https://www.openrind.com/img/og-accounting.png" />
				<meta name="twitter:image" content="https://www.openrind.com/img/og-accounting.png" />
				<meta property="og:description" content="Cloudflare meets SAP for AI. A runtime-aware proxy that automatically calculates per-user, per-agent, per-outcome costs with a double-entry ledger." />
				<meta name="twitter:description" content="Cloudflare meets SAP for AI. Real-time proxy accounting for every agent run." />
			</Head>
			<div className='-mt-[64px] flex flex-col'>
				<HeroSection />
				<RootCauseSection />
				<RevenueFirstSection />
				<SystemSection />
				<SourceOfTruthSection />
				<AccountingSection />
				<BYOKSection />
				<DeploymentSection />
				<FinalCtaSection />
			</div>
		</Layout>
	);
}
