---
qid: ing_9833b3311e__eli5__local
question: 'Explain: CDC vs Events vs Event Sourcing — Change Data Capture (CDC) |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 239
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:39:00-05:00'
sources: []
---

Imagine a kitchen where recipes are the data and chefs are your systems.  

**Change Data Capture (CDC)** is like a *food critic* who sits at every table, notes what’s added or removed from each dish, and writes down only those changes. The system that reads CDC gets a quick list of “what changed” without seeing the whole meal.

**Events** are the *chef’s notes* written during cooking: “chopped onions,” “added salt.” Each note is a self‑contained record that can be replayed later, and any new kitchen can read the same notes to know exactly what happened.

**Event Sourcing** takes those chef’s notes as the *entire cookbook*. Instead of storing the finished dish (the current state), it stores every note. To see the final meal, you replay all notes from the start. This gives a complete history and lets you reconstruct any past version by replaying events.  

So: CDC = quick change log, Events = descriptive actions, Event Sourcing = full action archive that defines state.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
