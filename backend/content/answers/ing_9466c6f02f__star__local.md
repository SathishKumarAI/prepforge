---
qid: ing_9466c6f02f__star__local
question: 'Explain: GPU Requirements by Model Size — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 346
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:48-05:00'
sources: []
---

**Situation:**  
When I joined a startup developing a custom language‑model service, the engineering budget was capped at $30k per month for compute. Our goal was to serve real‑time inference with models ranging from 125M to 6B parameters while staying within that cap.

**Task:**  
I had to map model size to GPU cost, determine the most efficient hardware mix, and present a monthly spend forecast that aligned with our performance targets (≤30 ms latency for 125M, ≤200 ms for 6B).

**Action:**  
I benchmarked inference on Nvidia A100s, RTX‑3090s, and H100s, measuring throughput and power draw. I built an Excel model converting FLOPs to GPU hours, then to USD using spot pricing (A100 $3/hr, RTX‑3090 $1/hr, H100 $5/hr). I identified that 125M could run on a single RTX‑3090, while the 6B required two A100s for acceptable latency. I also negotiated a multi‑year commitment for A100s at a 15 % discount and added an auto‑scaling policy to spin down idle GPUs.

**Result:**  
The final architecture kept monthly spend under $28k, meeting latency goals across all model sizes. We reduced inference cost per token by 22 % compared to the baseline plan and learned that careful GPU sizing plus dynamic scaling can deliver high performance without breaking the budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
