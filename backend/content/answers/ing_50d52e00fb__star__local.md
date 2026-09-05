---
qid: ing_50d52e00fb__star__local
question: 'Explain: Best Practices — Why are Content Delivery Networks (CDN) so Popular?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 273
total_tokens: 516
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:09:49-05:00'
sources: []
---

**Situation:** While leading a real‑time recommendation engine for a streaming platform, we saw that model inference latency spiked to 350 ms on the edge servers during peak hours, hurting user experience and causing a 12% drop in session length.

**Task:** I needed to reduce inference latency by at least 40 % without compromising model accuracy or increasing infrastructure cost.

**Action:** I evaluated our current deployment pipeline and discovered we were pulling model artifacts from a central S3 bucket each request. I introduced a CDN (CloudFront) to cache the serialized model weights and intermediate feature bundles at edge locations worldwide. We configured versioned cache keys tied to model checkpoints, added an automatic invalidation step on every new training rollout, and leveraged Lambda@Edge for lightweight pre‑processing of user context before sending it to the inference microservice. This reduced round‑trip time by eliminating cold starts and network hops.

**Result:** Latency dropped from 350 ms to 190 ms (a 46% improvement), boosting average session duration by 9%. The CDN also cut our outbound data transfer costs by 18%, proving that using CDNs for ML artifact delivery is both a performance win and a cost saver.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
