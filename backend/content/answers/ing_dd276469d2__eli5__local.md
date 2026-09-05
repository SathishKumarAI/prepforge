---
qid: ing_dd276469d2__eli5__local
question: 'Explain: Groups — The Architecture Twitter Uses to Deal with 150M Active
  Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds - High
  Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 221
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:24:24-05:00'
sources: []
---

Imagine a huge concert where every fan (user) wants to hear the band’s latest song at once.  
Twitter’s “groups” are like backstage crews that split the crowd into many small, tightly‑organized teams. Each crew handles only a slice of the audience—say all users in one city or all fans who follow a particular topic. Inside each crew, a tiny server (the **worker**) records every new tweet, pushes it to a local queue, and sends it out immediately.  

When a tweet is posted, it goes straight into its crew’s queue (the **Firehose**), which streams the message at 22 MB/s to all members of that crew. Because each crew works independently, the system can process up to 300 000 queries per second and deliver every tweet in under five seconds—even for 150 million active users—just like a well‑coordinated stadium where many small crews keep the show running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
