---
qid: ing_e62cfc5080__aws__local
question: Hosted fine-tuning APIs vs training it yourself - how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 422
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:58:31-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team building a recommendation engine for a subscription video platform that needed to adapt to user preferences in real time. We had to decide whether to use Amazon SageMaker’s hosted fine‑tuning API or build our own training pipeline.

**Action**  
1. **Customer Obsession & Ownership:** I gathered usage metrics—average 12 M daily sessions, 3 % churn target—and mapped them against model performance (AUC).  
2. **Dive Deep:** I benchmarked the hosted API: 4 h per fine‑tune, $0.75/hr on a `ml.p3dn.24xlarge`, and 99.9 % SLA. Our custom pipeline on Spot EC2 (`g5.12xlarge`) completed in 1.5 h at $0.15/hr but required 10 % more engineering effort (30 person‑days).  
3. **Bias for Action & Deliver Results:** I ran a cost‑benefit analysis: over 6 months, hosted fine‑tuning saved ~$18k in compute and reduced engineering hours by ~40%, enabling the team to focus on feature development that lowered churn by 1.2 % (from 7.8 % to 6.6 %).

**Result**  
We adopted SageMaker’s API, cutting infrastructure costs by 70 % and accelerating time‑to‑market. The model’s AUC improved from 0.82 to 0.88, directly contributing to a $4M incremental revenue lift in Q3.

*Bar‑raiser cues:* clear ownership, data‑driven trade‑off analysis, measurable impact, and lessons learned (e.g., balancing engineering effort vs. operational cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
