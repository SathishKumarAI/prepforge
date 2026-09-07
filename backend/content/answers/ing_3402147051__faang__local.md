---
qid: ing_3402147051__faang__local
question: What is load balancing? — Grokking-System-Design-Interview-Quizzes/Quizzes/Load
  Balancer.org at master \u00b7 ema2159/Grokking-System-Design-Interview-Quizzes \u00b7
  GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 276
output_tokens: 403
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:45:19-05:00'
sources: []
---

**Clarify**  
You’re asking about *load balancing* in the context of distributed systems or ML serving: distributing incoming inference requests across multiple model replicas so no single node is overwhelmed.

**Approach**  
1. Identify traffic patterns (request rate, latency goals).  
2. Choose a balancing strategy (round‑robin, least‑connections, weighted).  
3. Implement health checks to avoid sending traffic to unhealthy nodes.  
4. Add caching or request coalescing for duplicate inputs if needed.

**Depth**  
- **Round‑Robin**: simple, O(1) per request, but ignores node load.  
- **Least‑Connections / Weighted Round‑Robin**: better CPU/memory balance; requires state (connection count).  
- **Consistent Hashing**: keeps requests to the same model instance for cache locality, useful when models are large or have in‑memory state.  
- **Health Checks**: periodic pings/metrics; failover to healthy nodes; circuit breaker patterns prevent cascading failures.  
Complexity: O(1)–O(log N) per request depending on data structure (e.g., priority queue for least‑connections). Trade‑offs involve memory overhead vs latency.

**Edge Cases**  
- Sudden traffic spikes → auto‑scale or temporary throttling.  
- Node failure during inference → retry with exponential backoff.  
- Data skew: some inputs are hot; request coalescing avoids duplicate work.

**Optimize & Communicate**  
Explain that for ML workloads, we often combine a *load balancer* (e.g., Envoy) with *model‑specific optimizers*: batching similar requests, using GPU affinity, and serving via TensorRT. Highlight monitoring dashboards to catch imbalance early. Conclude by stressing that the goal is *high availability + low latency*, not just raw throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
