---
qid: ing_816af528e1__eli5__local
question: 'Explain: Step 5: Validate on Dev Set — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 239
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:01:55-05:00'
sources: []
---

**Step 5: “Validate on the Development Set”**

Think of your AI model as a new recipe you’re testing before inviting friends over.  
You’ve already cooked it in the kitchen (training), and now you want to taste‑test it on a small, familiar batch of ingredients (the development set). You’re not serving the whole dinner yet; you’re just making sure the flavors are right.

- **Development set**: A held‑out portion of your data that the model hasn’t seen during training.  
- **Validation**: Running the model on this set to see how well it predicts or classifies, checking metrics like accuracy or loss.  

If the model performs poorly here, you tweak the recipe (hyperparameters, architecture) and try again. Only after it tastes good on the dev set do you move on to the real test dinner—your final evaluation set. This step keeps your AI from over‑fitting and ensures it generalizes to new data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
