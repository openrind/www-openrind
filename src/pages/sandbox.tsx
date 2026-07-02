import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { SandboxHero, SandboxContent } from "../components/sandbox/SandboxBody";

export default function SandboxPage() {
	return (
		<Layout
			title="OpenEral Agent Sandbox | OpenRind"
			description="OpenEral gives Claude Code and custom AI agents an isolated PostgreSQL-backed home directory with automatic OpenRind spend tracking."
		>
			<Head>
				<meta
					property="og:description"
					content="OpenEral gives Claude Code and custom AI agents an isolated PostgreSQL-backed home directory with automatic OpenRind spend tracking."
				/>
				<meta
					name="twitter:description"
					content="A safe home for AI agents: isolated Claude Code sessions, PostgreSQL persistence, and OpenRind spend metering."
				/>
			</Head>
			<div className="-mt-[64px] flex flex-col">
				<SandboxHero />
				<SandboxContent />
			</div>
		</Layout>
	);
}
