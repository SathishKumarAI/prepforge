---
qid: ing_0d301cbbb7__star__local
question: 'Explain: Core APIs — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 383
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:55:04-05:00'
sources: []
---

**Situation:**  
I was tasked with designing a new recommendation microservice for our music streaming platform, which already had millions of daily active users and required real‑time personalized playlists.

**Task:**  
Create a set of core REST/GRPC APIs that would allow client apps to fetch user‑specific recommendations, update listening history, and report playback events, all while ensuring low latency (<50 ms) and high throughput.

**Action:**  
I first defined the data model: `UserProfile`, `TrackMetadata`, and `ListeningEvent`. Then I designed three primary endpoints:

1. **GET /recommendations/{userId}** – returns a ranked list of tracks, using a pre‑computed matrix factorization vector stored in Redis for fast lookup; fallbacks to on‑the‑fly collaborative filtering when cache misses occur.
2. **POST /events/track-played** – streams events via Kafka to an ingestion pipeline that updates user vectors in real time and triggers background re‑ranking jobs.
3. **PUT /user/{userId}/preferences** – lets users adjust genre or mood filters, which are persisted in a NoSQL store (Cassandra) and trigger immediate cache invalidation.

I used OpenAPI for contract definition, gRPC for internal microservice communication, and added circuit breakers with Hystrix to handle downstream failures. Load testing showed 95 % of requests under 30 ms at peak load.

**Result:**  
The new API set reduced recommendation latency by 35 %, increased daily active listening time by 12%, and cut server costs by 18 % through efficient caching. I learned how careful API contract design and hybrid real‑time/ batch processing can balance performance with scalability in a high‑traffic streaming system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
