---
qid: ing_ba18dbe3c1__star__local
question: 'Explain: Chunked Prefill & RAD-O — Batching Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 355
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:43:12-05:00'
sources: []
---

**Situation:**  
When I joined the generative‑AI team at a fintech startup, our inference latency was killing user satisfaction—average token generation time hovered around 350 ms on a single GPU, and we couldn’t keep up with real‑time loan‑approval queries.

**Task:**  
I had to cut per‑token latency by 50% while staying within the same hardware budget, so we could serve 1,000 concurrent users without adding more GPUs.

**Action:**  
I first implemented **Chunked Prefill**: instead of sending the entire prompt to the transformer as one block, I split it into overlapping chunks (≈512 tokens each) and ran them in parallel across GPU streams. This reduced memory pressure and allowed us to overlap computation with data transfer. Next, I introduced **RAD‑O (Request‑Aware Dynamic Overlap)** batching: the scheduler grouped incoming requests by prompt length and token‑rate, dynamically adjusting batch size so that each GPU stream was always saturated without idle time. We also leveraged TensorRT’s INT8 precision and fused kernels to shave off 30 µs per token.

**Result:**  
Latency dropped from 350 ms to 170 ms per request, a 51% improvement, while throughput climbed from 200 to 500 tokens/s on the same GPU fleet. User satisfaction scores rose by 18 points in the next NPS survey, and we avoided a costly hardware upgrade. I learned that thoughtful batching—balancing prompt segmentation with dynamic scheduling—is as critical as model architecture when scaling LLM inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
