---
qid: ing_90f0f4c55f__think__local
question: 'Explain: System Design — Salesrankbycategory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 467
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:40:36-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What is “Salesrankbycategory”?* Assume it’s a feature that ranks products within each category based on sales volume or revenue.  
   - *Target audience?* Likely product managers or recommendation engines.  
   - *Scale constraints?* Millions of SKUs, high‑velocity clickstream → real‑time vs batch.

**2. Adopt a system‑design framework**  
   - Use the classic **“Components → Data Flow → Scaling & Latency”** approach:  
     1. Ingest sales events → 2. Aggregate per category → 3. Compute rank scores → 4. Serve via API or cache.

**3. Step‑by‑step reasoning**  
   - *Ingestion*: Kafka/Flink for event streaming; batch jobs (Spark) for nightly refreshes.  
   - *Aggregation*: Use a time‑windowed windowing engine to keep rolling totals per category.  
   - *Ranking algorithm*: Simple percentile or weighted score; consider decay functions to favor recent sales.  
   - *Storage*: Columnar store (Cassandra/Bigtable) keyed by category+timestamp for fast reads.  
   - *Serving layer*: Redis cache + RESTful API with pagination.

**4. Common pitfalls to avoid**  
   - Mixing real‑time and batch data without a clear consistency model → stale ranks.  
   - Ignoring cold‑start: new SKUs won’t appear until the first sale is processed.  
   - Over‑optimizing latency at the cost of accuracy; balance refresh interval vs freshness.

**5. Sanity‑check & verbalize**  
   - Verify that each component satisfies the **SLOs** (e.g., 99th percentile rank update < 2 s).  
   - Explain trade‑offs: e.g., “We choose Flink over Spark Streaming because we need sub‑second latency for live dashboards.”  
   - Summarize: ingestion → aggregation → ranking → storage → serving, with fallback to batch recompute every 24 h.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
