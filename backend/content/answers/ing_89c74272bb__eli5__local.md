---
qid: ing_89c74272bb__eli5__local
question: 'Explain: High Availability — Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 228
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:14:55-05:00'
sources: []
---

**High Availability in Apache Kafka**

Imagine a library that never closes, even if one librarian or a shelf breaks down.  
In Kafka, *high availability* means the system keeps working no matter what happens to individual parts.

- **Broker** – a server that stores and forwards messages (like a book‑shelf).  
- **Topic** – a collection of messages (like a genre section).  
- **Replica** – an exact copy of a topic partition on another broker (another shelf holding the same books).  
- **Leader** – the replica that currently accepts reads and writes (the main librarian for that shelf).  

When a broker fails, Kafka automatically promotes one of its replicas to become the new leader. Because each message has several replicas spread across different brokers, the library can still serve readers and writers without interruption—just like patrons can keep borrowing books even if one librarian is absent. This automatic fail‑over keeps the system “highly available.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
