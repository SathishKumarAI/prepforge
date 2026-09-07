---
qid: ing_f2bb9ff26e__faang__local
question: Qwen3 unifies a "thinking" mode and a "non-thinking" mode in a single model,
  with a thinking budget the caller can set. How would you train that, and how would
  you serve it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 531
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:03:38-05:00'
sources: []
---

**Clarify**  
We’re asked to build a single LLM (e.g., Qwen‑3) that can operate in two regimes:  

1. **Thinking mode** – the model deliberates, generates intermediate reasoning steps, and consumes a *budget* of tokens or compute.  
2. **Non‑thinking mode** – it directly produces an answer with minimal overhead.  

Assumptions to confirm:  
- The budget is expressed in “reasoning tokens” (or time).  
- The caller can specify the budget per request.  
- We want a smooth transition between modes and consistent API.

---

**Approach**  
1. **Training data augmentation** – pair each training example with a *thinking* trace (e.g., step‑by‑step solution) and an *answer* label.  
2. **Dual‑head architecture** – add a small classifier head that predicts whether to enter thinking mode given the prompt + budget.  
3. **Reinforcement fine‑tuning** – reward higher accuracy when the model spends its allotted reasoning tokens; penalize over‑use or under‑use of the budget.  
4. **Serving pipeline** – expose an API flag `think=true/false` and a numeric `budget`. The inference engine routes to:  
   - *Thinking*: run iterative decoding until budget exhausted, then output final answer.  
   - *Non‑thinking*: single‑pass generation.

---

**Depth**  
- During training, use a mixture‑of‑experiences objective: cross‑entropy on the answer and on the reasoning steps (teacher forcing).  
- The reinforcement signal can be `reward = accuracy – λ * spent_budget / budget`.  
- Complexity: inference time scales with budget; non‑thinking is O(1) token generation.  

---

**Edge Cases**  
- Budget set to zero → fallback to non‑thinking.  
- Budget too high → cap at a maximum reasoning length.  
- Mis‑classified mode → add a safety net that switches back if the answer confidence drops.

---

**Optimize & Communicate**  
- Cache intermediate reasoning embeddings for repeated prompts.  
- Profile latency per token; adjust `λ` to balance quality vs speed.  
- Explain trade‑offs in the interview: higher accuracy vs latency, deterministic control via budget, and how the dual head keeps the model lightweight.  

This plan aligns with FAANG expectations: clear problem restatement, systematic solution, technical depth, edge‑case awareness, and thoughtful optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
