---
qid: ing_1f400a43ad__aws__local
question: 'Explain: RAG Architecture Questions — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 488
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:37:50-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of a legacy question‑bank system to a Retrieval‑Augmented Generation (RAG) architecture that powers an AI tutor for 50 k daily users. The goal was to reduce latency from 3 s per answer to <500 ms while keeping cost below $1M/yr.

**Action – Technical Design**  
- **Data layer:** Stored the 2 million questions + metadata in **Amazon S3**; used **AWS Glue** to catalog and partition by topic.  
- **Indexing & Retrieval:** Built a vector index with **OpenSearch** (v7.x) on top of the S3 data, leveraging **KNN‑search** for cosine similarity.  
- **Inference layer:** Deployed an LLM via **Amazon Bedrock** (Claude 2). A **Lambda@Edge** function in front of CloudFront performs request routing and passes retrieved context to Bedrock.  
- **Observability:** Integrated **CloudWatch Logs**, **X-Ray**, and **AWS Cost Explorer** dashboards to track latency, error rates, and spend.

**Result**  
- Latency dropped from 3 s → 420 ms (average) – a 86% improvement.  
- User satisfaction scores rose by 12 points on the NPS survey.  
- Annual cost fell from $1.2M to $0.9M, a 25% savings.

**Reflection & Learning**  
I discovered that partitioning OpenSearch indices by topic dramatically reduced query time; initially I had a monolithic index causing O(N) scans. After re‑partitioning and tuning the KNN parameters, we hit target SLA. This reinforced the *Dive Deep* principle—understanding the data shape drives engineering decisions—and *Ownership*, as I took end‑to‑end responsibility for the migration.

> **Leadership Principles Highlighted**  
- **Customer Obsession** – delivering faster, more reliable answers directly improves learner outcomes.  
- **Ownership & Dive Deep** – from data ingestion to inference, I owned every layer and iterated based on telemetry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
