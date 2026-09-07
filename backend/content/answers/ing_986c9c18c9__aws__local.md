---
qid: ing_986c9c18c9__aws__local
question: 'Explain: So we tried moving to the multi-process — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 461
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:10:18-05:00'
sources: []
---

**Situation (S)**  
At our recommendation‑engine team we were processing ~5 M inference requests per day on a single‑node GPU cluster. Latency spiked to 350 ms during peak hours and the node’s memory hit 90 % utilization, causing 3 % of traffic to time out.

**Task (T)**  
Design a scalable architecture that cuts latency by ≥30 % while keeping cost < 15 % of the existing GPU spend.

**Action (A)**  
* **Ownership & Bias for Action** – I proposed moving from single‑process inference to a *multi‑process, containerized microservice* model.  
  * Deployed each inference worker as an AWS Fargate task with **ECS** and attached an **Elastic Inference GPU** (e.g., G5.xlarge).  
  * Added a **SQS queue** for request batching and an **Application Load Balancer** to fan‑out traffic across the workers.  
  * Integrated **Amazon CloudWatch** metrics and **X-Ray** tracing to monitor per‑worker latency and error rates.  
* **Dive Deep** – I benchmarked batch sizes (1–32) and found optimal throughput at a batch size of 16, reducing GPU idle time from 25 % to 8 %.  
* **Deliver Results** – After rollout:  
  * Median inference latency dropped from 350 ms to **210 ms** (≈40 % improvement).  
  * CPU/GPU utilization balanced at ~70 %, eliminating the 3 % timeout rate.  
  * Total inference cost decreased by **12 %** due to more efficient GPU usage.

**Result (R)**  
The new multi‑process architecture not only met our latency and cost targets but also provided a robust, autoscaling foundation for future model iterations. I documented the failure modes observed during the single‑node run, turning them into a best‑practice guide that reduced onboarding time for new ML teams by 25 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
