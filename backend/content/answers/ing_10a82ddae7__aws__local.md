---
qid: ing_10a82ddae7__aws__local
question: 'Explain: Encoding Phase — Late Interaction Colbert'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 463
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:03:08-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign our FAQ search engine so that it could return relevant answers in < 200 ms while scaling to millions of queries per day. The incumbent BM25 approach returned a high recall but the latency grew linearly with document size.

**Action – Late‑Interaction COLBERT Encoding**  
1. **Requirements**: *low latency, high accuracy, 99.9% availability, cost ≤ $0.02/query*.  
2. **Design**  
   - Encode queries and passages independently using a shared BERT encoder (Amazon SageMaker).  
   - Store the passage embeddings in an Amazon DynamoDB table with GSI on *token‑ids* for fast retrieval.  
   - At query time, retrieve top‑k candidate passages via a two‑stage pipeline:  
     1) **First stage** – approximate nearest neighbour search using Faiss on GPU instances (p3.xlarge).  
     2) **Second stage** – compute the late‑interaction dot‑product between query and passage token embeddings (GPU inference), rank, and return top‑5.  
   - Autoscale GPU workers with Amazon ECS + Application Auto Scaling; use Spot instances to keep cost low.  

**Result**  
- Latency dropped from 1.2 s to **< 200 ms** (4× faster).  
- Recall@10 improved from 68% to **82%**, precision@5 rose from 55% to **71%**.  
- Daily cost reduced by 35% while maintaining 99.95% availability.

**Reflection & Learning**  
I took full ownership, diving deep into BERT fine‑tuning and Faiss indexing trade‑offs. The biggest failure was an initial over‑optimistic spot‑instance usage that caused transient throttling; I mitigated it by adding a small on‑demand buffer. This experience reinforced *Ownership* and *Dive Deep*, key Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
