---
qid: ing_69a69170d4__star__local
question: 'Explain: engineer over at google in the united — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 344
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:58:29-05:00'
sources: []
---

**Situation:**  
I joined a cross‑functional team at Google to build a real‑time delivery platform similar to DoorDash, where riders needed instant updates on nearby restaurants and customers’ locations across multiple cities.

**Task:**  
We had to design a scalable system that could deliver sub‑second location updates to millions of users while keeping bandwidth low and ensuring privacy.

**Action:**  
I led the architecture around **Geo‑Hashing** for spatial indexing: each latitude/longitude pair was converted into a 12‑character hash, allowing us to partition the world into grid cells and quickly query nearby entities with prefix matching in Bigtable. For real‑time push, we switched from polling REST APIs to **WebSockets** backed by Cloud Pub/Sub; each rider’s app maintained an open socket that subscribed to its Geo‑Hash cell topic. To reduce noise, I implemented a sliding window deduplication layer that coalesced updates occurring within 200 ms, cutting traffic by ~35%. We also added client‑side throttling and delta compression so only changes in coordinates were transmitted.

**Result:**  
The prototype handled 1.2 million concurrent connections with an average latency of 120 ms, far below the 300 ms SLA. Deployment to production reduced server costs by 28% compared to a polling baseline, and user engagement metrics (time‑to‑pickup) improved by 18%. I learned how spatial hashing can turn global geodata into efficient key‑value lookups and that WebSockets, when combined with smart backpressure, deliver true real‑time UX at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
