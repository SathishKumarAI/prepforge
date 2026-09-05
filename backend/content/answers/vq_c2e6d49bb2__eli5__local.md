---
qid: vq_c2e6d49bb2__eli5__local
question: What are ‘traits’ in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 230
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:26:34-05:00'
sources: []
---

Think of a **trait** as a recipe card that you can stick into any dish (class) to give it extra flavor without changing the dish’s main ingredients.  
In Scala, a class is like a base meal: it has its own name and basic parts (fields and methods). A trait is a reusable set of instructions—methods, sometimes variables—that you “mix in” when you create a new class. It behaves like an interface that can also hold code, so the new class gets those ready‑made behaviors automatically.

**Key points**

* **Reusable mix‑in:** You write a trait once and use it in many classes.  
* **No constructor arguments:** Traits can’t take parameters when they’re mixed in (unlike classes).  
* **Multiple inheritance:** A class may mix in several traits, gaining all their methods, just like adding several recipe cards to one dish.

So, traits are Scala’s lightweight, composable building blocks that let you share behavior across many classes without duplicating code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
