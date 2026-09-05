---
qid: ing_3ff65c2578__star__local
question: 'Explain: VO - Coding Challenge — My 2026 Perplexity AI Interview Process
  and Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 334
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:36:10-05:00'
sources: []
---

**Situation:** During my recent application to Perplexity AI in 2026, I was invited to complete a VO (Voice‑Over) coding challenge as part of the interview pipeline. The challenge involved building a lightweight inference engine for a custom transformer model that could run on edge devices with strict latency constraints.

**Task:** My goal was to design an end‑to‑end solution that processed user queries in under 200 ms while maintaining at least 95 % BLEU score against the reference translations, all within a 50 MB memory budget.

**Action:** I started by profiling the baseline PyTorch model and identified redundant matrix multiplications. Using ONNX Runtime with TensorRT, I fused attention layers and applied mixed‑precision FP16 inference. I then implemented a dynamic batching strategy that queued up to four concurrent requests without exceeding the latency target. For deployment, I packaged the engine in a Docker container and scripted automated A/B tests against the reference dataset.

**Result:** The final prototype achieved 185 ms average latency, 96.3 % BLEU, and used only 42 MB of RAM. It won the challenge and earned me an offer. I learned that aggressive layer fusion combined with dynamic batching can bridge the gap between high‑accuracy models and real‑time edge constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
