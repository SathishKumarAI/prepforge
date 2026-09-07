---
qid: ing_07168fb7ac__aws__local
question: 'Explain: The RAG Taxonomy — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 398
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:42:04-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team that built an enterprise search platform, we needed to surface the most relevant documents in real time. The problem was two‑fold: (1) we had millions of unstructured PDFs and (2) our users demanded sub‑second answer retrieval.  

**Action**  
I introduced a **RAG (Retrieve‑Augment‑Generate)** taxonomy that decomposes the workflow into *Retrieval*, *Augmentation*, and *Generation* layers, each with clear ownership and metrics.

1. **Retrieval** – built an index in Amazon OpenSearch Service, sharded by semantic topic tags.  
2. **Augmentation** – used a fine‑tuned Sentence‑Transformers model on SageMaker to embed documents; stored embeddings in DynamoDB for low‑latency similarity search.  
3. **Generation** – deployed a lightweight Llama‑2 inference endpoint on EC2 Spot + EFS, passing the top‑k retrieved snippets.

We measured *recall@10* and *generation latency*. After deployment, recall jumped from 65 % to 92 %, while average response time fell from 3.1 s to 0.7 s— a **70 % performance lift** with a **$2k/month cost saving** by using Spot instances.

**Result**  
The RAG taxonomy became the standard architecture for all downstream NLP services, earning us an internal “Innovate & Simplify” award and reducing engineering effort by 35 %.  

> *Leadership Principles:* **Ownership**, **Dive Deep** (embedding design choices), **Bias for Action** (rapid prototyping on SageMaker), **Deliver Results** (quantified metric improvement).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
