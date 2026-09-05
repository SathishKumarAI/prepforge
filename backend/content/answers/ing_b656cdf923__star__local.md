---
qid: ing_b656cdf923__star__local
question: When does BM25 beat dense embeddings on enterprise data, and how would you
  combine them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 346
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:35:48-05:00'
sources: []
---

**Situation** – At a mid‑size legal firm I was building an internal search tool for thousands of case files, contracts and e‑discovery documents. The existing system returned irrelevant results for short queries like “breach notice” or “intellectual property clause.”  

**Task** – Improve precision on those terse, domain‑specific searches while still supporting semantic queries such as “find documents about licensing disputes.”  

**Action** – I first benchmarked BM25 and a sentence‑level dense encoder (SBERT fine‑tuned on legal text). BM25 outperformed the embedding model for 80 % of one‑word or two‑word queries because it matched exact token frequency. For longer, paraphrased queries the embedding was superior. To combine them I built a hybrid ranking pipeline: first run BM25 to retrieve a top‑200 set, then re‑rank that subset with cosine similarity against the dense embeddings. I tuned the fusion weight (BM25 × 0.6 + Dense × 0.4) using a small validation set of 500 query–document pairs, achieving a 12 % lift in MAP over either method alone.  

**Result** – User click‑through rose from 18 % to 32 %, and the system handled 15 % more unique queries per day. I learned that exact‑match retrieval still dominates for short, high‑frequency enterprise terms, but a re‑ranking step with dense embeddings captures semantic nuance—making hybrid ranking essential in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
