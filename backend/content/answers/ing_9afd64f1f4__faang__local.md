---
qid: ing_9afd64f1f4__faang__local
question: 'Explain: Graceful Degradation — A Cheat Sheet for Designing Fault-Tolerant
  Systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 582
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:44:46-05:00'
sources: []
---

**Graceful Degradation – A Cheat‑Sheet for Fault‑Tolerant ML Systems**

| Step | What to Do | Why It Matters |
|------|------------|----------------|
| **Clarify** | • Restate: *“Design an ML service that keeps useful outputs even when parts fail.”* <br>• Confirm assumptions: latency targets, data consistency needs, acceptable error rates, monitoring stack, team expertise. | Sets scope; prevents chasing the wrong constraints. |
| **Approach** | 1. **Identify critical assets** (model weights, feature store, inference API). <br>2. **Define fallback tiers** – e.g., cached predictions → default rules → degraded model. <br>3. **Implement health checks & circuit breakers** per tier. <br>4. **Build observability**: logs, metrics, alerts on tier switches. | Gives a roadmap; shows you’re thinking in layers. |
| **Depth** | • *Model fallback*: Keep a lightweight “fallback” model (e.g., logistic regression) that runs locally if GPU cluster is down. <br>• *Feature store resilience*: Cache recent feature vectors in Redis; fall back to stale data or defaults when DB fails. <br>• *Circuit breaker logic*: Open after 5 consecutive errors, stay open for 30 s, then half‑open. <br>• *Latency trade‑off*: Fallback model may increase error rate by ≤3% but cuts latency from 200 ms → 50 ms. | Shows concrete implementation details; complexity is O(1) per request with minimal overhead. |
| **Edge Cases** | • **Data drift in fallback**: Monitor accuracy drop and trigger retraining. <br>• **Partial failures** (e.g., only a shard of feature store): Route to healthy shards or use replication lag. <br>• **Security gaps**: Ensure cached data is encrypted; fallbacks don’t leak sensitive info. | Highlights robustness beyond “happy path.” |
| **Optimize & Communicate** | • *Batch inference*: When fallback tier is hit, batch requests to reduce cost. <br>• *Dynamic tier selection*: Use real‑time metrics (CPU, memory) to decide which model to serve. <br>• *Narrative*: “When the GPU cluster goes down, we automatically switch to a CPU‑friendly logistic regression that still gives 97% of the original accuracy while keeping latency under 50 ms.” | Demonstrates continuous improvement mindset and clear stakeholder messaging. |

**Key Takeaway:** Build modular tiers with health checks, keep lightweight fallbacks ready, monitor performance drift, and communicate changes transparently—this is graceful degradation in practice for ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
