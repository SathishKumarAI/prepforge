---
qid: ing_3817e6ccd5__faang__local
question: 'Explain: Cold starts and scale-to-zero — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 481
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:54:20-05:00'
sources: []
---

**Clarify**  
The interview asks how an LLM‑gateway/serving platform handles **cold starts** (the first request after a container is idle) and **scale‑to‑zero** (shutting down idle workers). Key assumptions: we’re serving large transformer models, paying for compute per second, and need sub‑second latency.

**Approach**  
1. Profile the cold‑start budget (CPU, GPU, memory).  
2. Pre‑warm or “warm‑up” strategies: keep a minimal “shadow” instance or pre‑load model weights into shared storage.  
3. Use **model sharding / micro‑batching** to reduce per‑request load.  
4. Scale‑to‑zero via fine‑grained autoscaling (e.g., Kubernetes HPA + custom metrics) and instant startup hooks.

**Depth**  
- *Cold start mitigation*: Load the model once into a shared SSD or NVMe pool; use “model cache” nodes that stay alive but idle, waking only the minimal compute slice. Alternatively, use **ONNX Runtime with session caching** so the first inference is just a warm‑up pass.  
- *Scale‑to‑zero*: Implement a token‑based eviction policy—if no request in X seconds, deallocate the container. Use serverless runtimes (e.g., AWS Lambda for GPU) that spin up in <200 ms when coupled with pre‑warm checkpoints. Complexity: O(1) per request latency, but memory overhead grows linearly with number of warm shards.

**Edge Cases**  
- Sudden traffic spikes after a long idle period → cache misses cause 500 ms delays; test with bursty synthetic load.  
- Model updates: ensure zero‑downtime rollouts by pinning requests to the old shard until all in-flight requests finish.

**Optimize & Communicate**  
Explain trade‑offs: keeping warm workers reduces latency but increases cost; aggressive scale‑to‑zero cuts cost but risks SLA breaches. Suggest a hybrid policy: keep one “warm” worker per region, spin up additional shards only when queue length > threshold. Conclude with measurable KPIs (latency percentile, cost per inference) to validate the design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
