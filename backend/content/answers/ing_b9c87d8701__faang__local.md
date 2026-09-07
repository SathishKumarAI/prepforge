---
qid: ing_b9c87d8701__faang__local
question: 'Explain: Context engineering for long-horizon tasks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 435
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:55:03-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *context engineering*—the practice of crafting the prompt or input context—to enable an LLM to handle tasks that span many steps (e.g., multi‑step reasoning, long‑term planning). Assume we’re working with a modern transformer (GPT‑4/Claude) and can’t rely on external state between calls.

**Approach**  
1. Identify task milestones (goals, sub‑tasks).  
2. Encode each milestone as an explicit instruction or memory token.  
3. Use a hierarchy: high‑level plan + low‑level execution steps.  
4. Iteratively refine the context by feeding back intermediate outputs and prompts.

**Depth**  
- **Prompt chaining**: Pass previous answers back into the prompt, but limit token length by summarizing with *semantic compression* (e.g., “In summary…”) to keep essential info.  
- **Memory tokens**: Use special markers (`[STEP 1]`, `[RESULT]`) so the model can track progress.  
- **Dynamic weighting**: Prioritize recent context via attention biases or token repetition, ensuring long‑term goals stay in focus.  
- **Error handling**: Include “fallback” sub‑prompts that trigger if a step fails (e.g., “If you cannot compute X, ask for clarification”).  

Complexity is linear in prompt length; trade‑off between fidelity and token budget.

**Edge Cases**  
- Token overflow → truncation of earlier steps.  
- Drift: model forgets high‑level goal if not explicitly referenced.  
- Ambiguous sub‑tasks leading to infinite loops—detect via step counter.

**Optimize & Communicate**  
Start with a minimal skeleton prompt, then iterate: add explicit milestones, compress summaries, and test on sample long‑horizon tasks (e.g., planning a trip). Explain that this modular context engineering turns the stateless model into an effective agent capable of reasoning across many steps while staying within token limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
