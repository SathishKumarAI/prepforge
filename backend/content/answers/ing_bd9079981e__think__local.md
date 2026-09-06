---
qid: ing_bd9079981e__think__local
question: 'Explain: Self-Reflection — LLM Powered Autonomous Agents | Lil''Log'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 476
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:28:58-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Identify *what* “Self‑Reflection” means in this context (meta‑evaluation of own actions).  
- Confirm that we’re talking about LLM‑powered autonomous agents, not just static chatbots.  
- Assume the agent can generate text, access a memory store, and has a goal hierarchy.

**2️⃣ Adopt a mental model**  
Use the **Goal‑Planning–Execution–Evaluation loop**:  
1. *Plan*: decide next action.  
2. *Execute*: perform it.  
3. *Reflect*: assess outcome against goals and adjust future plans.  

Add a **self‑model layer** that stores beliefs about its own competence, confidence, and past errors.

**3️⃣ Step‑by‑step reasoning**  
- *Plan*: Agent queries its goal stack → selects highest priority task.  
- *Execute*: Calls the LLM to produce an answer or action.  
- *Reflect*:  
  - Compare output with expected outcome (e.g., user satisfaction, factual accuracy).  
  - Use heuristics like “Did I mention key constraints?” or “Was my confidence level justified?”.  
  - Update internal metrics (confidence score, error count).  
- *Adapt*: If reflection flags a mismatch, the agent rewrites its plan or re‑asks the LLM for clarification.

**4️⃣ Common pitfalls to avoid**  
- **Over‑trusting the LLM**: treating every output as fact without verification.  
- **Circular reasoning**: reflecting on a reflection that never resolves.  
- **Memory blow‑up**: storing too many past reflections; use summarization or decay.  
- **Bias amplification**: reflecting only successes, ignoring failures.

**5️⃣ Sanity‑check & communicate**  
- Test the loop with simple “what‑if” scenarios to ensure the reflection actually changes behavior.  
- Explain the process aloud by mapping each step to a tangible example (e.g., answering a user question and then checking if the answer meets all constraints).  
- Summarize: *Self‑reflection is an extra evaluation layer that lets LLM agents critique their own output, learn from mistakes, and iteratively improve future actions.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
