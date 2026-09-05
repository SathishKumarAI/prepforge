---
qid: ing_2bde4ec9db__star__local
question: Which retrieval metrics would you use - recall@k, MRR, nDCG - and when does
  each matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 340
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:41-05:00'
sources: []
---

**Situation:**  
At my last role I led the upgrade of a company‑wide question‑answering chatbot that needed to serve legal documents. The existing system returned 10 answers per query, but our compliance team complained it missed critical clauses.

**Task:**  
I had to choose evaluation metrics that would align with both user satisfaction and regulatory accuracy requirements so we could iterate quickly without compromising coverage.

**Action:**  
I first mapped the business priorities: for end users we wanted a high‑ranked relevance (so I focused on nDCG@10 to capture graded relevance across the top ten results). For compliance, recall@k mattered—specifically recall@5—to ensure at least five relevant clauses appeared in any answer set. Finally, since many users clicked only the first few answers, I added MRR to measure how quickly a user could find the right clause. I implemented a custom scorer combining these metrics, ran A/B tests on 2,000 queries, and used Python’s sklearn‑metrics with a small tweak for graded relevance.

**Result:**  
The new system improved nDCG@10 from 0.42 to 0.68, recall@5 rose from 55 % to 83 %, and MRR increased from 0.31 to 0.47—meaning users found correct clauses in the first two clicks more than half the time. I learned that aligning metrics with stakeholder goals is key: nDCG for overall relevance, recall@k for coverage, and MRR for user efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
