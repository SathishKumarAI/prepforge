---
qid: ing_23e1d5a9e1__think__local
question: This coding round is AI-assisted - use Cursor/Claude however you like. How
  do you approach it, and what do you think we're evaluating?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 390
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:02:38-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   • Ask: “What’s the exact problem statement?” (input format, constraints, expected output).  
   • Assume I have a clean coding environment and can use external AI tools for reasoning, not just brute‑force code.  

**2️⃣ Choose a mental framework**  
   • Problem decomposition → identify sub‑problems (e.g., parsing, algorithm choice, edge cases).  
   • Tool selection hierarchy: first think manually, then request high‑level pseudocode from Claude/Cursor, finally generate low‑level implementation in the target language.  

**3️⃣ Step‑by‑step reasoning**  
   1. Outline the algorithm in plain English.  
   2. Ask the AI to validate complexity and potential pitfalls.  
   3. Draft a skeleton; let the AI fill in helper functions.  
   4. Run unit tests locally, refine with feedback from the tool.  

**4️⃣ Avoid common traps**  
   • Don’t over‑rely on auto‑generated code—always inspect for off‑by‑one errors or missing corner cases.  
   • Beware of “hallucinations” in AI suggestions; cross‑check logic against known examples.  
   • Keep the solution language‑agnostic until the final implementation step.  

**5️⃣ Sanity‑check & communicate**  
   • Explain the chosen approach aloud (or via comments) to show understanding.  
   • Summarize time/space trade‑offs and why the solution is optimal for given constraints.  
   • Highlight any assumptions made about input size or format.  

*What they’re evaluating:* clarity of reasoning, effective use of AI tools without over‑dependency, correctness, efficiency, and communication skills.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
