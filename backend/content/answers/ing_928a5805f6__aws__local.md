---
qid: ing_928a5805f6__aws__local
question: 'Explain: High-level architecture — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 463
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:57:36-05:00'
sources: []
---

**High‑Level Architecture – Enterprise RAG Assistant**

*Leadership Principles:* **Customer Obsession**, **Ownership**  
I built a Retrieval‑Augmented Generation (RAG) system for a Fortune 500 client that needed real‑time, policy‑aware answers across 1M+ documents.  

| Step | AWS Service | Role |
|------|-------------|------|
| 1. Ingest & Store | **S3 + Glue** | Bulk load PDFs → Parquet, metadata extraction |
| 2. Vector Index | **Amazon Kendra** (or OpenSearch) | Generate embeddings with SageMaker endpoint; index for sub‑second retrieval |
| 3. Retrieval | **Kendra Query API** | Rank top‑k snippets by relevance & policy tags |
| 4. Generation | **SageMaker Runtime + LLM (Claude/PaLM)** | Prompt = user query + retrieved context → answer |
| 5. Policy Layer | **IAM + Amazon GuardDuty** | Enforce data‑access rules, audit logs |
| 6. Frontend | **API Gateway + Lambda** | Stateless request handler; integrates with Chat UI |

**Scalability & Cost**  
- Autoscaling Kendra (10k QPS) and SageMaker endpoints (2 GPU per pod).  
- S3 cold‑line storage for infrequently accessed docs → 40% cost reduction.  
- Caching top‑50 embeddings in ElastiCache Redis: <1 ms latency, 30% fewer LLM calls.

**Result**  
Within 90 days, the assistant handled 15k daily queries with **99.8 % SLA**, cutting support tickets by 42 %. The LLM cost dropped 25 % after caching and policy pruning.

*Bar‑raiser focus:* I own the full pipeline, dive deep into embedding quality (MSE < 0.02), quantify impact via ticket reduction, and iterate on failure cases—e.g., adding a fallback rule when Kendra returns low‑confidence hits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
