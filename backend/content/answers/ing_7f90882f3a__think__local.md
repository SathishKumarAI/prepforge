---
qid: ing_7f90882f3a__think__local
question: 'Explain: Requirements & Assumptions — Spotify System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 434
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:25:45-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   *Ask what “requirements & assumptions” refer to*: is it functional vs non‑functional, data‑centric or service‑centric? Assume a typical Spotify‑style microservice architecture (catalog, playback, recommendation, user profile) and that the design should scale globally with millions of concurrent users.

**2. Adopt a layered mental model**  
   *Start with high‑level layers*: data ingestion → storage → processing → API services → client delivery. Map each requirement to one or more layers (e.g., latency constraints map to API layer, durability maps to storage).

**3. Reason step‑by‑step**  
   1. List core functional requirements: search, playback, personalized recommendations, offline caching.  
   2. Derive non‑functional ones: high availability, low latency (<200 ms), eventual consistency for user playlists, GDPR compliance.  
   3. For each requirement, decide on supporting assumptions (e.g., assume a CDN is available, assume user data fits in a NoSQL store).  
   4. Justify design choices with trade‑offs: e.g., use Kafka for event streams to decouple services; adopt sharding for the music catalog.

**4. Beware of common traps**  
   *Don’t mix up “requirements” (must‑haves) with “nice‑to‑have” features.*  
   *Avoid over‑engineering a single monolith—remember microservices scalability.*  
   *Remember that assumptions must be stated; otherwise, the design feels ad‑hoc.*

**5. Sanity‑check & communicate**  
   *Re‑read the question to ensure every listed requirement is addressed.*  
   *Explain each assumption’s impact: e.g., “Assuming a CDN reduces edge latency by 70 %.”*  
   *Use diagrams or bullet points for clarity, then summarize how requirements drive architectural decisions.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
