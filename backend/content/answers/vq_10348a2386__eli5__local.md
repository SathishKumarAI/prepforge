---
qid: vq_10348a2386__eli5__local
question: What are negative indexes and why do we utilize them?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 207
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:02:47-05:00'
sources: []
---

Think of a list as a row of mailboxes on a street.  
You can count from the left (index 0 is the first mailbox) or you can count from the right: the last mailbox is “–1”, the one before it is “–2”, and so on.  

In Python, an *index* tells the computer which item to pick out of a list.  
A *negative index* simply means “count back from the end” instead of from the beginning.  
We use them because sometimes we only care about the last few items—like grabbing the most recent message or the final element—without having to compute how long the list is first.

So, negative indexes give a quick shortcut to reach the tail of a sequence, just as counting backward from the end of a street lets you find the right mailbox without walking all the way to the start.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
