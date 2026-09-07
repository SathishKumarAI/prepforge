---
qid: ing_5e0d25953c__faang__local
question: 'Explain: Example Response (200 OK) — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 488
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:22:39-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level design of the *“Example Response (200 OK)”* feature for Spotify—a real‑time recommendation API that returns personalized song lists in under 500 ms. Confirm:  
- Expected request format (user ID, context such as playlist or listening session).  
- Scale: ~10 M concurrent users, ~1 B requests/day.  
- SLA: <500 ms latency, 99.9% availability.

**Approach**  
1. **API Gateway → Auth & Rate‑limit**.  
2. **Request Router** to pick the right recommendation engine (playlist, session, or on‑device).  
3. **Feature Store** (cached user embeddings + song metadata).  
4. **Model Service** (online inference: matrix factorization + content filters).  
5. **Post‑processing** (deduplication, freshness, shuffle).  
6. **Cache Layer** (Redis) for hot user sessions.  
7. **Metrics/Tracing**.

**Depth**  
- Use a *sharded key‑value store* for embeddings; each shard hosts 1 M users → O(log N) lookup.  
- Model inference runs on GPU‑enabled containers; batch requests by user ID to amortize cost.  
- Latency budget: 50 ms auth, 30 ms routing, 200 ms inference (batched), 70 ms post‑proc, 20 ms network → total <500 ms.  
- Consistency: eventual sync of embeddings from nightly batch jobs; real‑time updates via Kafka.

**Edge Cases**  
- Cold users: fallback to genre popularity.  
- Network partitions: serve stale cache with “refreshing” flag.  
- Model drift: monitor RMSE, trigger retrain pipeline.

**Optimize & Communicate**  
Explain trade‑offs: heavier batching reduces GPU cost but increases per‑request latency; we keep a 10 ms headroom for bursty traffic. Highlight observability: APM dashboards, alerting on SLA violations. Conclude by summarizing the end‑to‑end flow and how each component keeps the 200 OK response fast and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
