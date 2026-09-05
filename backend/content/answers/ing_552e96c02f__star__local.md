---
qid: ing_552e96c02f__star__local
question: 'Explain: Vera (Vector-based Random Aggregation) — Lora Qlora Peft'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 376
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:18:29-05:00'
sources: []
---

**Situation**  
I was leading a team at a fintech startup that needed to deploy a transformer‑based fraud detector on our low‑power mobile wallets. The baseline model was 1.2 GB and far exceeded the 256 MB quota.

**Task**  
Reduce the model size to under 200 MB while keeping >95% of its AUC, and keep inference latency below 50 ms on an ARM Cortex‑A55.

**Action**  
We combined three compression tricks:  
1. **Vera (Vector‑based Random Aggregation)** – we pruned attention heads by randomly aggregating weight vectors, which preserved key semantic directions with only a 15% drop in accuracy.  
2. **LoRA** – inserted low‑rank adapters (rank = 8) into the transformer layers, allowing fine‑tuning on our fraud data without touching the frozen backbone.  
3. **QLoRA & PEFT** – quantized the LoRA weights to 4‑bit integers and used Parameter‑Efficient Fine‑Tuning to freeze all but the adapter parameters, cutting the parameter count by 70%.

We scripted the pipeline in PyTorch, ran a two‑phase fine‑tune (LoRA first, then QLoRA), and validated on a held‑out fraud set.

**Result**  
The final model was 190 MB, inference latency dropped to 38 ms, and AUC only fell from 0.982 to 0.975—well above our target. I learned that layering random aggregation with low‑rank adapters and quantization can achieve aggressive compression without a steep accuracy penalty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
