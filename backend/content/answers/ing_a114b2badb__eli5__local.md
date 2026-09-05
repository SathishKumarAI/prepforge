---
qid: ing_a114b2badb__eli5__local
question: 'Explain: Your model hits 0.87 AUC offline, you launch it, and the business
  metric doesn''t move. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 249
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:53:10-05:00'
sources: []
---

Imagine your model is a chef who makes a recipe that tastes great in the kitchen (offline test) but nobody orders it in the restaurant (online business metric). First, check if you’re serving the same dish: is the data arriving at the live system exactly what the chef trained on? If customers are getting different ingredients—maybe a new product mix or a changed feature set—the recipe won’t shine.

Next, look at the plate presentation. The model might be perfect, but the way its score is turned into an action (the threshold for sending an email, showing a recommendation, etc.) could be off. A small shift in the threshold can turn many good predictions into “no‑action” and hide any benefit.

Finally, think of customer behavior as the dining room’s mood. If the restaurant’s promotion or pricing changes after launch, customers will react differently than when you tested. So compare the offline test conditions (menu, price, timing) to the live environment, adjust thresholds, and ensure the business metric truly reflects the model’s output.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
