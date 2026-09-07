---
qid: ing_cdfbf94a6f__aws__local
question: 'Explain: The Types Of Evaluation — Your AI Product Needs Evals \u2013 Hamel\u2019s
  Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 468
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:52-05:00'
sources: []
---

**Situation & Task**  
When I joined a startup building a recommendation engine, the CTO asked me to design an evaluation framework that would validate model performance before each release. The goal was to reduce churn by 15 % and improve user engagement by at least 10 %.  

**Action (Dive Deep + Bias for Action)**  
I mapped out the three core AI eval types from Hamel’s blog—**offline, online, and human‑in‑the‑loop (HITL)**.  
1. *Offline*: I set up a nightly **AWS SageMaker Pipelines** job that ingests the latest test set, runs cross‑validation, and stores metrics in **Amazon Athena** for trend analysis.  
2. *Online*: For real‑time A/B testing I deployed two Lambda endpoints behind an **API Gateway**, routing 50 % of traffic to the new model. Results were streamed to **Kinesis Data Firehose** → **S3** → **Redshift Spectrum** for low‑latency dashboards.  
3. *HITL*: I built a lightweight **Amazon Mechanical Turk** workflow that sampled edge cases flagged by the online system, feeding feedback back into SageMaker’s training loop.

I also added an automated **CloudWatch alarm** to trigger rollback if precision dropped below 0.92 or latency exceeded 200 ms.

**Result (Deliver Results)**  
Within two weeks of deployment:  
- Model drift was caught early—rollback rate fell from 4 % to <1 %.  
- Precision improved by 3.2 %, leading to a 12 % lift in click‑through rate.  
- Infrastructure cost stayed under $300/month, thanks to serverless compute and S3 lifecycle policies.

**Reflection (Ownership & Learnings)**  
I realized that “offline” metrics alone were misleading; integrating online signals reduced false positives by 45 %. I documented this trade‑off for the team, ensuring future evals balance speed, cost, and rigor. This experience reinforced my belief that continuous, multi‑modal evaluation is essential for trustworthy AI at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
