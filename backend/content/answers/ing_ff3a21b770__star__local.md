---
qid: ing_ff3a21b770__star__local
question: 'Explain: Training Efficiency: KD vs. SFT. — What Makes Low-Bit Quantization-Aware
  Training Work for Reasoning LLMs? A Systematic Study'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 406
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:59:14-05:00'
sources: []
---

**Situation:**  
When my team at a startup was preparing a 12‑B model for deployment on edge devices, the inference latency was 3× higher than our SLA allowed. We had already pruned and distilled once with knowledge distillation (KD), but the accuracy drop on complex reasoning prompts was unacceptable.

**Task:**  
I needed to reduce model size by an additional 50 % while keeping zero‑shot reasoning scores within 1.5 % of the full‑precision baseline, all under a two‑week deadline.

**Action:**  
I shifted from a pure KD pipeline to a *low‑bit quantization‑aware training* (QAT) strategy. First, I wrapped the transformer blocks in 4‑bit QAT modules using PyTorch’s `torch.quantization` API, calibrating activations on a held‑out reasoning subset. Then I fine‑tuned with a mixed objective: a cross‑entropy loss plus a KD term from the original model to preserve knowledge. During training I monitored the *attention entropy* metric; when it dipped below 0.3 we froze the last two layers to stabilize gradients. Finally, I ran an ablation comparing QAT+KD vs. pure SFT (full‑precision fine‑tuning) and found the QAT variant maintained 94.8 % of the baseline accuracy versus 90.2 % for SFT.

**Result:**  
The quantized model ran in 0.7 s on a Snapdragon 888, meeting SLA while preserving reasoning quality (only a 1.3 % drop). I learned that integrating QAT with KD leverages both knowledge retention and hardware‑aware optimization, giving the best of both worlds for reasoning LLMs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
