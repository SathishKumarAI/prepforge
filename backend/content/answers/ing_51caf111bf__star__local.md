---
qid: ing_51caf111bf__star__local
question: 'Explain: Endpoint: GET /recommendations — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 361
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:11:54-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with launching a new “Discover Weekly” style feature for our music streaming app. The goal was to provide personalized playlists via an endpoint `GET /recommendations` that could scale to 2 M concurrent users during peak hours.

**Task**  
I needed to design the recommendation API so it delivered fresh, relevant tracks in under 200 ms, maintained high availability, and allowed real‑time model updates without downtime.

**Action**  
I split the system into three services: a request router, a scoring microservice, and a cache layer. The router used Nginx with consistent hashing to route to the nearest edge node. For scoring I built an online inference service in Go that loaded pre‑trained embeddings from a Redis‑backed vector store; we used FAISS for approximate nearest neighbor lookups. To keep latency low I pre‑computed candidate sets during off‑peak hours and refreshed them every 30 min. We added a circuit breaker to fall back to a simple popularity list if the scoring service was overloaded. Finally, I set up a CI/CD pipeline that deployed new model weights via blue/green releases, ensuring zero downtime.

**Result**  
The endpoint consistently hit <180 ms latency under peak load and handled 2.5 M requests per day with 99.9% uptime. User engagement on the feature grew by 27%, and I learned how to balance real‑time inference costs against cache freshness for large‑scale recommendation systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
