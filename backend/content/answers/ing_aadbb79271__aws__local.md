---
qid: ing_aadbb79271__aws__local
question: 'Explain: Key ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 408
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:52:57-05:00'
sources: []
---

**Situation / Task**  
When I joined the AI infrastructure team at a fast‑growing startup, our inference latency on large language models (30 B+ params) was >2 s per request, far above the <500 ms SLA for our SaaS product. The bottleneck was memory‑bound *attention* in the transformer stack.

**Action**  
I led a **“Paged Attention” refactor** based on vLLM’s design:  
1. **Chunked Key/Value tensors** – store them on GPU page‑tables and stream only the necessary pages for each query.  
2. Replace dense matrix multiplies with **Sparse GEMMs** (cuBLASLt) that operate on active windows.  
3. Use **AWS S3 + EFS** to stage paged KV shards, and **Elastic Inference** for burstable GPU usage.  
4. Instrument with CloudWatch metrics; set a *latency* alarm at 400 ms.

**Result**  
- Latency dropped from **2.1 s → 320 ms** (≈84% reduction).  
- GPU memory footprint fell by **70 %**, allowing us to run two inference nodes on the same spot instance, cutting cost by **$1.8k/month**.  
- SLA compliance rose to **99.9 %**.

**Reflection**  
I *owned* the end‑to‑end pipeline, *dived deep* into cuBLAS internals, and iterated quickly—deploying a blue/green rollout in 3 days. The biggest learning: aggressive paging can introduce I/O stalls; adding an LRU cache on GPU mitigated that.  

> **Leadership Principles:** Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
