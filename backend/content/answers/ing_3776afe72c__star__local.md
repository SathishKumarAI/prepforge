---
qid: ing_3776afe72c__star__local
question: 'Explain: Delete empty or unneeded indices — Size your shards | Elastic
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 394
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:19:10-05:00'
sources: []
---

**Situation:**  
At my previous company we ran a real‑time recommendation engine on an Elastic stack that ingested clickstream data from 12 microservices. By year’s end we had over 300 indices across three shards each, many of which were empty or only held test data from early A/B experiments. The cluster was bloating to 7 TB, and search latency for live traffic rose from 120 ms to 350 ms.

**Task:**  
I needed to prune the cluster—delete all empty/unneeded indices—while preserving critical audit logs and ensuring no downtime for production queries.

**Action:**  
1. I wrote a Python script that queried `/_cat/indices?format=json` to list index stats, filtering by `docs.count=0`.  
2. Using the Elasticsearch REST API, I sent bulk delete requests (`DELETE /index_name`) in batches of 50 to avoid overloading the cluster.  
3. For indices with low activity but non‑zero docs (e.g., test logs), I applied an ILM policy that moved them to a “cold” tier and then archived to S3 before deletion.  
4. I monitored `/_cluster/health` during the process, throttling deletions if uncommitted shards rose above 10%.  
5. Finally, I updated our Curator configuration to run this cleanup nightly.

**Result:**  
The cluster shrank by 2.8 TB (≈40% of total storage), search latency dropped back to 110 ms, and CPU usage fell by ~15%. I also documented the cleanup workflow so new hires could maintain it without repeating the manual steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
