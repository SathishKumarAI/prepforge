---
qid: ing_5f34ff8187__star__local
question: 'Explain: Load Balancing — A Cheat Sheet for Designing Fault-Tolerant Systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 323
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:38:38-05:00'
sources: []
---

**Situation** – At my previous company we launched a real‑time recommendation engine that served millions of requests per day. Our latency SLA was 50 ms, but during traffic spikes the single inference node would hit CPU saturation and start dropping packets, causing a spike in error rates.

**Task** – I had to design a fault‑tolerant load‑balancing layer that kept latency under SLA while ensuring zero data loss and graceful degradation when nodes failed.

**Action** – First I instrumented each worker with Prometheus metrics (CPU, memory, request queue depth) and exposed them via a sidecar. Using Envoy as the ingress proxy, I configured weighted round‑robin routing based on those metrics, adding a health‑check filter that removed unhealthy pods from rotation automatically. For stateful inference we used gRPC streams with client‑side load balancing; each client cached a list of healthy nodes and performed exponential backoff on failures. Finally, I added a circuit‑breaker in the service mesh to stop sending traffic to a node once its error rate exceeded 5 %.

**Result** – After deployment, average latency dropped from 68 ms to 42 ms, while our error rate fell below 0.1 %. The system sustained 10× traffic growth without manual intervention, and I learned that coupling real‑time metrics with dynamic routing is key to building truly fault‑tolerant ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
