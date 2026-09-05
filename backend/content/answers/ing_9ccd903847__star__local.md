---
qid: ing_9ccd903847__star__local
question: 'Explain: Content Delivery Network (CDN) — Cdns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 340
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:45:37-05:00'
sources: []
---

**Situation**  
At my previous company we launched a real‑time recommendation engine for a streaming platform that served millions of users worldwide. The model outputs were cached on edge servers, but during the beta phase our latency spiked to 350 ms in Asia and 600 ms in South America, breaking the 200 ms SLA.

**Task**  
I was tasked with reducing end‑to‑end latency below 250 ms globally while keeping the recommendation accuracy intact and ensuring cost did not exceed a 15 % budget increase.

**Action**  
First I profiled the request path with New Relic, discovering that 70 % of delay came from pulling model artifacts over the network. I integrated a CDN (Fastly) to cache the serialized model weights and inference results at edge locations. I configured versioned cache keys tied to the model’s SHA‑256 hash so updates would automatically purge stale content. To handle dynamic personalization, I added a small on‑edge Lua script that performed lightweight feature aggregation before forwarding to our API gateway, reducing round‑trip data. Finally, I set up CloudWatch metrics to monitor hit ratios and latency per region.

**Result**  
Latency dropped from 350 ms/600 ms to 140 ms globally, meeting the SLA with a 30 % margin. The CDN cache hit ratio rose to 92 %, cutting our backend traffic by 40 %. I learned that coupling edge caching with smart keying and minimal edge computation can dramatically improve ML service performance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
