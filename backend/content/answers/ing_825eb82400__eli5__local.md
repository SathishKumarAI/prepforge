---
qid: ing_825eb82400__eli5__local
question: 'Explain: and all the histories or the updates — Google Docs System design
  | Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 231
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:03:30-05:00'
sources: []
---

Imagine a group of friends each holding a copy of a recipe book on their phones while they’re all cooking together at the same kitchen table.  
**Operational Transformation (OT)** is like each friend sending a tiny note that says “replace word 5 with ‘sugar’.” Every phone receives this note, applies the change to its own copy, and then adjusts any of its pending edits so nothing clashes—so everyone’s book stays in sync even if two friends edit the same line at once.  

**Differential Synchronisation** is a bit different: each phone periodically sends *only the differences* between its current book and what it remembers the master version to be. The server merges those changes, sends back any new differences it has, and everyone’s copy converges gradually, even if edits arrive out of order or some are lost.  

Both methods let many people edit a shared document at once without stepping on each other’s toes, just like our friends keeping the recipe book consistent while cooking together.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
