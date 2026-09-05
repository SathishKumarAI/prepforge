---
qid: ing_b4fb317ea6__star__local
question: 'Explain: Alibaba Cloud Hot Products — What is TPS, what is QPS, and what
  is the difference? _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 355
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:33:28-05:00'
sources: []
---

**Situation**  
During my senior internship at Alibaba Cloud’s AI Platform team, we were tasked with optimizing the real‑time recommendation engine that served millions of users daily. The product manager asked us to benchmark our service performance using industry‑standard metrics.

**Task**  
I needed to explain the difference between Transactions Per Second (TPS) and Queries Per Second (QPS), demonstrate how each metric applies to our workload, and propose a monitoring strategy so stakeholders could gauge scalability.

**Action**  
First, I mapped out the engine’s architecture: an incoming HTTP request counted as a *query*, while each successful recommendation rendering—comprising model inference, caching, and database write—constituted a *transaction*. Using Prometheus, I instrumented both counters (`http_requests_total` for QPS and `recommendation_transactions_total` for TPS). I then ran load tests with JMeter, ramping up to 10 k QPS. The data showed that while QPS spiked to 9.8 k, TPS plateaued at 7.2 k due to the write‑back latency on the NoSQL store.

**Result**  
The clear distinction allowed us to pinpoint bottlenecks: we optimized the database tier, reducing write latency by 35%, which lifted TPS to match QPS at 9.6 k. I presented these findings in a deck that earned buy‑in for an autoscaling policy. I learned that precise metric definitions are critical when diagnosing distributed system performance and that stakeholders value transparent, data‑driven explanations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
