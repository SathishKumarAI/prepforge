---
qid: ing_820aa9f0da__eli5__local
question: 'Explain: The Dependency Rule — Clean Coder Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 196
total_tokens: 354
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:02:47-05:00'
sources: []
---

**The Dependency Rule (from the Clean Coder blog)**  
Imagine a recipe book where each dish lists exactly which ingredients it needs and nothing else. The “dependency rule” says your code should do the same: every function or module must declare only the tools (variables, other functions) it really uses. It’s like keeping a kitchen counter tidy—if you keep only what you need right in front of you, you won’t accidentally grab the wrong spice and ruin the dish.

**Key terms**  
- *Dependency*: another piece of code that your function relies on to work.  
- *Module*: a self‑contained chunk of code (like a recipe).  

By following this rule, your code stays clear, easier to test, and less likely to break when something else changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
