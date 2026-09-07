---
qid: ing_85f37dceeb__aws__local
question: 'Explain: Walk me through every stage of a production RAG pipeline, from
  raw documents to a cited answer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 422
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:27:35-05:00'
sources: []
---

**Situation & Task (Ownership, Customer Obsession)**  
When our product team rolled out an internal knowledge‑base chatbot, I owned the end‑to‑end Retrieval‑Augmented Generation (RAG) pipeline to guarantee accurate, cited answers for compliance auditors.

**Action – Design & Implementation (Dive Deep, Bias for Action)**  

| Stage | Key AWS Services | Why |
|-------|------------------|-----|
| 1. **Ingest raw docs** | S3 + Glue ETL | Scalable object store; schema‑agnostic crawler |
| 2. **Vectorize & index** | SageMaker GroundTruth → embeddings (sentence‑BERT) stored in DynamoDB + Amazon Kendra index | Fast similarity search, managed service reduces ops |
| 3. **Retrieve top‑k passages** | Kendra query API + Lambda orchestrator | Low latency (<50 ms), auto‑scales |
| 4. **Generate answer** | Bedrock (Claude) with prompt “Answer and cite sources” | Built‑in citation tokens; cost $0.01/1K tokens |
| 5. **Post‑process & audit** | Step Functions + DynamoDB for audit log | Guarantees traceability, compliance flagging |

**Result (Deliver Results)**  
- Reduced answer latency from 3 s to <200 ms per request.  
- Citation accuracy ↑95% (from baseline 70%) measured by manual audit over 1,000 queries.  
- Operational cost cut by 30% vs. a monolithic Lambda‑only design.

**Learnings (Bar‑raiser focus)**  
Tried an initial ElasticSearch index; it hit memory limits at 2 M docs. Switched to Kendra—learned to evaluate managed services for scale and security. This iteration taught us that ownership means iterating until the architecture meets both performance and compliance targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
