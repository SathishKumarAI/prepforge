---
qid: ing_f799c93491__faang__local
question: 'Explain: Design Cursor''s tab (next-edit prediction) system: it must feel
  instant - sub-100ms perceived latency - for millions of daily users. Walk me through
  the stack.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 512
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:15:48-05:00'
sources: []
---

**Clarify**  
We need a *next‑edit* prediction UI that feels instantaneous (< 100 ms perceived latency) for millions of daily users on Cursor (a code editor). We must decide what data to predict (e.g., next token, function signature), how to serve it with low latency, and keep the system horizontally scalable.

**Approach**  
1. **Feature extraction** – run a lightweight static analysis + token stream in the client.  
2. **Model inference** – use a small transformer (≈ 5M params) that runs on a GPU‑edge service; cache recent predictions per session.  
3. **Serving layer** – HTTP/2 with CDN edge caches and gRPC streaming for incremental updates.  
4. **Scaling** – autoscale by request volume, use a multi‑region Kubernetes cluster, and fall back to a pre‑trained “cold” model on CPU if GPU is busy.

**Depth**  
- **Client side**: tokenize in ~2 ms; send context window (≤ 512 tokens) to server.  
- **Server**: load the model into memory once per pod (~30 s). Each inference takes ~15 ms on a single V100; with 8‑core CPU fallback ~50 ms.  
- **Network**: use QUIC + HTTP/3 for sub‑10 ms RTT in most regions; compress payload to < 1 KB.  
- **Cache strategy**: keep last 5 predictions per user session; on cache hit return instantly (< 5 ms).  
- Complexity: O(n) inference time, constant memory per request. Trade‑off between model size (accuracy vs latency).

**Edge Cases**  
- Cold start of GPU pods → fallback to CPU.  
- Network partition → client shows “loading” spinner with 50 ms threshold.  
- Very long context → truncate to window; fall back to simpler n‑gram model.

**Optimize & Communicate**  
We can improve by distilling the transformer into a smaller mobile‑friendly model, or using serverless GPU functions for burst traffic. Explain to interviewers that we balanced latency, accuracy, and cost by caching, edge serving, and graceful degradation. This structure demonstrates clear problem framing, systematic design, and trade‑off awareness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
