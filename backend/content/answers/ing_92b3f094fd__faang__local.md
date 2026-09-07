---
qid: ing_92b3f094fd__faang__local
question: 'Explain: Unified authorization service with a distributed systems architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 500
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:25:41-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *unified authorization service* that runs in a distributed environment—think of a micro‑service that all other services query for permission checks (e.g., RBAC/ABAC). Key assumptions: (1) high request volume, (2) low latency requirement (<10 ms), (3) strong consistency for policy updates, and (4) support for dynamic attributes (user, resource, context).

**Approach**  
1. **API gateway + cache layer** – expose a gRPC/REST endpoint; front‑end services hit the gateway.  
2. **Policy store** – immutable policy blobs in a replicated KV store (e.g., etcd or Consul) with versioning.  
3. **Evaluation engine** – stateless worker nodes that load the latest policy into memory and evaluate requests using a rule engine (Open Policy Agent).  
4. **Event‑driven cache invalidation** – publish‑subscribe on policy changes; workers refresh in <50 ms.

**Depth**  
- *Latency*: request → gateway → nearest worker = ~5–7 ms.  
- *Consistency*: use causal ordering of events; workers maintain a monotonically increasing revision number.  
- *Fault tolerance*: workers are stateless, so any node can serve requests; policy store is quorum‑replicated for durability.  
- *Security*: TLS everywhere, JWT signed tokens passed to gateway.

**Edge Cases**  
- Rapid successive policy updates may cause stale evaluations; mitigate with optimistic concurrency checks.  
- Network partitions could isolate a worker from the KV store—fallback to last‑known-good policy.  
- Very large policies (hundreds of KB) strain memory; shard policies by tenant.

**Optimize & Communicate**  
We can batch multiple authorization requests per worker to amortize evaluation cost, reducing CPU overhead. For scaling, add more workers behind a load balancer and use horizontal partitioning of the policy store. When explaining this design, emphasize the trade‑off between consistency (immediate revocation) and latency (caching), and how our event‑driven invalidation keeps that balance optimal for high‑throughput services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
