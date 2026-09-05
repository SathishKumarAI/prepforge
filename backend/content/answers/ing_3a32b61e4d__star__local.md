---
qid: ing_3a32b61e4d__star__local
question: How do you decide on a chunking strategy, and how do you know your chunking
  is any good?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 347
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:57-05:00'
sources: []
---

**Situation** – While building an enterprise search engine for a financial services client, the raw text corpus was 30 GB of PDF reports with complex tables and footnotes. The initial full‑text indexing caused 45 % slower query latency and a 12 % drop in recall because the tokenizer split on line breaks inside tables.

**Task** – I had to devise a chunking strategy that balanced token limits for downstream LLM embeddings, preserved semantic context, and kept retrieval fast.

**Action** – First, I profiled the documents with `pdfminer` to identify structural markers (headers, table separators). I then implemented a hybrid splitter: 1) paragraph‑level chunks capped at 512 tokens; 2) for tables, I used a custom rule that collapsed rows into a single logical chunk and appended column titles. I encoded each chunk with Sentence‑BERT and stored vectors in an IVF index (FAISS). To validate quality, I ran a held‑out query set against both the naive splitter and my hybrid approach, measuring recall@k and mean reciprocal rank (MRR). I also introduced a small human audit: 200 random chunks were manually checked for semantic coherence.

**Result** – The hybrid strategy reduced token count per document by 18 % while improving recall@5 from 68 % to 84 % and MRR from 0.42 to 0.57. Latency dropped by 35 %. I learned that chunk boundaries must align with the data’s natural structure, and continuous metric monitoring is essential to catch drift as new document types arrive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
