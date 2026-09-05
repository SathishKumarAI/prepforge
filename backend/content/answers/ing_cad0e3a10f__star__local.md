---
qid: ing_cad0e3a10f__star__local
question: 'Explain: 14 System Design - Load Balancing Algorithms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 327
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:14:32-05:00'
sources: []
---

**Situation** – In my last role, we were deploying a real‑time recommendation engine that served millions of user requests per day. Our initial round‑robin load balancer caused hot spots on the GPU nodes during peak hours, leading to 12 % latency spikes and a 4 % drop in click‑through rate.

**Task** – I needed to design a more intelligent balancing strategy that could dynamically shift traffic based on node utilization and inference latency while keeping cost low.

**Action** – I introduced a weighted least‑connections algorithm combined with a lightweight health probe. Using Prometheus metrics, each node reported its current GPU queue length and average inference time every 5 seconds. The load balancer adjusted weights in real time, steering new requests to underutilized nodes. To avoid thrashing, I added hysteresis: weight changes only after sustained 30‑second trends. I also patched the Kubernetes Ingress controller with a custom Lua script to enforce the algorithm and logged all decisions for audit.

**Result** – After rollout, average latency dropped from 210 ms to 155 ms (26 % improvement), peak queue times fell by 45 %, and our recommendation engine’s CTR rose from 3.2 % to 3.6 %. I learned that coupling simple metrics with a feedback loop can turn a naive balancer into a performance‑driving component without adding infrastructure cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
