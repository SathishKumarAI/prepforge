---
qid: ing_51ad059e9e__aws__local
question: 'Explain: Tell me about an AI project that failed. Not one with a redemption
  arc - one that got killed.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 465
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:43-05:00'
sources: []
---

**Situation & Task (S)**  
At my last company we launched an internal AI‑assisted code review bot, “ReviewBot,” intended to catch bugs before merge. The goal was a 30 % reduction in post‑commit defects and a 20 % time‑to‑merge savings.

**Action (A)**  
I owned the end‑to‑end pipeline: data ingestion from GitHub PRs, feature extraction with BERT fine‑tuned on our codebase, inference via SageMaker endpoints, and results posted back to Slack. We provisioned a single `ml.m5.xlarge` endpoint and used S3 for raw logs, DynamoDB for metrics, and CloudWatch for monitoring.

**Result (R)**  
Within three weeks the bot was pulled because it returned **false positives on 78 % of PRs**, causing developers to ignore its suggestions. The false‑positive rate inflated merge times by 12 % instead of saving time. We measured an average defect catch rate of only 4 %, far below the target.

**Learning (L)**  
- **Ownership:** I took full responsibility for the mis‑aligned model and documented a rollback plan.  
- **Dive Deep:** Post‑mortem revealed that our fine‑tuning data was biased toward legacy code patterns; we hadn’t included recent language features, leading to poor generalization.  
- **Bias for Action & Deliver Results:** I proposed a phased re‑train with stratified sampling and an A/B test framework using SageMaker Experiments to validate before full rollout.  
- **Bar‑raiser cue:** The failure highlighted my willingness to admit scope creep, quantify impact (78 % FP), and iterate on data strategy—qualities the hiring panel looks for in a senior engineer.

**AWS Services Used**: GitHub Actions → S3 → SageMaker Training/Inference → DynamoDB → CloudWatch.  
**Trade‑offs**: Scaling out endpoints would have increased cost by 2× but could have mitigated overfitting; we chose to keep costs low, which ultimately contributed to the failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
