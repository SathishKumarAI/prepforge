---
qid: ing_e114fce77f__eli5__local
question: 'Explain: Apache Hadoop — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 216
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:31:58-05:00'
sources: []
---

Think of a library that catalogs books. **Batch processing** is like a librarian who sits at night and reads every new book in a pile, then writes a single, detailed catalog entry for each one. All the work happens after the books arrive; you only get the finished catalog later.

**Stream processing** is like a librarian standing by the entrance, instantly jotting down a quick note as each book passes by. The notes are short and live, ready to be used right away—maybe to alert someone that a new bestseller just arrived.

In Hadoop terms:
- **Batch**: jobs (MapReduce, Hive) run on large data sets after they’re fully collected; great for deep analysis but slower.
- **Stream**: tools (Apache Flink, Kafka Streams) handle continuous data in real time, giving near‑instant insights.

So batch = “offline, thorough” and stream = “online, immediate.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
