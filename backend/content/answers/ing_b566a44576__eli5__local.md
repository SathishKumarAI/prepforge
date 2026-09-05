---
qid: ing_b566a44576__eli5__local
question: 'Explain: The Challenge — The Architecture Twitter Uses to Deal with 150M
  Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 350
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:24:18-05:00'
sources: []
---

Imagine Twitter as a giant, ever‑busy highway that must move millions of cars (tweets) through a city with 150 million residents, while keeping traffic flowing smoothly and every driver arriving at their destination in under five seconds.

**The challenge**  
* 300 000 cars try to enter the highway each second (QPS).  
* The highway can carry only 22 MB of data per second (the “firehose”).  
* Every car must reach its exit lane (user’s timeline) quickly, even if many are traveling at once.

**The architecture—like a smart traffic system**

1. **Multiple lanes (shards)** – Twitter splits the highway into thousands of parallel roads, each handling a subset of users or hashtags. This keeps cars from piling up on one lane.
2. **Traffic lights that know where to send cars (routing tables)** – When a tweet is posted, the system instantly decides which lane(s) it should travel down based on who will see it and how many lanes are busy.
3. **High‑speed bridges (CDNs & caching)** – Popular routes use fast overpasses so most drivers can skip the main highway entirely; only rarely do they need to drive the long way.
4. **Dynamic tolls (load balancing)** – If one lane gets congested, cars are redirected to a less busy road in real time.

Together these parts act like an intelligent, self‑adjusting freeway that keeps 300 k cars moving per second, respects the 22 MB/s limit, and guarantees every driver reaches their destination in under five seconds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
