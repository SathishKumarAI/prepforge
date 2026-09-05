---
qid: ing_3db4c5a226__star__local
question: 'Explain: Cache Consistency — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 335
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:31:31-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with scaling a recommendation engine that served personalized product suggestions to millions of users daily. The real‑time inference latency had risen from 120 ms to over 500 ms after a sudden traffic spike, and our SLA for top‑page load time dropped below 95 %.  

**Task:**  
I needed to reduce inference latency by 60 % while ensuring the cached feature vectors stayed consistent with the underlying training data that was updated every hour.  

**Action:**  
I introduced a two‑level caching layer: an in‑memory LRU cache for the most frequently accessed user embeddings and a distributed Redis store for secondary features. To maintain consistency, I implemented a write‑through policy where any feature update triggered an event on a Kafka topic; a background consumer refreshed the relevant keys in both caches immediately. I also added version tags to each cached payload and performed a hash check against the latest model checkpoint before serving. Finally, I used Prometheus alerts to monitor cache hit ratios and staleness windows.  

**Result:**  
Cache hit ratio jumped from 45 % to 88 %, cutting inference latency to 140 ms on average—meeting our SLA. The system now automatically propagates updates within 2 seconds of training, keeping the recommendation quality high. I learned that combining event‑driven invalidation with versioned payloads is key for maintaining cache consistency in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
