---
qid: ing_975db9ec7c__faang__local
question: 'Explain: Problem statement — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 795
total_tokens: 1025
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:37:06-05:00'
sources: []
---

## 1️⃣ Clarify  
*Problem:* Build an **Enterprise Retrieval‑Augmented Generation (RAG) Assistant** that can answer employee queries by pulling facts from the company’s knowledge base (documents, policies, code repos) and generating concise, policy‑compliant responses.  

*Assumptions to confirm:*
- Data sources are structured (SQL, SharePoint, Git) but also unstructured PDFs/Docs.  
- Response latency target < 1 s for 95 % of requests.  
- GDPR/PII constraints require audit logging and request‑level masking.  
- Users authenticate via SSO; we must respect role‑based access control (RBAC).  

## 2️⃣ Approach  
1. **Data ingestion pipeline** – periodically crawl, normalize, chunk, embed, and store vectors in a high‑throughput vector DB (e.g., Pinecone/Weaviate).  
2. **Retrieval layer** – use semantic similarity + keyword filters + RBAC gating to fetch top‑k relevant passages.  
3. **LLM generation** – prompt the LLM with retrieved context and user query; enforce policy rules via a *guardrails* chain (e.g., OpenAI’s Moderation API).  
4. **Post‑processing & audit** – format answer, strip PII, log request/response for compliance.  

## 3️⃣ Depth  
- **Chunking strategy:** 500‑token chunks with 100‑token overlap; store metadata (source, timestamp, access tags).  
- **Embedding model:** Use a domain‑tuned sentence transformer (e.g., `all-mpnet-base-v2` fine‑tuned on corporate docs) → 768‑dim vectors.  
- **Vector DB choice:** Pinecone for low‑latency similarity search; index tuned with HNSW, query top‑10.  
- **LLM prompt template:**
  ```
  You are a helpful enterprise assistant. Use the following excerpts to answer the question.
  Excerpts:
  {context}
  Question: {user_query}
  Answer (max 200 words): 
  ```  
- **Complexity:** Retrieval O(log N) per query; generation is constant‑time relative to context size (~10 k tokens).  
- **Trade‑offs:** Larger chunk overlap ↑ recall but ↑ storage; higher top‑k ↑ answer quality but more compute.  

## 4️⃣ Edge Cases  
| Scenario | Potential Failure | Test |
|----------|-------------------|------|
| Sensitive doc accessed by unauthorized role | RBAC bypass | Mock user with no access; expect empty context |
| Out‑of‑scope query | LLM hallucination | Verify answer contains “I don’t know” when no relevant chunk |
| Vector drift after policy change | stale embeddings | Run periodic re‑embedding and compare similarity scores |
| Latency spike during peak | DB saturation | Load test with 1k concurrent queries |

## 5️⃣ Optimize & Communicate  
- **Caching:** Frequently used queries → in‑memory cache (Redis) to cut LLM calls.  
- **Batching:** Group user requests per minute for vector search; reduces API overhead.  
- **Explainability UI:** Show top snippets and confidence scores so users trust the answer.  

**Narrative to interviewers:**  
“First, I’d confirm data availability and compliance constraints. Then I’d design a modular pipeline—ingestion, retrieval, generation, audit—so each layer can be swapped (e.g., different LLM). I’d emphasize trade‑offs between chunk size, recall, and cost, and outline tests for security and latency. Finally, I’d propose incremental improvements like caching and explainability to meet enterprise SLAs.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
