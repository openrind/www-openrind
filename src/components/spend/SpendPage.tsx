import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import {SpendHero, SpendReportPreview, SpendContent} from "./SpendBody";

export default function SpendPage() {
	return (
		<Layout
			title="AI Developer Tool Spend Management | OpenRind"
			description="OpenShell-based agent runtime and customer-prem proxy for controlling AI developer-tool spend. Attribute costs by user and repo, enforce policy live, and stop runaway sessions before the invoice lands."
		>
			<Head>
				<meta property="og:image" content="https://www.openrind.com/img/og-spend.png" />
				<meta property="og:image:secure_url" content="https://www.openrind.com/img/og-spend.png" />
				<meta name="twitter:image" content="https://www.openrind.com/img/og-spend.png" />
				<meta
					property="og:description"
					content="OpenShell-based agent runtime and customer-prem proxy for controlling AI developer-tool spend."
				/>
				<meta
					name="twitter:description"
					content="Run agents in an OpenShell-based runtime, route traffic through a customer-prem proxy, and govern spend from one managed control plane."
				/>
			</Head>
			<div className="-mt-[64px] flex flex-col">
				<SpendHero />
				<SpendReportPreview />
				<SpendContent />
			</div>
		</Layout>
	);
}
