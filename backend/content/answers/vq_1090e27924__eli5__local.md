---
qid: vq_1090e27924__eli5__local
question: What is sort by vs Order by in hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 222
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:02:53-05:00'
sources: []
---

**Imagine sorting a deck of cards**  
*Sort by* is like shuffling the deck so that all hearts come together, then clubs, spades, and diamonds – you group by suit but don’t care about the order inside each group. In Hive, `SORT BY` does this: it orders rows **within each partition** only; the result can be split across several files, so different partitions may appear in any overall sequence.

*Order by* is like shuffling and then arranging every single card from Ace to King across all suits – a total, global order. In Hive, `ORDER BY` forces one reducer to sort **all rows together**, giving you a completely sorted result. It’s slower because everything must go through that single reducer, but the final output is perfectly ordered.

So:  
- **SORT BY** → local grouping order (fast, partition‑wise).  
- **ORDER BY** → global total order (slow, one reducer).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
