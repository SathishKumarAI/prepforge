---
qid: ing_8f50d55281__think__local
question: 'Explain: Q: Design a RAG system that serves 10,000 queries per second across
  500 tenants with a p99 latency of 2 seconds.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 553
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:32:58-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
   - What “10 000 QPS” means (peak load vs average).  
   - Tenants share resources; is isolation required?  
   - p99 latency of 2 s includes all stages: request, routing, retrieval, generation.  
   - Assume a cloud‑native stack (K8s, managed DB/Vector store, autoscaling) and that RAG = retrieve + generate.

**2️⃣ Adopt a layered mental model**  
   - **Infrastructure layer**: compute, networking, storage.  
   - **Data access layer**: vector index & text store.  
   - **Inference layer**: LLM serving (CPU/GPU).  
   - **Orchestration layer**: request routing, caching, rate‑limiting.

**3️⃣ Reason step‑by‑step**  

1. *Compute sizing*: 10 k QPS / 500 tenants ≈ 20 QPS/tenant → ~200 inference requests per second in total (if each query needs one LLM call).  
2. *Vector store*: use a highly scalable ANN engine (e.g., Pinecone, Milvus) with sharding; keep index in memory + SSD for persistence.  
3. *Caching*: pre‑cache top‑k retrievals and generated responses per tenant to shave milliseconds off the tail.  
4. *Inference*: deploy multiple lightweight LLMs (e.g., 4–8 B) behind a GPU autoscaler; use batching and model parallelism.  
5. *Routing & rate‑limit*: edge gateway with per‑tenant quotas, redirect excess traffic to “back‑off” queue.  
6. *Observability*: instrument latency per component; set alerts at p99 thresholds.

**4️⃣ Avoid common traps**  

- **Assuming linear scaling**: GPUs saturate early; batch size matters.  
- **Ignoring cold starts**: keep a pool of warm instances.  
- **Over‑caching**: stale data hurts relevance; set TTLs per tenant.  
- **Single point of failure**: make vector store and inference stateless, replicated.

**5️⃣ Sanity check & verbalize**  

Run a simulated load test: 10 k QPS → measure end‑to‑end latency histogram. Verify p99 ≤ 2 s; if not, tighten caching or add GPU nodes. Communicate the architecture as “Layered, tenant‑aware, autoscaling RAG stack” and iterate based on metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
