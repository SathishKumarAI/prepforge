---
qid: ing_fb3655151f__fp__local
question: 'Explain: Inverted Index — Invertedindex'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 454
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:54:01-05:00'
sources: []
---

### From “What must a search engine do?” to the *inverted index*

A retrieval system’s core problem: **given a query \(q\) (a set of terms), quickly return all documents that contain \(q\)**.  
Naïvely we would scan every document, which is \(\mathcal{O}(N)\).  For large corpora this is infeasible.

The insight comes from *information‑theoretic compression*: most documents share few words; the space of possible term–document pairs is sparse.  
Let \(T\) be the set of unique terms and \(D\) the set of documents.  Define a binary matrix \(M\in\{0,1\}^{|T|\times |D|}\) where \(M_{t,d}=1\) iff term \(t\) occurs in document \(d\).  
Querying is then a vector–matrix multiplication:  
\( \mathbf{q}^\top M = \) list of documents with all query terms.  

Storing \(M\) dense would be wasteful; instead we **invert the index**: for each term, keep a *posting list*—the sorted set of document IDs where it appears.  
During retrieval, intersect the posting lists of query terms (merge‑based intersection), yielding exactly the documents containing all terms.  
This reduces time to \(\mathcal{O}(\sum |L_t|)\) where \(L_t\) is a posting list, typically far smaller than \(|D|\).

**Non‑obvious insight:** The inverted index is not just a data structure—it’s an *implicit factorization* of the term–document matrix into sparse vectors.  By treating postings as one‑hot embeddings and intersecting them, we perform a linear algebraic operation (dot product) in compressed form. This view explains why the same mechanism underlies modern vector‑search engines: the inverted index is the sparsity‑aware dual of dense embeddings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
