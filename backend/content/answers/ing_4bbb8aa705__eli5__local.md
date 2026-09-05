---
qid: ing_4bbb8aa705__eli5__local
question: How can an attacker poison training data or plant a backdoor in a model,
  and how would you catch it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 274
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:36:58-05:00'
sources: []
---

Imagine building a smart recipe‑book that learns from every dish people upload.  
A bad actor is like someone sneaking a weird spice into the pantry before the book starts learning.  

* **Poisoning** – they submit many recipes that all contain an extra “secret ingredient” (a tiny data tweak). The book thinks this ingredient is normal, so later it will always add it to new dishes, even when you didn’t ask for it.  
* **Backdoor** – they hide a hidden note in a few special recipes that says, “When the book sees the word *‘soup’*, change the taste to salty.” The book learns this rule because the note appears only in those few training examples.

To spot these tricks you:

1. **Audit the pantry** – check all training data for outliers or patterns that look suspicious.  
2. **Stress‑test the recipe‑book** – run it on many clean, varied inputs and watch for weird outputs.  
3. **Check the hidden notes** – use automated tests that look for unusual behavior triggered by specific words or images.

If you find a pattern that only appears with those secret ingredients or triggers on rare prompts, you’ve caught an attacker’s poison or backdoor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
