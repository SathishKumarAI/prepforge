---
qid: ing_dce6d1e72e__faang__local
question: 'Explain: Summary — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 502
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:12:11-05:00'
sources: []
---

**Clarify**  
We’re asked how “availability” is defined in an AI‑centric system design interview and what trade‑offs we’d consider when engineering for it.  
Key assumptions: the system exposes ML inference services to external clients; latency is bounded (e.g., <200 ms); traffic patterns are bursty, and failures can be transient or cascading.

**Approach**  
1. Define availability formally (Uptime = 1–MTTR/MTBF).  
2. Map it to the 3‑pillars of reliability: *availability*, *performance*, *correctness*.  
3. Enumerate architectural levers—replication, load balancing, graceful degradation, circuit breakers, observability.

**Depth**  
- **Replication & partitioning**: Multi‑AZ stateless inference nodes; use a distributed cache (e.g., Redis) for model weights to avoid cold starts.  
- **Load balancer health checks**: 5xx vs 4xx thresholds; back‑off strategy.  
- **Circuit breaker pattern**: If a node’s latency > threshold, route traffic elsewhere; open state persists until health check passes.  
- **Graceful degradation**: Serve cached predictions or lower‑fidelity models when primary nodes are down.  
- **Observability**: Prometheus metrics for request counts, error rates, latency percentiles; alert on SLA breaches.

Complexity: O(log N) lookup in a distributed cache; replication overhead ≈ O(k) where *k* is replicas. Trade‑off between consistency (strong vs eventual) and availability per CAP theorem.

**Edge Cases**  
- Sudden spike exceeding capacity → auto‑scale but risk of cold start latency.  
- Network partition isolating an AZ → fallback to secondary AZ, possible data inconsistency.  
- Model drift: cached predictions stale; need scheduled refresh without affecting uptime.

**Optimize & Communicate**  
Explain that we’d start with a baseline 99.9 % SLA, then iteratively add circuit breakers and graceful degradation to bump toward 99.99 %. Quantify impact by simulating MTTR reductions after each layer. Conclude with a trade‑off chart: added components (replicas, caches) vs cost and complexity, ensuring interviewers see clear reasoning and prioritization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
