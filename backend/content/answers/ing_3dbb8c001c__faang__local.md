---
qid: ing_3dbb8c001c__faang__local
question: 'Explain: FDE scenario: an enterprise customer wants a document-Q&A assistant
  over 2M internal documents, pilot in four weeks, and their security team forbids
  data leaving their VPC. Scope and design it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 651
total_tokens: 917
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:07:28-05:00'
sources: []
---

**Clarify**

> *Goal*: Build a document‑Q&A assistant for ~2 M internal PDFs/texts, pilot in 4 wks, with zero data egress from the customer’s VPC.  
> **Assumptions to confirm**:  
> • All documents are already inside the VPC (S3, EFS, etc.).  
> • The security team allows IAM‑role based access but forbids any outbound traffic that could leak content.  
> • The user base will be internal employees only; no external API keys.

---

**Approach**

1. **Data ingestion** → ingest files into a *private* vector store (e.g., AWS Bedrock or an on‑prem LLM with embeddings).  
2. **Embedding generation** → run a lightweight transformer (distilBERT) locally to avoid sending raw text out.  
3. **Indexing** → store vectors in Amazon OpenSearch Service (VPC‑only endpoint).  
4. **Inference** → deploy an LLM inside the VPC (Amazon Bedrock or SageMaker with no internet access).  
5. **Query flow**: user query → vector search → top‑k passages → prompt LLM → response.  

All components run within the VPC; traffic is internal, no egress.

---

**Depth**

*Embedding pipeline*: read file stream → chunk (≤512 tokens) → distilBERT embedding → store `(doc_id, chunk_id, vec)` in OpenSearch.  
*Query handler*: `search(query)` → cosine‑similarity search → retrieve passages → form prompt: `"Answer the question based on these excerpts:"`.  
*LLM*: use a 7B open‑source model (e.g., Llama‑2) fine‑tuned on Q&A style; inference latency ~300 ms per query.  

**Complexities**:  
- **Time**: Ingestion ≈ O(N * chunk_size); with 2 M docs, expect ~1–2 weeks using parallel workers.  
- **Cost**: Compute for embeddings (~$0.20/hr per vCPU), storage for vectors (~$0.03/GB).  

---

**Edge Cases**

*Large documents*: split into overlapping chunks to preserve context.  
*Privacy leaks*: ensure no logging of raw text; only store hashed IDs.  
*Model drift*: schedule periodic re‑embedding if document updates occur.

---

**Optimize & Communicate**

- **Caching**: keep hot passages in memory for 5 min intervals to reduce search latency.  
- **Monitoring**: CloudWatch metrics on query latency, error rates; alert on spikes.  
- **Pilot feedback loop**: collect user ratings, retrain embeddings every 2 weeks.

Narrate progress weekly: “Week 1 – ingestion & vector store ready; Week 2 – LLM deployment; Week 3 – QA integration; Week 4 – pilot launch.” This demonstrates clear milestones, risk mitigation, and adherence to the security constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
