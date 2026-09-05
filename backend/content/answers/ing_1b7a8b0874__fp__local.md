---
qid: ing_1b7a8b0874__fp__local
question: How do I build a multi-tenant RAG system safely?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 378
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:04:25-05:00'
sources: []
---

**From first principles**

A Retrieval‑Augmented Generation (RAG) system is simply an inference pipeline that solves *“given a user query, find the most relevant knowledge fragment and synthesize an answer”*.  
In a multi‑tenant setting each tenant has its own private corpus; we must keep these corpora disjoint while still reusing the expensive language model.

1. **Isolation as a constraint** – Treat each tenant’s index as a *private sub‑problem* of the global retrieval task.  
   - Build a *tenant‑aware vector store* (e.g., separate shards or hashed prefixes).  
   - Enforce that any similarity search uses only its own shard.  

2. **Shared inference as an opportunity** – The language model is tenant‑agnostic; we can share the same GPU batch for multiple queries, provided we mask out private prompts.

3. **Security by design** – Use *token‑level segmentation* in the prompt: prepend a “tenant header” that the model learns to ignore.  
   - This avoids accidental cross‑contamination even if the model misbehaves.

4. **Auditability through provenance** – Attach a deterministic tenant ID to every retrieved vector and log it with the generated text.  

**Non‑obvious insight:** *The bottleneck is not the retrieval latency but the **entropy leakage** in prompt concatenation*. Even a single stray private document embedded inadvertently can bleed into another tenant’s answer because transformer attention treats all tokens equally. By quantizing embeddings per tenant and inserting a learned “tenant‑silence token” between documents, we force the model to treat cross‑tenant contexts as background noise, dramatically reducing leakage without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
