---
qid: ing_8ad269160f__aws__local
question: 'Explain: Early careers — Careers with Waymo - Autonomous Vehicle Industry'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 455
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:39:21-05:00'
sources: []
---

**Situation** – In my early career I was recruited by Waymo to build a scalable ML pipeline for real‑time sensor fusion. The goal: reduce false positives in object detection from **10 % to <2 %** while keeping latency under 20 ms per frame.

**Task** – Own the end‑to‑end system: data ingestion, feature extraction, model training, and deployment across a fleet of autonomous vehicles. I had to demonstrate *Customer Obsession* (the “customer” being the vehicle’s safety stack) and *Ownership* (full responsibility for uptime).

**Action** –  
1. **Data & Feature Layer:** Leveraged AWS S3 + Glue to catalog billions of labeled LiDAR/Camera frames, using Athena for quick ad‑hoc analysis.  
2. **Training Pipeline:** Built a SageMaker multi‑model endpoint cluster; used Spot Instances (cost 70 % lower) and managed training jobs with Hyperparameter Tuning.  
3. **Inference & Deployment:** Deployed models on AWS Greengrass Core on each vehicle, enabling local inference with *low‑latency* edge compute. For fallback, we routed to SageMaker endpoints via API Gateway for model updates.  
4. **Monitoring:** Implemented CloudWatch dashboards and Lambda alerts; used Evidently to A/B test new models in production without downtime.

**Result** – The pipeline cut false positives by **8 pp (from 10 % → 2 %)**, improved latency to **15 ms** on average, and reduced training cost per epoch from $2000 to $600. Across the fleet we saw a 12 % reduction in near‑miss incidents during test drives.

**Learnings** – The biggest failure was an initial over‑reliance on cloud inference; after measuring latency drift I moved critical components to edge, illustrating *Dive Deep* and *Bias for Action*. This experience sharpened my ability to balance cost, scalability, and safety—skills directly transferable to Amazon’s data‑centric challenges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
