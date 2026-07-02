import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { MppHero, MppContent } from "../components/mpp/MppBody";

export default function MppPage() {
	return (
		<Layout title="Proxy Accounting for Stripe MPP | OpenRind" description="Stripe's Machine Payments Protocol streams micropayments but can't tell you the P&L of an agent run. OpenRind adds credits, ledgers, usage caps, and chargebacks on top of MPP.">
			<Head>
				<meta property="og:image" content="https://www.openrind.com/img/og-mpp.png" />
				<meta property="og:image:secure_url" content="https://www.openrind.com/img/og-mpp.png" />
				<meta name="twitter:image" content="https://www.openrind.com/img/og-mpp.png" />
				<meta property="og:description" content="Stripe's Machine Payments Protocol streams micropayments but can't tell you the P&L of an agent run. OpenRind adds the accounting layer." />
				<meta name="twitter:description" content="MPP handles the payment. OpenRind handles the accounting. Credits, ledgers, and chargebacks for agentic commerce." />
			</Head>
			<div className="-mt-[64px] flex flex-col">
				<MppHero />
				<MppContent />
			</div>
		</Layout>
	);
}
