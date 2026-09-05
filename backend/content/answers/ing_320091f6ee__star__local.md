---
qid: ing_320091f6ee__star__local
question: 'Explain: Step 2: Define Core Data & APIs — How to Prepare for System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 395
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:08:14-05:00'
sources: []
---

**Situation:**  
During my senior year, I was prepping for a top‑tier tech company's machine‑learning systems interview. The interviewer had asked me to sketch out an end‑to‑end recommendation engine, but the first question they threw at me was “What data do you need and how will you expose it?”  

**Task:**  
I needed to identify the core datasets, their schemas, and design clean APIs that could support real‑time inference while keeping latency under 50 ms. The goal was to show I could translate business requirements into a concrete data architecture before diving into model training.

**Action:**  
I started by mapping out user behavior (clicks, dwell time) and item metadata (tags, categories). I defined three primary tables in BigQuery: `users`, `items`, and `user_item_interactions`. For each, I wrote SQL schemas with partitioning on date to keep queries fast. Next, I designed a gRPC service (`RecommendService`) with two RPCs—`GetRecommendations(user_id)` and `RecordInteraction(user_id, item_id)`. I specified protobuf messages, added versioning fields, and outlined rate‑limiting logic (100 req/s per user). Finally, I sketched a cache layer using Redis to store the top 1k items per user, reducing query time from ~200 ms to <30 ms.

**Result:**  
The interviewer praised the end‑to‑end data flow and the thoughtful API contract. In the actual interview, I delivered a recommendation system that achieved a 12% lift in click‑through rate after deployment, with latency staying below 40 ms on average. I learned that clear data definitions and well‑designed APIs are the foundation for any scalable ML service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
