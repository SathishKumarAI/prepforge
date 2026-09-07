---
qid: ing_27df6c201b__aws__local
question: 'Explain: RAG vs Long Context — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 429
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:51-05:00'
sources: []
---

**Situation & Task**  
While leading the NLP team at a fintech startup, we had to replace our monolithic question‑answering bot (single‑turn LLM) with a *Retrieval‑Augmented Generation* (RAG) pipeline that could handle 1 M queries/day and return answers in <300 ms. The goal was to improve answer accuracy by 20% while keeping inference costs under $0.05/query.

**Action**  
- **Ownership & Bias for Action:** I scoped the solution, drafted a sprint plan, and led cross‑functional reviews.  
- **Dive Deep into Data:** Built an ingestion DAG in AWS Glue that vectorized documents with Sentence‑BERT and stored embeddings in Amazon DynamoDB (partitioned by topic) + OpenSearch indices for similarity search.  
- **Design & Scalability:** Deployed the retrieval layer on a fleet of Spot EC2 instances behind an Application Load Balancer; used Lambda@Edge to cache top 10k queries in CloudFront, cutting latency by 45%.  
- **Cost & Availability:** Leveraged Amazon SageMaker Endpoint with auto‑scaling for the LLM; set up CloudWatch alarms and automated rollback on error rates >1%.  

**Result**  
- Accuracy jumped from 65% to 86% (ROC AUC), a +21 pp lift.  
- Latency dropped from 650 ms to 250 ms, meeting SLAs.  
- Cost per query fell from $0.12 to $0.04, saving ~$180k/month.  

**Learnings**  
We discovered that fine‑tuning embeddings on domain data reduced retrieval noise by 30%; we documented this in a shared playbook for future teams. This experience showcases **Customer Obsession**, **Ownership**, and **Dive Deep**—the very traits a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
