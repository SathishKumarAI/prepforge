---
qid: ing_6b769b6896__eli5__local
question: 'Explain: Search and Pull are Inverses — The Architecture Twitter Uses to
  Deal with 150M Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under
  5\u00a0Seconds - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 249
total_tokens: 451
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:26:16-05:00'
sources: []
---

Think of Twitter’s data flow like a giant library that must let millions of readers (users) fetch books (tweets) instantly, even when the shelves are being updated all the time.

**Search and Pull are Inverses**

* **Search** is like a librarian who knows exactly where every book is stored. When a user wants to see their timeline, Twitter’s “search” system quickly finds the right pieces of data from many small storage boxes (shards) without reading everything.

* **Pull** is the opposite: it asks each box for its latest content and stitches the answers together. Pull happens when new tweets arrive; every shard sends its newest items (“pull”) to a central “firehose” that streams them out to everyone.

By making search and pull exact opposites—one finds, the other fetches—they can split work: one side reads fast, the other writes fast. This lets 150 million users read tweets in under five seconds while the system handles 300 k queries per second and a 22 MB/s data stream, all without choking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
