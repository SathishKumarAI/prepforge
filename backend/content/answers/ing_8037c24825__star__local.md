---
qid: ing_8037c24825__star__local
question: 'Explain: Continuous Batching and Prefix Caching — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 347
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:50:08-05:00'
sources: []
---

**Situation:**  
When I joined the NLP platform team at a fintech startup, our recommendation engine was serving over 1 M users per day. The LLM‑based sentiment model ran on GPU clusters with a 200 ms latency SLA, but our single‑query inference pipeline hit 400 ms due to queueing and redundant tokenization.

**Task:**  
I had to redesign the inference pipeline so that latency dropped below the SLA while keeping GPU utilisation above 70 % during peak traffic.

**Action:**  
I implemented *continuous batching* by aggregating incoming requests into micro‑batches of 32–64 queries, leveraging TensorFlow’s `tf.data` pipelines and a custom ring buffer. To avoid re‑computing embeddings for the same prompt prefixes, I added *prefix caching*: the first 10 tokens of each user query were cached in an LRU cache keyed by user ID, and reused across batches. The batch scheduler ran on a dedicated GPU with pinned memory to minimise transfer overhead. I also tuned the batch size dynamically based on real‑time queue length.

**Result:**  
Latency fell from 400 ms to 180 ms during peak hours, hitting the SLA 98 % of the time. GPU utilisation rose from 55 % to 78 %. The experiment also revealed that caching prefixes reduced memory footprint by ~30 %, allowing us to double batch size without extra GPUs. I learned how careful batching and cache design can unlock significant performance gains in real‑time inference systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
