---
qid: ing_30da1eef0d__aws__local
question: 'Q80: What is the difference between error analysis and automated evals,
  and when should you prioritize each?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 387
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:15:45-05:00'
sources: []
---

**Answer (Amazon‑style)**  

*Leadership Principles:* **Ownership**, **Dive Deep**  
I took ownership of a model that scored 0.71 F1 on our internal benchmark but was underperforming in production.

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| Production drift after a new data pipeline | Determine why the drop happened | 1️⃣ **Error analysis** – manually inspected the top‑10 misclassified examples, mapped them to feature buckets (e.g., “short‑tail entities”), and built a confusion matrix in Athena. 2️⃣ **Automated evals** – set up nightly SageMaker pipelines that ran unit tests on 5 % of traffic, comparing metrics against baseline using CloudWatch dashboards. | 1️⃣ Identified a 12 % error spike in “short‑tail” entities → retrained with targeted data. 2️⃣ Automated evals cut rollback time from 3 h to <30 min and reduced production errors by **35 %** over the next month. |

**When to prioritize:**  
- **Error analysis** is first for *root‑cause discovery* when a metric drops or stakeholders flag anomalies. It gives human insight into specific failure modes that metrics alone can’t explain.  
- **Automated evals** are essential for *continuous monitoring* and *regression prevention*. They provide quick, repeatable checks with minimal manual effort.

I built the automated pipeline on SageMaker + CloudWatch → cost $0.02 per run, 99.9 % availability, and low latency (<2 min). This balance of deep dive and automation embodies Amazon’s focus on owning results while scaling efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
