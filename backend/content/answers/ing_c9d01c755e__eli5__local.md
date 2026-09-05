---
qid: ing_c9d01c755e__eli5__local
question: 'Explain: The Instruction Hierarchy — Prompt Engineering Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 224
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:55:02-05:00'
sources: []
---

Think of a recipe book for a robot chef (the AI).  
The **Instruction Hierarchy** is the order in which you give it directions so it cooks exactly what you want.

1. **Goal (Outcome)** – “Make a chocolate cake.” This tells the chef *what* to finish with.  
2. **Constraints (Rules)** – “No nuts, use low‑fat milk.” These set boundaries that must never be broken.  
3. **Steps (Procedure)** – “Mix flour and sugar; add eggs; bake at 350°F for 30 minutes.” This is the detailed play‑by‑play.  

When you write a prompt, put the goal first, then list constraints, and finally give step‑by‑step instructions. The AI follows this ladder: it checks the goal, obeys every constraint, and executes each step in order. Like a chef who never adds an ingredient that isn’t allowed, the AI stays true to your hierarchy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
