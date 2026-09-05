---
qid: ing_567600253f__eli5__local
question: 'Explain: Core APIs in Kafka — Coreapis'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 269
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:53:55-05:00'
sources: []
---

Think of Kafka as a bustling post office that delivers messages (pieces of data) between senders and receivers.  
Its **core APIs** are the three main “mailing services” you can use:

1. **Producer API – “Sending letters.”**  
   A Producer writes messages to a topic (a mailbox). It chooses where each message goes, adds a key if needed, and hands it off to Kafka for reliable storage.

2. **Consumer API – “Picking up mail.”**  
   A Consumer subscribes to one or more topics, pulls the latest messages, and processes them. It keeps track of how far it has read (its offset) so it can resume where it left off if it stops.

3. **Streams API – “Automated sorting & processing.”**  
   Streams lets you build a pipeline that reads from a topic, transforms or aggregates data on the fly, and writes results back to another topic—like an automated post‑office clerk who reorganizes letters as they arrive.

These three APIs cover everything you need to send, receive, and manipulate data in Kafka, just like a well‑organized post office handles all kinds of mail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
