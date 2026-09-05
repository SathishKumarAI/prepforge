---
qid: ing_3f4cd19d02__eli5__local
question: A teammate edited the prompt in production and quality dropped. How do you
  fix the immediate problem and the process problem?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 247
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:16:11-05:00'
sources: []
---

Imagine your AI is like a recipe that everyone follows in the kitchen. One day, a teammate changed an ingredient—maybe swapped salt for sugar—without telling anyone. The dish (the model’s output) suddenly tastes off, so customers complain.

**Fix the immediate problem:**  
1. **Revert the change** – restore the original recipe exactly as it was.  
2. **Run a quick test** with a small batch to confirm the flavor returns to normal.  
3. **Notify everyone** that the issue is fixed and keep an eye on the next few batches.

**Fix the process problem:**  
1. **Add a “cookbook” rule**: any recipe change must go through a review box (code‑review or prompt‑change approval).  
2. **Track changes in version control** so you always know who did what and when.  
3. **Automate quality checks** that flag sudden drops in output before the dish leaves the kitchen.

With these steps, the AI “dish” stays consistent, and future edits are safe and transparent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
