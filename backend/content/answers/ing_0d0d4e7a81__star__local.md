---
qid: ing_0d0d4e7a81__star__local
question: 'Explain: The Benchmark-to-Production Gap — Benchmarks And Leaderboards'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 361
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:54:42-05:00'
sources: []
---

**Situation**  
While leading the deployment of a fraud‑detection model for a fintech startup, we hit an internal deadline to go live next quarter. The team had spent months optimizing on Kaggle’s public leaderboard where our ROC‑AUC was 0.94—one of the top scores in the community.

**Task**  
Our goal was to bring that high performance into production: maintain >90 % precision while handling ~10k transactions per minute with <200 ms latency, and keep false positives below 1%.

**Action**  
I mapped the leaderboard data pipeline to our live stream. First, I introduced a “production‑like” validation set (real-time logs) to surface distribution shifts. Then I applied domain‑aware feature engineering—adding time‑of‑day embeddings and transaction velocity caps—to reduce overfitting. We used ONNX for model serialization and a GPU‑accelerated inference server, profiling with Prometheus to meet latency targets. Finally, we set up A/B testing with a rollback guard, monitoring precision‑recall curves every 30 min.

**Result**  
In production the ROC‑AUC dropped from 0.94 to 0.88 on the initial test, but after tuning it stabilized at 0.91—still above our threshold—and false positives fell from 3.2% to 0.9%. The exercise taught me that leaderboards reflect curated data; real‑world deployment demands continuous validation, feature robustness, and infrastructure alignment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
