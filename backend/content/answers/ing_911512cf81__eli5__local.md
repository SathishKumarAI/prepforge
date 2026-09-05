---
qid: ing_911512cf81__eli5__local
question: 'Explain: Characteristic #5: It’s a single source of truth'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 194
total_tokens: 356
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:26:55-05:00'
sources: []
---

Imagine you’re building a smart kitchen that learns how to cook your favorite dishes. All the recipes, ingredient lists, and cooking times are written down in one big, clear cookbook that every robot chef can read. No other hidden notebooks or scribbles exist—every decision the robots make comes from that single cookbook.  

In machine learning this “cookbook” is called a **single source of truth**. It means all data, labels, and model parameters live in one place (like a central database). When you update the recipe, every robot automatically uses the new version; there’s no risk that one chef has an old copy while another follows a different set of instructions. This keeps training, evaluation, and deployment consistent, prevents confusion, and makes it easy to audit or improve the model over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
