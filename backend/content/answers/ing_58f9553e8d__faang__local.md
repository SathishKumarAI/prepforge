---
qid: ing_58f9553e8d__faang__local
question: 'Explain: Q1: Walk me through the architecture of a production RAG system'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 519
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:10:19-05:00'
sources: []
---

**Clarify**

You want a high‑level view of a *Retrieval‑Augmented Generation* (RAG) pipeline that can run at scale in production.  
Assumptions I’d confirm:  
1. The system must serve many concurrent requests with sub‑second latency.  
2. Retrieval is from a large, searchable knowledge base (text + embeddings).  
3. Generation uses an LLM that can be queried via API or hosted model.  
4. We need observability, rollback, and data freshness.

**Approach**

1. **Data Layer** – vector store + inverted index.  
2. **Retrieval Service** – query‑vector → top‑k documents.  
3. **Augmentation Layer** – format context for the LLM.  
4. **Generation Service** – LLM inference with streaming.  
5. **Orchestration & Caching** – request router, result cache, retry logic.  
6. **Monitoring & Logging** – latency metrics, error rates, hallucination flags.

**Depth**

- *Vector Store*: Faiss/Annoy or managed services (Pinecone). Use cosine similarity; shard across GPUs for throughput.  
- *Retrieval API*: Accepts query text → embed (fast transformer) → k‑NN search → return top‑k snippets + scores. Latency < 50 ms.  
- *Augmentation*: Concatenate snippets with a prompt template, limit token budget (~2048).  
- *LLM Service*: Deploy GPT‑4‑like model on GPUs or use OpenAI API; stream tokens back to client.  
- *Caching*: Cache query→context mapping for 5 min; use Redis.  
- *Observability*: Prometheus metrics (latency, cache hit rate), tracing with Jaeger.

**Edge Cases**

- **Cold starts**: preload embeddings.  
- **Drift**: re‑index new docs nightly.  
- **Out‑of‑scope queries**: fallback to “I don’t know.”  
- **Token overflow**: truncate lower‑scoring snippets.

**Optimize & Communicate**

Explain trade‑offs: vector store speed vs. index granularity; LLM compute vs. latency. Highlight that end‑to‑end SLA is ~200 ms, achieved by parallelizing embedding and retrieval. Conclude with plans for A/B testing generation prompts to reduce hallucinations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
