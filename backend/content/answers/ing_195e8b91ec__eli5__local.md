---
qid: ing_195e8b91ec__eli5__local
question: Your production assistant has started quoting wrong prices to customers.
  Is it an attack or a bug, and how do you find out?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 278
total_tokens: 451
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:16:23-05:00'
sources: []
---

Think of your AI like a chef in a busy kitchen. The production assistant is the recipe‑app that tells diners what each dish costs. If it starts giving wrong prices, two things could be happening.

**Bug (mis‑tasting ingredient)** – The app’s code might have a typo or an outdated data file, so it pulls the wrong number from its pantry. It’s a simple mistake you can fix by checking the source list and correcting the value.

**Attack (stolen recipe)** – Someone could have tampered with the app, inserting malicious changes that replace the correct prices with fake ones. This is like a saboteur sneaking into the kitchen to swap sugar for salt.

**How to tell?**  
1. **Audit the logs**: Look for recent code deployments or configuration changes—bugs usually appear right after an update.  
2. **Check integrity**: Verify the app’s checksum or digital signature; any alteration suggests tampering.  
3. **Run a comparison test**: Feed known products through the system and compare outputs to a trusted database.  

If everything else looks clean but the prices still differ, suspect an attack and involve your security team. If it matches recent updates, it’s likely a bug that can be patched quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
