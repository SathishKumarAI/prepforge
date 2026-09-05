---
qid: ing_7cf7146363__star__local
question: 'Explain: point looking at the distance in the — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 363
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:43:41-05:00'
sources: []
---

**Situation**  
When I joined the growth team at DoorDash, we were facing a spike in delivery request latency—our riders received location updates every 5 seconds on average, but customers complained that their order status was out of sync during peak hours.

**Task**  
I had to design a low‑latency, scalable system that could push real‑time rider positions to the app while keeping database reads minimal and ensuring we didn’t overwhelm our servers with constant GPS updates.

**Action**  
First, I introduced **geo‑hashing**: we encoded each rider’s latitude/longitude into a 12‑character base32 string. This turned sparse coordinates into compact keys that mapped riders to grid cells of ~1 km². We stored these in Redis as sorted sets keyed by the hash, allowing O(log n) lookups for nearby riders.  
Second, I implemented **WebSocket** connections from each rider’s device to a lightweight edge service. The edge pushed position updates only when the rider crossed a cell boundary (detected via delta hashing), reducing message traffic by ~70%. On the server side, we used an event‑driven architecture with Kafka topics per region so that the UI could subscribe to its own geo‑hash stream without polling.

**Result**  
The combined approach cut average delivery status latency from 5 seconds to under 1.2 seconds during rush hour, and reduced our backend traffic by ~65%. I learned how spatial indexing can drastically lower read costs while WebSockets keep the user experience snappy—critical for any real‑time location service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
