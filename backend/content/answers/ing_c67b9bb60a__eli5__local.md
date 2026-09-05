---
qid: ing_c67b9bb60a__eli5__local
question: 'Explain: Near real-time search — Near real-time search | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 216
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:50:27-05:00'
sources: []
---

Imagine a library that updates its catalog as soon as new books arrive, but not instantly—just a few minutes later. In the same way, **near real‑time (NRT) search** in Elastic works: when you add or change data, the system first writes it to a fast “write buffer.” After a short pause (typically one second), that buffer is flushed into an index so that new queries see the latest information. Think of it as a newsroom that publishes headlines within minutes after a story breaks; readers get fresh content almost immediately, but there’s still a tiny delay because the editor must proofread and format it first.

Key terms:
- **Index** – a searchable collection of documents (like a catalog).
- **Flush** – moving data from the write buffer into the index.
- **Near real‑time** – updates become visible in a few seconds, not instantly but fast enough for most applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
