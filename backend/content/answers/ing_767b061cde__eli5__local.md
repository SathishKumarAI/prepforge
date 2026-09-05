---
qid: ing_767b061cde__eli5__local
question: Reasoning models expose a thinking budget or reasoning effort setting. How
  do you tune it, and what goes wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 318
total_tokens: 488
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:44:07-05:00'
sources: []
---

Think of an AI model as a student who can only write one paragraph at a time.  
The **reasoning budget** is like the number of sentences the teacher allows the student to use before giving up.  

*If you give too few sentences*, the student rushes and might miss important details— the answer will be shallow or wrong.  
*If you give too many sentences*, the student spends time over‑thinking, writing unnecessary fluff, and may even get lost in side‑tracks, which slows the whole process.

**Tuning it** is like adjusting a “time‑limit” slider: start with a moderate number of sentences (e.g., 3–5). Run a few test questions.  
- If answers are vague, increase the limit.  
- If answers are long and slow or repetitive, decrease it.  

What can go wrong?  
1. **Under‑budgeting** cuts off correct reasoning early, producing incomplete answers.  
2. **Over‑budgeting** causes the model to wander, waste compute, and sometimes produce contradictory statements.  
3. Because the budget is fixed per prompt, a single setting may work for some questions but not others— a “one size fits all” approach can misfire.

So treat the reasoning budget as a flexible time allotment: set it based on the task’s complexity, test, and adjust until the answers are both accurate and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
