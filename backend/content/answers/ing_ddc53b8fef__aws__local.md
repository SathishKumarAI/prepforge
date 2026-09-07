---
qid: ing_ddc53b8fef__aws__local
question: 'Explain: Support — GitHub - ai-evals-course/judgy: Python package for estimating
  a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 437
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:40:40-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** I was asked to evaluate the reliability of a new “LLM‑as‑Judge” model that ranks text generations for an internal product.  
> **Task:** Build a reusable Python package that computes confidence intervals (CIs) around any metric produced by the LLM, so stakeholders could trust the scores and make data‑driven decisions.  
> **Action:** I designed *judgy* as a lightweight library with a clear API (`compute_ci(metric_values, ci=0.95)`), using bootstrapping and normal‑approximation for speed. I wrapped it in a Docker image that pulls the LLM model from S3, runs inference on GPU instances (p4d.xlarge) managed by ECS Fargate, and stores results in DynamoDB for auditability.  
> **Result:** The package reduced evaluation turnaround time from 8 hrs to <30 min per dataset, enabling weekly release cycles. Confidence intervals were tighter than the baseline (±0.04 vs ±0.09 RMSE), giving product managers a 40 % higher confidence in ranking decisions.  

**Dive Deep & Deliver Results**

I profiled memory usage and discovered that caching intermediate logits cut GPU memory by 35 %, allowing us to run on cheaper g5.xlarge instances, saving ~30 % of compute cost per batch. I also added unit tests covering edge cases (NaNs, empty lists) and CI/CD with GitHub Actions, ensuring zero regressions.

**Bar‑raiser Takeaway**

- **Ownership:** Delivered a full end‑to‑end solution that stakeholders adopted immediately.  
- **Depth:** Deeply understood statistical methods, cloud architecture, and cost trade‑offs.  
- **Quantified Impact:** Faster evaluation, tighter CIs, significant cost savings.  
- **Learning from Failure:** Early attempts over‑fitted on small samples; pivoted to bootstrapping once I saw high variance in CI widths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
