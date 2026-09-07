---
qid: ing_48ea603d77__faang__local
question: 'Explain: place order which is going to be — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 484
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:33:33-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a *location‑based ordering* service (like DoorDash) that can:  
- Accept orders in real time from many riders,  
- Route them to nearby restaurants and couriers,  
- Push updates back to the user’s device.  

Assumptions: millions of concurrent users, low latency (<200 ms), high write throughput, data consistency only within a few seconds.

**2️⃣ Approach**  
1. **Geo‑hashing (e.g., S2 cells)** to index restaurants and couriers by location.  
2. **Real‑time push layer** using WebSocket clusters behind an edge CDN for bi‑directional streams.  
3. **Order routing service** that queries the geo‑index, applies business rules (rating, ETA), then pushes a “pickup” event over WebSockets.  
4. **Scalable storage**: Redis for hot lookups + PostgreSQL/BigTable for persistence.

**3️⃣ Depth**  
- *Geo‑hashing*: S2 cells of ~10 m² give ≈1 M cells; store IDs in a key‑value store → O(log N) lookup.  
- *WebSockets*: Use session affinity to a node, sticky connections; fallback to long polling if needed.  
- *Routing*: Greedy nearest‑neighbor + ETA estimation (speed × distance). Complexity ≈O(k log N) per order where k is number of candidates.  
- *Consistency*: Eventual consistency via Kafka streams for state changes.

**4️⃣ Edge Cases**  
- Sudden surge in a hotspot → auto‑scale WebSocket nodes, increase Redis shards.  
- GPS drift causing false negatives → fall back to IP geolocation.  
- Network partition → queue orders locally and replay after reconnection.

**5️⃣ Optimize & Communicate**  
- Cache frequently used routes; pre‑compute ETA tables during off‑peak.  
- Use CDN edge for WebSocket handshake to reduce RTT.  
- Explain trade‑offs: higher cell granularity improves accuracy but increases key count; WebSockets give low latency but need connection management.  

This design balances real‑time responsiveness with horizontal scalability, meeting the core requirements of a DoorDash‑style system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
