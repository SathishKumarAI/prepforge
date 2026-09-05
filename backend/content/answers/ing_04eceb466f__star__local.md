---
qid: ing_04eceb466f__star__local
question: 'Explain: Resource Estimation — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 403
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:38:51-05:00'
sources: []
---

**Situation** – At my previous company we were launching a real‑time fraud detection service for credit cards. The product team promised zero latency and a 99.9 % recall, but the data science team had no idea how many GPU hours or storage would be required to train and serve millions of transactions per day.

**Task** – I was asked to deliver a quick resource estimate so that we could budget for infrastructure and convince stakeholders that the project was feasible within our 6‑month sprint.

**Action** – I pulled historical data: 10 TB of labeled logs, ~3 M events/day, and an XGBoost model with 1.2 M parameters. Using a back‑of‑the‑envelope formula (train time ≈ #features × #samples ÷ GPU FLOPS), I calculated that training would need roughly 200 GPU‑hours per epoch and 10 epochs were required to converge, so ~2,000 GPU‑hrs total. For inference I estimated a latency budget of 50 ms; with a single NVIDIA A100 (≈ 19 TFLOP) and batch size 128, that meant we could handle ~1.5 M transactions per hour—well above our peak of 500k/day. Storage was projected at 12 TB for raw logs plus 2 TB for model artifacts.

**Result** – The estimate convinced the finance team to allocate an $850K budget for two A100 instances and a managed storage cluster. When we built the prototype, actual GPU usage was ~15 % lower than predicted, giving us a safety margin for future growth. I learned that simple math, combined with realistic assumptions, can turn vague requirements into concrete budgets and avoid costly overruns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
