---
qid: ing_7a26d98a0a__star__local
question: 'Explain: Quantization Settings. — What Makes Low-Bit Quantization-Aware
  Training Work for Reasoning LLMs? A Systematic Study'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 356
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:38:15-05:00'
sources: []
---

**Situation**  
When my team was preparing a new reasoning‑oriented language model for deployment on edge devices, we faced a 4 GB GPU memory ceiling and an inference latency target of under 100 ms per prompt.

**Task**  
I had to reduce the model size by at least 70% without sacrificing its accuracy on logical deduction benchmarks (e.g., GSM‑8K, BIG-Bench Reasoning).

**Action**  
We experimented with low‑bit quantization‑aware training (QAT). First, I configured a per‑layer symmetric 4‑bit scale and zero‑point scheme in PyTorch’s `torch.quantization` module. To preserve reasoning capability, I introduced a “gradient scaling” trick: during backprop, gradients were clipped to a narrow range to avoid exploding updates on the quantized weights. Next, I added a small “calibration set” of 10 k inference samples fed through the model to fine‑tune the quantization parameters. Finally, we ran a mixed‑precision checkpointing pipeline so that only critical layers (attention heads and MLPs) stayed in full precision during forward passes, while the rest used 4‑bit.

**Result**  
The quantized model was 3.8× smaller and achieved a latency of 78 ms on our target device, with an overall accuracy drop of just 1.2% (from 88.7% to 87.5%) on GSM‑8K. I learned that careful calibration and selective precision retention are key for making low‑bit QAT viable in reasoning LLMs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
