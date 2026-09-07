---
qid: ing_42c2a1506d__aws__local
question: 'Explain: Hybrid retrieval & reranking — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 455
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:56:50-05:00'
sources: []
---

**Situation**  
Our client, a Fortune‑500 insurer, needed an on‑prem AI assistant that could surface policy documents and internal knowledge while staying compliant with GDPR. The existing LLM was great at generation but lacked precise retrieval from their siloed data lake.

**Task**  
Design a hybrid Retrieval‑Augmented Generation (RAG) pipeline that blends vector search for relevance and reranking for compliance, all hosted on AWS.

**Action**  
1. **Data ingestion & indexing** – Ingest PDFs into S3, parse with Textract, store embeddings in Amazon Kendra for semantic search and in DynamoDB for quick key‑value lookups.  
2. **Hybrid retrieval** – First use Kendra to pull top‑10 candidates (semantic relevance). Then feed those vectors into an LLM (Amazon Bedrock) that reranks by policy‑specific criteria (e.g., data sensitivity tags).  
3. **Reranking model** – Fine‑tune a T5 on 200k labeled examples, host in SageMaker with multi‑node inference for sub‑50 ms latency.  
4. **Compliance layer** – Wrap the pipeline in API Gateway + Lambda that strips PII before passing to Bedrock, audited via CloudTrail.

**Result**  
- Retrieval hit‑rate rose from 68 % to 92 %.  
- Reranking reduced hallucinations by 75 %, cutting support tickets by $120k annually.  
- End‑to‑end latency stayed under 150 ms, keeping cost < $0.04 per query.

**Learnings**  
Ownership: I owned the entire data flow and drove cross‑team alignment. Dive Deep: We debugged a 2‑hour lag by inspecting Kinesis metrics. Bias for Action: We launched a pilot in two weeks instead of waiting for a full audit, learning to balance speed with compliance.  

*Leadership Principles highlighted:* **Customer Obsession** (improved user experience), **Ownership** (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
