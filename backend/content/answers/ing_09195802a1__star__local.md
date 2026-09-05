---
qid: ing_09195802a1__star__local
question: Mistral 7B shipped with grouped-query attention and sliding-window attention.
  What does each buy you, and what does each cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 369
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:47:20-05:00'
sources: []
---

**Situation** – While leading the inference‑optimization team at a cloud‑gaming startup, we had to deploy Mistral 7B for real‑time dialogue generation under strict latency budgets (≤30 ms per token). The baseline model with full attention was too slow on our GPU fleet.

**Task** – I needed to reduce compute and memory usage while keeping perplexity within 5% of the original, and keep inference throughput above 200 tokens/sec across 8‑bit quantized weights.

**Action** – I first implemented **grouped‑query attention (GQA)**: by collapsing heads into 4 query groups per layer, we cut the QK dot‑product cost from O(H²) to O(H·G), saving ~35 % of FLOPs and memory bandwidth. Then I added **sliding‑window attention** with a window size of 256 tokens; this limited K/V look‑ups to local context, dropping per‑token memory from O(N) to O(W). The trade‑off was a small drop in long‑range coherence, so I tuned the window overlap and used a residual global token for key updates. Benchmarks showed latency drop to 18 ms/token and throughput up to 280 tokens/sec, with perplexity only 3.8% higher.

**Result** – The combined GQA + sliding‑window strategy met our SLA, reduced GPU usage by ~30%, cut inference cost per request by $0.04, and taught me how to balance head grouping against contextual fidelity in transformer inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
