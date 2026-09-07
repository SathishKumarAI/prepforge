---
qid: ing_f07101f12b__aws__local
question: 'Explain: Training — How does ChatGPT work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 519
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:20:41-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the rollout of an internal generative‑AI chatbot for a global customer‑support org. The goal was to reduce first‑contact resolution time by 30 % while keeping latency under 200 ms.

**Action**  
I owned the end‑to‑end pipeline:  

1. **Data ingestion & preprocessing** – crawled 2 M support tickets, used Glue for schema‑agnostic ETL, and stored clean text in S3 (≈50 TB).  
2. **Model training** – leveraged SageMaker Pipelines with a custom transformer architecture (12 B params) fine‑tuned on our domain data. Training ran on 8 ml.p3dn.24xlarge instances for 48 h, costing ~$15k. I used mixed‑precision and model checkpointing to cut GPU hours by 25 %.  
3. **Serving** – deployed the model as a SageMaker endpoint behind an Application Load Balancer, auto‑scaling from 2 to 20 containers (ml.m5.large). I enabled *real‑time inference* with a target latency of <200 ms and set up CloudWatch alarms for 99.9 % availability.  
4. **Monitoring & retraining** – integrated SageMaker Model Monitor to flag drift; automated retrain triggers every 30 days.

**Result**  
Within three months, first‑contact resolution rose from 58 % to 78 % (≈20 pp lift), and average handling time dropped by 32 %. Cost per inference fell to <$0.002 after the initial investment, keeping the solution below the $2M budget target.

---

### Leadership Principles  
- **Ownership** – I steered the full ML lifecycle from data to deployment, owning both technical and business outcomes.  
- **Dive Deep** – By dissecting every component (data quality, training efficiency, latency), I identified bottlenecks and optimized costs.  

### Bar‑raiser Signals  
- Quantified impact (30 % resolution lift, $15k training cost).  
- Demonstrated depth in model design and infrastructure trade‑offs.  
- Reflected on a failed pilot where latency hit 350 ms; learned to enforce stricter SLA gates before full rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
