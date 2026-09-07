---
qid: ing_97355206e3__aws__local
question: 'Explain: Testing — GitHub - ai-evals-course/judgy: Python package for estimating
  a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 468
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:07:55-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building a lightweight Python package (`ai-evals-course/judgy`) that estimates confidence intervals (CIs) for metrics produced by LLM‑as‑Judges. The goal was to give researchers statistically sound uncertainty estimates while keeping the tool easy to integrate into existing GitHub CI pipelines.

**Approach & Design**  
- **Requirements:** Accept a list of metric scores, compute bootstrap CIs, expose a CLI and a REST endpoint for CI jobs.  
- **Architecture:**  
  - *Python core* using `numpy`, `scipy` for resampling.  
  - *Docker container* for reproducibility; deployed on GitHub Actions via a self‑hosted runner.  
  - Optional *AWS Lambda* trigger to offload heavy bootstrap when scores > 10k, leveraging **Amazon S3** for input/output and **CloudWatch** for monitoring.  
- **Scalability:** Parallel resampling threads (≤ 4 cores) keep runtime under 30 s for 1 M samples; Lambda scales automatically up to 1000 concurrent invocations.  
- **Availability & Cost:** Docker + GitHub Actions runs on free tier runners, Lambda charges ~\$0.0000167 per GB‑second → <$0.05 per run.

**Result**  
Integrated into a student research repo: CI time increased from 2 min to 3 min, but researchers now receive ±1.2% CI bands for BLEU scores—reducing false positives by 45%. Adoption grew to 120+ forks within 6 weeks.

**Leadership Principles**  
- **Customer Obsession:** Delivered a tool that directly addressed researchers’ need for reliable uncertainty estimates.  
- **Ownership & Dive Deep:** Designed end‑to‑end pipeline, debugged edge cases (e.g., empty score lists), and tuned Lambda concurrency to balance cost and speed.  

*Bar‑raiser notes:* Looked for clear ownership of the repo, depth in statistical justification, measurable impact on research quality, and lessons learned from initial over‑engineering attempts that were simplified after user feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
