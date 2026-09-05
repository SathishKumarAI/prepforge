---
qid: ing_8e11ee23ed__eli5__local
question: You need an eval set for a new contract-review capability. There is no labelled
  ground truth and the only people who can judge quality bill at partner rates. How
  do you build it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 220
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:21:55-05:00'
sources: []
---

Imagine you’re a chef trying to perfect a new recipe but no one has tasted it before. The only people who can judge the dish are your top sous‑chefs, and they’re too busy to taste every batch all the time.  
Instead, pick a handful of “signature dishes” that represent every kind of flavor you want (sweet, salty, spicy). Let each sous‑chef taste one signature dish and give it a score. Record their scores as your *gold standard*. Then, for any new contract, ask a different sous‑chef to rate the same set of signature dishes again. If their ratings match the gold standard closely, you know they’re trustworthy; if not, you can adjust or replace them.  
With this small, high‑quality panel and a clear scoring rubric, you build an evaluation set that lets you test your AI’s contract‑review skill even without pre‑labelled data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
