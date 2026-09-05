---
qid: ing_d944d7b65f__star__local
question: 'Explain: Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 362
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:43:11-05:00'
sources: []
---

**Situation** – In my last role I was responsible for a recommendation service that served 2 M requests per day from mobile apps. During a product launch the traffic spiked to 5 M requests in a single hour, and our latency jumped from 120 ms to over 800 ms, causing user churn.

**Task** – I had to design a scalable rate‑limiting strategy that would protect downstream ML inference nodes (GPU workers) while keeping the API responsive for legitimate traffic.

**Action** – I first instrumented request metrics in Prometheus and set up an ingress controller with Envoy. Using Envoy’s Lua filter, I implemented a token bucket algorithm keyed by user ID and client IP. Tokens were refreshed at 10 tokens/second per user with a burst capacity of 50. For global throttling, I added a Redis‑backed distributed counter that capped total requests to 15 k/s across all instances. When limits were hit, the API returned HTTP 429 with a Retry‑After header. I also introduced a fallback path that queued low‑priority inference jobs in SQS and processed them at peak times.

**Result** – The new system flattened the latency curve: average response time dropped to 150 ms during peaks, and error rates fell below 0.5 %. We handled a 250 % traffic surge without any GPU overloading, and the rate‑limiting logic reduced operational incidents by 70 %. I learned that combining per‑client token buckets with global distributed counters is essential for balancing fairness and system stability in ML APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
