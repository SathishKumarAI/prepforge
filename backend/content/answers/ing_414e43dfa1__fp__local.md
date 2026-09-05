---
qid: ing_414e43dfa1__fp__local
question: Do I need an Azure account to use Foundry?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 432
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:23:31-05:00'
sources: []
---

Foundry’s **Machine‑Learning** module is built as a *cloud‑first* service that lives inside the platform’s orchestration layer.  
The fundamental problem it solves is **distributed training, hyper‑parameter tuning, and model serving at scale**. To do that, Foundry relies on a managed compute pool (VMs, GPUs) and a container registry for artifacts. In Azure, those resources are provisioned automatically by the platform’s *Provisioner* component, which talks to Azure Resource Manager using your subscription credentials.

Because of this tight coupling:

1. **Identity** – The Foundry control plane authenticates against Azure AD to obtain tokens that grant it read/write access to compute and storage.  
2. **Billing & Quotas** – All consumption is charged to the Azure account, so a valid subscription is required for any non‑free tier usage.  
3. **Networking** – Private endpoints, virtual networks, and key vaults are created under your tenant; Foundry expects those resources to exist.

If you *must* run Foundry without an Azure account (e.g., on-prem or another cloud), you can deploy the self‑hosted “Foundry Enterprise” edition. It still requires an identity provider (Azure AD, Okta, etc.) for authentication and a container registry/compute cluster of your choosing, but the platform’s internal APIs are agnostic to the underlying cloud.

**Non‑obvious insight:** Even in a self‑hosted deployment, you *cannot* bypass Azure AD entirely; Foundry uses it as an **OAuth 2.0 provider** to issue short‑lived access tokens for every service call. Switching to another IdP is possible but adds at least one extra round‑trip for token issuance, which can become a bottleneck under heavy ML load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
