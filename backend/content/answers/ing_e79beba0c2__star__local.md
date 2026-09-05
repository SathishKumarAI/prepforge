---
qid: ing_e79beba0c2__star__local
question: 'Explain: Now once you have this information you — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 331
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:11:45-05:00'
sources: []
---

**Situation** – At my last role I was tasked with improving the “Nearby Places” search on our navigation app, which had a 35 % click‑through drop during peak commute hours.  

**Task** – Build a real‑time recommendation engine that surfaces relevant venues based on user context (location, time of day, device sensor data) while keeping latency under 200 ms and respecting privacy.  

**Action** – I started by collecting anonymized GPS traces and contextual signals into an Apache Kafka stream. Using Spark Streaming, I trained a LightGBM model offline that scored venues on relevance. For the live system, I deployed the model as a gRPC microservice behind Envoy, caching top‑10 predictions per user session in Redis. To handle the 1 million queries per second peak, I sharded the model across GPU nodes and added a fallback rule‑based layer for cold starts.  

**Result** – The new engine lifted click‑through by 28 % during rush hours, reduced server cost by 18 % through better cache hit rates, and cut latency to 120 ms on average. I learned that combining streaming analytics with edge‑caching is key to scaling ML in a real‑time map service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
