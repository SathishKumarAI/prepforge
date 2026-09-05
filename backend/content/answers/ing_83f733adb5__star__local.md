---
qid: ing_83f733adb5__star__local
question: 'Q: Why does PagedAttention significantly increase throughput?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 332
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:12-05:00'
sources: []
---

**Situation:**  
At my last company we were pushing a transformer‑based recommendation model into production. The inference batch size was capped at 8 because the GPU memory ran out after loading all token embeddings, and latency kept rising above our SLA of 120 ms.

**Task:**  
I had to redesign the attention layer so that it could handle longer sequences without blowing up memory or time, while keeping accuracy intact.

**Action:**  
I introduced PagedAttention: instead of storing a dense Q‑K matrix for every token pair, we keep only the top‑k attention scores per query in a sparse page structure. Using CUDA kernels with warp‑level reductions and TensorRT’s dynamic tensor core support, we pack these pages into contiguous memory blocks that fit in shared memory. We also swapped the softmax implementation to a fused log‑softmax + exp on the pages, eliminating an extra kernel launch. The key trade‑off was accepting a small drop (≤ 0.3%) in perplexity for the sake of throughput.

**Result:**  
After deployment we saw batch throughput jump from 4.2 samples/s to 15.6 samples/s on a single A100, and latency dropped below 80 ms per request. Memory usage fell by ~35%, allowing us to serve longer sequences without scaling hardware. I learned that careful sparsity engineering combined with kernel fusion can unlock large gains in real‑world AI workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
