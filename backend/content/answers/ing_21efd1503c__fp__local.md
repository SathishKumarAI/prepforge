---
qid: ing_21efd1503c__fp__local
question: 'Explain: A KVCache-centric Disaggregated Architecture for LLM Serving'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 556
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:18:05-05:00'
sources: []
---

## Why a KV‑cache‑centric disaggregated architecture is needed

Large language models (LLMs) process tokens sequentially; each new token depends on all previously generated ones. In the transformer stack this translates into a **key–value (KV) cache** that stores every past key and value vector for fast attention computation. The naïve server design keeps both model weights *and* the KV cache in one monolithic GPU or TPU, forcing every request to load the full model each time.

From an **information‑theoretic** standpoint, the KV cache is highly reusable: a single session’s cache can serve hundreds of downstream requests (e.g., chat turns). The cache size grows linearly with context length but remains orders of magnitude smaller than the static weight matrix. Therefore, bandwidth and memory are wasted if we reload weights on every inference.

### Derivation

1. **Separation of concerns**  
   - *Static*: model parameters (weights) – rarely change during a session.  
   - *Dynamic*: KV cache – updates per token but is reused across requests in the same session.

2. **Disaggregation principle**  
   Place the static weights on high‑bandwidth, low‑latency memory (e.g., NVLink‑connected GPUs). Store the dynamic KV cache in a shared, scalable pool (e.g., persistent CPU RAM or NVMe SSDs) accessible to all inference nodes via RDMA.  

3. **Optimization objective**  
   Minimize *total latency* \(L = L_{\text{load}} + L_{\text{compute}}\). By pulling the cache out of the weight loading phase, we reduce \(L_{\text{load}}\) dramatically while keeping \(L_{\text{compute}}\) unchanged because attention still reads keys/values locally.

4. **Geometric insight**  
   In the transformer’s high‑dimensional space, the KV cache forms a low‑rank subspace that is *orthogonal* to weight updates; thus, caching it separately does not alter the geometry of attention scores.

### Non‑obvious benefit

Because the cache lives in a shared pool, **multi‑request sharing** becomes possible: two concurrent users with identical prefixes can share a single KV snapshot. This reduces memory footprint by an extra factor of the number of overlapping sessions—something most designs overlook.

In short, a KVCache‑centric disaggregated architecture decouples reusable dynamic data from static parameters, yielding lower latency, higher throughput, and better resource utilization while preserving the mathematical integrity of transformer attention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
