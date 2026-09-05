---
qid: ing_8978f28b80__eli5__local
question: How do you evaluate a model before and after fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 266
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:14:39-05:00'
sources: []
---

Think of a language model as a chef who has learned how to cook many dishes (the base model). **Evaluation** is like a taste test: you give the chef a set of recipes and judge how close the finished meals are to the ideal flavor. Before fine‑tuning, you run this taste test on a special “validation” menu that the chef hasn’t seen yet; the score tells you how good the general recipe book is.

**Fine‑tuning** is then giving the chef a new set of secret ingredients (a specific dataset) and letting him adjust his techniques. After the tweak, you run the same taste test again on the validation menu to see if the flavor improved or stayed the same. If it did, fine‑tuning helped; if not, maybe you need more data or different adjustments.

So evaluation before and after is simply comparing two taste‑test scores: one from the original chef, one from the newly trained chef. The difference tells you whether the fine‑tuning made the model better at the tasks you care about.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
