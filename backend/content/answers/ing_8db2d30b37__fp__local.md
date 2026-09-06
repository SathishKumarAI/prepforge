---
qid: ing_8db2d30b37__fp__local
question: 'Explain: Architecture 3: Staged Retrieval — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 555
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:06:09-05:00'
sources: []
---

### Staged Retrieval (Hybrid Search)

**Problem to solve:**  
When a user submits a query \(q\), we want the top‑\(k\) documents that *both* (1) are lexically relevant and (2) capture semantic similarity beyond exact term matches. Relying solely on BM25 or pure embeddings fails: BM25 ignores meaning, embeddings suffer from noise and lack of interpretability.

**Why a two‑stage pipeline is optimal:**  
Let \(D\) be the corpus. Stage 1 uses an *indexable* lexical scorer \(S_{\text{lex}}(q,d)\) (e.g., BM25) to retrieve a candidate set \(C\subset D\) of size \(m \gg k\). This step is linear in \(|D|\) but fast due to inverted indexes.  
Stage 2 re‑scores only \(C\) with a *dense* similarity function \(S_{\text{emb}}(q,d)=\cos(\mathbf{e}_q,\mathbf{e}_d)\), where embeddings are high‑dimensional vectors learned by a transformer. Since \(|C|\ll |D|\), we can afford GPU‑accelerated dot products, preserving the nuance that lexical overlap alone would miss.

**Mathematical justification:**  
We aim to approximate the joint score
\[
S(q,d)=\alpha S_{\text{lex}}(q,d)+\beta S_{\text{emb}}(q,d)
\]
for learned weights \(\alpha,\beta>0\). By selecting \(C=\arg\max_{d} S_{\text{lex}}(q,d)\) we guarantee that every document in the final list satisfies
\[
S(q,d) \ge \alpha S_{\text{lex}}(q,d)+\beta \min_{d'\in C} S_{\text{emb}}(q,d').
\]
Thus any document omitted by Stage 1 cannot beat the best possible embedded score among candidates, ensuring near‑optimality while keeping computation tractable.

**Non‑obvious insight:**  
The *lexical filter* also acts as a *noise reducer* for embeddings: many irrelevant high‑dimensional vectors would otherwise dominate similarity due to the curse of dimensionality. By first pruning with a sparse index, we implicitly regularize the embedding space, leading to sharper cosine scores and fewer false positives—something most practitioners overlook when combining modalities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
