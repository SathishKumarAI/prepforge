---
qid: ing_f2572e606a__aws__local
question: 'Explain: Web Page Similarity and URL Duplication — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 620
total_tokens: 856
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:48-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team building an internal web‑crawler for a media company that indexed over 120 M pages daily. Our goal was twofold: (1) detect “near‑duplicate” pages so we could surface unique content to users, and (2) flag exact URL duplicates that indicated broken links or spam.

**Action – Design & Implementation**  
*Requirements:*  
- **Accuracy:** >95 % recall for near‑duplicates, <0.5 % false positives.  
- **Scalability:** Process 10⁷ URLs per hour with sub‑hour latency.  
- **Cost‑efficiency:** Run within a $50k/month AWS budget.

*Design:*  

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| URL ingestion & deduplication | **Amazon SQS + Lambda** | Serverless queues keep throughput elastic; Lambda can run idempotent dedupe logic in parallel. |
| Content fingerprinting | **AWS Glue + Amazon SageMaker** | Trained a lightweight Siamese network to generate 128‑bit embeddings (fast inference). |
| Near‑duplicate detection | **Amazon Kinesis Data Streams + Elasticsearch (OpenSearch)** | Stream embeddings into OpenSearch with cosine similarity index; supports ~10k queries/sec. |
| Exact URL hashing | **AWS DynamoDB** | Stores a Bloom filter of hashed URLs for O(1) lookups, keeping memory footprint low. |
| Orchestration & monitoring | **Step Functions + CloudWatch** | Visual state machine ensures retries and metrics collection. |

*Trade‑offs:*  
- Using SageMaker for embeddings keeps inference cost high (~$0.20/1000 invocations), but we batch 10 k URLs per request to amortize.  
- OpenSearch offers near real‑time similarity search; an alternative would be Faiss on EC2, but that adds maintenance overhead.

**Result**  
Within three months of deployment:  

| Metric | Before | After |
|--------|--------|-------|
| Duplicate page detection recall | 80 % | **96 %** |
| False‑positive rate | 3.5 % | **0.4 %** |
| Cost per crawled page | $0.12 | **$0.08** |
| Latency (URL to similarity score) | 8 s | **1.2 s** |

We reduced storage of redundant pages by ~30 %, freeing up 200 GB in S3 and cutting downstream recommendation traffic.

**Reflection & Ownership**  
I took full ownership: from requirement gathering to post‑deployment A/B testing. The biggest failure was an initial over‑aggressive Bloom filter that caused false positives; after a quick rollback and tuning, we learned the importance of balancing size vs. accuracy—an example of **Dive Deep** and **Bias for Action** in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
