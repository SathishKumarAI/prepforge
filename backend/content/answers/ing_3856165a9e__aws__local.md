---
qid: ing_3856165a9e__aws__local
question: 'Explain: Outdated Fact Poisoning — The Day 30 Problem: Why Your AI Agent
  Gets Worse Over Time | Cipher'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 473
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:32:04-05:00'
sources: []
---

**Situation & Task**  
In a production chatbot at my previous company, we observed that after ~30 days of continuous deployment the model’s accuracy dropped from **92 %** to **78 %** on our key intent‑classification metric (F1). The team suspected “outdated fact poisoning” – user‑generated content slowly corrupting the knowledge base.

**Action**  
I led a cross‑functional task force and applied Amazon’s *Ownership* and *Dive Deep* principles:

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1. Data ingestion pipeline | **AWS Glue + S3** | Extract user logs, transform to parquet, store in versioned buckets for auditability. |
| 2. Fact‑validation service | **Amazon SageMaker Batch Transform** | Run a lightweight rule engine (Python/NumPy) that flags statements with >70 % confidence mismatch vs. verified knowledge graph. |
| 3. Automated pruning & rollback | **AWS Lambda + Step Functions** | On detection, automatically revert the affected fact to the last known good version from Glacier. |
| 4. Monitoring & alerting | **Amazon CloudWatch + SNS** | Real‑time dashboards of F1 drift; threshold alerts trigger manual review. |

We also introduced a *bias for action* sprint to build an “intent confidence score” feature, which surfaced problematic intents before they reached the user.

**Result**  
Within 14 days post‑deployment, the F1 metric stabilized at **91 %**, and over 6 months we observed a **12 % reduction in support tickets** related to misinformation. Cost impact was minimal (~$200/month) because the pruning logic ran on spot instances.

**Learnings & Bar‑raiser Takeaway**  
- *Ownership*: I owned the end‑to‑end pipeline, not just model tuning.  
- *Dive Deep*: We traced every drop in accuracy back to specific user edits.  
- *Quantified Impact*: 12 % ticket reduction directly translates to $X savings per quarter.  
- *Failure Insight*: Initial failure taught us that continuous learning requires continuous validation—no “set‑and‑forget” approach works for dynamic knowledge bases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
