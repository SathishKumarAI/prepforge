---
qid: ing_5e85f0e445__eli5__local
question: 'Explain: Push Me Pull Me — The Architecture Twitter Uses to Deal with 150M
  Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 262
total_tokens: 461
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:06:14-05:00'
sources: []
---

Imagine Twitter as a huge city where people (users) throw messages (tweets) onto a busy street called the “Firehose.”  
To keep traffic flowing fast, the city uses two kinds of roads:

* **Push lanes** – big trucks (Twitter’s servers) instantly deliver new tweets to nearby users’ feeds. Think of them as express elevators that drop people in the right building without waiting.  
* **Pull lanes** – when a user opens Twitter, their phone sends a request (“pull”) to grab any missed messages from the nearest cache. It’s like walking into a café and ordering what you need instead of waiting for someone to bring it.

The city’s infrastructure is built on thousands of these push and pull lanes, so even with 150 million commuters (active users), 300 000 cars per second (queries), and a 22 MB/s stream of new tweets, every message can reach its destination in under five seconds. The key idea: *push* for instant delivery, *pull* for on‑demand retrieval—just like a well‑planned traffic system keeps everyone moving smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
