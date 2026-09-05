---
qid: ing_aeaaf78344__eli5__local
question: 'Explain: Consistency vs. Availability (CAP Theorem)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 252
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:14:19-05:00'
sources: []
---

Imagine you’re running a library that must keep its catalog online for everyone, but the books are stored in two different branches—one in New York and one in San Francisco.

**Consistency** means both branches always show exactly the same list of titles at every moment. If someone checks “The Great Gatsby,” they’ll see it in New York *and* San Francisco with the same status (available, checked out, etc.).  
**Availability** means a user can always ask for the catalog and get an answer right away, even if one branch is temporarily down.

In the CAP Theorem (Consistency, Availability, Partition‑tolerance), you can’t guarantee all three at once. If the network between branches hiccups (a partition), you must choose: either keep both lists perfectly synced (consistency) but sometimes refuse to answer while syncing (lose availability), or let users get a quick reply even if one branch’s data is slightly out of date (availability, sacrificing consistency). This trade‑off is like choosing whether your library shows a flawless, synchronized catalog or offers instant access at the risk of a brief mismatch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
