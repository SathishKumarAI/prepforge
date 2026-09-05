---
qid: ing_f9b98c7082__eli5__local
question: 'Explain: Data hygiene: splits, cross-validation, leakage'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 262
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:10:12-05:00'
sources: []
---

Imagine training a chef to make a new soup recipe.  
**Data hygiene** is the way you prepare the kitchen and test the dish so it turns out right every time.

* **Splits** – You divide your ingredients into three bowls: one for cooking (training), one for tasting during preparation (validation), and one kept aside for the final taste‑test (test). The chef never sees the test bowl until the soup is finished, keeping the results honest.  
* **Cross‑validation** – Instead of just one test bowl, you swap the bowls many times: cook with bowl A, test with B; then cook with B, test with C; and so on. This gives a more reliable sense of how the recipe performs across different batches.  
* **Leakage** – If the chef accidentally sneaks a spoonful from the test bowl into the cooking pot, the soup will taste “perfect” only because it already knows what the final tasting should be. That’s data leakage—mixing training and testing information—and it ruins the whole evaluation.

Keeping your bowls separate and rotating them prevents cheating and ensures the chef learns to cook a truly good soup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
