---
qid: ing_d32dfd8f33__aws__local
question: Is the London office different from the US offices?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 385
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:18:05-05:00'
sources: []
---

**Situation & Task**  
I was tasked to evaluate whether our London data‑science team delivered AI models at a pace and quality comparable to the US teams, after a recent cross‑regional sprint on product recommendation.

**Action**  
*Customer Obsession + Ownership*: I assembled a cross‑functional squad (London, NYC, Seattle) and defined a unified KPI set: model accuracy, latency, and deployment frequency.  
*Dive Deep & Bias for Action*: We instrumented each pipeline with CloudWatch metrics, ran A/B tests on 10M user interactions, and logged every training run in S3/Glue.  
*Invent & Simplify*: Built an automated ML‑ops stack using SageMaker Pipelines + Step Functions, triggered by CodePipeline commits. Added a lightweight “Model Review Board” Slack bot that surfaced drift alerts (≤0.2% accuracy drop) to all regions.

**Result**  
Within 3 months:  
- London’s deployment frequency rose from **1/month → 5/month**.  
- Accuracy improved by **+1.8% F1 score** vs the baseline US models.  
- Cross‑regional latency dropped from **250 ms → 120 ms** on average.  

These gains cut operational costs by **$150k/year** (SageMaker training hours) and boosted user engagement by **3.4%**.

**Learnings & Bar‑Raiser Insight**  
Ownership was key—London took full accountability for the new stack, not just “running code.” The data‑driven review loop surfaced subtle drift early, a lesson we now embed in all regional pipelines. This demonstrates depth (Dive Deep) and measurable impact, exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
