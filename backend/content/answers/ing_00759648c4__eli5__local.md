---
qid: ing_00759648c4__eli5__local
question: 'Explain: Use a Stable Node Identity — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 216
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:35:53-05:00'
sources: []
---

Think of your data as a long ribbon that you want to cut into equal pieces and hand out to several friends (the servers).  
With **stable node identity** each friend is given a unique, unchanging name—like a nickname on a phone book—so the ribbon can always be split based on that name.  

In **consistent hashing**, we first spread all possible names around a circle (imagine a clock face). Each piece of the ribbon is assigned to the nearest name clockwise. If a friend leaves or a new one joins, only the pieces near that spot shift to the new friend; everyone else keeps their ribbon exactly as before.  

So, stable node identity guarantees each server’s “position” on the circle never changes, and consistent hashing ensures data moves minimally when the team grows or shrinks—just like handing over a few extra slices of cake instead of re‑cutting the whole batch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
