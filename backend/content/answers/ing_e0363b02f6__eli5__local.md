---
qid: ing_e0363b02f6__eli5__local
question: Where is the line between the model provider's safety responsibility and
  the application developer's? Whose job is each control?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 279
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:30:43-05:00'
sources: []
---

Imagine a kitchen where two chefs share a recipe book.  
The **model provider** writes the cookbook (the AI model) and seals it in a sturdy box. They make sure every ingredient is safe to eat—no toxic spices, no hidden allergens—and they give clear instructions on how to use it: “Add one spoon of data here, stir gently.” Their job is to keep the *ingredients* (model weights and training data) wholesome and to set up safeguards that prevent the recipe from being misused.

The **application developer** opens the box and follows the cookbook inside a specific kitchen. They decide what dishes to serve—how to mix the AI with user input, how to present results, and who gets to taste it. Their responsibility is to put the *ingredients* into a safe environment: checking that users can’t feed harmful data in, hiding sensitive outputs, and ensuring the final dish complies with local food‑law regulations.

So:  
- **Model provider:** safety of the model itself (no poisonous ingredients, built‑in guardrails).  
- **Application developer:** how the model is used in a particular context (input validation, output filtering, user access control).  

Both must work together—like two chefs sharing a kitchen—to serve safe, delicious food.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
