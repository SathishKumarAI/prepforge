---
qid: ing_1fb64f7ea1__faang__local
question: 'Explain: Reliability Through Retry — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 464
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:58:24-05:00'
sources: []
---

**Reliability Through Retry – Message Queues (System Design)**  

---

### 1️⃣ Clarify  
*Problem:*  We need a system that guarantees every message sent to downstream services is eventually processed, even when consumers fail or the network drops packets.  
*Assumptions to confirm:*  
- Consumers can be unreliable (crash, back‑off).  
- Idempotent processing isn’t guaranteed; duplicates must be handled.  
- Throughput and latency constraints are known.

### 2️⃣ Approach  
1. **Queue abstraction** – use a durable broker (Kafka/Redis Streams) that persists messages to disk.  
2. **Visibility timeout / lease** – when a consumer fetches a message, it locks the record for *T* seconds; if not acknowledged, it becomes visible again.  
3. **Retry policy** – exponential back‑off with max attempts; after exceeding, route to a *dead‑letter queue*.  
4. **Idempotency layer** – store processed message IDs in a compact cache (e.g., Bloom filter + hash set) to drop duplicates.

### 3️⃣ Depth  
- **Complexity:**  
  - Ack: O(1).  
  - Visibility reset: O(log N) if using priority queue.  
- **Trade‑offs:**  
  - Longer visibility → fewer retries but higher latency.  
  - Bloom filter false positives → occasional duplicate drops (acceptable if idempotent).  

### 4️⃣ Edge Cases  
- Network partitions causing message re‑delivery bursts.  
- Clock skew between broker and consumer leading to premature timeout resets.  
- Consumer scaling out: ensure shared lease mechanism prevents multiple workers from processing the same message.

### 5️⃣ Optimize & Communicate  
- **Batch acknowledgments** reduce round trips.  
- Use **commit offsets** in Kafka to guarantee at‑least‑once semantics.  
- **Monitoring dashboards** (retry counts, DLQ size) surface issues early.  

**Narration tip:** Start with the business goal (“every order must be processed”), then walk through each design choice, explaining how it satisfies reliability and performance constraints while keeping complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
