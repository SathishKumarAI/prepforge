---
qid: ing_c4a1cd35c6__aws__local
question: 'Explain: Archives — AI Research Engineer Interview Guide: OpenAI, Anthropic,
  DeepMind (2026) - Sundeep Teki'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 473
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:47:34-05:00'
sources: []
---

**Situation & Task**  
During my last role at a cloud‑native AI lab, we were asked to build an *archives* system that could ingest millions of research papers, auto‑tag them with semantic embeddings, and provide instant retrieval for scientists worldwide. The goal was to reduce the time from paper upload to discoverability by **70 %**.

**Action – Technical Design**  
1. **Data Ingestion:** AWS Kinesis Data Streams → Lambda → S3 Glacier Deep Archive (cost‑effective long‑term storage).  
2. **Processing Pipeline:** Step Functions orchestrate SageMaker endpoints that run a distilled BERT model to generate embeddings and extract metadata.  
3. **Indexing & Search:** Amazon OpenSearch Service hosts the embeddings in an ANN index; we enable *Hybrid Search* for keyword + vector queries.  
4. **Scalability/Availability:** Auto‑scaling on Lambda, multi‑AZ S3, and OpenSearch clusters with node replication (99.99 % SLA).  
5. **Cost Trade‑off:** We chose **S3 Glacier Deep Archive** over standard storage to cut storage costs by ~60 % while keeping retrieval latency < 1 s for the top 10 % of queries.

**Result**  
- Query response time dropped from 4 s → 0.8 s (≥ 80 % faster).  
- Search relevance score (Mean Reciprocal Rank) improved from 0.62 to 0.78.  
- Monthly storage cost decreased by $120k while maintaining compliance with GDPR.

**Leadership Principles & Learning**  
*Customer Obsession*: We interviewed end‑users daily, iterating on the UI until satisfaction scores hit **4.7/5**.  
*Ownership & Dive Deep*: I wrote unit tests for every Lambda, conducted chaos engineering to surface race conditions, and documented failure modes in Confluence so the team could avoid repeating them.  

This experience demonstrates my ability to own a complex AI‑powered product end‑to‑end, dive deep into AWS services, deliver measurable business impact, and continuously learn from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
