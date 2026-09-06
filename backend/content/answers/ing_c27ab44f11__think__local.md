---
qid: ing_c27ab44f11__think__local
question: 'Explain: System Prompt and User Prompt — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 458
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:47:17-05:00'
sources: []
---

**Thinking Process for Explaining “System Prompt vs. User Prompt” (Context Engineering)**  

1. **Clarify the Scope & Assumptions**  
   - Identify that we’re talking about *prompt‑engineering* in LLMs, not general ML.  
   - Assume the audience knows basic LLM terminology but may be new to prompt roles.  
   - Decide on a concise definition before diving into examples.

2. **Choose a Mental Model / Framework**  
   - Treat prompts as *layers of context*:  
     1. **System Prompt** – top‑level “mission statement” (role, tone).  
     2. **User Prompt** – immediate request or question.  
   - Use the analogy of a *conversation script* where the system sets rules and the user asks for content.

3. **Step‑by‑step Reasoning Toward the Answer**  
   - Explain each component separately: purpose, placement, typical wording.  
   - Show how they interact: System sets constraints; User supplies specifics.  
   - Provide a short example (e.g., “You are a friendly tutor” + “Explain recursion in Python”).  
   - Mention that context engineering is about *engineering* this layered input to steer model output.

4. **Common Traps & Wrong Turns**  
   - Mixing user intent into the system prompt → loss of flexibility.  
   - Over‑specifying the system role → brittle responses.  
   - Forgetting that prompts are cumulative; earlier context persists unless overwritten.

5. **Sanity‑Check & Communicate Clearly**  
   - Re‑phrase in plain language: “Think of the system prompt as setting the stage, the user prompt as asking a question.”  
   - Ask the reader to test with a quick LLM query to see how changing each part affects output.  
   - End with a concise takeaway: *Context engineering = layering prompts so the model knows who it is and what you want.*

This structured approach lets you explain the concept clearly, anticipate misunderstandings, and give the learner a practical mental map they can reuse for other prompt‑engineering tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
