---
qid: ing_ae8927c970__star__local
question: 'Explain: When User B comes back online — Design WhatsApp | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 349
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:21:17-05:00'
sources: []
---

**Situation:**  
During a redesign of the WhatsApp messaging backend for a mid‑tier client, we noticed that when User B re‑joined after being offline for several days, their chat history would lag by minutes and occasionally drop older messages.

**Task:**  
I had to ensure that User B’s inbox was fully synchronized as soon as they came online, without overwhelming the server or causing a spike in bandwidth usage.

**Action:**  
1. Implemented a “delta sync” strategy: on reconnection, the client sends its last‑known message ID; the server returns only messages newer than that ID.  
2. Added an incremental checkpoint system using Redis to cache per‑user last read timestamps, reducing DB lookups.  
3. Introduced a priority queue in Kafka where “high‑priority” sync requests are processed first, ensuring User B’s data is fetched before bulk background tasks.  
4. Optimized the message retrieval query with a composite index on `(chat_id, timestamp)` and capped batch size to 500 messages, streaming remaining ones asynchronously.

**Result:**  
User B experienced instant inbox restoration within 200 ms of reconnecting, even when they were offline for a week. The system’s average sync latency dropped from 1.8 s to 0.25 s, and server CPU usage during peak reconnections fell by 30%. I learned that combining incremental state tracking with priority queuing can dramatically improve perceived responsiveness in real‑time messaging systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
