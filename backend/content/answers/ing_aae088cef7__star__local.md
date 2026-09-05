---
qid: ing_aae088cef7__star__local
question: Why does continuous batching outperform static batching for LLM serving?
  What are the tradeoffs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 304
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:14:46-05:00'
sources: []
---

**Situation:**  
At my last company we were deploying a GPT‑4 model to serve real‑time chat requests in a high‑traffic e‑commerce platform. The traffic pattern was highly bursty – a few minutes after launch, we saw 20k QPS, then it dropped to 5k QPS within an hour.

**Task:**  
I had to reduce latency and GPU utilization while maintaining cost efficiency for the inference service.

**Action:**  
I compared static batching (fixed batch size of 32) with continuous batching (dynamic accumulation until a timeout or queue depth). Using TorchServe, I instrumented the request pipeline: each incoming token was queued; when the queue hit 64 or 50 ms elapsed, we dispatched a batched inference. This required writing a lightweight scheduler that could split larger batches across multiple GPUs without exceeding memory limits. I also added a back‑pressure mechanism to cap the maximum queue size at 256 requests.

**Result:**  
Continuous batching lowered average latency from 190 ms (static) to 110 ms and reduced GPU usage by ~35%, cutting inference cost by ~$4k/month. The trade‑off was a small increase in tail latency during peak bursts, but the overall system throughput improved by 25%. I learned that adaptive batch sizing aligns compute with real traffic patterns, but it demands careful queue management to avoid head‑of‑line blocking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
