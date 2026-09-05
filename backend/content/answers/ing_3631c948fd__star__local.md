---
qid: ing_3631c948fd__star__local
question: 'Explain: 🧪 QA Engineer → AI Eval Engineer — Transition Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 313
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:39-05:00'
sources: []
---

**Situation:**  
During my third year as a QA engineer at a fintech firm, we launched a new fraud‑detection model that was supposed to reduce false positives by 30%. Yet the production KPI lagged behind, and our manual test scripts were hitting the same error patterns over and over.

**Task:**  
I was tasked with turning this into a systematic AI evaluation workflow: design metrics, automate data pipelines, and provide actionable feedback to the ML team so that we could iterate quickly without compromising compliance.

**Action:**  
First, I mapped out the model’s decision space and built a lightweight inference sandbox in Python using FastAPI. I wrote unit tests for every pre‑processing step and used hypothesis testing to generate synthetic edge cases. For metrics, I introduced precision‑recall curves per transaction type and set up an A/B test harness with SQL Server Integration Services to pull live data from our staging environment. Finally, I created a CI/CD pipeline in GitHub Actions that ran the full evaluation suite on each model checkpoint and pushed results to a Grafana dashboard.

**Result:**  
The new AI Eval process cut evaluation time from 3 days to 6 hours, reduced false positives by 38% within two sprints, and lowered the mean time to detect drift from weeks to days. I learned that blending QA rigor with ML‑specific tooling can turn a data‑driven model into a production‑ready asset without sacrificing quality or speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
