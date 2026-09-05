---
qid: ing_26154d5f8a__eli5__local
question: 'Explain: you refresh um yeah i don''t know — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 199
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:36:21-05:00'
sources: []
---

Imagine DoorDash as a giant city where every rider, driver, and restaurant is a person walking around. **Geo‑hashing** is like giving each street a unique zip code that shrinks the whole city into tiny boxes; when you want to find someone nearby, you only look inside the box (and its neighbors) instead of scanning every single person in the city.  
**WebSockets** are the constant conversation lines that stay open between your phone and DoorDash’s servers—like a two‑way walkie‑talk that lets your device instantly send “I’m here” updates and receive new orders or traffic alerts without waiting for a fresh request each time.  

Together, geo‑hashing keeps the search fast by narrowing down to relevant areas, while WebSockets keep everyone in sync in real time, so drivers see new jobs immediately and customers get live ETA updates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
