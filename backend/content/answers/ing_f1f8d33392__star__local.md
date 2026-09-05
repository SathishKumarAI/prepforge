---
qid: ing_f1f8d33392__star__local
question: 'Explain: let''s say uh onboarding users uh or — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 376
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:32:01-05:00'
sources: []
---

**Situation**  
When I joined the product team at a startup aiming to launch a food‑delivery app similar to DoorDash, we had a spike in sign‑ups but the delivery matching latency was >5 s on average during peak hours, hurting user satisfaction.

**Task**  
I needed to design an end‑to‑end system that could match riders and customers within 2 seconds while scaling to 50k concurrent users, all with minimal infrastructure cost.

**Action**  
First, I introduced a geohash index for every rider’s real‑time GPS coordinate. By truncating the hash to 7 characters (≈1 km² resolution), we could quickly query nearby riders in Redis using key prefixes, reducing lookup time from O(n) to O(log k). Next, I built a lightweight WebSocket layer on top of Nginx that pushed location updates to the app clients. Each rider’s device sent its coordinates every 2 s via a secure WebSocket; the server updated the Redis geohash bucket instantly. For matchmaking, a scheduled Lambda pulled the nearest available rider per customer request, computed a straight‑line distance (Haversine), and confirmed acceptance within 1 s before sending an order assignment over the same WebSocket channel.

**Result**  
Latency dropped from 5 s to under 2 s during peak hours; match success rate rose by 18 % and churn fell by 12 %. I learned that combining geohashing for spatial partitioning with low‑overhead WebSockets can deliver real‑time location services at scale while keeping operational costs modest.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
