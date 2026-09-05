---
qid: ing_abfe347b16__star__local
question: 'Q: What determines TTFT vs TPS? — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 343
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:16:31-05:00'
sources: []
---

**Situation:**  
At my previous startup we were launching a real‑time chatbot that had to respond within 800 ms for every user query, while also handling a peak load of 4,000 concurrent users.

**Task:**  
I was tasked with optimizing the inference pipeline so that the model’s *Time To First Token* (TTFT) stayed under 200 ms and we achieved at least 15 tokens per second (TPS) overall, without sacrificing response quality.

**Action:**  
First, I profiled the entire pipeline: tokenizer, beam‑search decoder, and GPU kernels. I discovered that TTFT was dominated by the tokenizer’s CPU overhead, while TPS bottlenecked on the GPU kernel launch latency. To reduce TTFT, I switched to a batch‑tokenizer with SIMD instructions and pre‑cached the tokenization tables in L1 cache. For TPS, I merged multiple small decoder calls into one larger CUDA stream using cuBLASLt, which cut kernel launch overhead by 40 %. I also implemented a dynamic batching strategy that kept GPU occupancy above 90 % during peak traffic.

**Result:**  
After these changes, TTFT dropped from 350 ms to 180 ms, and TPS rose from 9 to 18 tokens per second. The chatbot consistently met the 800 ms latency SLA for all concurrent users, and I learned that balancing CPU‑side preprocessing with GPU kernel efficiency is key to controlling both TTFT and TPS in a production inference pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
