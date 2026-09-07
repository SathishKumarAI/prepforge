---
qid: ing_bc63304996__faang__local
question: 'Explain: PEFT vs. Full-Parameter — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 470
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:01:05-05:00'
sources: []
---

**Clarify**  
You want a concise comparison of *parameter‑efficient fine‑tuning* (PEFT) versus *full‑parameter fine‑tuning*. I’ll assume the context is large language models (LLMs) where training from scratch or updating all weights is costly, and that we’re interested in downstream task performance, compute, and deployment constraints.  

**Approach**  
1. Define each strategy.  
2. Contrast on three axes: *parameter budget*, *training cost*, *model fidelity*.  
3. Highlight typical PEFT methods (adapter layers, LoRA, prefix tuning).  
4. Summarize when each is preferable.  

**Depth**  
- **Full‑Parameter Fine‑Tuning (FP‑FT)** updates every weight (~hundreds of millions to billions). It gives the model maximal flexibility but incurs high GPU hours, memory pressure, and risks catastrophic forgetting.  
- **PEFT** introduces a small trainable module (1–5 % of parameters) while freezing the backbone. LoRA adds low‑rank matrices; adapters insert bottleneck layers; prefix tuning prepends learnable tokens. Training cost drops by ~10×–100×, memory usage shrinks similarly, and inference overhead is negligible because only a few extra ops are added.  
- Trade‑off: PEFT may under‑perform FP‑FT on highly divergent tasks or when the downstream data distribution differs drastically from pretraining.  

**Edge Cases**  
- Extremely small datasets → overfitting in both; regularization needed.  
- Tasks requiring fine‑grained language generation → PEFT might plateau.  
- Deployment on edge devices: PEFT is preferred due to minimal weight updates.  

**Optimize & Communicate**  
For a production pipeline, I’d start with LoRA (fast convergence) and fallback to full‑fine‑tuning only if validation loss stalls beyond a threshold. I’d narrate this as “we first try the low‑overhead route; only when performance gaps exceed our SLA do we invest in full re‑training.” This demonstrates structured decision‑making, clear metrics, and cost awareness—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
