---
qid: vq_fb71f884f8__think__local
question: Types of Prompt Engineering ?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 454
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:44:03-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
   - Confirm the question is about *prompt‑engineering techniques* for generative AI (e.g., GPT‑style models).  
   - Assume “types” means broad categories or families of strategies rather than a exhaustive list.

**2️⃣ Adopt a mental model**  
   - Think of prompts as *signals* that steer a language model’s latent space.  
   - Group techniques by the *information they provide*: direct instruction, context framing, iterative refinement, and control tokens.

**3️⃣ Step‑by‑step reasoning**  
   1. **Instructional Prompts** – plain commands (e.g., “Explain…”) → focus on task definition.  
   2. **Contextual/Background Prompts** – supply relevant facts or examples before the query → narrows domain.  
   3. **Chain‑of‑Thought / Self‑Ask Prompts** – ask the model to reason stepwise → improves complex reasoning.  
   4. **Few‑Shot Prompting** – give a few labeled examples → teaches style or format.  
   5. **Role‑Based Prompts** – assign a persona (e.g., “You are an expert…”) → changes tone and depth.  
   6. **Control / Instructional Tokens** – add explicit directives (“<MAXLEN=50>”) → constrain output.  
   7. **Iterative Prompting** – refine the prompt based on prior outputs → dynamic adjustment.

**4️⃣ Common traps to avoid**  
   - Mixing too many strategies in one prompt → confusion for the model.  
   - Over‑engineering without testing → wasted effort.  
   - Assuming a single “best” type; effectiveness depends on task and model.

**5️⃣ Sanity‑check & communicate**  
   - Verify each category covers distinct aspects (clarity, context, control).  
   - Summarize in one sentence per type for quick recall.  
   - Encourage iterative testing: start simple, add complexity only if needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
