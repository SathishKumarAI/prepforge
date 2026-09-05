---
qid: ing_dd38909975__star__local
question: 'Explain: Figma System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 399
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:50:38-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with redesigning the collaborative component of our internal prototyping tool—essentially a scaled‑down version of what Figma offers. The product had 3 million monthly active users, and the real‑time editing feature was lagging by an average of 200 ms, causing user churn during high‑traffic sprint reviews.

**Task**  
I needed to architect a low‑latency, highly available system that could support thousands of concurrent edits per document while keeping data consistency across multiple geographic regions. The goal was to drop latency below 80 ms and maintain an uptime of 99.9% for the collaborative layer.

**Action**  
First, I chose a hybrid Pub/Sub + CRDT approach: events were published to Kafka partitions keyed by document ID, ensuring order per document, while Conflict‑Free Replicated Data Types handled concurrent edits without locking. To reduce round‑trip time, I introduced WebSocket gateways in each region and used Redis Streams as an intermediate buffer for burst traffic. For persistence, a sharded PostgreSQL cluster stored the canonical state, but hot reads went to a read‑replica pool with TTL caching via Memcached. Finally, I implemented automated chaos testing (simulating network partitions) and set up Prometheus alerts for latency thresholds.

**Result**  
Latency dropped from 200 ms to 45 ms on average; document sync errors fell by 92%. User satisfaction scores rose from 72% to 88%, and we saw a 15% increase in daily active usage during sprint reviews. I learned that combining CRDTs with region‑aware Pub/Sub can deliver both real‑time performance and strong consistency—exactly the trade‑off FAANG teams are looking for in high‑scale collaborative systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
