---
qid: ing_e5707d0ec5__eli5__local
question: 'Explain: Data Streams — Elasticsearchstreams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 235
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:38:12-05:00'
sources: []
---

Think of an **Elasticsearch data stream** as a train track that keeps pulling new carriages onto the platform every day.  
Each carriage is a *shard*—a tiny, self‑contained database that holds only recent documents (the “hot” part). When the carriage becomes full or reaches its age limit, it’s put on a shelf and a brand‑new carriage is added to keep the train moving smoothly.

The platform itself is called a **data stream**. It hides all those carriages from you: you ask for “today’s sales” and Elasticsearch automatically pulls data from the current hot carriage and any older ones that are still relevant, without you having to know how many carriages there are or where they sit.

*Unavoidable terms*:  
- **Shard** – a small piece of an index that stores documents.  
- **Index** – a logical collection of related documents.  

With this setup, your data stays fast and fresh while old records stay safely archived, just like a well‑managed train yard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
