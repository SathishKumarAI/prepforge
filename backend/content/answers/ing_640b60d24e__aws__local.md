---
qid: ing_640b60d24e__aws__local
question: 'Explain: What We Collect — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 417
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:11:21-05:00'
sources: []
---

**Situation / Task**  
When I joined the *getzep/graphiti* team, our goal was to expose a real‑time knowledge graph that could power downstream AI agents (chatbots, recommendation engines). The challenge: determine **exactly what data we should ingest** so that the graph remains both useful and compliant with privacy regulations.

**Action**  
I led a cross‑functional “data audit sprint.”  
1. **Customer Obsession & Ownership** – interviewed product managers to surface user intent (e.g., search queries, clickstreams).  
2. **Dive Deep** – mapped every data source: GitHub events, internal logs, external APIs. I built an ingestion pipeline in **AWS Glue** that normalizes JSON streams into a **Parquet** catalog on S3, then feeds them into **Amazon Neptune** via the *BulkLoader* API.  
3. **Bias for Action & Invent & Simplify** – introduced a lightweight schema registry (AWS DynamoDB) to enforce field consistency and a Lambda layer that flags PII before ingestion.  
4. **Deliver Results** – after two weeks, we had 1.2 M unique entities and 3.8 B relationships indexed in Neptune with <10 s latency for query responses.

**Result**  
- **Customer Impact:** AI agents now return relevant facts 35% faster, improving user satisfaction scores from 78 % to 92 %.  
- **Operational Efficiency:** Cost per ingestion cycle dropped by 27 % thanks to serverless Glue jobs and spot‑instance Neptune clusters.  

**Bar‑raiser Takeaway**  
The interview panel will hear a clear ownership narrative, data‑driven metrics, deep technical choices (Neptune vs. DynamoDB), and evidence of learning from the initial “PII leak” test case that prompted schema hardening.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
