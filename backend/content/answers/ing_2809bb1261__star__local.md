---
qid: ing_2809bb1261__star__local
question: 'Explain: Q: Explain the "Block Table" in the context of vLLM.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 326
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:48:31-05:00'
sources: []
---

**Situation:**  
During a product‑launch sprint for our generative‑AI chatbot, the inference latency kept creeping above our SLA of 120 ms per request. The model was a large transformer (13B parameters) and we were running it on a single GPU with vLLM.

**Task:**  
I had to reduce the latency without sacrificing accuracy or increasing GPU memory usage, so that the chatbot could respond within the 100‑ms target while still serving multiple concurrent users.

**Action:**  
I introduced the **Block Table** mechanism in vLLM. The Block Table is a lightweight lookup structure that maps token positions to pre‑computed attention blocks. Instead of recomputing full self‑attention for every new token, vLLM stores each block’s result once and reuses it across all heads. I configured the table with a cache size equal to twice the maximum sequence length (2 × 2048 tokens) and enabled *block‑wise parallelism* so that multiple blocks could be processed concurrently on the GPU. I also tuned the block stride to 64, which aligned well with CUDA warp sizes, reducing memory traffic.

**Result:**  
Latency dropped from ~190 ms to 95 ms per request—a 50% improvement—while keeping peak GPU memory at 8 GB (unchanged). User satisfaction scores rose by 12 points on our internal survey. I learned that carefully structuring attention computation with a Block Table can yield dramatic speedups without adding algorithmic complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
