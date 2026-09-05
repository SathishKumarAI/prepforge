---
qid: vq_69e917511b__eli5__local
question: What kind of joins are offered by Pandas?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 237
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:14:28-05:00'
sources: []
---

Think of two spreadsheets as two decks of playing cards that share a common column—say the “Name” card. A *join* is like mixing those decks so you can see all the information together.

Pandas offers four basic mix‑ups:

1. **Inner join** – keep only the cards that appear in both decks (both names match).  
2. **Outer join** – keep every card from both decks, filling missing spots with blanks where a name is missing in one deck.  
3. **Left join** – start with the left deck and add matching right‑deck info; if there’s no match, leave blanks on the right side.  
4. **Right join** – the mirror of left: keep every card from the right deck and fill gaps from the left.

These are done with `df.merge()` or `pd.concat()`. The “join type” simply decides which cards survive the shuffle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
