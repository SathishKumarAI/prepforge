---
qid: ing_dc448cff99__aws__local
question: 'Explain: 4 Embeddings and Vector Databases — AI Concepts - by Neo Kim and
  Logan Thorneloe'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 396
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:36:51-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional AI squad at my previous company, we were asked to build a real‑time recommendation engine that could surface the most relevant content for millions of users. The core challenge was efficiently querying high‑dimensional embeddings—textual and visual—at scale.

**Action**  
1. **Embeddings** – I chose HuggingFace’s *sentence‑transformers* (BERT‑based) for text and ResNet‑50 for images, producing 768‑dim vectors.  
2. **Vector Database** – We evaluated Milvus, Pinecone, and AWS OpenSearch with k‑NN plugin. For tighter integration and cost control, we selected **Amazon Kendra** + **AWS Managed Elasticsearch Service (OpenSearch)**.  
3. **Pipeline** – Data → Lambda → SageMaker endpoint for embedding → DynamoDB store of raw features → OpenSearch index with `knn` field.  
4. **Scalability & Cost** – Leveraged OpenSearch’s autoscaling and spot instances; used S3 lifecycle to archive older embeddings, cutting storage costs by 35 %.  
5. **Availability** – Multi‑AZ deployments and read replicas ensured <99.9 % uptime during peak traffic.

**Result**  
Within three months, query latency dropped from 1.2 s to 150 ms, while click‑through rate improved by **18 %**, translating to $4M additional annual revenue.  

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end stack, dove deep into vector similarity math, quantified performance gains, and iterated after a failed initial attempt that over‑provisioned GPU resources—learning to balance compute vs. cost early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
