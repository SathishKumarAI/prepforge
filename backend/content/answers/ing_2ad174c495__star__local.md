---
qid: ing_2ad174c495__star__local
question: What is load balancing?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 325
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:53:41-05:00'
sources: []
---

**Situation:**  
At my previous company we were deploying a real‑time fraud detection model for an e‑commerce platform. The inference service ran on Kubernetes, but during peak holiday traffic the API latency spiked from 120 ms to over 1 s and several requests timed out.

**Task:**  
I had to design a load‑balancing strategy that would keep latency under 200 ms even when traffic doubled, without adding too much operational overhead or cost.

**Action:**  
First, I instrumented the service with Prometheus to capture per‑pod request rates and response times. Using the data, I set up an NGINX ingress controller with a round‑robin algorithm and added a custom “least‑connection” module. Then I implemented autoscaling on the pod level: when CPU usage exceeded 70 % or queue depth > 10, new pods spun up automatically. Finally, I introduced a weighted load balancer that routed 30 % of traffic to a newer model version for A/B testing while keeping the rest on the stable one.

**Result:**  
After deployment, average latency dropped from 1.2 s to 140 ms under peak loads, and request error rate fell below 0.01 %. The autoscaler saved us ~15 % in compute costs during off‑peak hours. I learned that combining real‑time metrics with dynamic scaling is key to robust ML inference at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
