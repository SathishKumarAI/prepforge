---
qid: ing_50620df357__star__local
question: 'Explain: Terminology — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 366
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:09:20-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, we were building a credit‑scoring model that needed to be benchmarked against our competitors’ models. The product team wanted a real‑time leaderboard so analysts could see how each model performed on live data and decide which one to deploy.

**Task**  
I was tasked with designing the leaderboard system: ingesting streaming predictions, computing metrics (AUC, precision@k, latency), ranking models, and presenting the results in a dashboard—all within 48 hours of new inference batches.

**Action**  
First, I sketched an event‑driven pipeline using Kafka to buffer incoming predictions. For stateful aggregation I chose Apache Flink because it gives low‑latency windowed computations; I implemented tumbling windows of one minute to calculate rolling AUC and latency per model. To persist the rankings I used Redis sorted sets for O(log n) updates, and exposed a REST API that served the top‑k list to our React dashboard. I also added an anomaly detector in Flink that flagged sudden metric drops, pushing alerts to Slack. Finally, I automated unit tests with PyTest and CI/CD with GitHub Actions.

**Result**  
The leaderboard went live within 36 hours, handled 50k predictions per minute with <200 ms latency, and reduced model selection time from days to minutes. The team now routinely compares models in real time, leading to a 12% improvement in credit‑decision accuracy over the previous static benchmark. I learned how streaming analytics, stateful processing, and caching work together to deliver a reliable leaderboard at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
