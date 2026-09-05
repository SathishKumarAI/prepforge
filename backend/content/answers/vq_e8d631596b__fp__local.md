---
qid: vq_e8d631596b__fp__local
question: Why does part of a row sometimes get shifted to the next page, but not all
  of it?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 331
total_tokens: 511
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:01:58-05:00'
sources: []
---

In typesetting a table or matrix, the engine treats each *row* as an indivisible block of content that must fit within the remaining vertical space on the current page.  
The problem is **vertical packing**: given a set of blocks with fixed heights, how do we decide where to break? The classic algorithm scans rows from top to bottom, accumulating height until adding another row would exceed the page limit. At that point it inserts a *page break* before the offending row.

Why does only part of a row shift? Because the engine can’t split a single block; it must keep the whole row together. When the cumulative height just exceeds the limit, the entire row is pushed to the next page. The “part” you see—e.g., a header or a caption that appears on one page and continues on the next—is actually two separate blocks: the header (a small block) and the body rows (larger blocks). The header may fit, but the first body row does not, so it moves.

**Non‑obvious insight:** Many layout systems use *dynamic programming* to minimize a “badness” function that penalizes large gaps. This means the algorithm sometimes prefers breaking before a short row rather than after a long one, even if both would fit, because the resulting whitespace is less perceptible. Thus, you see seemingly arbitrary page breaks that are actually optimal solutions to an underlying optimization problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
