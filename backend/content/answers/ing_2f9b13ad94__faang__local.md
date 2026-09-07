---
qid: ing_2f9b13ad94__faang__local
question: 'Explain: You pick one replica. Um, you got — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 427
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:34:22-05:00'
sources: []
---

**Clarify**  
The interviewer is asking how you would pick *one* node (replica) from a set of replicated services when you need to perform an operation that requires strong consistency or low latency. We assume the replicas are synchronous, each holds the same data, and we have a failure‑detected cluster of N nodes.

**Approach**  
1. **Define selection criteria** – proximity (latency), health status, load, or deterministic hashing.  
2. **Collect metrics** – use a lightweight heartbeat/health API to know which replicas are up.  
3. **Choose deterministically** – e.g., pick the replica with the lowest round‑trip time among healthy nodes; fall back to round‑robin if all equal.  

**Depth**  
- Use *Consistent Hashing* or *gRPC balancer* to map request IDs to replicas, ensuring even distribution and minimal churn when nodes join/leave.  
- Complexity: O(log N) for a balanced tree lookup; constant time with pre‑cached metrics.  
- Trade‑off: Picking the fastest node improves latency but can lead to hot‑spots; adding load balancing mitigates this.

**Edge Cases**  
- All replicas down → return error or retry after back‑off.  
- Latency spikes → stale metric may mislead selection; use exponential moving average.  
- Network partitions → ensure that chosen replica is reachable from client’s region.

**Optimize & Communicate**  
Explain how the deterministic picker reduces cache misses and improves observability: each request follows a predictable path, making debugging easier. Highlight potential improvements such as adaptive weighting based on real‑time throughput or using a “primary” replica for writes while reads go to any healthy node. Conclude by stressing that the goal is *predictable*, *low‑latency* selection with graceful degradation when replicas fail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
