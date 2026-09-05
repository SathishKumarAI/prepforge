---
qid: ing_9d2c111865__star__local
question: 'Explain: Share traffic between endpoints — An Introduction to DNS Traffic
  Management - Shopify'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 358
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:46:28-05:00'
sources: []
---

**Situation:**  
At Shopify I was on the CDN team tasked with reducing latency for merchants in Asia while keeping costs under control. Our global DNS pool had 12 edge endpoints, but traffic was heavily skewed to a few due to default round‑robin routing.

**Task:**  
Rebalance DNS traffic so that each endpoint received an optimal share of queries (≈8 % each) without exceeding the budget for additional health‑check probes and without disrupting live merchant sessions.

**Action:**  
I built a dynamic Route 53 weighted‑routing policy. First, I added latency‑based routing to prefer endpoints with sub‑100 ms RTTs from key regions. Then, I introduced “traffic shaping” by assigning weights that changed hourly based on real‑time metrics from CloudWatch (CPU load, cache hit rate). I scripted health checks every 30 seconds and used a failover rule that rerouted 5 % of traffic to the next best endpoint if an instance’s CPU exceeded 80 %. Finally, I set up a small Lambda layer to pull the latest weight matrix from DynamoDB and update Route 53 in real time.

**Result:**  
Within two weeks we achieved a 12 % reduction in average page load time for Asian merchants and cut CDN bandwidth costs by ~9 %. The exercise taught me how weighted DNS, latency routing, and automated health checks can be orchestrated to balance performance with operational cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
