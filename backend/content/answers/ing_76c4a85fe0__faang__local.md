---
qid: ing_76c4a85fe0__faang__local
question: You have one on-device base model but a dozen features - summarization,
  rewriting, reply suggestions, tone adjustment. How do you specialise without shipping
  a dozen models?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 435
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:19:55-05:00'
sources: []
---

**Clarify**  
You want to enable many NLP tasks (summarization, rewrite, reply‑suggestion, tone tweak) on a single edge device that only holds one “base” model. The goal is zero‑model bloat while still delivering task‑specific quality.

Assumptions to confirm:  
- Base model size ≤ 100 MB and inference latency < 200 ms.  
- Tasks differ mainly in output style, not in underlying language understanding.  
- Device has a modest GPU/NN accelerator but limited memory.

**Approach**  
1. **Prompt‑tuning / prefix adapters** – keep the core weights frozen; add small task‑specific embeddings or prompts that steer generation.  
2. **Parameter‑efficient fine‑tuning (PEFT)** – use LoRA or adapters (~10 KB per task).  
3. **Dynamic dispatch** – a lightweight controller selects the correct prompt/adaptor pair at runtime.

**Depth**  
- Load base model once into GPU/CPU RAM.  
- For each request, concatenate a short, learned prefix (e.g., “Summarize:”) to the input.  
- LoRA matrices are fused with the attention layers on the fly; only ~0.5 % of parameters change per task.  
- Inference remains at base‑model speed; memory overhead ≈ adaptor size × #tasks (~100 KB total).  

**Edge Cases**  
- Overlap between tasks could cause interference—use orthogonal prompts or task‑specific dropout.  
- Extremely long inputs may exceed context window; chunking strategy needed.  
- Device overload if many concurrent tasks – throttle adaptor loading.

**Optimize & Communicate**  
Explain that this method keeps a single, highly optimized base model while adding negligible per‑task overhead, enabling rapid feature rollout without increasing binary size or inference latency. Highlight trade‑offs: slight loss in fine‑tuned performance versus massive deployment savings. This aligns with FAANG expectations for scalable, maintainable AI solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
