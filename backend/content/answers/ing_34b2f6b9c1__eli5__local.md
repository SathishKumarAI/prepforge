---
qid: ing_34b2f6b9c1__eli5__local
question: 'Explain: CAP theorem — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 267
total_tokens: 461
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:59:23-05:00'
sources: []
---

Imagine you’re running a bakery that delivers fresh bread to three cities at once: **City A** (the *Consistent* city), **City B** (the *Available* city), and **City C** (the *Partition‑tolerant* city). The CAP theorem says a bakery can guarantee only two of these three qualities at the same time.

- **Consistency** means every city sees exactly the same loaf count right after you bake.  
- **Availability** means each city always gets a loaf when it orders, even if the baker’s oven is down somewhere else.  
- **Partition tolerance** means the bakery keeps working even if the road between cities breaks (a network split).

If a storm cuts the road to City C (*partition*), you can either keep all cities seeing identical counts (**Consistency**) but some may get no loaf (**Availability** off), or serve everyone immediately (**Availability**) but let City A and B temporarily disagree on stock (**Consistency** off). The theorem tells you that in any distributed system—like a large‑scale database—you must choose which two qualities to keep, because all three can’t coexist when the network splits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
