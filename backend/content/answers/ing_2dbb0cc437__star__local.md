---
qid: ing_2dbb0cc437__star__local
question: 'Explain: Facebook Newsfeed — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 414
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:59:45-05:00'
sources: []
---

**Situation** – At my previous company I was part of the data‑engineering squad tasked with re‑architecting the internal “Newsfeed” for a social app that had 30 M daily active users and an average feed length of 50 items. The existing monolith was lagging, pulling content from 20 micro‑services via synchronous REST calls, causing 2–3 s page loads during peak traffic.

**Task** – I needed to design a scalable, low‑latency architecture that could deliver personalized feeds in under 800 ms while supporting real‑time updates and A/B testing of ranking algorithms without downtime.

**Action** – I broke the problem into three layers: (1) **Ingestion** – used Kafka streams to consume user actions and content events; (2) **Feature Store** – built a Redis‑based cache with sharded key spaces per user segment, populated by Spark jobs that refreshed every 5 min; (3) **Serving** – deployed a fleet of gRPC services behind an Envoy load balancer, each running a LightGBM model for ranking. I introduced incremental batching to aggregate 2000 feed items into a single response and used protobufs for zero‑copy serialization. To guarantee availability I added circuit breakers and fallbacks to a secondary DynamoDB table.

**Result** – The new design cut page load time from 2.5 s to 750 ms, increased throughput by 4×, and lowered cache miss rates from 18% to 3%. User engagement rose 12% in the first month, and we were able to roll out new ranking experiments with zero impact on live traffic. I learned that a clear separation of ingestion, feature storage, and serving layers is critical for building a robust newsfeed at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
