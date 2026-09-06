---
qid: ing_dbbe2bea72__think__local
question: 'Explain: Optimising prompts — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 556
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:27:04-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - *What exactly is “optimising prompts”?* Assume it means crafting text inputs so an LLM produces high‑quality, relevant outputs.  
   - *Scope:* focus on prompt engineering techniques and how context (background info, constraints) influences results.  
   - *Audience:* explain in plain terms for people with some AI familiarity but not deep technical background.

**2️⃣ Adopt a mental model**  
   Use the **“Prompt → Model → Output” pipeline:**  
   1. Prompt design (structure, wording, length).  
   2. Contextual signals (system messages, prior chat turns, user goals).  
   3. Model’s internal decoding (temperature, top‑k, etc.).  
   Visualize this as a flowchart or a “prompt canvas” to keep each element distinct.

**3️⃣ Step‑by‑step reasoning**  

| Step | What to cover | Why it matters |
|------|---------------|----------------|
| **a. Define the objective** | Specify the task (translation, summarisation, brainstorming). | Clear goals steer prompt wording. |
| **b. Choose a template** | Use “system”, “user”, and “assistant” roles or a single‑block format. | Templates guide model expectations. |
| **c. Add context** | Provide background facts, constraints, style guidelines. | Richer context reduces hallucination & aligns tone. |
| **d. Be explicit with instructions** | Use imperative verbs (“Explain in 3 bullets”). | Reduces ambiguity. |
| **e. Iterate & test** | Run several variants, compare outputs. | Empirical tuning beats guesswork. |

**4️⃣ Common traps to avoid**

- *Over‑loading the prompt:* too many details can confuse the model.  
- *Implicit assumptions:* expecting the model to know unstated norms.  
- *Neglecting token limits:* long context may truncate vital parts.  
- *Ignoring temperature settings:* high randomness can break precision.

**5️⃣ Sanity‑check & communicate**

1. **Read back the prompt aloud** – does it read like a clear instruction?  
2. **Predict the output mentally** – if it feels off, tweak wording or add missing context.  
3. **Explain your design choices** to the audience: “I used a system message to set tone because…” This shows understanding and invites feedback.

By following this structured approach—clarify, model, reason, avoid pitfalls, then verify—you’ll craft prompts that consistently yield accurate, relevant AI responses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
