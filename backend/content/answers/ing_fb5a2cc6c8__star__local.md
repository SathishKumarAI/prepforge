---
qid: ing_fb5a2cc6c8__star__local
question: 'Explain: Questions — Mistral AI Applied AI Engineer Interview Experience
  - France'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 408
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:51:42-05:00'
sources: []
---

**Situation** – I had just finished my master’s thesis on transformer compression and was interviewing for an Applied AI Engineer role at Mistral AI in Paris. The interview panel consisted of a senior research scientist, a product manager, and a software engineer who’d built the inference engine.

**Task** – They asked me to explain how I would take a state‑of‑the‑art language model, reduce its latency by 40 % on edge devices, while keeping perplexity within 5 %. The interviewer wanted to see both my technical depth and my practical trade‑off reasoning.

**Action** – I described a two‑step plan: first, apply knowledge distillation with a temperature of 2.0, training a 12‑layer student from the 24‑layer teacher while using mixed‑precision (FP16) fine‑tuning on NVIDIA RTX 3090s. Second, quantize to int8 with per‑tensor scaling, then use TensorRT’s layer fusion and dynamic tensor cores for inference on an ARM‑based Jetson AGX Xavier. I mentioned profiling with Nsight Systems to identify the GPU kernel bottlenecks and adjusting batch size to 1 for real‑time latency. I also highlighted that we’d monitor BLEU scores every epoch to keep accuracy within budget.

**Result** – After running benchmarks, the student model ran in 12 ms on the Jetson— a 45 % drop from the baseline 22 ms— while perplexity increased only 3.7 %. The interviewers praised my end‑to‑end pipeline and I was offered the position. I learned that coupling distillation with careful quantization, guided by real‑time profiling, is key to meeting strict latency targets in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
