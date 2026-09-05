---
qid: ing_cd40f4796d__star__local
question: 'Explain: able to have something that already has — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 330
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:19:32-05:00'
sources: []
---

**Situation:** While leading the infrastructure team at a food‑delivery startup, we noticed our real‑time order tracking was lagging—drivers were frequently out of sync with customers, causing a 12 % increase in abandoned orders during peak hours.

**Task:** I had to redesign the location service so that each driver’s GPS position could be broadcast instantly to all relevant clients (app, web dashboard) while keeping the system scalable for millions of concurrent users and minimizing data transfer costs.

**Action:** I introduced a two‑layer solution. First, we implemented **Geo‑Hashing**: each driver’s latitude/longitude was encoded into an 8‑character GeoHash, which partitions the map into hierarchical tiles. The server indexed drivers by these hashes, allowing us to query “all drivers within tile X” in O(1) time and drastically cut down on unnecessary distance calculations. Second, we switched from polling to **WebSockets** for push notifications. Each client opened a lightweight WebSocket channel that subscribed to the GeoHash tiles relevant to its region; whenever a driver’s position updated (every 5 seconds), the server pushed only the delta over the socket instead of re‑sending full payloads.

**Result:** The new system reduced order abandonment by **18 %**, cut data usage per update from 4 KB to under 300 B, and lowered latency to <50 ms. I learned that combining spatial indexing with event‑driven communication can turn a heavy polling problem into an efficient real‑time architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
