---
qid: ing_f7dca0e51b__faang__local
question: 'Explain: Q108: Design a real-time fraud detection system with a hard p99
  < 500ms latency requirement, using both ML rules and an LLM-RAG layer. Walk through
  the latency budget breakdown.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 592
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:16:25-05:00'
sources: []
---

**Clarify**  
We’re building a *real‑time* fraud detector that must keep its 99th percentile response time under **500 ms**. It will combine (1) deterministic ML rules (e.g., decision trees, rule engines) and (2) an LLM‑RAG layer that can reason over external knowledge bases for edge cases. I’ll assume the system processes a single transaction per request, receives a well‑structured payload, and must return a verdict (`approve`/`deny`) plus optional confidence.

**Approach**  
1. **Ingest & validation** – parse JSON → protobuf → internal DTO.  
2. **Feature extraction** – compute hand‑crafted features (user history, geolocation) in ~50 ms.  
3. **ML rule engine** – run lightweight models (XGBoost, rule list) locally; 200 ms budget.  
4. **LLM‑RAG fallback** – only if ML confidence < threshold or flag is “unknown”; stream query to LLM via gRPC, retrieve relevant docs from vector store in ~150 ms.  
5. **Decision & response** – combine scores, send HTTP/2 JSON reply.

**Depth (Latency budget)**  

| Stage | Target latency | Notes |
|-------|----------------|-------|
| Ingest / validation | 30 ms | Fast JSON → proto |
| Feature extraction | 50 ms | CPU‑bound ops; cache heavy features |
| ML rule engine | 200 ms | Local inference, no network hop |
| LLM‑RAG (if needed) | 150 ms | Vector search (FAISS) + LLM prompt (FastAPI + GPU) |
| Decision & send | 20 ms | Simple logic, HTTP/2 pipelining |

Total worst‑case: **450 ms**, leaving a 50 ms safety margin for network jitter and backpressure. We’ll batch feature extraction where possible and use async I/O to keep the pipeline fully overlapped.

**Edge cases**  
- *Cold start* of LLM service → pre‑warm GPU containers.  
- *Vector store latency spike* → replica shards, local cache.  
- *Network partition* between app tier and LLM → fallback to ML only, flag for later review.  
- *Model drift* → continuous A/B testing; retrain schedule.

**Optimize & communicate**  
We can shave 20 ms by moving the feature extraction into a pre‑computed cache (e.g., Redis) for frequent users, or by quantizing the LLM model. I’d present this trade‑off in a Gantt‑style diagram to interviewers, highlighting that we’re meeting the hard p99 bound through strict stage budgets and graceful degradation paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
