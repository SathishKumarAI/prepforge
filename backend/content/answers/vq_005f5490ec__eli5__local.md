---
qid: vq_005f5490ec__eli5__local
question: Difference between Row number and Dense Rank in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 186
total_tokens: 344
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:00:42-05:00'
sources: []
---

Imagine you’re lining up students for a class photo.  
*Row number* is like giving each student a unique seat number, starting at 1 and going up one by one—no matter how many share the same height or score, everyone still gets a distinct spot.

*Dense rank* is more about grouping: it tells you which “height group” a student belongs to. The tallest students all get rank 1, the next tallest rank 2, and so on. Notice that if two students tie for second place, both receive rank 2, and the next rank jumps directly to 3—there are no gaps.

So: **row number** gives every row a unique serial; **dense rank** assigns the same number to tied values but never skips a number between groups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
