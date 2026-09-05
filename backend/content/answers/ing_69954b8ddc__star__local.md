---
qid: ing_69954b8ddc__star__local
question: 'Explain: Related — Multi Elasticsearch Heads - Chrome Web Store'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 334
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:58:15-05:00'
sources: []
---

**Situation:**  
At my last company we launched a new Chrome extension that suggested related products while users browsed an e‑commerce site. The recommendation engine was built on Elasticsearch, but our traffic spiked during holiday sales and the single index head became a bottleneck—latency jumped from 120 ms to over 400 ms, hurting conversion rates.

**Task:**  
I needed to redesign the search layer so that query latency stayed under 200 ms even under peak load, without rewriting the recommendation logic or losing freshness of data.

**Action:**  
I introduced a “multi‑head” architecture: instead of routing every request to one Elasticsearch head, I spun up three lightweight heads behind an Nginx round‑robin load balancer. Each head maintained its own shard set and was indexed asynchronously using bulk pipelines that ran in parallel. To keep data consistent I implemented a lightweight change‑feed with Kafka, publishing index updates that each head consumed independently. I also added request throttling and query caching at the head level to reduce duplicate work.

**Result:**  
Query latency dropped from 400 ms to 150 ms during peak traffic; page‑view conversions rose by 12%. The system now scales horizontally—adding a fourth head simply involved spinning up another container. I learned that architectural “heads” can decouple load and maintain freshness without overhauling the underlying ML logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
