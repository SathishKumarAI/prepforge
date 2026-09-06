---
qid: ing_92c4c0b4bf__fp__local
question: What Is the Difference Between QPS and the Number of Requests?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 371
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:17:28-05:00'
sources: []
---

**Why “QPS” matters beyond a raw request count**

When an ML service is queried, each *request* may contain one or more *queries* (e.g., batch inference).  
The **number of requests** counts the HTTP calls: a single POST that carries 1 000 records is still one request.  
In contrast, **QPS (queries per second)** aggregates all individual inferences across time:

\[
\text{QPS}=\frac{\sum_{\text{all requests}} \text{# of queries in each request}}
               {\text{elapsed time (s)}}
\]

This metric emerges from the *queue‑ing* model of an inference engine.  
A server can process a fixed number of queries per second, regardless of how many requests are issued.  
If you send 10 000 requests that each contain one query, QPS=10 000/s only if those requests arrive at that rate; otherwise the effective throughput is limited by request latency and network round‑trips.

**Non‑obvious insight:**  
QPS captures *service load* in the same units as the model’s computational budget (GPU cycles per inference).  
Number of requests, however, conflates batch size with traffic. Two workloads—10 000 single‑query requests vs 1 000 batched requests of 10 queries each—have identical QPS but differ drastically in queue dynamics and cache reuse.  

Thus, for capacity planning and SLA enforcement, QPS is the correct abstraction; raw request counts are a coarse proxy that can mislead about true system strain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
