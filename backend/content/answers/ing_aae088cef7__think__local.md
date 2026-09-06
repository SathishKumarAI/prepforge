---
qid: ing_aae088cef7__think__local
question: Why does continuous batching outperform static batching for LLM serving?
  What are the tradeoffs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 702
total_tokens: 898
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:19:02-05:00'
sources: []
---

**1. Clarify the question & set assumptions**

- *What is meant by “continuous” vs. “static” batching?*  
  - **Static batching**: collect a fixed number of requests (or wait for a timeout), then process them together in one model invocation.  
  - **Continuous batching**: keep a running queue; whenever the GPU is idle or when a new request arrives, immediately form whatever batch size is possible and fire off an inference.  
- Assume we’re serving large‑scale LLMs on GPUs with limited memory, where throughput (requests per second) and latency are both critical.

**2. Mental model / framework**

Think of the GPU as a *pipeline* that processes tokens in parallel. Two key resources:

1. **Compute bandwidth** – how many token‑operations can be performed per second.  
2. **Queue latency** – time a request spends waiting before it starts being processed.

Batching improves compute utilization (more tokens per kernel launch), but introduces queue latency. Continuous batching trades off a bit of latency for higher average throughput and better GPU occupancy.

**3. Step‑by‑step reasoning**

1. *Static batching* fixes the batch size \(B_{\text{static}}\).  
   - If request arrival rate is lower than needed, many idle cycles occur; GPU under‑utilized.  
   - If arrival rate spikes, requests wait until enough accumulate → higher tail latency.

2. *Continuous batching* keeps a sliding window: as soon as the queue has any tokens, it forms a batch up to the current queue size (or a dynamic max).  
   - Utilizes GPU whenever possible; reduces idle time.  
   - Keeps latency low because requests start sooner, but may still wait for additional arrivals if we aim for larger batches.

3. Compute‑latency trade‑off: With continuous batching, you can adjust the *minimum* batch size or *max wait time*, tuning between higher throughput (larger effective batch) and lower tail latency (smaller batch / shorter wait).

4. Memory constraints: Larger dynamic batches may exceed GPU memory; continuous batching often caps at the maximum that fits, ensuring safety.

**4. Common traps to avoid**

- Assuming “continuous” means *no waiting at all*—it still waits for some tokens or a timeout if you want larger batches.  
- Forgetting that very small batch sizes hurt performance because of kernel launch overhead.  
- Ignoring the impact on request ordering: continuous batching can reorder requests, which may matter for fairness.

**5. Sanity‑check & communicate**

- Check extreme scenarios: If arrival rate → 0, both methods reduce to single‑request processing; if arrival rate → ∞, both saturate GPU but continuous batching will keep the queue short.  
- Explain that continuous batching is essentially “adaptive” batching: it adapts batch size to real‑time load while respecting latency budgets.

---

**Bottom line:** Continuous batching outperforms static batching because it keeps the GPU busy by flexibly adjusting batch size on the fly, reducing idle time and queue buildup. The tradeoff is a more complex scheduling logic and potential slight increases in per‑request latency if you push for larger batches; but with proper tuning (min/max batch sizes, timeout thresholds) you can balance throughput and latency to meet service-level objectives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
