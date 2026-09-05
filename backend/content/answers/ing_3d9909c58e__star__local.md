---
qid: ing_3d9909c58e__star__local
question: 'Explain: Least bandwidth method — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 368
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:31:23-05:00'
sources: []
---

**Situation:**  
At my last job we ran a real‑time recommendation engine on a cluster of GPU servers. Every evening, an overnight data pipeline would push a 3 TB model update to the nodes. The previous round‑robin load balancer was causing one node to receive 70% of the traffic during peak hours, leading to 120 ms latency spikes and a 5% drop in click‑through rate.

**Task:**  
I had to design a smarter distribution strategy that would keep per‑node bandwidth usage within 30 % of each other while still honoring the request priority rules of our A/B testing framework.

**Action:**  
I implemented a “least‑bandwidth” load balancer. First, I instrumented each node with Prometheus metrics exposing real‑time outbound traffic and current queue depth. Using a lightweight Go service, I built an algorithm that continuously polls these metrics every 500 ms, calculates the running average bandwidth per node, and assigns new requests to the node with the lowest cumulative bandwidth so far. To avoid starvation of lower‑priority traffic, I added a weighted fairness layer that guarantees at least 10% of each node’s capacity goes to experimental flows. The service was deployed behind Envoy, which forwarded requests based on the balancer’s JSON response.

**Result:**  
After deployment, average per‑node bandwidth variance dropped from 70 % to 18 %, latency fell by 35 ms, and our click‑through rate improved by 3%. I learned that real‑time telemetry combined with a simple greedy algorithm can outperform complex static routing in dynamic workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
