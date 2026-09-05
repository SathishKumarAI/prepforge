---
qid: vq_1c8b668257__eli5__local
question: Which of the following is not correct about Cursor ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 235
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:04:28-05:00'
sources: []
---

Think of a cursor like a bookmark in a storybook that you’re reading.  
You point the bookmark at one page, read it, then move it to the next page when you’re ready.  

In a database, a *cursor* is that bookmark for rows: it “points” to one row at a time so you can fetch, update, or delete just that row while you walk through the table.

**What’s NOT true about cursors?**  
- They don’t automatically bring every row into memory; they pull rows on demand.  
- They aren’t part of the data itself—they’re a *view* (a pointer) created by your program.  
- They can be moved forward or backward, but you can’t jump to an arbitrary position unless the database allows it.

So if someone says “A cursor stores all rows in memory” that’s wrong—its job is simply to keep track of where you are while you process rows one at a time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
