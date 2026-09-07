---
qid: ing_4b6e2ca8b5__aws__local
question: 'Explain: Sales Rank table — Salesrankbycategory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 586
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:15:39-05:00'
sources: []
---

**Situation & Task**  
In my last role at an e‑commerce startup we had a “Sales Rank” metric that was calculated per product every hour. The original implementation stored the raw sales counts in a single `sales_counts` table and recomputed ranks on‑the‑fly, which caused 30 % CPU spikes during traffic peaks and introduced a lag of ~5 min before customers saw updated rankings. I owned the redesign of the **SalesRankByCategory** lookup table to power real‑time recommendation feeds.

**Action**  
1. **Requirements & Design** – The new table needed:  
   * O(1) read for any `product_id` + `category_id`.  
   * Near‑real‑time updates (≤ 10 s).  
   * Persisted historical ranks for ML feature engineering.  

2. **Architecture** – I used **Amazon DynamoDB** with a composite primary key `(CategoryId, RankTimestamp)` and a GSI on `ProductId`.  
   * Writes: Lambda triggered by Kinesis Data Streams ingesting the hourly sales delta; it updates the rank in DynamoDB using conditional writes to avoid race conditions.  
   * Reads: Application layer queries the GSI for the latest timestamp per product – O(1) latency.  

3. **Scalability & Availability** – Provisioned on-demand capacity with auto‑scaling, backed by Multi‑AZ replication; DynamoDB’s built‑in TTL automatically purges 90‑day history to control storage cost (~$0.25 /GB).  

4. **Cost & Trade‑offs** – Switching from RDS (≈ $1k/month) to DynamoDB reduced read/write costs by 40 % while eliminating the need for manual sharding.

5. **Data‑Driven Result** – After deployment, we saw a 70 % drop in CPU utilization on our rank service, query latency fell from 300 ms to < 20 ms, and the recommendation engine’s click‑through rate increased by 12 % (from 3.4 % to 3.8 %) thanks to fresher ranks.

**Result & Learning**  
The project earned me the “Invent & Simplify” award. I learned that choosing a key‑value store for rank lookups can dramatically cut latency, but you must still design for eventual consistency and carefully model write patterns. The bar‑raiser looked for ownership (I drove end‑to‑end), depth (understanding DynamoDB’s conditional writes), quantified impact (latency & CTR gains), and a clear lesson: “If the data model fits the access pattern, the system scales automatically.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
