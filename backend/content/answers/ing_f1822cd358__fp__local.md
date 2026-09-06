---
qid: ing_f1822cd358__fp__local
question: 'Explain: Full text queries — Full text queries | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 529
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:32:44-05:00'
sources: []
---

### Why a “Full‑Text” Query is Needed

A search engine’s job is to map a free‑form user query \(q\) to the most relevant documents in an index.  
In practice, queries are natural language strings that contain typos, synonyms and infrequent terms.  
Treating each token as a literal field value would either miss matches (e.g., “colour” vs. “color”) or explode the search space.

### The Core Idea

Elasticsearch builds an **inverted index**: for every term \(t\) it stores a postings list of documents and term frequencies.  
A full‑text query is essentially a *relevance scoring* problem:

1. **Term Matching** – find all documents containing any query token (or a proximity match).
2. **Weighting** – compute a score per document using an information‑theoretic model (BM25, TF‑IDF, or learned embeddings).  
   \[
   \text{score}(d,q) = \sum_{t\in q} \log\!\left(\frac{N-n_t+0.5}{n_t+0.5}\right)\!
   \frac{(k_1+1)n_{t,d}}{k_1(1-b+b\,|d|/avgdl)+n_{t,d}}
   \]
3. **Ranking** – sort by the score, optionally applying rescorers or function scores.

### Deeper Connection

This is an instance of **maximum likelihood estimation under a probabilistic retrieval model**: we estimate the probability that a document would generate the query terms.  
The BM25 formula emerges from assuming a *log‑likelihood* ratio between term presence in relevant vs. non‑relevant documents, grounded in Zipf’s law and document length normalization.

### Non‑Obvious Insight

Most users think “full‑text” means simply matching all words. In fact, the *critical* feature is **length‑aware weighting**: a rare word appearing once in a short doc can outweigh a common word repeated many times in a long doc.  
If you ignore document length (i.e., set \(b=0\)), you’ll over‑penalize small documents and under‑reward the true signal—exactly what modern search engines avoid by normalizing against average document length.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
