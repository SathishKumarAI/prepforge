---
qid: ing_f11f8f5bca__aws__local
question: 'Explain: Chunking for Embeddings — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 492
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:22:20-05:00'
sources: []
---

**Situation (Customer Obsession & Ownership)**  
I was tasked to build a search layer for a SaaS knowledge base that had 2 M documents and needed sub‑second semantic relevance. The existing keyword engine returned irrelevant hits, hurting churn.

**Task (Dive Deep & Deliver Results)**  
Implement an embedding‑based ranking pipeline that scales to millions of vectors while keeping latency < 200 ms and cost <$0.02/query.

**Action (Invent & Simplify)**  

1. **Chunking strategy** – split each document into 100–200 word chunks, using a sliding window with 50% overlap.  
2. **Embedding model** – fine‑tuned Sentence‑BERT on domain data; exported to **Amazon SageMaker Endpoint** (GPU instance type `ml.p3.2xlarge`).  
3. **Vector store** – persisted vectors in **Pinecone** (managed service) with a hybrid index: LSH for fast approximate NN + full‑text filter via **OpenSearch**.  
4. **Query flow** – user query → embedding → Pinecone top‑K → OpenSearch to retrieve chunk IDs → combine scores, rank, and return top 10 passages.  
5. **Cost control** – use Spot instances for inference, cache embeddings in **ElastiCache (Redis)**; autoscale based on request rate.

**Result (Quantified Impact)**  
- Latency dropped from 1.2 s to 120 ms (95% reduction).  
- Precision@10 improved by 38%, reducing churn by 12% YoY.  
- Query cost fell from $0.15 to $0.015 per search, saving ~$500k annually.

**Learnings (Bar‑raiser focus)**  
*Ownership*: I owned the end‑to‑end pipeline and rolled it out in two sprints.  
*Dive Deep*: Profiling revealed that chunk overlap was the bottleneck; reducing overlap by 30% cut CPU usage by 18%.  
*Failure*: Initial model overfitted to training data, causing poor recall; resolved by adding synthetic noise and re‑training with a larger validation set.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
