---
qid: ing_b77f3e7afc__star__local
question: 'Explain: Software — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 313
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:08-05:00'
sources: []
---

**Situation:** While working on a content‑quality project at a non‑profit open‑source foundation, we noticed that contributors were repeatedly editing the same low‑quality articles over short periods, wasting review resources.

**Task:** I was tasked with designing an automated system to surface under‑reviewed Wikipedia pages to editors in a way that maximized long‑term engagement and minimized redundant edits.

**Action:** I built a spaced‑repetition engine using Python and Redis. First, I crawled article edit histories via the MediaWiki API, assigning each page a “knowledge score” based on edit frequency, revert rate, and contributor reputation. Then I scheduled reminders using an exponential decay function (t = a·e^(−bt)) so that pages with higher uncertainty appeared more often initially and then gradually less frequently as they stabilized. The system pushed notifications through the Wikipedia talk‑page bot and a Slack channel for active editors. I also added a feedback loop where reviewers could rate the usefulness of each reminder, adjusting weights in real time.

**Result:** Within three months, the average edit churn on targeted articles dropped 35%, and review throughput increased by 22%. The spaced‑repetition model was later adopted by the Wikimedia Foundation’s editor outreach team. I learned how to blend machine learning theory with practical API integration to create a scalable, user‑friendly reminder system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
