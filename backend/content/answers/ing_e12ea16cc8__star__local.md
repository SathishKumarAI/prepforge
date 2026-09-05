---
qid: ing_e12ea16cc8__star__local
question: 'Explain: Binary Search Variations — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 334
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:59:08-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was tasked with redesigning the real‑time fraud alert pipeline that processed ~2 M transaction records per day. The existing linear scan to flag suspicious patterns was causing >5 s latency, pushing us past SLA targets.

**Task:**  
I needed to reduce lookup time for threshold checks and anomaly windows while keeping memory overhead minimal so the service could scale horizontally across a Kubernetes cluster.

**Action:**  
1. Replaced the naive array scans with **binary search variations**:  
   * Implemented a *lower_bound* style binary search on pre‑sorted transaction timestamps to quickly locate the sliding window start.  
   * Added an *upper_bound* variant to cap the end of the anomaly window, ensuring O(log n) per query instead of O(n).  
2. Stored the sorted indices in a **Bloom filter** for a fast probabilistic existence check before invoking binary search, cutting false positives by 30%.  
3. Integrated these routines into a Go microservice using **goroutines** to parallelize window calculations across shards, and exposed metrics via Prometheus.

**Result:**  
Latency dropped from ~5 s to under 200 ms per request (99th percentile). CPU usage fell by 25%, allowing us to add an extra node without cost. I learned how tailoring binary search variants to specific query patterns can deliver massive performance gains in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
