import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import {
  OutcomeCreditsHero,
  OutcomeCreditsContent,
} from "./OutcomeCreditsBody";

export default function OutcomeCreditsPage() {
  return (
    <Layout
      title="Credit-based Billing for AI Companies | OpenRind"
      description="Implement the credit-based billing model used by Lovable without building the backend yourself. Automatic credit pricing from underlying token, reasoning, and MCP costs."
    >
      <Head>
        <meta property="og:description" content="Implement the credit-based billing model used by Lovable without building the backend yourself. Automatic credit pricing, consumption tracking, and margin protection." />
        <meta name="twitter:description" content="Credit-based billing infrastructure for AI companies. Ship the Lovable billing model without building it yourself." />
      </Head>
      <div className="-mt-[64px] flex flex-col">
        <OutcomeCreditsHero />
        <OutcomeCreditsContent />
      </div>
    </Layout>
  );
}
