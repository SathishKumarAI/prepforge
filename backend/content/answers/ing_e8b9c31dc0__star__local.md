---
qid: ing_e8b9c31dc0__star__local
question: 'Explain: Consistent Hashing - Virtual nodes — Consistenthashing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 313
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:13:29-05:00'
sources: []
---

**Situation:**  
In my last role as a data engineer for an online retail platform, we were scaling our recommendation service from 10 to 200 micro‑service instances. The existing round‑robin load balancer caused hot spots and frequent cache misses, hurting latency by ~30 %.

**Task:**  
I needed to redesign the distributed cache sharding so that each instance could host a balanced share of keys without manual rebalancing when nodes joined or left.

**Action:**  
I implemented consistent hashing with virtual nodes. I hashed each physical server’s identifier into 200 “virtual node” positions on the hash ring using SHA‑256, then mapped all product IDs to the nearest clockwise virtual node. This spread keys evenly across servers and reduced migration cost to under 5 % of total cache entries when scaling. I used Redis Cluster as the backing store and added a lightweight Python service to maintain the virtual node map in ZooKeeper for fault tolerance.

**Result:**  
After deployment, request latency dropped from 250 ms to 140 ms (44 % improvement), cache hit rate rose from 78 % to 92 %, and we could add or remove instances with minimal rebalancing overhead. I learned that virtual nodes dramatically smooth load distribution while keeping the system resilient to churn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
