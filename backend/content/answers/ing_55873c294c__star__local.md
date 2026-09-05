---
qid: ing_55873c294c__star__local
question: 'Explain: Why geography affects latency — Understanding latency | ElevenLabs
  Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 345
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:18:58-05:00'
sources: []
---

**Situation:**  
When I was leading the rollout of a real‑time fraud detection microservice for a global payment processor, we noticed that customers in Asia were experiencing noticeably higher response times compared to those in North America, even though our data pipelines and model inference engines were identical.

**Task:**  
My job was to diagnose the root cause of the latency discrepancy and engineer a solution that would bring Asian users’ end‑to‑end latency below 150 ms while keeping cost under control.

**Action:**  
I started by mapping network hops from each region’s load balancer to our central inference cluster. Using traceroute and AWS CloudWatch VPC Flow Logs, I discovered an extra 12–15 km of physical distance plus a congested transit link through a third‑party ISP in the Asia route. To mitigate this, I deployed a secondary inference cluster in Singapore, set up a global load balancer with latency‑based routing, and introduced a small edge cache that stored pre‑computed feature vectors for the most frequent transactions. I also re‑architected our model to use ONNX Runtime on a GPU instance, cutting inference time by 35 %.

**Result:**  
After deployment, Asian user latency dropped from an average of 320 ms to 110 ms—an 65 % improvement—and we reduced overall compute spend by 12 %. I learned that geography can add hundreds of milliseconds through both physical distance and ISP bottlenecks, but a combination of edge caching, smarter routing, and lightweight model optimization can bring latency back into acceptable ranges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
