---
qid: ing_f0f639ea35__fp__local
question: 'Explain: Junior to mid-level engineers — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 452
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:31:27-05:00'
sources: []
---

**Designing a mobile‑system question for junior‑to‑mid‑level engineers**

The interviewer’s *goal* is to probe **how you translate constraints into an architecture that balances latency, cost, and scalability**—the core of any distributed system.  
Start by restating the problem in your own words: “We need a mobile app that shows real‑time location data for thousands of users while keeping battery usage low.” This clarifies *what* must be optimized.

1. **Identify the dominant bottlenecks** (network, compute, storage).  
   • Network → use WebSockets or push notifications;  
   • Compute → offload heavy transforms to a backend;  
   • Storage → local caching with eviction policies.

2. **Choose an abstraction that hides complexity**: client‑side *state sync* via delta updates rather than full payloads, and server‑side *event sourcing* so you can replay state for new clients.

3. **Quantify trade‑offs**: write a simple formula for battery consumption \(B = \alpha N + \beta R\) (where \(N\) is request frequency, \(R\) resolution). Show how reducing \(N\) by 30 % saves 15 % battery while keeping latency <200 ms.

4. **Validate with failure modes**: explain graceful degradation when the network drops—fallback to cached data and a “last‑seen” timestamp.

**Non‑obvious insight:**  
Most candidates ignore *data freshness guarantees*. In mobile, users expect near real‑time updates; yet guaranteeing that across unreliable Wi‑Fi or cellular is hard. Design a **hybrid push/pull model**: push high‑frequency changes for nearby devices, pull on demand for distant ones—this reduces bandwidth while preserving perceived freshness.

Conclude with a concise diagram and a list of open questions you’d ask the product team (e.g., expected peak users, acceptable latency). This demonstrates not only technical skill but also system‑thinking mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
