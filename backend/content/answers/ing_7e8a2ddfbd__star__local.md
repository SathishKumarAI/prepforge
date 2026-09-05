---
qid: ing_7e8a2ddfbd__star__local
question: 'Explain: Contact Us — What is TPS, what is QPS, and what is the difference?
  _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 351
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:46:47-05:00'
sources: []
---

**Situation**  
At my last company we built a recommendation engine that exposed an HTTP API used by our mobile app. During a marketing push the traffic spiked from 1,000 requests per second (RPS) to over 12,000 RPS within minutes.

**Task**  
I had to quantify how many calls the system could sustain and explain the difference between TPS (transactions per second) and QPS (queries per second) so that the product team understood the limits and could plan capacity accordingly.

**Action**  
I instrumented the API gateway with Prometheus, capturing both total transactions and distinct query types. Using Grafana dashboards I plotted TPS as the count of completed HTTP requests (including retries) and QPS as the number of unique query identifiers received per second. I then ran a load test in k6 to simulate 15,000 RPS while measuring latency, error rates, and CPU usage. The analysis revealed that our system’s TPS plateaued at ~13,500 due to database write contention, whereas QPS kept rising until the backend hit a 400‑ms average response time.

**Result**  
I presented a clear distinction: TPS measures total completed operations (useful for overall throughput), while QPS counts inbound query attempts regardless of success. The team used this insight to add read replicas, reducing average latency from 350 ms to 120 ms and increasing sustainable TPS to 18,000. I learned that precise metric definitions are essential for scaling decisions and for communicating technical limits to non‑engineering stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
