---
qid: vq_533af52a08__eli5__local
question: What is the difference between call-by-value and call-by-name function parameters?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 236
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:11:35-05:00'
sources: []
---

Think of a recipe that needs a secret sauce.  
*Call‑by‑value* is like the chef giving you a **ready‑made bottle**: the sauce is already mixed and ready to pour. Whatever you do after you’ve taken it—stir, heat, or leave it—is irrelevant; you just use what’s in the bottle.  

*Call‑by‑name* is like the chef handing you a **spoonful of raw ingredients** (e.g., sugar, salt, pepper). Each time you need a bit of sauce, you scoop and mix fresh from the bowl. If the recipe changes the mixture later, every new scoop reflects those changes because it’s still being prepared on the spot.

So:  
- **Call‑by‑value** evaluates the argument once before calling the function; the function receives that single result.  
- **Call‑by‑name** defers evaluation until the value is actually used inside the function, re‑evaluating each time if needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
