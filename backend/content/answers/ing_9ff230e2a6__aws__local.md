---
qid: ing_9ff230e2a6__aws__local
question: 'Explain: You RL-trained an agent against a mocked environment, held-out
  reward improved, and the gains did not show up in production. Diagnose it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 476
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:21-05:00'
sources: []
---

**Situation (S)**  
I was leading a team to deploy a reinforcement‑learning agent for dynamic pricing on our marketplace. After training against a high‑fidelity mock environment, the held‑out reward curve improved from **0.42 → 0.58** (≈ 38% lift). Yet once we rolled it into production, key KPIs—average order value and conversion rate—fell by **3%** over the first week.

**Task (T)**  
Diagnose why the simulation gains didn’t translate to real‑world performance while keeping uptime >99.9% and cost <$5k/month on AWS.

**Action (A)**  
1. **Dive Deep into Data Drift** – Compared feature distributions between mock data (S3 + Athena) and live traffic; found a 25 % shift in buyer segment demographics.  
2. **Re‑train with Domain Randomization** – Augmented the simulator to cover edge cases observed in production, retraining on EC2 Spot + SageMaker Pipelines.  
3. **A/B Test on CloudWatch Metrics** – Deployed two variants; used Kinesis Data Streams for real‑time telemetry and Lambda for automated rollback if MAPE > 5%.  
4. **Cost & Availability Tuning** – Switched to Fargate Spot for inference, leveraged Auto Scaling with CloudFront caching; projected savings of 30% while maintaining 99.95% latency SLA.

**Result (R)**  
Post‑deployment, average order value rose by **7%**, conversion rate improved by **4%**, and the new model reduced inference cost to **$3.8k/month**—meeting our SLAs and exceeding the original reward target.

---

### Bar‑raiser Checklist
- **Ownership:** Took full responsibility for data pipeline, retraining, and monitoring.  
- **Dive Deep:** Quantified feature drift, MAPE thresholds, and cost impact.  
- **Quantified Impact:** 7% lift in AOV & 4% conversion rise; $1.2k/month savings.  
- **Learning from Failure:** Documented drift analysis to inform future simulator design, reducing recurrence risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
