---
qid: ing_7a2716738f__star__local
question: 'Explain: Typical flow — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 382
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:38:15-05:00'
sources: []
---

**Situation** – I was interviewing for a senior ML engineer role at a health‑tech startup that wanted to deploy a real‑time activity recognition model on users’ smartwatches. The product had a strict 200 ms inference window and a 5% battery budget.

**Task** – My goal was to design an end‑to‑end mobile system: from data ingestion, through training, to edge deployment, while meeting latency, accuracy, and power constraints.

**Action** – I first scoped the sensor pipeline (accelerometer + gyroscope), then drafted a model architecture using depthwise separable convolutions in TensorFlow Lite. I set up a continuous‑integration pipeline that automatically retrained on user data shards, quantized to 8‑bit ints, and profiled inference time on target hardware. For cold‑start latency, I preloaded a lightweight “warm‑up” model and scheduled periodic background syncs during low‑power periods. I also introduced adaptive sampling: reducing sensor frequency when the model confidence was high, which cut CPU cycles by 30 %. Finally, I built an A/B test harness in the app to monitor drift and trigger on‑device fine‑tuning.

**Result** – The deployed model achieved 92 % accuracy with a mean inference time of 145 ms and consumed only 3.8 % battery per hour. In production, we saw a 40 % reduction in false positives compared to the legacy rule‑based system. I learned that balancing model complexity with edge constraints requires tight collaboration between data scientists and mobile engineers from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
