---
qid: ing_ea846b92b0__star__local
question: You're building a multi-tenant agent platform. Tenants bring their own MCP
  servers and their own data. What isolates them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 401
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:17:19-05:00'
sources: []
---

**Situation** – I was leading the launch of a SaaS‑based agent platform for a fintech consortium. Each tenant (five banks) supplied their own MCP servers and proprietary transaction logs, but we had to keep their data and workloads strictly separated while still sharing the core inference engine.

**Task** – Design an isolation architecture that met GDPR, PCI‑DSS, and internal audit requirements without crippling performance or increasing operational cost beyond 15 % of baseline.

**Action** – I implemented a two‑tier isolation model:  
1. **Runtime isolation** – each tenant’s agents ran in OCI‑compatible Docker containers orchestrated by Kubernetes with PodSecurityPolicies and dedicated namespaces. We used cgroups to limit CPU/memory, and network policies to block cross‑tenant traffic.  
2. **Data isolation** – all tenant data lived in separate PostgreSQL schemas encrypted at rest (AWS KMS). IAM roles were scoped per schema, and we added a lightweight sidecar that performed token‑based access control on every request. For high‑throughput inference, we deployed a shared GPU pool with NVIDIA Multi‑Process Service (MPS) to multiplex workloads while keeping each tenant’s context in separate CUDA contexts.

**Result** – We achieved zero data leakage incidents during the first year of production, reduced infra costs by 12 % through shared GPU pooling, and cut average query latency from 350 ms to 210 ms. The project also earned an ISO/IEC 27001 audit pass, and I learned that combining lightweight container policies with schema‑level encryption delivers both security and scalability in a multi‑tenant AI platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
