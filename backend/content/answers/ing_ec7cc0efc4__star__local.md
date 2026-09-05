---
qid: ing_ec7cc0efc4__star__local
question: 'Explain: Pattern 2: ColBERT as Reranker (Most Common)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 365
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:21:53-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with improving the search experience for a legal‑document portal that served over 50,000 users daily. The initial BM25 ranking returned relevant cases, but precision at top‑5 hovered around 45 %, causing reviewers to spend too much time filtering noise.

**Task:**  
I needed to boost top‑k relevance without sacrificing latency, aiming for >70 % precision@5 while keeping query response under 200 ms on our GPU cluster.

**Action:**  
I integrated ColBERT as a reranker. First, I re‑encoded all documents with the pretrained ColBERT base model (768‑dim embeddings) and stored them in an FAISS index for fast retrieval. For each user query, BM25 returned 100 candidates; I then passed those through ColBERT’s late interaction layer, computing dot‑products between token embeddings of query and candidate sentences. I implemented a batching strategy that sent 32 queries at once to the GPU, allowing us to keep inference time below our latency budget. Finally, I fine‑tuned the model on a labeled subset (10k relevance judgments) using triplet loss, which improved ranking signals.

**Result:**  
Precision@5 jumped from 45 % to 72 %, and recall at 20 remained above 85 %. Query latency stayed at ~180 ms. I learned that combining dense late‑interaction reranking with a lightweight BM25 backbone can deliver production‑ready performance gains, and that careful batching on GPUs is key to meeting strict SLA constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
