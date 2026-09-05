---
qid: ing_d7bf6b18f5__eli5__local
question: 'Explain: The Outbox Pattern — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 223
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:16:27-05:00'
sources: []
---

**The Outbox Pattern with Change Data Capture (CDC)**

Imagine a busy café where each order is written on a sticky note and placed in an “outbox” on the kitchen counter. The barista reads the notes, prepares drinks, and then checks them off—so no order disappears or repeats. In database terms, the outbox is a special table that records every change (INSERT, UPDATE, DELETE) as a row. A separate worker (the CDC process) watches this table, picks up each row, turns it into an event, and sends it to a message broker like Kafka.

*Key words:*  
- **Outbox**: A dedicated table that logs changes as events.  
- **CDC (Change Data Capture)**: The act of reading those logged changes and publishing them elsewhere.  

This pattern guarantees that every database change is reliably forwarded to downstream services, just as every sticky note in the café ensures a drink gets made and delivered without missing or duplicating orders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
