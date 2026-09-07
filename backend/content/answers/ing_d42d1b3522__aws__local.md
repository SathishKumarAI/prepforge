---
qid: ing_d42d1b3522__aws__local
question: 'Explain: ratelimit — Uber Engineering \u2014 Where the Digital World Meets
  the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 392
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:20:13-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team on Uber’s *Digital‑to‑Physical* pipeline, we noticed that the surge‑pricing model was sending bursts of requests to our driver‑matching service, causing >30 % latency spikes and occasional 502 errors during peak hours. The business required an automated rate‑limit that could adapt to real‑time traffic while preserving fairness for riders.

**Action**  
I introduced a **dynamic token‑bucket** policy backed by Amazon Kinesis Data Streams and DynamoDB. Each request carried a hashed rider ID; we stored per‑user quotas in a low‑latency DynamoDB table (100 µs reads) and used Kinesis to stream traffic into an AWS Lambda that updated the bucket counters every 50 ms. The policy was exposed via API Gateway with throttling configured at 200 req/s, automatically scaling on CloudWatch metrics.

- **Customer Obsession** – ensured riders never saw timeouts.  
- **Ownership / Dive Deep** – I wrote unit tests for the counter logic and performed a chaos‑engineering drill that simulated 10× traffic to validate resilience.

**Result**  
After deployment:  
- Latency dropped from 350 ms (peak) to <120 ms, a **65 % improvement**.  
- 502 errors fell by **92 %**, boosting rider satisfaction scores (+0.4 on the NPS scale).  
- The solution cost <$1k/month vs. the legacy EC2‑based rate limiter ($5k).

**Learnings** – Fast feedback loops and real‑time telemetry are key to maintaining service quality in a high‑velocity, ML‑driven environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
