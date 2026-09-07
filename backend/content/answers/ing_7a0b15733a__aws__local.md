---
qid: ing_7a0b15733a__aws__local
question: 'Explain: Sentence/Document Embeddings — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 403
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:01:04-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with building a semantic search layer for an enterprise knowledge base that served 200 K daily users. The goal was to replace keyword‑matching with true intent matching using sentence/document embeddings.

**Action**  
I chose **Amazon SageMaker** + **AWS Comprehend Medical** (for domain‑specific models) to generate 768‑dimensional vectors. I stored them in a **Pinecone** index hosted on AWS Fargate for low‑latency retrieval, and orchestrated the pipeline with **Step Functions** for fault tolerance. For real‑time inference I deployed a **SageMaker endpoint** behind an **Application Load Balancer** (ALB) with auto‑scaling based on CPU utilization. To keep costs in check, I used **Spot Instances** for training and **S3 Lifecycle** policies to archive older embeddings.

I also implemented **batch re‑embedding** nightly using a Lambda function that pulled new documents from DynamoDB, updated the index, and emitted CloudWatch metrics for drift monitoring.

**Result**  
Within 90 days we saw a **35% increase in search relevance scores** (measured via click‑through rate) and a **40% reduction in support tickets** related to mis‑retrieval. The system ran at <50 ms latency 99.9% of the time while keeping monthly spend below $2K.

**Reflection**  
I owned the entire pipeline, diving deep into vector sparsity vs. compression trade‑offs. When initial embeddings caused cache misses, I iterated on dimensionality and switched to **FAISS** on EC2 spot for better scalability. This experience reinforced that *Customer Obsession* drives metric selection, while *Ownership* ensures end‑to‑end reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
