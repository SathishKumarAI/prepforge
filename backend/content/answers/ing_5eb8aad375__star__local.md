---
qid: ing_5eb8aad375__star__local
question: 'Explain: vLLM v0.18+: The Default Open Engine — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 387
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:34-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a new internal chatbot that needed to serve up to 10,000 concurrent requests per day while keeping latency under 150 ms. Our earlier deployment on vanilla vLLM 0.17 was hitting memory limits and had inconsistent throughput.

**Task:**  
I had to redesign the serving pipeline using the new Default Open Engine introduced in vLLM v0.18+, ensuring we stayed within a 16‑GB GPU budget, reduced peak latency, and maintained model accuracy for our GPT‑3.5‑turbo variant.

**Action:**  
First, I switched from the legacy `AsyncEngine` to the `DefaultOpenEngine`, which internally manages multiple worker pools and streamlines context handling. I enabled the “open engine” flag (`--engine default_open`) so that vLLM automatically optimizes memory usage by reusing KV caches across requests. Then, I tuned the batch size to 32 and set a maximum sequence length of 2048 tokens; this reduced GPU fragmentation. Finally, I integrated a lightweight request scheduler in FastAPI that batches incoming queries based on their token counts, leveraging the engine’s built‑in `batch_and_pipe` routine.

**Result:**  
The new setup cut average latency from 210 ms to 115 ms and increased throughput from 4k to 9.5k requests per day—well above our target. Memory usage stabilized at ~12 GB, leaving headroom for future model scaling. I learned that the Default Open Engine’s automatic cache reuse can be a game‑changer when operating close to GPU limits, and that careful batch sizing is crucial for maximizing throughput without sacrificing latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
