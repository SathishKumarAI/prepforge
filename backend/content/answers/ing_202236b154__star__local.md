---
qid: ing_202236b154__star__local
question: Attention is O(n²) in sequence length. Where does that actually bite in
  practice - prefill vs decode?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 393
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:33:47-05:00'
sources: []
---

**Situation:**  
While leading the inference optimization team for a conversational AI product, we noticed that real‑time response times were drifting above our 200 ms SLA during peak traffic. The model used a standard Transformer with full self‑attention, and our profiling showed that attention matrix multiplication was the single biggest consumer of GPU time.

**Task:**  
I had to identify where the quadratic cost in sequence length actually hurt us—whether it was the prefill phase (loading user context) or the decoding loop (generating each token)—and devise a practical mitigation without sacrificing accuracy.

**Action:**  
First, I instrumented both phases with PyTorch’s CUDA profiler and measured per‑token costs. Prefill for a 512‑token prompt took ~70 ms of GPU time; each subsequent decode step added only ~5 ms because the attention size shrank as we cached key/value tensors. To confirm this pattern, I swapped to a flash‑attention implementation that reduces memory traffic and re‑run the tests: prefill dropped to 35 ms, while per‑token decoding stayed at ~4 ms. I also added a length‑based early exit for prompts longer than 400 tokens to keep prefill under our budget.

**Result:**  
After deploying these changes, average inference latency fell from 210 ms to 140 ms during peak load, meeting the SLA. The key insight was that the quadratic penalty primarily hit the prefill stage; once keys and values were cached, decoding remained linear‑ish. This experience reinforced the importance of profiling each phase separately rather than assuming a uniform cost across the model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
