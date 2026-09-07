---
qid: ing_d13d3f943b__faang__local
question: 'Explain: 4.5 Graceful Degradation — Single Point of Failure (SPOF) | System
  Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 441
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:47:12-05:00'
sources: []
---

**Clarify**  
We’re asked how a system can avoid a single point of failure (SPOF) while still providing graceful degradation when one component fails. Assume we have a web‑scale service with stateless workers, a shared datastore, and a load balancer.

**Approach**  
1. Identify critical components that could become SPOFs.  
2. Replicate or distribute each across zones/regions.  
3. Use health‑checks to detect failure.  
4. Route traffic through a circuit breaker or failover path.  
5. Provide degraded functionality (e.g., read‑only mode) instead of total outage.

**Depth**  
- **Stateless Workers**: Run many instances behind an elastic load balancer; no single machine holds state.  
- **Datastore**: Use a multi‑region active‑active database (e.g., Cassandra, DynamoDB) with automatic replication and read/write consistency controls.  
- **Circuit Breaker**: If a backend fails > 3 consecutive times, the breaker opens for 30 s, routing requests to a backup service or serving cached data.  
- **Graceful Degradation**: When the primary datastore is unreachable, fall back to a read‑only replica and return “service unavailable” only for write operations.  

Complexity: O(1) request latency; cost increases with redundancy but amortizes over traffic.

**Edge Cases**  
- Network partition between regions → split‑brain; mitigate with quorum reads/writes.  
- Cached data stale after failover → versioning or TTLs.  
- Backup service lagging behind primary → sync lag metrics to trigger alerts.

**Optimize & Communicate**  
Start with a single region, add a second region for high availability, then introduce multi‑region DB and circuit breakers. Explain the trade‑off: higher cost vs. 99.999% uptime. Highlight that graceful degradation keeps core features alive while notifying users of reduced capacity—critical for user trust in FAANG products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
