---
qid: ing_dd712ee8e1__eli5__local
question: 'Explain: Back to app.py, I define this temperature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 244
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:25:00-05:00'
sources: []
---

Think of **temperature** like a chef’s spice level when cooking a soup that will later be served to a crowd.

* **Temperature (0‑1)** – a number that tells the AI how “bold” or “safe” its words should be.  
  * 0 = the chef follows the recipe exactly, no surprises.  
  * 1 = the chef adds wild spices and tries new flavors every time.

In `app.py` you set this value in the request to the OpenAI API:

```python
response = openai.ChatCompletion.create(
    model="gpt‑4o-mini",
    messages=[{"role":"user","content":prompt}],
    temperature=0.7   # how adventurous the answer should be
)
```

So, just as a chef chooses a spice level to match the diners’ taste, you pick a temperature that balances predictability and creativity in the model’s reply. Lower means consistent but maybe dull; higher gives varied, inventive answers. Adjust it until the output feels right for your app.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
