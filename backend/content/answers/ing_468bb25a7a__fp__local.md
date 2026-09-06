---
qid: ing_468bb25a7a__fp__local
question: 'Explain: Split Services Carefully — Client-Server Architecture | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 474
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:35:39-05:00'
sources: []
---

**Why a careful split matters**

When you build an end‑to‑end machine‑learning platform, the *client* (web/mobile UI) and the *server* (data lake, feature store, model inference, training pipeline) are two sides of a single optimization problem: minimize latency for the user while maximizing throughput and accuracy for the models. If you hand everything to the server—e.g., sending raw images, full context vectors, or entire training logs—you pay in network bandwidth, compute cost, and risk over‑loading the inference tier with data‑intensive preprocessing that could be done locally.

**The principle at work**

Treat every request as a *resource‑constrained job*.  
- **Latency ↔ Bandwidth**: A small payload (e.g., a feature ID) lets the server fetch only what it needs, while large payloads force costly data movement.  
- **Compute ↔ Model fidelity**: Pre‑computing heavy features on the client (edge inference, quantized embeddings) reduces server load but trades off model accuracy; you must quantify that trade‑off.

**Design guideline**

1. **Identify stateless, lightweight operations** (e.g., tokenization, feature hashing) and move them to the client.  
2. **Keep heavy, data‑centric tasks** (feature extraction from raw media, large‑scale training) on the server.  
3. **Use a contract layer**: define a minimal API that only exchanges IDs or compressed vectors; let the server perform the expensive joins.

**Non‑obvious insight**

The *shape* of your data often dictates the split more than latency numbers. For example, if your model requires a *sequence* of past user actions, sending the full history is wasteful; instead, maintain an *aggregated embedding* on the client and update it incrementally via a small delta API. This preserves privacy, reduces traffic, and keeps the server focused on inference rather than reconstructing histories.

In short, split services carefully to respect the natural boundary between “what can be done cheaply in isolation” and “what must be computed centrally for correctness.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
