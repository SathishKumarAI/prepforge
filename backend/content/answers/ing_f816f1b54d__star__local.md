---
qid: ing_f816f1b54d__star__local
question: 'Explain: Interview questions — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 299
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:45:00-05:00'
sources: []
---

**Situation:** In my last role I was asked to build a lightweight chatbot for the company’s internal knowledge base, but the existing models were too large and slow for our on‑prem servers.

**Task:** I had to design an inference pipeline that kept accuracy while reducing latency below 200 ms per request and fitting under 2 GB of RAM.

**Action:** First, I pruned a pre‑trained transformer (distilBERT) by removing low‑importance attention heads, then quantized the weights to 8‑bit integers. Next, I implemented beam search with length‑penalty to balance relevance and speed. For deployment I wrapped the model in ONNX Runtime and used TorchScript for GPU acceleration, monitoring CPU/GPU usage via Prometheus. I also set up an A/B test comparing user satisfaction scores between the baseline GPT‑3 API and our optimized model.

**Result:** The final chatbot served 1,200 queries per hour with average latency of 180 ms and used only 1.5 GB RAM— a 40% reduction in resource usage. Accuracy remained within 2% of the original model, and user satisfaction rose from 78% to 86%. I learned that careful pruning, quantization, and real‑time monitoring can bring large LLMs into production without compromising quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
