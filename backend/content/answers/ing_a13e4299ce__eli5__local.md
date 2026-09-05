---
qid: ing_a13e4299ce__eli5__local
question: Implement nucleus (top-p) sampling. What failure mode of top-k does it fix?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 290
total_tokens: 455
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:53:30-05:00'
sources: []
---

Think of a chef who’s tasting soup and decides which herbs to add next.  
With **top‑k** (say k = 3), the chef looks only at the three most fragrant herbs in the pantry and picks one from that small list. If the best herb is actually the fourth or fifth choice, it gets ignored—like a song that’s very close to the top but never made it into the shortlist.

**Nucleus (top‑p) sampling** fixes this by letting the chef consider all herbs whose combined aroma reaches a certain threshold **p** (for example 80 % of the total scent). The chef keeps adding herbs to the list until that cumulative “taste weight” hits p, then chooses randomly among them. This way, even if a good herb sits just below the fixed k‑cutoff, it can still be chosen because the threshold adapts to the overall distribution.

**Unavoidable terms**  
- *Top‑k*: choose from the k items with highest probability.  
- *Top‑p (nucleus)*: choose from the smallest set whose cumulative probability ≥ p.  

By using a dynamic cut‑off, nucleus sampling removes the rigid “top‑k” failure where good options are excluded simply because they fall outside an arbitrary fixed number.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
