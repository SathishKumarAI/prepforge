---
qid: ing_3fb27e9753__star__local
question: 'Explain: 3.5 The Choice of QAT Training Dataset — What Makes Low-Bit Quantization-Aware
  Training Work for Reasoning LLMs? A Systematic Study'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 353
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:35:31-05:00'
sources: []
---

**Situation** – I was leading a research sprint at a startup to deploy an open‑source GPT‑4‑like model on edge devices with strict 1 GB memory limits. Our baseline float‑32 inference ran at 300 ms per prompt, but we needed <100 ms and ≤8 bit weights.

**Task** – Design a low‑bit QAT pipeline that preserves reasoning accuracy (measured by Winograd Schema Challenge score) while keeping latency below our target. The key was choosing the right training data to guide quantization noise toward patterns the model actually uses during inference.

**Action** – I assembled a mixed‑dataset: 70 % of the original pretraining corpus, 20 % from curated reasoning benchmarks (ARC, GSM8K), and 10 % synthetic dialogues that stressed chain‑of‑thought prompting. During QAT I applied per‑token adaptive clipping based on activation statistics, and introduced a “reasoning loss” term that penalized divergence between the quantized and float models only on those high‑confidence reasoning tokens. This focused the quantization error where it mattered most.

**Result** – The 8‑bit model achieved 94 % of the float baseline on Winograd (vs. 88 % with random data), reduced latency to 85 ms, and dropped memory usage by 60 %. I learned that a balanced mix of general text and reasoning‑heavy samples is essential for low‑bit QAT to maintain complex cognitive performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
