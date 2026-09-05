---
qid: ing_5b568244f6__star__local
question: 'Explain: Now even though if it''s a directed — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 385
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:30:04-05:00'
sources: []
---

**Situation:**  
In my last role at a ride‑hailing startup, we were launching an “in‑app navigation” feature that had to route drivers through city streets while avoiding congestion and construction. The existing map data was static; every time traffic changed, the app would still recommend the same path, causing delays of 15–30 minutes on average during peak hours.

**Task:**  
I needed to build a real‑time routing engine that could ingest live traffic feeds, update edge weights in our graph, and recalculate optimal paths for thousands of concurrent users—all within a few seconds so drivers wouldn’t wait at intersections.

**Action:**  
1. I modeled the city as a directed weighted graph where each street segment was an edge with a dynamic weight = base travel time × congestion factor.  
2. Using Apache Kafka, I streamed traffic sensor data (vehicle counts, average speeds) into a Spark Streaming job that updated the weights in a Redis cache in real time.  
3. For pathfinding, I implemented Dijkstra’s algorithm on the client side with a priority‑queue optimized for sparse graphs; to keep latency low, I pre‑computed “anchor” nodes at major intersections and performed bidirectional search from the driver’s current node to the destination.  
4. I added a fallback: if traffic data was stale, the system would revert to the static map weights.

**Result:**  
The new routing engine cut average detour time by 22 % (from 25 min to 19 min) and reduced driver complaints about “wrong routes” by 37 %. I learned that a directed graph with live weight updates, coupled with efficient bidirectional search, is essential for scalable, real‑time navigation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
