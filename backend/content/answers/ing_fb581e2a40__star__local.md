---
qid: ing_fb581e2a40__star__local
question: 'Explain: Evaluation plan — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 328
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:51:36-05:00'
sources: []
---

**Situation** – At my last company we launched a pilot “Meeting Assistant” that auto‑generated agendas and action items from Zoom recordings. The product was on hold because stakeholders doubted its accuracy and ROI.

**Task** – I had to design an evaluation plan that would objectively prove the assistant’s value, identify failure modes, and guide iterative improvements before full rollout.

**Action** – First, I defined key metrics: F1‑score for agenda extraction, precision/recall of action item tagging, user satisfaction via a 5‑point Likert survey, and time saved per meeting. I built an annotation pipeline using Prodigy to create a gold‑standard dataset of 200 meetings (balanced across topics). Then I set up A/B testing: version A ran the baseline model; version B used a newer transformer fine‑tuned on domain data. Results were logged in Grafana dashboards and automatically fed into a Jupyter notebook that generated weekly trend reports. We also conducted semi‑structured interviews with 15 participants to surface qualitative insights.

**Result** – The new model improved agenda F1 from 0.68 to 0.83, action‑item precision rose to 0.88, and users reported a 35 % reduction in follow‑up email volume. Stakeholders approved a $250k investment for scaling. I learned that coupling quantitative metrics with rapid user feedback loops is critical for AI product adoption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
