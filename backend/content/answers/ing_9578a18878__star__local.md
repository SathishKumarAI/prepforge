---
qid: ing_9578a18878__star__local
question: 'Explain: Hard Throttling — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 349
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:31:50-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we had an API that processed credit‑risk models in real time. During a product launch our traffic spiked 400 % over the forecasted load, and latency started creeping up from 120 ms to over 600 ms. The SLA required <200 ms response times for 99.9 % of requests.

**Task**  
I had to design a throttling strategy that would keep the system stable under peak traffic while still allowing legitimate users to get timely predictions. The goal was to maintain latency within SLA and avoid overloading downstream GPU workers.

**Action**  
I implemented hard throttling (rate limiting) using Redis‑based token buckets. Each user key had a bucket of 100 tokens per minute; when the bucket emptied, requests were immediately rejected with HTTP 429. I also added an adaptive “burst” window: if CPU usage exceeded 70 %, we tightened the rate to 50 tokens/min. The policy was enforced via Envoy’s rate‑limit filter and logged in Grafana dashboards for real‑time monitoring. We tuned the bucket size by running a traffic simulator that mimicked the spike pattern.

**Result**  
After deployment, peak latency dropped from 600 ms to 180 ms, keeping SLA compliance at 99.7 %. The system handled the 400 % traffic surge without any worker crashes or data loss. I learned that hard throttling is most effective when combined with real‑time metrics and adaptive thresholds—simple token buckets can be powerful if tuned correctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
