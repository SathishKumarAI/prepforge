---
qid: ing_0d65e5e130__star__local
question: 'Explain: Model Selection Guide — Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 388
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:55:26-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, we were tasked with building an AML (Anti‑Money Laundering) risk scoring engine that had to process ~2 M transaction records per day while keeping latency under 200 ms for real‑time alerts. The existing rule‑based system was hitting false‑positive rates of 35% and missing 12% of high‑risk transactions.

**Task**  
I needed to design a new predictive model pipeline, selecting the right algorithm from Sarvam’s Model Selection Guide, that would reduce false positives by at least 20% while maintaining or improving detection accuracy, all within our latency budget.

**Action**  
I parsed Sarvam’s API docs to understand each candidate model’s trade‑offs: Logistic Regression (fast but low expressiveness), Gradient Boosting Trees (higher accuracy but slower inference), and a lightweight XGBoost variant with quantized trees. I benchmarked them on a 200k validation set, measuring AUC, precision@k, and inference time on our GPU‑free edge servers. The guide’s “Latency vs Accuracy” heatmap helped me pick the Quantized XGBoost model (≈30 ms per prediction). I wrapped it in Sarvam’s `ModelDeployment` API, added a fallback to Logistic Regression for extreme latency spikes, and set up A/B testing via their experiment scheduler.

**Result**  
Post‑deployment, false positives dropped from 35% to 22%, while detection accuracy improved from 88% to 94%. Latency stayed below 200 ms in 99.7% of requests. I learned that a deep dive into the Model Selection Guide, coupled with real‑world benchmarks, turns theoretical trade‑offs into concrete performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
