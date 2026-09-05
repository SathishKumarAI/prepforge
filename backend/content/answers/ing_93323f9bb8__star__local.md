---
qid: ing_93323f9bb8__star__local
question: 'Explain: Secondary Indexes - DynamoDB — AWS-Services/1_Databases/AmazonDynamoDB/SecondaryIndexes.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 313
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:27:10-05:00'
sources: []
---

**Situation:**  
At my last role we built a real‑time analytics dashboard for an ad tech platform that stored click events in DynamoDB. The primary key (userID#timestamp) was great for fetching a user's activity but broke down when we needed to query by campaign ID across all users—our ad revenue reports were lagging behind the daily budget targets.

**Task:**  
I had to design a solution that allowed fast reads of “all clicks for a given campaign” without scanning the entire table, while keeping write throughput and cost in check.

**Action:**  
I added a Global Secondary Index (GSI) with `campaignID` as the partition key and `timestamp` as the sort key. I defined its projection to include only the attributes needed for reporting (`clickCount`, `costPerClick`). Using AWS SDK v3, I updated our ingestion pipeline to write items once; DynamoDB automatically populates the GSI. To keep costs low, I set the GSI’s read/write capacity to on‑demand and enabled point‑in‑time recovery only for the base table.

**Result:**  
Query latency dropped from ~1.2 s (scan) to <50 ms per campaign query, boosting dashboard refresh rates by 80%. We reduced read costs by 35% compared to a full-table scan approach. I learned how proper GSI design balances performance and cost, and the importance of projecting only necessary attributes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
