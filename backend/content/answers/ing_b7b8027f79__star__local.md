---
qid: ing_b7b8027f79__star__local
question: 'Explain: id as usual and then uh yeah — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 373
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:52-05:00'
sources: []
---

**Situation** – At my previous company we launched an app that helped commuters find and reserve parking spots in downtown malls. The pilot at the Mall of Metropolis had a 30 % drop‑off rate because users couldn’t quickly see availability or pay for a slot.

**Task** – I was tasked to redesign the backend so it could ingest real‑time sensor data from 200 meters‑deep underground levels, support instant reservations, and scale to 10k concurrent users during peak hours while keeping latency under 150 ms.

**Action** – First, I mapped the parking structure into a hierarchical graph (levels → rows → spots) and exposed it through a RESTful API built on Spring Boot. For real‑time updates I used Apache Kafka as a message bus; each sensor published “spot‑status” events to a topic that was consumed by a microservice storing state in Redis for sub‑50 ms reads. I added a reservation service using optimistic locking with MongoDB, and integrated Stripe for instant payments. Load testing with k6 revealed bottlenecks at the Redis cluster, so I sharded it across three nodes and introduced a CDN cache for static map tiles.

**Result** – After launch, the app’s drop‑off rate fell from 30 % to 8 %, and average reservation latency dropped to 90 ms. Monthly parking revenue grew by 25 % in the first quarter, and we saw a 15 % increase in user retention. I learned how to blend real‑time streaming with low‑latency caching to meet strict SLAs in a highly dynamic environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
