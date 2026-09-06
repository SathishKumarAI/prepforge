---
qid: ing_d9d89c6764__fp__local
question: Why Not One Vector DB Per Tenant? — Multi Tenant Saas
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 405
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:42:49-05:00'
sources: []
---

**Why a Single Vector Store Per Tenant is a Bad Idea**

At its core, a SaaS vector service must satisfy three constraints: *security*, *performance* and *cost predictability*.  
1. **Isolation (Security & Compliance)** – Every tenant’s embeddings are high‑value data; a single store forces all tenants to share the same table or keyspace. A mis‑scoped query, a privilege escalation or even a benign bug can leak another customer’s vectors. Multi‑tenant isolation is only guaranteed if each tenant owns its own namespace (or database), which eliminates cross‑tenant contamination at the storage layer.

2. **Workload Separation (Performance)** – Vector similarity search is a *compute‑bound* operation that scales with query cardinality and index size. If one tenant launches millions of concurrent queries, it will starve others regardless of any throttling logic. Partitioning by tenant lets each service instance tune cache sizes, thread pools and memory usage to its own workload profile, guaranteeing predictable latency.

3. **Billing & Capacity Planning (Cost)** – Usage is billed per vector stored and per query executed. A shared store obscures the true resource consumption of a tenant; the provider cannot accurately forecast storage growth or allocate hardware without knowing each tenant’s exact footprint. Independent stores give a clear cost‑per‑tenant metric, enabling fine‑grained pricing tiers.

**Non‑obvious Insight:**  
Most people overlook that *vector indexes are not just data structures—they are mutable, in‑memory representations of the underlying vectors*. When tenants share an index, any write by one tenant invalidates or forces a rebuild for all others, breaking consistency guarantees. By giving each tenant its own index, you preserve linear‑time updates and avoid global re‑indexing, which is essential for real‑time SaaS workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
