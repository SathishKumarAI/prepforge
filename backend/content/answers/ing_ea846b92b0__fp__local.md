---
qid: ing_ea846b92b0__fp__local
question: You're building a multi-tenant agent platform. Tenants bring their own MCP
  servers and their own data. What isolates them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 434
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:17:41-05:00'
sources: []
---

In a multi‑tenant agent platform the *only* thing that can break isolation is shared state that leaks between tenants.  
The fundamental problem therefore is to **decouple every observable resource** (compute, memory, storage, network, identity) so that each tenant’s MCP server sees a world identical to running in isolation.

| Layer | What must be isolated | Why it matters | Typical solution |
|-------|----------------------|----------------|------------------|
| **Process / VM / container** | CPU cycles, RAM, kernel state | A buggy agent can corrupt another’s memory or steal CPU time. | Run each tenant in a lightweight namespace (e.g., Docker with cgroups + user‑ns). |
| **File system** | Persistent data, logs, config | Storing on the same FS can expose secrets or allow race‑condition attacks. | Use per‑tenant encrypted volumes or cloud object stores with bucket‑level ACLs. |
| **Network** | IP space, ports, DNS | A misconfigured agent could sniff traffic of another tenant or hijack a port. | Virtual network overlays (e.g., VPC subnets) and sidecar proxies that enforce policy per tenant. |
| **Identity / auth tokens** | Credentials to external services | Tokens shared across tenants give cross‑tenant access. | Issue tenant‑scoped IAM roles, rotate secrets per tenant, use short‑lived JWTs. |

A non‑obvious insight: **data locality is a covert channel**. Even if two agents run in separate containers, the underlying storage engine can still expose patterns through shared caching or page replacement algorithms. Mitigate this by encrypting data at rest with tenant‑specific keys and using per‑tenant storage engines (e.g., separate Postgres instances or sharded tables with strict row‑level security).  

By enforcing isolation at each of these layers, the platform guarantees that a tenant’s MCP server and its data remain invisible to all others—exactly what multi‑tenancy demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
