---
qid: ing_96b1003240__star__local
question: 'So, what’s your phone number? — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 323
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:34:27-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a real‑time analytics dashboard for an e‑commerce platform that served over 10 million daily active users. The team needed to show unique visitor counts per hour without storing every user ID, because the data pipeline had to run in under 2 seconds on a single node.

**Task:**  
I was tasked with implementing a cardinality estimator that could give accurate distinct‑visitor numbers while keeping memory usage below 200 KB and processing throughput above 1 M events per second.

**Action:**  
I chose HyperLogLog, implemented it in Go using the `github.com/axiomhq/hyperloglog` library, and tuned the register size to a precision of 12 bits (≈4 k registers). I hashed each visitor ID with Murmur3, updated the sketch on ingestion, and exposed an HTTP endpoint that merged sketches from multiple shards. To validate accuracy I ran Monte‑Carlo simulations against ground truth and achieved ±1.2% error at 99th percentile.

**Result:**  
The dashboard now reports hourly unique visitors in real time using only 150 KB of RAM, with a latency drop from 3.5 s to 0.9 s per query. The solution scaled seamlessly when traffic doubled during a flash sale, and I learned that choosing the right probabilistic data structure can turn an infeasible requirement into a production‑ready feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
