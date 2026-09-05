---
qid: vq_0a22639c29__eli5__local
question: WHAT HAPPENS WHEN THERE IS NO MATCH IN A RIGHT JOIN?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 176
total_tokens: 338
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:01:59-05:00'
sources: []
---

Imagine you’re making a two‑column spreadsheet of your friends’ favorite books and the books they actually own. In a **right join**, you keep every book from the “owned” column (the right table) and try to match it with a friend who likes that book.  

If no one likes a particular owned book, the left side is empty for that row. The result still shows the book, but the friend’s name is blank—just like an empty space in a spreadsheet cell. So the book appears, but its “friend” field stays null because there was no match. Think of it as listing every item you have and leaving the “who likes it?” column empty when nobody cares about that item.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
