---
qid: ing_8934e4fdd4__star__local
question: Design a retrieval evaluation harness the team will actually use. What runs,
  when, and what blocks a merge?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 334
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:07:23-05:00'
sources: []
---

**Situation**  
During our last sprint we had a growing list of search‑relevant models for the company’s knowledge base. The product owner demanded that any new model must improve recall by at least 5% over the baseline before it could be merged into production, but the team was unsure how to automate and enforce this.

**Task**  
I needed to design an end‑to‑end retrieval evaluation harness that runs automatically on every PR, reports metrics in a clear dashboard, and blocks merges when thresholds are not met or when regression is detected.

**Action**  
I built a CI pipeline using GitHub Actions that triggers a containerised evaluation job whenever code is pushed. The job pulls the latest dataset split (30 k queries + gold passages), runs the candidate model and the baseline, then computes MAP@10, Recall@100, and latency. Results are posted back to the PR as comments via a custom bot; I also push the metrics to Grafana for trend tracking. A GitHub protection rule uses the “required status checks” feature to block merges unless all metrics meet thresholds. For regression detection, I added an anomaly detector that flags any metric change >2σ from historical mean.

**Result**  
The harness cut model review time by 70 %, prevented 4 accidental regressions in production, and increased overall recall from 62% to 68% within two weeks of deployment. I learned the importance of coupling automated metrics with visual dashboards so the team can spot trends before they become critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
