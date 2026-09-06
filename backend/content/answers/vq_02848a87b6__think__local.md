---
qid: vq_02848a87b6__think__local
question: 5 What is Precognition prompting, and when would you use it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 406
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:04:26-05:00'
sources: []
---

**1️⃣ Clarify the concept & set assumptions**  
- Confirm “precognition prompting” refers to a strategy where you *predict* future model outputs or user needs before they’re explicitly asked.  
- Assume we’re dealing with LLMs that can generate responses iteratively, and the goal is to guide them toward a desired outcome without hard‑coding every detail.

**2️⃣ Adopt a “forward‑planning” mental model**  
Think of the prompt as a *roadmap* rather than a straight instruction.  
- Identify the final objective (e.g., produce a coherent story).  
- Map intermediate checkpoints (plot outline, character arcs) that the model should hit before delivering the final output.

**3️⃣ Step‑by‑step reasoning**  
1. **State the end goal clearly.**  
2. **Break it into sub‑tasks.**  
3. **Ask the model to anticipate and generate each sub‑task first.**  
4. **Iteratively feed back predictions as context for subsequent steps.**  
5. **Validate that each step aligns with the overall objective before proceeding.**

**4️⃣ Common traps to avoid**  
- Overloading the prompt: too many predicted steps can confuse the model.  
- Forgetting to loop back: if a sub‑task fails, don’t just keep moving forward.  
- Assuming perfect foresight: models may still diverge; include checkpoints for correction.

**5️⃣ Sanity‑check & communicate clearly**  
- After each prediction phase, summarize what was expected vs. what was produced.  
- Explicitly ask the model to “confirm” its next move before execution.  
- Keep the prompt concise yet structured—use numbered or bullet lists to signal the sequence.

By treating precognition prompting as a *dynamic plan* that anticipates future content, you can steer LLMs toward complex outputs while retaining flexibility for correction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
