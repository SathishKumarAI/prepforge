---
qid: ing_5955f593b5__aws__local
question: 'Explain: based load balancing and in the layer — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 496
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:47:51-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at a rideshare startup, we noticed that peak demand (e.g., 4 pm on weekends) caused >30 % request timeouts in our dispatch service. I owned the redesign of our **ML‑driven load balancer** to keep latency <200 ms and throughput ≥10k RPS.

**Action – Design & AWS Services**  
1. **Data Pipeline** – Collected real‑time telemetry (driver availability, ETA, traffic) via Amazon Kinesis Data Streams → Lambda → Amazon S3 for historical training data.  
2. **Model Training** – Trained a Gradient‑Boosted Tree model in SageMaker to predict *optimal* edge server per request based on geo‑location and current load. The model achieved 92 % accuracy on hold‑out tests.  
3. **Inference Layer** – Deployed the model as a SageMaker endpoint behind an Application Load Balancer (ALB) with **Target Group Stickiness** disabled; instead, the ALB forwards each request to the SageMaker endpoint, which returns the best edge node ID.  
4. **Routing** – The ALB then routes traffic via AWS Global Accelerator to the chosen edge (edge‑cached Lambda@Edge + DynamoDB for driver data).  
5. **Observability & Auto‑Scaling** – CloudWatch metrics trigger an Auto Scaling policy on the SageMaker endpoint (2–10 instances) and on the ALB listener rules.

**Result**  
- Latency dropped from 350 ms to **180 ms** during peak hours.  
- Request timeouts fell from 32 % to <3 %.  
- Cost increased by only **12 %** due to efficient scaling of SageMaker endpoints (pay‑as‑you‑go).  

**Reflection & Learning**  
I took *ownership* of the entire end‑to‑end flow, performed a deep dive into telemetry gaps, and iterated quickly (Bias for Action). The success reinforced that a data‑driven ML layer can replace static round‑robin balancers without sacrificing availability. I documented the trade‑offs (model drift vs. inference latency) so future teams could maintain this system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
