import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { X402Hero, X402Content } from "../components/x402/X402Body";

export default function X402Page() {
	return (
		<Layout title="The Missing Layer That Makes x402 Viable | OpenRind" description="x402 needs accounting. OpenRind provides credits, prepaid plans, refunds, usage caps, and line-item audit trails for agentic payments.">
			<Head>
				<meta property="og:image" content="https://www.openrind.com/img/og-x402.png" />
				<meta property="og:image:secure_url" content="https://www.openrind.com/img/og-x402.png" />
				<meta name="twitter:image" content="https://www.openrind.com/img/og-x402.png" />
				<meta property="og:description" content="x402 needs accounting. OpenRind provides credits, prepaid plans, refunds, usage caps, and line-item audit trails for agentic payments." />
				<meta name="twitter:description" content="x402 needs accounting. OpenRind provides proxy accounting for agentic payments." />
			</Head>
			<div className="-mt-[64px] flex flex-col">
				<X402Hero />
				<X402Content />
			</div>
		</Layout>
	);
}
