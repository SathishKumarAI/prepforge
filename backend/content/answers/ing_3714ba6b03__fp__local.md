---
qid: ing_3714ba6b03__fp__local
question: 'Explain: Live Commenting API Design — Live Comment System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 428
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:01:25-05:00'
sources: []
---

**Live‑Comment API – From Problem to Principle**

*Problem:* In a real‑time stream (video, game, chat) we must deliver every user message to all viewers with sub‑100 ms latency while guaranteeing ordering and fault tolerance. The naïve “push every comment to each client” explodes bandwidth and storage; the naïve “pull from server” introduces unacceptable delay.

*Why it works:*  
1. **Event‑driven stream** – Treat comments as immutable events in a log (Kafka, Pulsar). This gives append‑only semantics, natural ordering, and durability.  
2. **Consumer groups per audience segment** – Each client is a consumer that reads from the log offset where it left off. If a user reconnects we resume from that offset; if a server dies, another consumer picks up where it stopped (exactly‑once).  
3. **Publish–subscribe over websockets or gRPC streams** – The API exposes two endpoints: `PostComment(comment)` and `StreamComments(consumer_id)`. The stream is backed by the log; the client simply forwards received events to its UI.  

*Deeper principle:* This design maps the problem onto *distributed log abstraction*, a universal building block for consistency‑vs‑latency trade‑offs (the CAP theorem). By decoupling write and read paths, we achieve linear scalability: any number of writers can append, and readers scale by adding consumers.

**Non‑obvious insight:**  
The *offset* is not just a sequence number; it is a *time‑tagged snapshot* that encodes the entire causal history. By exposing this offset to clients (and storing it in their session), we enable *exactly‑once replay* and *user‑level back‑pressure*: a client can request “give me comments after offset X” instead of receiving all live traffic, dramatically reducing unnecessary data transfer for users with poor connectivity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
