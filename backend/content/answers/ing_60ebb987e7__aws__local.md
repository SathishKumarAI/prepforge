---
qid: ing_60ebb987e7__aws__local
question: 'Explain: Judge-prompt drift detection — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 502
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:04:51-05:00'
sources: []
---

**Situation & Task**  
I led a team that built an AI‑powered content moderation platform for a global marketplace. Our models were fed by *judge prompts* (human‑annotated rules) that drifted over time as user behavior changed. We needed a CI/CD pipeline to detect prompt drift automatically, evaluate new versions in a gated environment, and deploy only when accuracy stayed above 99 % precision.

**Action – Design & Implementation**  
1. **Data Collection** – Used Amazon Kinesis Data Streams to ingest live moderation logs; stored raw features in Amazon S3 for batch analysis.  
2. **Drift Detection** – Built a Lambda‑driven microservice that runs every 6 hrs, calculating the Jensen–Shannon divergence between current prompt distribution and a baseline (stored as Parquet on S3). If divergence >0.05, it triggers an alert in Amazon CloudWatch and flags the build for review.  
3. **Eval Gated CI/CD** – Integrated with AWS CodePipeline: a *test* stage runs SageMaker batch transform jobs against a holdout set; results are pushed to an Athena query that computes precision/recall. If metrics meet thresholds, the pipeline moves to *staging*, where A/B tests on 1 % of traffic run via Amazon CloudFront and Lambda@Edge.  
4. **Governance** – All artifacts (prompts, logs, metrics) are versioned in AWS CodeCommit; approvals are required for any prompt change.

**Result**  
- Prompt drift alerts reduced manual review effort by **70 %** (from 5 hrs/week to <1 hr).  
- Accuracy degradation was caught within **3 days**, preventing a projected $2.4M loss in revenue from mis‑moderated listings.  
- The gated pipeline cut rollout time from 2 weeks to **48 hours** while maintaining a **99.2 % precision** record.

**Reflection**  
I learned that *ownership* means automating the entire feedback loop, and *dive deep* required me to quantify divergence thresholds rather than rely on intuition. The bar‑raiser will see my focus on measurable impact, systematic monitoring, and continuous learning from each deployment cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
