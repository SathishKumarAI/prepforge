---
qid: ing_9fd597b405__eli5__local
question: Where does prompt injection touch the frontend, and what can the client
  actually defend against?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 252
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:50:52-05:00'
sources: []
---

Think of a web app as a kitchen where the *frontend* is the chef’s station (the HTML, CSS, and JavaScript you see) and the *backend* is the pantry that holds all the ingredients.  
When a user types something into a form, it’s like handing the chef a recipe card. A prompt injection attack is when someone writes a recipe that tricks the chef into grabbing the wrong ingredient—say, adding poison instead of sugar. The frontend itself doesn’t “cook” the food; it only hands the card to the backend.  

So the client (the browser) can defend by:

1. **Validating and sanitizing** what they send: stripping out dangerous characters or patterns before even sending it.
2. **Using content‑security policies** that block unexpected scripts from running in the frontend.
3. **Keeping the code small and isolated**, so a malicious card can’t reach deep into the pantry.

In short, you guard the *input* at the chef’s station; the real cooking happens behind the scenes where the injection can be stopped with proper checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
