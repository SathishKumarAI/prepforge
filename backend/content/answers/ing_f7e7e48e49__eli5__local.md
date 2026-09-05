---
qid: ing_f7e7e48e49__eli5__local
question: What is meta-prompting? How would you use a model to improve your prompts
  - and what are the pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 237
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:07:39-05:00'
sources: []
---

Imagine you’re writing a recipe for a smart kitchen robot that can cook anything you ask.  
**Meta‑prompting** is like giving the robot a *recipe of recipes*: instead of telling it “make spaghetti,” you first say, “tell me how to write a good prompt so the robot understands what I want.” The model then suggests better wording, extra details, or questions that clarify your intent.

To use this, feed a draft prompt into the model, ask it to improve clarity and completeness, and iterate.  
Pitfalls:  
1. **Over‑fitting** – you may end up with a prompt that works only for that specific model version.  
2. **Misleading edits** – the model can add assumptions or wrong details if not guided carefully.  
3. **Loss of control** – too many changes might drift from your original goal.

So, treat meta‑prompting as a helper that refines your instructions, but keep an eye on the final wording to stay true to what you really want.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
