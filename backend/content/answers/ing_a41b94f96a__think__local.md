---
qid: ing_a41b94f96a__think__local
question: 'Explain: Terminology — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 466
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:55:32-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   • Decide what “live‑comment” means (e.g., real‑time chat during a video stream).  
   • Assume we’re targeting millions of concurrent users, low latency (< 200 ms), and high write/read throughput.  

**2. Adopt a layered mental model**  
   • Map the system into **infrastructure**, **data flow**, **storage**, **caching**, **messaging**, **consistency**, **security**, and **monitoring** layers.  
   • For each layer, list common components (CDN, load balancer, WebSocket gateway, message broker, NoSQL store, Redis cache).  

**3. Step‑by‑step reasoning**  
   a. *Client → Edge*: Explain WebSocket upgrade, TLS termination, sticky sessions.  
   b. *Edge → Backend*: Show message routing via pub/sub (Kafka/Redis Streams) and fan‑out to subscribers.  
   c. *Storage*: Discuss write‑through to event store vs eventual read from cache; schema for comment (id, parent_id, author, text, timestamp).  
   d. *Consistency & Ordering*: Use sequence numbers or timestamps; explain causal ordering in distributed pub/sub.  
   e. *Scaling*: Horizontal scaling of workers, partitioning by channel ID, sharding comments.  

**4. Avoid common traps**  
   • Don’t mix “real‑time” with “batch”; keep read/write paths separate.  
   • Forget to handle message duplication or out‑of‑order delivery; use idempotent writes.  
   • Assume single‑region deployment; plan for cross‑region replication if global audience.  

**5. Sanity‑check & communicate clearly**  
   • Verify latency targets: round‑trip through broker < 50 ms, total ≤ 200 ms.  
   • Use diagrams to show data flow and component interactions.  
   • Summarize trade‑offs (latency vs consistency, cost vs throughput) so the audience can weigh design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
