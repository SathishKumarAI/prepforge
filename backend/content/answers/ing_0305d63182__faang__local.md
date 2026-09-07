---
qid: ing_0305d63182__faang__local
question: 'Explain: Evaluation — BigLaw Bench Deep Dive: Retrieval | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 451
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:50:56-05:00'
sources: []
---

**Clarify**  
The interview asks me to explain how *BigLaw Bench* (Harvey’s legal‑tech platform) evaluates documents during a deep‑retrieval pass. I’ll assume the goal is to rank relevant case law and statutes for a given query, using a neural retriever fine‑tuned on legal corpora.  

**Approach**  
1. **Query encoding** – tokenize & embed via a legal‑domain BERT variant (e.g., Legal-BERT).  
2. **Document indexing** – pre‑compute embeddings for each clause/paragraph, stored in an IVFFAISS index with product quantization for sub‑linear look‑up.  
3. **Retrieval pass** – retrieve top‑k candidates by cosine similarity.  
4. **Re‑ranking** – a cross‑encoder re‑ranker scores query–doc pairs using pairwise contrastive loss, fine‑tuned on annotated relevance judgments.  

**Depth**  
- *Embedding size*: 768 dims; *IVF* shards = 4096 for 1M clauses → ~10 GB index.  
- Retrieval latency ≈ 30 ms/query on a single GPU.  
- Re‑ranking cost: 2× larger transformer, but only on top‑k (e.g., 200), so <5 ms.  
- Training uses in‑house relevance data; loss = margin ranking + KL‑divergence to soft labels.  

**Edge Cases**  
- *Sparse queries*: fallback to keyword search if embedding similarity < threshold.  
- *New statutes*: incremental re‑indexing via a streaming pipeline.  
- *Confidentiality*: embeddings are anonymized; no raw text stored in memory.  

**Optimize & Communicate**  
To scale, shard the index across GPUs and use approximate nearest neighbor (ANN) compression. I’d present this flow with a diagram, highlight latency budgets, and explain trade‑offs: higher recall vs. re‑ranking cost. This showcases structured reasoning, technical depth, and clear communication—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
