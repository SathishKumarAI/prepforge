---
qid: ing_40afbedf06__eli5__local
question: You want to detect a 3-point improvement in pass rate. How many eval examples
  do you need, and how do you get that number down?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 408
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:18:44-05:00'
sources: []
---

Imagine you’re a teacher who wants to prove that a new study method really lifts the class average by 3 %. To be confident, you need enough students (samples) so that random chance can’t explain away the difference.

Think of each student’s test result as a coin flip—heads means they pass. If the old method has a 70 % pass rate and the new one should reach 73 %, the “signal” is just a 3‑point shift in the coin’s bias. The larger your class, the tighter you can estimate that bias.

A quick rule of thumb (for 80 % power at a 5 % significance level) says you’ll need roughly **1,000 students** for each method. That’s about 2,000 total test examples. If you’re working with only a few hundred cases, the statistical noise is too high to trust a tiny 3‑point jump.

How can you cut that number?

| Strategy | What it does |
|----------|--------------|
| **Use more powerful tests** (e.g., two‑tailed z‑test instead of a simple proportion test) | Gives slightly tighter estimates. |
| **Increase the effect size** – combine several small improvements into one bigger change | A 5‑point lift needs fewer students than a 3‑point one. |
| **Reduce variance** – make sure all tests are comparable (same difficulty, same grading) | Less noise means you need fewer examples. |
| **Collect data over time** – pool results from many smaller batches | The total sample grows without needing a huge single batch. |

In short: treat each evaluation as a coin flip; to reliably spot a 3‑point lift you’ll need about 2,000 samples overall, but careful experimental design and pooling can shrink that requirement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
