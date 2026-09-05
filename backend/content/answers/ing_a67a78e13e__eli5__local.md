---
qid: ing_a67a78e13e__eli5__local
question: 'Explain: Design PII handling for pipelines that feed documents into an
  LLM system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 301
total_tokens: 465
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:01:56-05:00'
sources: []
---

Imagine you’re preparing a recipe (the LLM) and the ingredients are your documents. Personal data—like names or addresses—is like salt that can ruin the dish if it leaks out. To keep the kitchen clean, first put every ingredient in a separate container labeled “personal.” 

**Step 1: Identify**  
Scan each document to spot personal bits (PII). Think of this as checking labels for “salt” before mixing.

**Step 2: Separate**  
Move those salted parts into a safe, encrypted box. The rest stays free to be cooked.

**Step 3: Mask or Remove**  
When the recipe calls for salt, replace it with a neutral substitute (a placeholder). That’s “masking.” If you can’t use placeholders, simply drop the salted part entirely (“removal”).

**Step 4: Store Safely**  
Keep the salted box in a vault that only authorized cooks (systems) can open. Use encryption—turning salt into unreadable gibberish unless you have the key.

**Step 5: Audit Trail**  
Log every action: when data was scanned, moved, masked, or deleted. This is your recipe notebook; it shows no one tampered with the ingredients.

By treating PII like hazardous salt and following these steps, the LLM can cook knowledge without risking personal leaks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
