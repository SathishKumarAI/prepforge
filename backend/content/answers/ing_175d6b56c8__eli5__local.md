---
qid: ing_175d6b56c8__eli5__local
question: 'Explain: Google I/O 2009 - Google Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 209
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:12:37-05:00'
sources: []
---

Imagine Google Wave as a big digital whiteboard that several people can write on at once.  
The “under the hood” part is like the invisible set of rules that keeps everyone’s notes from getting mixed up.

When you type something, your browser sends a tiny message—just the text and where it goes—to Google’s servers. Those servers run a *state‑machine*: they take every incoming message, put it in order with all the others (using timestamps), and then rewrite the whole whiteboard so that everyone sees exactly the same picture.  

The trick is that only the changes are sent back to each user—so if you add one word, only that word travels back, not the entire board. This keeps updates fast and lets many people work together without constantly refreshing the page. In short: Wave is a shared canvas whose secret sauce is a lightweight “change‑log” system that keeps all copies in sync.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
