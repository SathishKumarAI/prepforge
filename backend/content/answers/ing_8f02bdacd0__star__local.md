---
qid: ing_8f02bdacd0__star__local
question: Eval suites are slow, cost real money, and are noisy. How do you put one
  in CI without making everyone hate you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 317
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:19:04-05:00'
sources: []
---

**Situation:**  
At my last company we had a suite of AI model evaluations that ran nightly on the full dataset—each run cost us about $30 and took nearly an hour, so adding it to CI caused build failures and budget alerts.

**Task:**  
I needed to integrate model quality checks into our CI pipeline without inflating costs or slowing developer feedback loops.

**Action:**  
First, I profiled the suite and identified that 80 % of the time was spent on data preprocessing. I refactored that part to run in-memory with a smaller, representative sample (5 % of the dataset) for CI runs, while keeping the full pipeline for nightly jobs. Then I introduced a “model‑staging” branch where only the latest commit’s predictions were compared against a baseline using an A/B test script written in Python and executed via GitHub Actions. To keep noise low, I added a statistical significance threshold (p < 0.01) before flagging regressions. Finally, I set up a Slack notification that summarizes results in plain language so developers see only actionable feedback.

**Result:**  
CI passes now take under 10 minutes and cost less than $1 per run, cutting expenses by ~95 %. Developers report faster feedback and fewer false positives, and we still catch true degradations before production. I learned the importance of sampling, statistical rigor, and clear communication in balancing quality with speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
