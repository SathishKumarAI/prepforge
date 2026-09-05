---
qid: ing_7e27a31ba0__star__local
question: 'Explain: Company context — Scale Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 344
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:46:03-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech startup, we launched an AI‑powered fraud detection model that initially handled only 10k transactions per day. Within three months, our client base doubled, pushing the volume to 80k daily while latency had to stay below 200 ms for real‑time alerts.

**Task:**  
I was tasked with scaling the inference pipeline so it could process the increased load without compromising accuracy or response time, and to do so within a tight budget that didn’t allow us to move to a full cloud GPU cluster.

**Action:**  
First, I profiled the model in production using NVIDIA Nsight and discovered that 60 % of the latency came from the dense layers’ matrix multiplications. I re‑implemented those layers with mixed‑precision (FP16) on TensorRT, which cut compute time by 35 %. Next, I sharded the workload across a pool of 8 CPU nodes using Ray Serve, adding an asynchronous pre‑fetcher that cached the most common feature vectors. Finally, I introduced a lightweight Bloom filter to quickly rule out low‑risk transactions before they hit the model, reducing inference calls by ~25 %.

**Result:**  
The end‑to‑end latency dropped from 250 ms to 140 ms while maintaining 99.2 % detection accuracy. We handled the full 80k daily volume with a 60 % reduction in GPU cost and learned that careful profiling, precision tuning, and smart pre‑filtering can be more effective than scaling hardware alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
