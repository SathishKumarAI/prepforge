---
qid: ing_0eac5bc1e9__aws__local
question: 'Explain: Human Error — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 384
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:58:51-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my last role I led a fraud‑detection ML pipeline that processed 5 M transactions/day. A single human‑reviewer error caused false positives that cost the business $120K/month in lost revenue.

**Action (Dive Deep + Bias for Action)**  
I introduced an *automated sanity check* layer: every model score was compared against a rule‑based baseline using **Amazon SageMaker Model Monitor**. If the deviation exceeded 2 σ, the transaction entered a “review queue” that automatically routed it to a second ML model (ensemble) and a human analyst only if both agreed. I also set up an **AWS Step Functions** workflow to audit each rejection, log the reviewer’s decision in **Amazon DynamoDB**, and trigger a **CloudWatch alarm** for any spikes in manual overrides.

**Result (Deliver Results + Quantified Impact)**  
Within 3 months we reduced false‑positive churn by 78% (from 12.4K to 2.8K per month), saving $90K/month. The automated queue cut human review time by 65%, freeing analysts for higher‑value tasks. Cost increased by only 5% due to SageMaker Inference and Step Functions, but the ROI was >18×.

**Bar‑raiser notes**  
- Ownership: I owned the end‑to‑end system redesign.  
- Dive Deep: I quantified error rates and modeled σ thresholds.  
- Learning from failure: The initial incident drove a culture of continuous monitoring and iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
