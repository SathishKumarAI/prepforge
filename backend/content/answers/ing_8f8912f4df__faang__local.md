---
qid: ing_8f8912f4df__faang__local
question: 'Explain: Title: From Local to Global: A Graph RAG Approach to Query-Focused
  Summarization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 554
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:18:07-05:00'
sources: []
---

**Clarify**  
You’re asking how a *Region‑Adjacency Graph* (RAG) can move from local sentence‑level features to a global query‑centric summary. I’ll assume we have:  
1. A text passage split into sentences or clauses.  
2. A user query (or set of keywords).  
3. The goal is an extractive, ranked summary that satisfies the query.

**Approach**  
1. **Graph construction** – nodes = sentences; edges encode semantic similarity (cosine over embeddings) and discourse adjacency.  
2. **Local scoring** – each node gets a *query‑relevance* score (TF‑IDF or BERT similarity).  
3. **Global propagation** – run a graph neural network or personalized PageRank to diffuse relevance across connected nodes, capturing context beyond the sentence itself.  
4. **Selection** – greedily pick top‑scoring nodes while enforcing coverage and redundancy constraints.

**Depth**  
- Edge weights \(w_{ij} = \alpha\,\text{sim}(s_i,s_j)+ (1-\alpha)\mathbf{1}_{|i-j|\le 1}\).  
- Node feature vector \(h_i=[\text{embedding}_i;\,q_i]\) where \(q_i\) is query‑sentence similarity.  
- GNN update: \(h_i^{(t+1)}=\sigma(W_1 h_i^{(t)}+\sum_j w_{ij}W_2 h_j^{(t)})\).  
- Complexity: O(|V|^2) for dense similarity, but we sparsify to top‑k neighbors → O(k|V|).  
- The final ranking is \(\text{score}(i)=h_i^{(T)}\cdot u_q\), where \(u_q\) is a query vector.

**Edge Cases**  
- Short texts: graph becomes trivial; fallback to TF‑IDF.  
- Highly repetitive content: redundancy filter may discard useful sentences.  
- Noisy embeddings: use robust pretraining or fine‑tune on domain data.

**Optimize & Communicate**  
We can replace dense similarity with locality sensitive hashing to reduce cost, and cache the graph for repeated queries. In an interview I’d illustrate this pipeline with a diagram, discuss trade‑offs (accuracy vs speed), and suggest evaluation metrics (ROUGE‑Q, query recall). This shows clear problem framing, algorithmic depth, and practical awareness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
