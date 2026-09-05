---
qid: ing_8596e7c2dd__eli5__local
question: 'Explain: Relational databases tend to have vertical scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 194
total_tokens: 352
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:08:22-05:00'
sources: []
---

Think of a relational database as a single‑room office that gets busier over time.  
When more people come in, the only way to keep it running smoothly is to make that room bigger: add a stronger desk, faster computer, more shelves, or better lighting. In tech terms, you “scale up” – upgrade the server’s CPU, RAM, storage, or network speed.  

That’s vertical scaling.  
It’s different from horizontal scaling (adding new rooms). A relational database keeps all its tables on one machine; it can’t just split them across many machines without special tricks. So to handle more data or faster queries, you keep the same database and simply give that single machine more power. This is why companies often upgrade their hardware rather than add new nodes when using traditional relational databases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
