---
qid: ing_4688114c9a__star__local
question: 'Explain: Q24: Compare batching strategies for LLM serving'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 321
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:49:41-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with deploying a 13‑B parameter GPT model to serve real‑time chat requests in an e‑commerce app. The traffic spiked during flash sales, and we needed sub‑200 ms latency while keeping GPU utilization above 70%.

**Task**  
I had to decide on a batching strategy that would balance throughput, latency, and cost for the inference cluster.

**Action**  
First I benchmarked *static* versus *dynamic* batching. Static batches fixed the size (e.g., 32 requests) and queued incoming queries until full; this maximized GPU throughput but introduced up to 300 ms wait time when traffic was low. Dynamic batching, implemented with NVIDIA Triton’s *adaptive* mode, grouped requests on the fly based on arrival rate and token length. I added a short pre‑queue window (30 ms) to capture bursty traffic without starving single requests. To handle variable sequence lengths I used *padding truncation* only within each batch and leveraged Triton's *sequence‑parallelism* to avoid wasteful padding across batches.

**Result**  
Dynamic batching cut average latency from 350 ms to 180 ms during peak periods, while GPU utilization rose from 55% to 78%. Cost per inference dropped by ~12% because fewer idle GPU cycles were needed. I learned that a hybrid approach—dynamic batching with a controlled pre‑queue window—is key for LLM serving under unpredictable load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
