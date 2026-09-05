---
qid: ing_8f76a3b87b__star__local
question: 'Explain: Precision: FP8 vs BF16 — Pretraining Basics'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 330
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:19:54-05:00'
sources: []
---

**Situation** – While leading the pre‑training of a transformer for our next‑generation recommendation engine, we noticed training stalls after just two epochs. The model was a 12B parameter GPT‑style network running on a mixed‑precision pipeline that defaulted to FP8.

**Task** – I had to diagnose why FP8 caused numerical instability and decide whether switching to BF16 would give us faster convergence without sacrificing accuracy.

**Action** – First, I profiled the loss curve with TensorBoard and saw a sharp spike in gradient norms when using FP8. I then switched the optimizer’s compute type from FP8 to BF16 in PyTorch’s `torch.cuda.amp.autocast` context, keeping weights in FP32 for safety. I added gradient clipping at 1.0 and adjusted the learning rate schedule (warm‑up to 3e-4 over 500 steps). Finally, I ran a 10‑epoch sanity test on a 1 GB slice of data, comparing loss trajectories.

**Result** – Switching to BF16 reduced training time per epoch from 9 min to 6.5 min (≈28% faster) and stabilized the loss curve—validation perplexity dropped from 12.8 to 11.3 after 10 epochs. I learned that BF16 offers a better trade‑off between speed and numerical safety for large‑scale language pre‑training, especially when gradient spikes are common.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
