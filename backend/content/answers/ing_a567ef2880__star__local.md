---
qid: ing_a567ef2880__star__local
question: 'Explain: Roles of RL under low-bit QAT. — What Makes Low-Bit Quantization-Aware
  Training Work for Reasoning LLMs? A Systematic Study'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 351
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:03:47-05:00'
sources: []
---

**Situation**  
I was leading a project to deploy an open‑source reasoning LLM on edge devices with only 8 Gbps of memory bandwidth. The baseline float32 model was too large and inference latency exceeded our 50 ms target.

**Task**  
Reduce the model size and inference time by applying low‑bit quantization (4‑bit weights, 2‑bit activations) while keeping top‑1 accuracy on a reasoning benchmark within 2% of the full‑precision baseline.

**Action**  
I used reinforcement learning–based quantization-aware training. First, I defined a reward function that combined perplexity loss with a latency penalty derived from an emulator profile. Then, during fine‑tuning, the RL agent sampled per‑layer bit‑widths and scaling factors; each episode evaluated the model on a validation set and returned the reward. The policy network gradually converged to assigning 4 bits to most transformer layers but retained 8 bits for the final dense layer where reasoning accuracy was most sensitive. I also incorporated group‑wise quantization to preserve sparsity patterns, and used mixed‑precision matrix multiplication kernels (cuBLASLt) to exploit GPU tensor cores.

**Result**  
The RL‑guided QAT produced a 4× smaller model that ran in 35 ms on the target device, with only a 1.3% drop in accuracy versus float32. I learned that letting an RL agent explore bit‑widths per layer captures non‑linear trade‑offs between precision and latency better than static heuristics, especially for reasoning workloads where certain attention heads are more critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
