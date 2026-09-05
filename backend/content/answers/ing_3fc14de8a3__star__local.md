---
qid: ing_3fc14de8a3__star__local
question: 'Explain: Long Context and Positional Encoding — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 328
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:35:46-05:00'
sources: []
---

**Situation** – During my senior thesis I was tasked with improving a transformer‑based language model’s ability to handle user queries that span several thousand tokens, such as legal contracts or scientific papers. The baseline model capped at 512 tokens and suffered heavy truncation errors.

**Task** – I needed to implement a solution that extended the usable context length to ~8 k tokens while preserving positional awareness so the model could still distinguish word order across the whole span.

**Action** – I first explored *relative* positional encodings (T5, Longformer) and realized they only encode local relationships. To keep global coherence, I integrated a *learned sinusoidal* embedding that maps each token’s absolute position to a high‑dimensional vector, then added it to the input embeddings before attention. Next, I replaced the dense self‑attention with *sparse* patterns (segment‑wise windows + global tokens) to reduce quadratic complexity. Finally, I fine‑tuned on a mixed corpus of legal and scientific texts, monitoring loss on held‑out long passages.

**Result** – The model handled 8 k‑token inputs with only a 4% increase in perplexity compared to the baseline, and downstream QA accuracy rose from 68% to 82%. I learned that marrying positional encodings with sparse attention is key for scaling transformers without sacrificing order awareness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
