---
qid: ing_203d66abed__star__local
question: 'Explain: Design a RAG system over an enterprise''s data: 10M documents
  in object storage plus structured tables, with per-user access controls. Walk me
  through the architecture and how you''d evaluate it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 429
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:33:47-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a Retrieval‑Augmented Generation (RAG) layer for a global finance client that had 10 million PDFs and CSVs in S3 plus hundreds of relational tables in Snowflake, all governed by fine‑grained user ACLs. The goal was to let analysts ask natural‑language questions while ensuring they only saw data they were authorized to see.

**Task** – I needed to design a scalable, secure architecture that could ingest the unstructured blobs, index them for fast semantic search, and merge results with structured queries, all while honoring per‑user access policies and meeting 2 second latency SLA for interactive dashboards.

**Action** – I set up an ingestion pipeline using AWS Glue to convert PDFs to text via Textract, then vectorized chunks with Sentence‑Transformers on SageMaker. The vectors were stored in a Pinecone cluster indexed by document ID and user‑role tags. For structured data, I created Snowflake views that automatically apply row‑level security (RLS) based on the same role metadata. A Lambda layer acted as the RAG orchestrator: it queried Pinecone for top 10 embeddings, fetched matching docs from S3, ran a lightweight SQL query against Snowflake for related tables, and fed everything into OpenAI’s GPT‑4o via the new “retrieval” endpoint. I wrapped the whole flow in an API Gateway secured with Cognito, ensuring that each request carried the user’s JWT, which Lambda used to filter results.

**Result** – The system served 95 % of queries under 1.8 seconds and reduced manual report‑generation time by 70 %. Security audits confirmed no cross‑role data leakage. I learned how to blend vector search with RLS in a multi‑cloud environment, and that keeping the retrieval layer stateless (via Lambda) simplifies scaling and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
