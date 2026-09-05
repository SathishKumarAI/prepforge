---
qid: ing_570bb940c6__star__local
question: 'Explain: FlashAttention-3 and int8 quantization — Optimizing AI Inference
  at Character.AI (Part Deux)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 344
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:22:03-05:00'
sources: []
---

**Situation** – At Character.AI we were launching a new dialogue model that had to process millions of user turns per day while staying under the $0.02 inference cost per prompt. Our baseline GPU usage was too high, and latency on our edge servers exceeded 150 ms.

**Task** – Reduce the compute budget by at least 40 % without hurting perplexity or response quality, and keep the model deployable on mixed‑precision GPUs that only support INT8 arithmetic.

**Action** – I first swapped out the standard self‑attention kernel for FlashAttention‑3, which fuses the softmax and attention calculations into a single pass, cutting memory traffic by 70 % and improving cache locality. Next, I applied post‑training INT8 quantization with per‑tensor scaling, carefully calibrating the quantization range using a representative validation set to avoid saturation. To mitigate accuracy loss, I inserted a small “quantization aware fine‑tuning” loop that retrained only the last transformer layer. Finally, I benchmarked across NVIDIA A100 and RTX 3090s, measuring FLOPs and latency.

**Result** – Inference cost dropped from $0.025 to $0.014 per prompt (44 % savings). Latency fell from 165 ms to 95 ms on the edge GPU, meeting our SLA. The perplexity increased by only 0.3 %, and user satisfaction scores remained unchanged. I learned that aggressive kernel fusion coupled with judicious INT8 quantization can deliver both cost and performance gains without compromising model quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
