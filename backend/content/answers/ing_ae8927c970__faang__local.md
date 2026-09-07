---
qid: ing_ae8927c970__faang__local
question: 'Explain: When User B comes back online — Design WhatsApp | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 484
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:29:25-05:00'
sources: []
---

**Clarify**  
You’re asked how the WhatsApp messaging system handles a user (User B) who was offline and now reconnects. I’ll assume:  

* Messages were queued on the server while B was offline.  
* The client must receive all missed messages in order, with minimal latency.  
* We care about consistency, scalability, and fault‑tolerance.

**Approach**  
1. **Session establishment** – B’s device opens a TLS WebSocket or MQTT tunnel to a regional edge node.  
2. **Pull‑ack strategy** – The client sends the last delivered message ID (`lastSeenSeq`).  
3. **Server side** – Edge node queries the user’s message queue in the global database (e.g., Cassandra) using `lastSeenSeq+1` as key range.  
4. **Batch delivery** – Stream messages back in order, acknowledging each batch.  
5. **Back‑pressure & flow control** – Client requests next batch only after ack to avoid overload.  
6. **Failure handling** – If a message fails (e.g., corrupted payload), the client can request re‑delivery of that sequence.

**Depth**  
* **Data model**: Partition by user ID, store messages as immutable rows keyed by monotonically increasing `seq`.  
* **Complexity**: Read is O(k) for k missed messages; write is O(1).  
* **Scalability**: Edge nodes cache recent sequences to reduce latency.  
* **Consistency**: Using a read‑your‑own‑writes model ensures B sees all prior sends.

**Edge cases**  
* User reconnects with an old device → missing `lastSeenSeq` → send entire history (bounded by retention).  
* Network partition → client retries after exponential backoff.  
* Message duplication → idempotent delivery via sequence IDs.

**Optimize & communicate**  
We can pre‑push “delivery receipts” to the edge so B receives a confirmation instantly, reducing round‑trips. In an interview I’d emphasize that this design keeps latency low, scales horizontally (multiple edge nodes), and guarantees in‑order, at‑least‑once delivery—all key for WhatsApp’s real‑time experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
