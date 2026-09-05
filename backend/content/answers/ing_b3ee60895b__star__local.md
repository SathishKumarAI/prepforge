---
qid: ing_b3ee60895b__star__local
question: What retrieval metrics would you track - recall@k, MRR, nDCG - and what
  does each actually tell you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 366
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:45-05:00'
sources: []
---

**Situation** – At my last company we launched a knowledge‑base search feature for our SaaS product. The initial launch had a 48 % click‑through rate, but customers complained that the top results were often irrelevant.

**Task** – My goal was to improve result relevance while keeping latency under 200 ms, and I needed concrete metrics to guide the optimization.

**Action** – I set up a monitoring dashboard with three key retrieval metrics:
1. **Recall@k** – measured how many of the user‑intended documents appeared in the top *k* results; this helped us understand coverage as we tweaked the ranking algorithm.
2. **Mean Reciprocal Rank (MRR)** – tracked the average reciprocal rank of the first relevant result, giving a quick sense of whether users found what they wanted early in the list.
3. **Normalized Discounted Cumulative Gain (nDCG)** – weighted relevance by position to capture both accuracy and order; we used graded relevance scores from our QA team.

I ran A/B tests on different vector‑search models, each time logging these metrics per user segment. The results showed a 12 % lift in Recall@5, MRR jumped from 0.32 to 0.45, and nDCG@10 improved by 18 %. 

**Result** – User satisfaction scores rose by 25 %, and the search feature became our highest‑engagement product line. I learned that combining recall, MRR, and nDCG provides a balanced view of coverage, early relevance, and ranking quality—essential for fine‑tuning retrieval systems under strict latency constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
