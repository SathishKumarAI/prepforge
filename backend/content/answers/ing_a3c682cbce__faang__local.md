---
qid: ing_a3c682cbce__faang__local
question: When would you fine-tune a model instead of using RAG or prompt engineering
  - and if you do fine-tune, LoRA or full fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 498
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:06:03-05:00'
sources: []
---

**Clarify**  
You’re asked: *When should we fine‑tune an LLM instead of relying on Retrieval‑Augmented Generation (RAG) or prompt engineering?*  
Key assumptions:  
1. The task requires consistent, high‑precision responses (e.g., legal compliance).  
2. You have a labeled dataset large enough to train.  
3. Runtime latency and compute budgets are known.

**Approach**  
1. Identify the failure modes of RAG/prompting (hallucinations, domain drift).  
2. Decide on the fine‑tuning granularity: LoRA vs full.  
3. Evaluate trade‑offs: speed, memory, update frequency.

**Depth**  
- **When to fine‑tune:**  
  - *Domain‑specific knowledge* that can’t be captured by retrieval alone (e.g., proprietary medical protocols).  
  - *Regulatory constraints* demanding deterministic behavior.  
  - *Performance ceilings*: RAG/prompting plateau at ~70 % accuracy, while fine‑tuning pushes to >90 %.  

- **LoRA vs full fine‑tune:**  
  - *LoRA:* Freeze base weights; inject trainable rank‑decomposed adapters (~0.5–1 M params). Pros: fast convergence, safe updates, low memory. Cons: limited expressivity if the task needs large policy shifts.  
  - *Full fine‑tune:* Update all weights (~hundreds of millions). Pros: maximal flexibility; captures subtle linguistic nuances. Cons: high compute, risk of catastrophic forgetting.

**Edge Cases**  
- Tiny datasets → overfitting; use LoRA or few‑shot prompting instead.  
- Rapidly evolving knowledge → prefer RAG to avoid retraining.  
- Latency constraints (e.g., real‑time voice) → LoRA is preferable for smaller model footprints.

**Optimize & Communicate**  
Start with a small LoRA experiment to validate ROI; if performance gaps persist, roll out full fine‑tune on a dedicated GPU cluster. Explain that LoRA offers “just‑in‑time” adaptability while full fine‑tuning is the gold standard when absolute fidelity matters. This layered strategy balances engineering effort, cost, and product quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
