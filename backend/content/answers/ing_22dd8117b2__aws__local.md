---
qid: ing_22dd8117b2__aws__local
question: 'Explain: Scenario — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 472
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:45:34-05:00'
sources: []
---

**Scenario – Building an Enterprise Retrieval‑Augmented Generation (RAG) System**

**Situation & Task**  
I led a 6‑person team to replace our legacy knowledge‑base chatbot with an AI‑powered RAG that could pull from millions of internal documents while respecting GDPR and minimizing latency for global users.

**Action**  
1. **Ownership + Dive Deep** – I scoped data ingestion: 3 TB of PDFs, Confluence pages, and Jira tickets.  
2. **Design** –  
   * **Ingest & Vectorize**: Lambda → SQS → SageMaker Endpoint (sentence‑transformer) → DynamoDB for embeddings.  
   * **Search Layer**: OpenSearch (managed) with vector search plugin; auto‑scaling based on query volume.  
   * **Generation Layer**: Amazon Bedrock “Claude 3” via API Gateway + Lambda, feeding the top‑k retrieved docs.  
3. **Scalability & Cost** – Autoscaling on CPU/memory for Lambda, OpenSearch node pool sized to 10 GB per shard (≈$0.20/hr each). Estimated monthly cost: $12K vs $35K for legacy VM cluster.  
4. **Availability** – Multi‑AZ deployment; S3 versioning + Glacier backup for data durability; CloudWatch alarms on latency >200 ms trigger auto‑scaling.

**Result**  
- **Latency** dropped from 1.8 s to 300 ms (70% improvement).  
- **Accuracy** (NDCG@5) rose to 0.82 vs 0.56 baseline.  
- **Cost** cut by 65%, freeing $25K/month for R&D.  
- 95% of users reported “faster answers” in post‑deployment survey.

**Reflection & Bar‑Raiser Insight**  
I learned that early trade‑offs between vector size and recall drastically affect downstream cost; iterating on embedding dimensionality saved us $3K/month. The bar‑raiser will note my end‑to‑end ownership, deep dive into data pipelines, quantifiable impact, and iterative learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
