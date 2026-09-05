---
qid: ing_677faff02b__star__local
question: 'Explain: Example 2: Managing Failed Expectations — Behavioral For Ai Roles'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 345
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:44-05:00'
sources: []
---

**Situation** – I was leading a cross‑functional team developing an NLP sentiment model for a retail client’s customer‑feedback platform. Midway through the sprint, the data science lead discovered that the labeled dataset had severe class imbalance (only 3% negative reviews), so our accuracy metric dropped from the promised 92 % to 68 %. The product manager expected a production‑ready model by the end of the month.

**Task** – I needed to realign stakeholder expectations, secure buy‑in for an extended timeline, and deliver a viable solution that met business KPIs (at least 80 % F1 on negative class).

**Action** – I convened a rapid “stakeholder sync” call, presented the imbalance issue with visualized confusion matrices, and proposed three concrete mitigation steps: (1) oversample negatives using SMOTE, (2) switch to a focal‑loss objective, and (3) implement an active‑learning loop to re‑label high‑uncertainty samples. I also negotiated a 3‑week buffer for the next sprint and set up weekly demos so progress stayed transparent.

**Result** – Within five weeks we achieved 82 % F1 on negatives, and overall accuracy rose to 90 %. The client approved deployment, and the model reduced churn prediction latency by 30 %. I learned that early data‑quality diagnostics are essential for realistic roadmaps, and that framing technical trade‑offs in business terms builds trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
