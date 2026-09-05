---
qid: ing_8f2004d8ec__star__local
question: 'Explain: Efficiently Serving LLMs - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 361
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:19:24-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we had built an internal chatbot that leveraged GPT‑4 to provide instant financial advice. By the third month, our user base grew from 500 to over 3,000 concurrent sessions, and latency hit 2.5 s on average—unacceptable for real‑time customer support.

**Task:**  
I was tasked with reducing response time to under 800 ms while keeping GPU costs manageable, so the service could scale without breaking our budget or compromising accuracy.

**Action:**  
First, I profiled the inference pipeline and identified that tokenization and model loading were bottlenecks. I switched from Hugging Face’s default tokenizer to a custom SIMD‑accelerated version, cutting preprocessing time by 40 %. Next, I implemented model parallelism across two NVIDIA A100 GPUs using DeepSpeed ZeRO‑2, which allowed us to shard the 13B parameters and reduce memory per GPU by half. To further improve throughput, I wrapped the inference loop in a FastAPI async endpoint with uvicorn workers tuned to the CPU core count, enabling concurrent request handling without thread contention. Finally, I set up Prometheus metrics to monitor latency and GPU utilization continuously.

**Result:**  
Latency dropped from 2.5 s to 0.7 s per query, meeting our SLA. GPU usage averaged 55 % across the two A100s, cutting monthly cloud spend by ~30 %. The exercise taught me that a combination of lightweight tokenization, distributed inference, and asynchronous request handling is key to efficiently serving LLMs at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
