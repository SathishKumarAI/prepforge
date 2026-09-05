---
qid: ing_9531e71f4c__star__local
question: 'Explain: By Constraint — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 437
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:31:22-05:00'
sources: []
---

**Situation:**  
At my last role I led the upgrade of our recommendation engine for a mid‑size e‑commerce platform. The new version needed to run in real time on edge devices with 2 GB RAM and deliver predictions within 50 ms, while staying under $10k per month in inference costs.

**Task:**  
I had to pick a model that balanced accuracy, latency, memory footprint, and cost—essentially a “by constraint” selection process—so the platform could scale globally without exceeding budget or SLA limits.

**Action:**  
First I profiled the data pipeline and set target metrics: 0.75 NDCG@10 for relevance, <45 ms inference on Raspberry Pi 4, and ≤$8k/month in GPU‑cloud usage. I built a lightweight baseline (LightGBM) to benchmark latency and cost. Next, I evaluated several neural architectures—MobileNetV2 + attention, XGBoost with feature hashing, and a distilled BERT variant—using the same dataset split. For each model I measured inference time on the target device, memory consumption, and estimated monthly cost via AWS Lambda pricing. I used Optuna to perform hyperparameter sweeps constrained by the 45 ms latency budget. The distilled BERT with quantized weights emerged as the best trade‑off: NDCG@10 of 0.78, 38 ms inference, 1.2 GB RAM usage, and $6.5k/month.

**Result:**  
The new engine increased conversion by 12% while keeping latency within SLA and staying below budget. I learned that a disciplined constraint‑driven framework—defining hard limits first, then systematically evaluating models against those limits—yields reliable, deployable solutions faster than ad‑hoc experimentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
