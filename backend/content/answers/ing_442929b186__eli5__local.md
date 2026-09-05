---
qid: ing_442929b186__eli5__local
question: How do you wire evals into CI so that prompt or model changes can't silently
  regress quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 231
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:24:45-05:00'
sources: []
---

Think of your AI model as a kitchen recipe and Continuous Integration (CI) as the daily food‑prep checklist in a busy restaurant.  
**Evaluation (eval)** is like a taste test that checks whether each batch still tastes good after you tweak an ingredient or cooking time.

When you “wire evals into CI,” you set up automatic taste tests that run every time someone changes the recipe (prompt) or switches to a different chef (model). If the new batch scores lower than the last, the CI system flags it and stops the update from being served—just like a sous‑chef would refuse to put out spoiled food.

**Unavoidable terms:**
- **Prompt:** The instruction you give the model before it produces an answer.  
- **Model change:** Updating the underlying AI engine (e.g., new weights or architecture).  

By embedding these taste tests in CI, any hidden decline in quality is caught immediately, keeping your “dish” consistently delicious.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
