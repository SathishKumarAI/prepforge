---
qid: ing_08979e85fc__fp__local
question: 'Explain: Broker — Can Kafka Lose Messages?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 347
total_tokens: 516
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:24:02-05:00'
sources: []
---

**Can a Kafka broker lose messages?**  
At its core Kafka is a *write‑ahead log* that guarantees **exactly‑once** delivery as long as the producer’s `acks` and the broker’s replication factor are correctly configured. The broker writes each record to an append‑only file, then flushes it to disk (or SSD) before acknowledging the producer. If the broker crashes after the write but before the flush, the OS will recover the data from the journal or flash buffer during recovery; thus the message is not lost.

The only *real* loss can occur when the **replication factor** is set to 1 and a broker dies *before* persisting the record. In that case no copy exists elsewhere, so the message disappears. Kafka’s design turns this into an explicit trade‑off:  
- **Replication > 1** → durability (messages survive broker failures).  
- **Replication = 1** → higher throughput but risk of loss.

A deeper principle is *data immutability*: because records are never overwritten, the system can recover from crashes by replaying logs. The non‑obvious insight: Kafka’s “loss” is not an accidental bug; it is a tunable parameter that reflects your tolerance for consistency versus availability (CAP theorem). By adjusting `min.insync.replicas` and `acks`, you explicitly control how many replicas must acknowledge before the producer succeeds, turning potential loss into a predictable safety margin.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
