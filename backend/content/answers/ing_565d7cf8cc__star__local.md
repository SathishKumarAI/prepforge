---
qid: ing_565d7cf8cc__star__local
question: 'Explain: Request rate limiter — Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 375
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:20:35-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a public RESTful service that let developers embed our sentiment‑analysis model into their apps. Within two weeks traffic spiked to 30 k requests per second, but the single inference node maxed out at ~8 k QPS and started returning 503s.

**Task:**  
I had to design a scalable rate‑limiting layer that would protect the backend from sudden surges, enforce fair usage per API key, and still allow legitimate bursts without hurting latency.

**Action:**  
I implemented a distributed token‑bucket algorithm using Redis Streams. Each client’s API key gets a bucket (capacity 100 tokens, refill 10 tokens/second). A lightweight Node.js gateway pulls the bucket state from Redis, consumes a token per request, and queues the request if empty. To avoid single‑point failures I used Redis Sentinel for HA and sharded keys across multiple shards. For burst handling we allowed short bursts up to 200 requests per minute by temporarily increasing the refill rate during low load windows. We also exposed an exponential backoff hint in the `Retry-After` header so clients could adapt.

**Result:**  
After deployment, our average QPS rose from 8 k to 25 k with <1% error rate. The token‑bucket kept per‑key usage within quotas, preventing any single customer from hogging resources. We reduced operational incidents by 70% and learned that a simple distributed limiter can be both cost‑effective and highly resilient when built on proven primitives like Redis Streams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
