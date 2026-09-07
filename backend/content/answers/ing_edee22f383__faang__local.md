---
qid: ing_edee22f383__faang__local
question: Walk me through continuous batching in an LLM inference server. Why does
  it beat static batching?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 433
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:53:36-05:00'
sources: []
---

**Clarify**  
You’re asking how a production LLM server can group incoming requests into *continuous* batches (dynamic, time‑aware grouping) versus a fixed static batch size, and why the former yields higher throughput/latency trade‑offs. I’ll assume we’re serving token‑level requests over HTTP/gRPC, with a GPU backend that processes batches of embeddings or transformer blocks.

**Approach**  
1. Model the request stream as a Poisson process.  
2. Build a scheduler that pulls ready requests into a queue, then decides when to fire a batch based on size or wait time.  
3. Compare against a fixed‑size policy that only fires when the queue hits a preset threshold.

**Depth**  
Continuous batching uses *adaptive* thresholds: it sends a batch when either the queue reaches `k` items **or** the oldest request has waited > τ ms. This keeps GPU utilization high (≈90–95%) even under bursty traffic, while bounding per‑request latency. Static batching can stall for long if traffic is sparse (GPU idle) or suffer from large queues when traffic spikes (latency blowup). Complexity: O(1) enqueue/dequeue, O(batch_size * model_cost) GPU compute; scheduler overhead negligible.

**Edge Cases**  
- Extremely low arrival rates → batch size too small → GPU underutilized.  
- Very high arrival rates → queue overflows or memory pressure.  
- Variable token lengths → padding cost can dominate if not handled by length‑based grouping.

**Optimize & Communicate**  
To further improve, implement *length‑aware* micro‑batches and a predictive arrival model to adjust τ on the fly. I’d explain the trade‑off curve: throughput ↑ with larger batches, latency ↑; continuous batching finds the sweet spot. Emphasize that this is standard in production LLM services (e.g., OpenAI’s “token bucket” scheduler) because it balances QoS and cost per inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
