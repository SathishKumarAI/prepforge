---
qid: ing_08979e85fc__eli5__local
question: 'Explain: Broker — Can Kafka Lose Messages?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 191
total_tokens: 348
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:49:19-05:00'
sources: []
---

**Broker – Can Kafka Lose Messages?**  
Think of a broker like a diligent post‑office clerk who receives letters (messages) and places them in safe mailboxes (partitions). The clerk’s job is to keep every letter until the recipient picks it up, even if the office temporarily closes for a power cut. Kafka’s broker does exactly that: it writes each incoming message to disk first, then replicates it to backup brokers so no single failure can erase it. Only when a message is **not** written to any of these replicas—say, due to an unplanned crash before flushing to disk—can it be lost. So under normal operation, Kafka’s broker almost never loses messages; loss happens only if the system crashes before the data is safely stored.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
