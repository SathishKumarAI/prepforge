---
qid: ing_354ec6f67b__eli5__local
question: 'Explain: Time zone — How to Design a System for Internationalization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 278
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:00:06-05:00'
sources: []
---

Imagine you’re running an online bakery that ships pastries worldwide. Every oven (server) in your kitchen must bake the same recipe, but customers order at different local times: a Parisian orders at 9 AM Paris time, a New Zealand customer at 11 PM NZST. To keep everyone happy, your system needs a universal “recipe book” that records when each pastry should be baked, regardless of where it’s made or ordered.

**Time zone** is like the local oven clock—each region has its own offset from Coordinated Universal Time (UTC), the kitchen’s master clock.  
**Internationalization** (i18n) is designing the recipe book so that dates, times, and numbers are written in a way all ovens can read and convert to their local clocks.

To design such a system:

1. **Store every timestamp in UTC**—the single, unchanging reference point.
2. **Convert to local time only when displaying or sending data**—just as you’d set each oven’s clock before baking.
3. **Use libraries that understand daylight‑saving rules** so the conversion stays correct year after year.

This way, no matter where a pastry is baked or ordered, everyone gets it at the right local time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
