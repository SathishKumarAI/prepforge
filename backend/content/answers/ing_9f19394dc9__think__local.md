---
qid: ing_9f19394dc9__think__local
question: 'Explain: Q12: Explain the ReAct pattern — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 478
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:37:02-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - The user wants a *thinking process* for explaining the ReAct pattern, not the explanation itself.  
   - Assume the audience knows basic AI terms (LLMs, prompting) but may not know ReAct.  
   - Decide on a concise yet thorough roadmap that can be reused for other patterns.

**2. Choose a mental‑model framework**  
   - Use *Problem → Strategy → Execution → Reflection* as a scaffold: first state the problem ReAct solves, then outline its core idea (Reason + Act), next show how to implement it in practice, finally reflect on trade‑offs and extensions.

**3. Step‑by‑step reasoning**  
   1. Identify the *gap*: LLMs lack grounding or stepwise reasoning; they often hallucinate or skip intermediate steps.  
   2. Map ReAct’s contribution: it injects a loop where the model alternates between “reasoning” (textual justification) and “acting” (making a concrete API call or output).  
   3. Illustrate the flow with a simple pseudo‑dialogue: prompt → LLM outputs “I think I need X” → system executes X → LLM receives result → continues reasoning → final answer.  
   4. Highlight how this pattern keeps the model in control while leveraging external tools.

**4. Avoid common pitfalls**  
   - Don’t confuse ReAct with pure chain‑of‑thought; emphasize the *action* component.  
   - Don’t over‑promise: note that ReAct relies on the LLM’s ability to correctly parse and emit actions.  
   - Avoid jargon overload—keep explanations accessible.

**5. Sanity‑check & verbalize**  
   - Verify each step logically follows the previous one; ensure there are no leaps in the flow diagram.  
   - Practice explaining it aloud, noting any part that feels vague or redundant, and trim accordingly.  

Use this template whenever you need to dissect a pattern: start with the problem, show the core idea, walk through an example, discuss trade‑offs, and finish with a quick sanity check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
