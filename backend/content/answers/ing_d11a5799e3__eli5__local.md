---
qid: ing_d11a5799e3__eli5__local
question: What is the difference between RAG and fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 209
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:06:40-05:00'
sources: []
---

Think of an AI that writes stories.  
**Fine‑tuning** is like taking a generic notebook and writing a whole new story in it: you give the model a bunch of examples (books, poems) and let it rewrite its internal “brain” so that every time you ask for something, it produces text that sounds like those examples. The model’s knowledge changes permanently.

**Retrieval‑Augmented Generation (RAG)** is more like having a magic library next to the notebook. The AI still uses its original brain, but whenever you ask a question it first pulls in the most relevant books from that library, reads them quickly, and then writes an answer that blends what it already knows with the fresh information. Its core knowledge stays unchanged; only the output is enriched by the retrieved text.

So, fine‑tuning rewrites the model’s memory; RAG supplements its answers on the fly with external documents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
