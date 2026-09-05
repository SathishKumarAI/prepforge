---
qid: ing_5da6428759__eli5__local
question: 'Explain: High Level for Pull Based Timelines — The Architecture Twitter
  Uses to Deal with 150M Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets
  in Under 5\u00a0Seconds - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 247
total_tokens: 449
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:04:58-05:00'
sources: []
---

Imagine Twitter is a huge train station that must serve 150 million passengers (active users) who can board any of 300,000 trains per second (QPS). Every minute, the station receives a torrent of 22 MB/s of new tickets—those are the raw tweets, called the “Firehose.” To keep everyone moving, Twitter builds a two‑stage “pull” system.

First, each ticket is stamped with the user’s ID and routed to a tiny, fast “ticket desk” (a lightweight message queue). The desks don’t push updates; instead, every user has a personal “seat map” that pulls only the tickets relevant to them. When you open Twitter, your client asks (“pull”) for all new seats on your map. Because the desks are distributed across many servers, any single one never gets overloaded—just like how a station’s multiple ticket counters keep queues short.

This pull‑based design lets Twitter scale: adding more desks (servers) or more seat maps (user partitions) handles more trains and passengers without bottlenecks, keeping tweet delivery under five seconds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
