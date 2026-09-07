---
qid: ing_11a40eec86__aws__local
question: 'Explain: It did a lot better job at — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 461
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:05:25-05:00'
sources: []
---

**Situation / Task**  
When I joined the *YouTube‑Scalability* team at a Seattle conference, the product was experiencing 70 % latency spikes during peak upload times. The goal: build an ML‑driven auto‑scaling pipeline that could predict load and pre‑warm resources while keeping cost under $1M/month.

**Action**  
- **Ownership & Dive Deep:** I mapped every metric (upload size, user region, time‑of‑day) from CloudWatch into a data lake on S3.  
- **Design:** Trained a gradient‑boosted model in SageMaker (using 10 GB of historical traffic). The inference endpoint was placed behind an Application Load Balancer with target groups for EC2 Auto Scaling and Fargate.  
- **AWS Services & Trade‑offs:**  
  - *SageMaker* – low latency, easy hyper‑parameter tuning.  
  - *Lambda* – orchestrates model loading; cost‑effective for bursty traffic.  
  - *Elastic Container Service (ECS)* – runs the transcoding workers; auto‑scales on model predictions.  
  - *CloudFront & S3* – deliver cached content with minimal origin hits.  
- **Bias for Action:** Deployed in a blue/green fashion, rolled out to 10 % of traffic first.

**Result**  
- Latency dropped from 2.5 s to **0.8 s** during peak hours (‑68 %).  
- Peak resource utilization increased by **35 %**, reducing the need for over‑provisioning.  
- Monthly cost fell from $1.3M to **$0.95M**—a **27 %** savings.

**Reflection**  
The first model under‑predicted a sudden 15 % traffic spike; I added an anomaly detection layer and re‑trained with newer data, improving prediction accuracy by 12 %. This iteration demonstrates my commitment to continuous learning and delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
