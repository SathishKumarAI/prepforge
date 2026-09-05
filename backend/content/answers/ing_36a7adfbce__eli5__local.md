---
qid: ing_36a7adfbce__eli5__local
question: 'Explain: ILM availability — Index lifecycle management (ILM) in Elasticsearch
  | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 220
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:02:17-05:00'
sources: []
---

Imagine your data as a stack of books on a shelf that gets crowded over time. **Index Lifecycle Management (ILM)** is the librarian’s rule‑book that decides when each book should move to a different shelf: a fresh shelf for new titles, a slower one for older editions, and finally a “trash” shelf where it can be safely discarded.

In Elasticsearch, an **index** is that stack of books—just a place where related documents live. ILM watches the index’s age or size and applies a pre‑set **policy**: first keep it on a fast, expensive storage (hot phase), then shift it to cheaper, slower storage (warm phase) once it’s no longer queried often, and finally delete or archive it after a set time (cold/expired phase). This keeps the system running smoothly without you having to manually move data around.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
