---
qid: ing_f529bde9c4__faang__local
question: A bank wants the whole stack - model, RAG, agents - deployed air-gapped
  on their own GPUs. What actually changes versus your SaaS?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 529
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:10:00-05:00'
sources: []
---

**Clarify**  
The bank needs a fully isolated AI stack—model inference, Retrieval‑Augmented Generation (RAG) pipeline, and conversational agents—all running on premises with no outbound traffic. We must confirm:  

1. GPU count & memory per node.  
2. Desired latency for each request type.  
3. Compliance requirements (data residency, audit trails).  
4. Whether the bank will maintain or supply the LLM weights.

**Approach**  
1. **Model layer** – containerize the chosen LLM (e.g., a quantized 8‑bit GPT‑NeoX) and expose an inference API via gRPC.  
2. **RAG layer** – deploy an on‑prem vector store (FAISS or Milvus) with encrypted local storage; index only data approved for internal use.  
3. **Agent layer** – run a lightweight orchestrator (e.g., LangChain) that routes user queries to the RAG pipeline and formats responses.  
4. **Security** – hard‑enforce network isolation, implement role‑based access, audit logs, and periodic model drift checks.

**Depth**  
- **Inference**: 8‑bit quantization + GPU tensor cores → ~2–3 ms per token on a single RTX‑8000; batch size 16 keeps GPU utilization >70%.  
- **RAG**: FAISS index rebuilds nightly; approximate nearest neighbor search <1 ms for 10M vectors.  
- **Agent orchestration**: Stateless microservice, latency <5 ms overhead.  

Complexity is *O(log N)* per retrieval and *O(1)* per inference token, with memory footprint ~6 GB per model instance.

**Edge Cases**  
- GPU failure → hot‑swap; fallback to CPU inference (slower).  
- Index corruption → rebuild triggers alert.  
- Model drift: periodic re‑evaluation against a held‑out bank dataset.

**Optimize & Communicate**  
We can reduce cost by sharing GPUs across microservices using NVIDIA Multi‑Process Service (MPS), and compress embeddings further if storage limits are tight. In interviews, I’d explain the trade‑off between isolation and performance, emphasize auditability for compliance, and note that the SaaS version offloads all these concerns to managed services—here we expose them to the bank’s infra team, but maintain the same API contract so internal devs can upgrade models with minimal friction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
