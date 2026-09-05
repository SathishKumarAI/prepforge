---
qid: ing_1b4b63995a__star__local
question: 'Explain: SPLADE Implementation — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 335
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:24:03-05:00'
sources: []
---

**Situation** – At my previous company we were building a knowledge‑base search for our internal support portal. The existing keyword engine returned relevant documents but missed many user queries that were phrased in natural language, and the semantic search model we had was too slow to serve live requests.

**Task** – I needed to implement a hybrid retrieval pipeline that combined fast lexical matching with dense embeddings from SPLADE, ensuring sub‑200 ms latency while improving recall by at least 20 % over the baseline.

**Action** – First, I built an inverted index of tokenized queries using Elasticsearch. Then I fine‑tuned a pre‑trained BERT model on our support logs and extracted term‑level sparse vectors with SPLADE, converting them into Lucene postings via the “sparse‑vector” plugin. At query time I performed two parallel searches: a BM25 pass for quick hits and a SPLADE vector pass for semantic matches. Finally, I merged results using a weighted ranker that favored documents scoring high on both passes, tuning weights with a small grid search over validation queries.

**Result** – The hybrid system lifted average precision from 0.42 to 0.58 (≈38 % relative improvement) and increased user click‑through by 18 %. Latency stayed below 190 ms, meeting SLA constraints. I learned how to balance sparse and dense retrieval components and the importance of end‑to‑end profiling for production AI search pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
