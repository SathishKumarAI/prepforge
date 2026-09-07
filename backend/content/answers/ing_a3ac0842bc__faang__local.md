---
qid: ing_a3ac0842bc__faang__local
question: 'Explain: Putting It Together: The Message Flow — Design WhatsApp | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 483
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:05:37-05:00'
sources: []
---

**Clarify**  
We’re asked to design the “message flow” of a WhatsApp‑style chat system: users send text/voice/video messages that must be reliably delivered, stored, and surfaced to recipients in real time.  
Key assumptions to confirm:  
1. Users are globally distributed (multiple regions).  
2. Messages can be offline‑first; delivery guarantees at least once, no duplicates.  
3. Privacy: end‑to‑end encryption, minimal metadata leakage.  

**Approach**  
1. **Client → Edge Proxy** – HTTPS/WebSocket with TLS for encrypted transport.  
2. **Load Balancer → Message Router** – route to region‑specific message broker (Kafka).  
3. **Broker → Store & Queue** – write to a replicated append‑only log; enqueue per recipient for delivery.  
4. **Delivery Service** – pulls from queue, pushes via WebSocket if online; otherwise flags as undelivered.  
5. **Persistence Layer** – distributed key‑value store (Cassandra) keyed by conversation ID + message timestamp.  
6. **Indexing & Search** – secondary index on user IDs for quick retrieval.  

**Depth**  
- **Consistency**: Use Kafka’s exactly‑once semantics per partition; deduplication via idempotent consumer logic.  
- **Latency**: Keep broker partitions local to reduce cross‑region hops; batch acknowledgments.  
- **Scalability**: Horizontal scaling of brokers and delivery workers; auto‑sharding by conversation hash.  

**Edge Cases**  
- **Network partition** → message remains in queue, eventually delivered once connectivity resumes.  
- **Duplicate messages** → dedupe with per‑message UUID stored in a Bloom filter.  
- **Large media** → store in object storage (S3) and send pre‑signed URLs; only the URL is brokered.  

**Optimize & Communicate**  
Explain trade‑offs: Kafka gives high throughput but introduces a slight delay; using direct peer‑to‑peer when both users online could cut latency further. Highlight monitoring points: message lag, delivery success rate, encryption key rotation. Conclude with a quick diagram and key metrics (throughput, MTTR).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
