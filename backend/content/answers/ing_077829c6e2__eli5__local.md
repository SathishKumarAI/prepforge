---
qid: ing_077829c6e2__eli5__local
question: How do you design a good rubric for model-graded evals, and where does chain-of-thought
  fit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 273
total_tokens: 443
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:47:29-05:00'
sources: []
---

Think of a rubric like a recipe card for grading a dish. First decide the **ingredients** (criteria) you want to judge: accuracy, clarity, creativity, and reasoning. Give each ingredient a clear, simple definition so anyone can see what it means—“accuracy” is how well the answer matches known facts; “clarity” is how easy it is to read.

Next set **spice levels** (point ranges) for each ingredient. For example, accuracy might be 0–4 points: 0 = completely wrong, 4 = perfect. Make sure the scales are consistent and not too long—shorter scales help graders stay on track.

Now add a **taste test step**: ask graders to note if the answer shows *chain‑of‑thought* (CoT). Think of CoT as the chef’s explanation of how they cooked each part. If an answer explains its reasoning, give extra points; if it just spits out facts, give fewer.

Finally, share the card with a few test answers and let graders practice. Adjust any confusing words or uneven point ranges until everyone agrees on what “good” looks like. This keeps grading fair, transparent, and gives clear feedback to learners.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
