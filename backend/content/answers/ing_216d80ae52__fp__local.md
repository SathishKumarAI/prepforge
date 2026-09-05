---
qid: ing_216d80ae52__fp__local
question: 'Explain: The Offline Message Flow — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 537
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:17:22-05:00'
sources: []
---

**Why an “offline” path is unavoidable**

When a user goes **off‑line**, any message destined for him must be *stored* somewhere until the next time he connects. The system therefore needs:

1. **Reliability** – a write that survives crashes.
2. **Scalability** – millions of users, each with many pending messages.
3. **Low latency on delivery** – once the user reconnects, his inbox should be populated almost instantly.

These constraints immediately suggest a *write‑through cache + durable store* pattern: first write to an in‑memory queue for speed, then persist to disk or a replicated log for durability.

---

### The Offline Flow (derived from fundamentals)

1. **Message receipt**  
   - Sender’s client sends the encrypted payload to a regional server.
   - Server writes it to a *per‑user append‑only log* (Kafka/FS‑Log) and enqueues a pointer in that user’s **outgoing queue**.

2. **User disconnect detection**  
   - Each device maintains a heart‑beat; when a device misses N beats, the server marks that device as offline.
   - The *offline status* is stored in a lightweight key‑value store (e.g., Redis), but the critical data—the pending messages—stay in the append‑only log.

3. **Delivery upon reconnection**  
   - On reconnect, the client fetches the user’s *pending offset* from the server.
   - The server streams all log entries after that offset directly to the device, bypassing any intermediate buffer.
   - After successful receipt, the server updates the offset atomically.

4. **Garbage‑collection**  
   - Once a message has been delivered to **all** of a user’s devices (tracked via a bitmask in the log entry), it can be *soft‑deleted* from the per‑user log after a retention window.

---

### Non‑obvious insight

Most designs treat “offline” as a simple queue. In reality, the **append‑only log per user** is both a durable store and an efficient delivery channel: because reads are sequential, the server can stream thousands of pending messages in a single pass without random seeks, achieving O(1) amortized time per message. This eliminates the need for complex “pull” mechanisms or per‑message timers, ensuring that even a bursty reconnect delivers all queued content with minimal overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
