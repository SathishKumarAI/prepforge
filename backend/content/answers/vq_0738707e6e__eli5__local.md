---
qid: vq_0738707e6e__eli5__local
question: HOW DOES A RECURSIVE CTE WORK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 234
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:01:35-05:00'
sources: []
---

Imagine you’re building a family tree in a spreadsheet. You start with the “root” person—your great‑grandparent—and write their name in one column and note that they have no parents above them (that’s your base case). Next, you ask: “Who are this person’s children?” The spreadsheet uses a *recursive* rule to look up anyone whose parent matches the current list. It adds those children as new rows, then repeats: for each newly added child, find their own children, and so on. Each pass is like a generation; the process stops when no more children are found—just like a recursion ends when it hits a base case. In SQL terms, the CTE (common table expression) starts with an initial SELECT (the root), then UNIONs that result with a SELECT that joins the current list to its children, repeating until nothing new appears. The spreadsheet’s “look‑up” is the recursive join; the base row is the initial SELECT; and the final sheet contains every descendant in order.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
