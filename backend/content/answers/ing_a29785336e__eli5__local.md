---
qid: ing_a29785336e__eli5__local
question: How do you version and govern prompts in production? Someone asks which
  prompt produced a bad output three weeks ago - can you answer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 201
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:55:29-05:00'
sources: []
---

Think of each prompt as a recipe for a dish your kitchen (the AI) makes every day.  
Just like chefs keep a notebook that records the exact ingredients, amounts, and steps, you store every prompt in a version‑controlled system—think of it as a “recipe book” with page numbers and dates.

When a bad batch turns up, you can flip back to the recipe page that was used at that time. The book also notes who changed the recipe (the author), why they changed it (a comment like “added a safety check”), and when the change went live (a timestamp).  

Governance is the kitchen’s policy: only approved cooks may edit recipes, all edits must be reviewed, and every version is archived so you can always answer, “Which prompt produced that output three weeks ago?” by pulling up the exact recipe page from the log.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
