---
qid: ing_d3a5640be0__star__local
question: What's the difference between static and continuous batching, and why did
  continuous batching become universal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 282
total_tokens: 524
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:32:47-05:00'
sources: []
---

**Situation**  
In my last role at a SaaS startup, we were launching an AI‑powered recommendation engine that served real‑time content to 120 k daily users. The initial inference pipeline used static batching: every minute we collected requests, built a large tensor, ran the model once, and pushed results back.

**Task**  
I was tasked with reducing latency while keeping GPU utilization high enough to justify our compute costs, especially as traffic spiked during product launches.

**Action**  
I replaced static batching with continuous batching. Instead of waiting for a full minute, we streamed incoming requests into a queue that fed the model in micro‑batches of 32–64 samples every 50 ms. We leveraged TensorRT’s dynamic shape support and implemented backpressure to avoid memory overrun. This required rewriting the inference wrapper, adding an adaptive timeout, and instrumenting per‑request latency counters.

**Result**  
Average response time dropped from 350 ms to 90 ms, and GPU utilization rose from 45 % to 78 %, cutting our inference cost by ~30 %. The exercise taught me that continuous batching aligns compute with traffic patterns, making it the default in modern AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
