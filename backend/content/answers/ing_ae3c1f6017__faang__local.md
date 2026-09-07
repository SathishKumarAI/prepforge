---
qid: ing_ae3c1f6017__faang__local
question: 'Explain: Offline Message Handling — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 501
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:28:42-05:00'
sources: []
---

**Clarify**

We’re asked to design an *offline‑message* subsystem for a messaging app (WhatsApp).  
Assumptions to confirm:  

1. Users may be offline for minutes, hours, or days.  
2. Messages must be delivered in order per conversation.  
3. Delivery is reliable – no message loss.  
4. The system must scale to millions of concurrent users and billions of messages.

**Approach**

1. **Ingestion layer**: API servers receive `sendMessage` requests → validate, timestamp, route to a *message queue*.  
2. **Storage tier**: Persist each message in a sharded NoSQL store (e.g., Cassandra) keyed by conversation ID + sequence number.  
3. **Delivery queue**: Each recipient gets an “offline inbox” queue. When the user comes online, the client polls or is pushed a notification to fetch all pending messages.  
4. **Acknowledgement & cleanup**: After successful receipt, the client ACKs; the system deletes the message from the offline queue.

**Depth**

- **Ordering**: Sequence numbers per conversation guarantee FIFO delivery.  
- **Scalability**: Sharding by `conversation_id` distributes load; queues are partitioned per user to avoid hotspots.  
- **Reliability**: Messages stored durably before enqueueing guarantees no loss even if the queue fails (use replicated queues).  
- **Complexity**: Ingestion O(1), storage O(log n) for key lookup, delivery O(k) where *k* is pending messages.

**Edge Cases**

- User deletes a conversation while offline → purge queued messages.  
- Network partitions → retry logic and idempotent writes.  
- Large batch of pending messages → back‑pressure on client; support pagination.

**Optimize & Communicate**

To reduce latency, we can pre‑fetch a small window of messages during login and stream the rest via websockets. For durability, use *write‑ahead logs* before acknowledging to the queue. I’d present this as a layered diagram, highlighting data flow from API → queue → storage → client, and discuss trade‑offs (e.g., using Kafka vs. Redis Streams). This shows clear problem framing, systematic solution design, and awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
