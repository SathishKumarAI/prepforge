---
qid: ing_91c652f5fa__star__local
question: 'Explain: Your new agent version scores higher on every benchmark, but internal
  users say it got worse. Find the problem.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 349
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:24:13-05:00'
sources: []
---

**Situation:**  
I was leading a team that rolled out Version 3 of our recommendation AI at a fintech firm. External benchmarks (Precision@10, NDCG) jumped from 0.42/0.45 to 0.56/0.62. Yet internal analysts reported that the model’s suggestions were less relevant for their daily portfolio reviews.

**Task:**  
Identify why the higher benchmark scores didn’t translate into real‑world usefulness and restore confidence among the users without sacrificing overall performance.

**Action:**  
I began by reproducing the benchmarks inside our staging environment, confirming the metrics were correct. Next, I compared the training distribution to the live data: we had shifted from a balanced product mix to a heavily skewed “high‑risk” portfolio. The model was over‑fitting to the rare high‑risk examples because we used a global loss weighting scheme that didn’t account for this drift. I introduced a dynamic re‑weighting layer that adjusted per‑class importance based on real‑time class frequencies and retrained with an early‑stopping schedule tuned to both offline metrics and an internal “user satisfaction” proxy (click‑through rate). Finally, I set up a monitoring dashboard that visualized both benchmark scores and live KPI drift.

**Result:**  
Within two weeks the internal click‑through improved by 18%, matching external benchmarks. The model now adapts to data shifts automatically, and we reduced post‑deployment support tickets by 35%. I learned that high benchmark scores are only meaningful when aligned with the target distribution; continuous monitoring and adaptive weighting are essential for real‑world impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
