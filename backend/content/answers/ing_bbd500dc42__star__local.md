---
qid: ing_bbd500dc42__star__local
question: 'Explain: And so discs are not the most — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 375
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:47:03-05:00'
sources: []
---

**Situation**  
At my previous role I was part of a team tasked with delivering a real‑time recommendation engine for a video platform that had to serve 10 M requests per day. The existing model pipeline relied on spinning‑disk storage, and our latency budget was 120 ms – anything slower would break the user experience.

**Task**  
I needed to redesign the feature store so that the inference service could read embeddings in sub‑millisecond time while still handling the data volume and maintaining a cost ceiling of $200k/month.

**Action**  
First I benchmarked several options: local SSD, Google Cloud Bigtable, and an in‑memory cache using Redis. I built a prototype pipeline that streamed new user interactions into Pub/Sub, populated a Bigtable table keyed by user ID, and pushed hot keys to Redis with TTLs. For the inference layer I swapped the disk‑backed feature fetches for a hybrid read: if the key was in Redis we hit memory; otherwise we fell back to Bigtable. I also added a cache warm‑up job that preloaded the top 5 % of users into Redis during off‑peak hours.

**Result**  
Latency dropped from 110 ms (disk) to 35 ms on average, keeping us well under the 120 ms threshold. The hybrid approach cut our storage costs by 40 % and reduced Cloud Bigtable write load, enabling us to stay within budget. I learned that a thoughtful mix of in‑memory caching and persistent storage can deliver both speed and cost efficiency in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
