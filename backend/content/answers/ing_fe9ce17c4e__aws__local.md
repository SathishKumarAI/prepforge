---
qid: ing_fe9ce17c4e__aws__local
question: Your product has several distinct corpora - docs, tickets, code, CRM. How
  do you route queries?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 465
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:53:47-05:00'
sources: []
---

**Situation & Task**  
When launching our AI‑powered helpdesk, I noticed that user queries could come from four very different data stores (knowledge base docs, ticket history, internal code repos, and CRM). If we routed everything through a single search layer, latency spiked and costs ballooned.  

**Action – Design & Execution**  
1. **Segmentation Layer** – Built an *Intent Classifier* (Amazon SageMaker) that maps the query to one of four “corpora buckets.”  
2. **Dedicated Retrieval Pipelines** –  
   - Docs → Amazon Kendra index (cost‑effective, 0.5 s avg latency).  
   - Tickets → DynamoDB + ElasticSearch for fast filtering on status/priority.  
   - Code → CodeGuru Reviewer embeddings stored in Pinecone (fast vector similarity).  
   - CRM → RDS read replica with parameter tuning for low‑latency joins.  
3. **Orchestration** – AWS Step Functions coordinate the calls, cache results in ElastiCache to avoid duplicate lookups.  
4. **Observability** – CloudWatch metrics + X-Ray traces show that routing decisions reduce overall response time from 3.2 s to **1.1 s** (65% improvement) and cut query‑per‑month cost by 28%.

**Result**  
Within two months, customer satisfaction scores rose from 4.2/5 to **4.7/5**, and support agents reported a 40% decrease in time spent switching contexts.

---

### Leadership Principles  
- **Customer Obsession** – Fast, accurate answers directly improve the user experience.  
- **Ownership** – I took end‑to‑end responsibility for the routing system and its continuous improvement.  

### Bar‑raiser Takeaways  
- Deep dive into data characteristics to justify separate pipelines.  
- Quantified impact (latency & cost savings).  
- Continuous learning loop: A/B testing of intent models, retraining on drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
