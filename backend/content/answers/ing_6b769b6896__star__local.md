---
qid: ing_6b769b6896__star__local
question: 'Explain: Search and Pull are Inverses — The Architecture Twitter Uses to
  Deal with 150M Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under
  5\u00a0Seconds - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 280
output_tokens: 399
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:02:18-05:00'
sources: []
---

**Situation:**  
At Twitter I was on the real‑time ingestion team when we hit a traffic spike: 150 M active users, 300 K QPS, and a 22 MB/s firehose. Our latency goal for delivering a tweet to every follower was under five seconds; any lag meant lost engagement.

**Task:**  
Redesign the pull‑based “streaming” pipeline so it could scale horizontally without bottlenecks, while keeping data consistency across shards and avoiding replay of old tweets.

**Action:**  
I introduced the *search‑and‑pull* inverse pattern. Instead of every user pulling their own timeline from a monolithic queue, we let each user’s client issue a lightweight search query against an in‑memory, sharded index that holds only the most recent 10 k tweet IDs per follower set. The server then pulls the actual tweet payloads from a distributed key‑value store (Cassandra) in batches, using range scans on partition keys. We added a Bloom filter to skip nonexistent IDs and a back‑pressure mechanism that throttles the search if the pull rate exceeds 5 MB/s per node. This split the load: search is O(log n), pull is linear but bounded.

**Result:**  
Latency dropped from an average of 12 s to 3.8 s, keeping 99.9% of tweets within the five‑second window during a 10× traffic surge. The system handled 300 K QPS with only 30% CPU utilization on the search layer and 40% on the pull layer. I learned that decoupling query (search) from data transfer (pull) lets each scale independently, and that careful sharding plus Bloom filters can turn a seemingly intractable throughput problem into a predictable, elastic pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
