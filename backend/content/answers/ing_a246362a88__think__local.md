---
qid: ing_a246362a88__think__local
question: 'Explain: Debugging assistance — How to use AI in Meta\u2019s AI-assisted
  coding interview (with real prompts and examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 399
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:48:14-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- *What is “AI‑assisted coding interview”?*  
  Assume a platform where candidates write code live while an AI mentor gives hints, spot bugs, or suggest tests.  
- *Goal of the answer:* Show concrete prompts and sample interactions that illustrate debugging help.

**2️⃣ Adopt a “prompt–response–reflection” framework**

1. **Prompt design** – how to phrase a question so the model understands context (code snippet, error message).  
2. **Response style** – what the AI should deliver: explanation, step‑by‑step fix, or test case.  
3. **Reflection** – candidate’s next move after receiving the answer.

**3️⃣ Step‑by‑step reasoning**

- Start with a minimal reproducible example (MRE).  
- Construct a prompt that includes the code block and the error.  
- Show how to ask for a *bug explanation* vs. a *fix suggestion*.  
- Illustrate a follow‑up where the candidate asks “why did this happen?” and the AI explains underlying concepts.  

**4️⃣ Common pitfalls**

- **Too vague prompts** → AI gives generic advice.  
- **Missing context** (e.g., missing imports) → incomplete fixes.  
- **Overreliance on AI** – candidate may not learn debugging fundamentals.

**5️⃣ Sanity‑check & communicate**

- After the AI’s reply, verify the suggested change with a quick run or unit test.  
- Encourage the candidate to *explain back* what was fixed; this reinforces learning.  
- Keep the dialogue short enough for interview pacing but deep enough for insight.  

By following this structured approach, you can demonstrate how AI can serve as an effective debugging assistant in a live coding interview while ensuring candidates still engage critically with the problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
