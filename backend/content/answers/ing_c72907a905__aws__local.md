---
qid: ing_c72907a905__aws__local
question: 'Explain: Knowledge Gap Detection — Knowledge Management'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 448
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:52:46-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a product that delivered AI‑powered recommendation engines to enterprise clients. We noticed users repeatedly requested the same data points, yet our knowledge base remained siloed and stale—creating a *knowledge gap* that hurt adoption.

**Action (Dive Deep + Ownership)**  
I scoped the problem by instrumenting **CloudWatch** metrics on FAQ hit rates, then performed root‑cause analysis with **AWS X-Ray** to trace user queries across microservices. I discovered we were storing knowledge in disparate DynamoDB tables without a unified schema.  

To close the gap I designed an **event‑driven pipeline**:  
1. **S3** for raw content ingestion (PDFs, docs).  
2. **AWS Textract** + **Comprehend** to extract entities and intent.  
3. **Amazon Kendra** as a semantic search layer—auto‑indexing new documents in real time.  
4. A **Lambda** orchestrator that updates a central **DynamoDB** knowledge graph, tagging each entry with version, author, and relevance score.  

We added an **SNS** notification to alert the product team whenever a high‑frequency query was not answered by Kendra, ensuring continuous feedback.

**Result (Deliver Results)**  
Within 3 months:  
- FAQ hit rate rose from **45 % → 78 %**.  
- First‑time resolution improved by **32 %**, cutting support tickets by **18 k/month**.  
- The pipeline cost <$2k/yr, and latency for search queries stayed under **200 ms** due to Kendra’s caching.

**Reflection (Bar‑raiser)**  
I took full ownership of the end‑to‑end flow, dove deep into telemetry, quantified impact with clear metrics, and iterated fast—learning that a unified semantic layer is far more scalable than piecemeal tables. This experience sharpened my bias for action and reinforced my commitment to customer obsession.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
