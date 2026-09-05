---
qid: ing_a19187547e__star__local
question: What is learned sparse retrieval, SPLADE-style, and when would you pick
  it over BM25 or a dense retriever?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 352
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:55:57-05:00'
sources: []
---

**Situation** – In my last role at a news aggregation startup we were scaling our search API from 5 M to 50 M daily queries. The existing BM25‑based pipeline was fast but struggled with emerging topics; recall dropped by ~15% on new vocabulary.

**Task** – I had to design a retrieval system that could learn term importance from data, handle out‑of‑vocabulary words, and still keep latency under 10 ms per query for production traffic.

**Action** – I prototyped a SPLADE‑style learned sparse retriever:  
1. Trained a lightweight transformer (BERT‑base) on click‑through logs to predict token logits.  
2. Applied a high‑threshold sparsification to keep only the top 5% of tokens per document, storing them in an inverted index with DocID and weight vectors.  
3. Integrated the index into our existing Lucene cluster using a custom scorer that combined BM25 scores with learned weights via linear interpolation (α = 0.6).  
4. Benchmarked latency on a GPU‑free node; it stayed at 8 ms while recall improved by 12% on unseen topics.

**Result** – The new system lifted overall precision@10 from 0.71 to 0.78 and reduced query latency variance by 30%. I learned that learned sparse retrieval is ideal when you need the interpretability and speed of a sparse index but want data‑driven term weighting—especially for rapidly evolving domains where dense retrievers struggle with vocabulary mismatch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
