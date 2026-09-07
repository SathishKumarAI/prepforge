---
qid: vq_8c675948da__aws__local
question: What is the function of PySpark's pivot() method?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 412
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:02:39-05:00'
sources: []
---

**Answer – Data Engineering / AWS Interview**

> *“The `pivot()` method in PySpark reshapes a dataframe by turning unique values of a column into separate columns, aggregating the remaining data with an aggregate function.”*  

### Situation  
I was tasked to deliver monthly sales dashboards for 12 regions, each reporting quarterly revenue and units sold. The raw fact table had ~4 M rows per month.

### Task  
Convert the tall format (region‑quarter‑metric) into a wide report so executives could compare metrics side‑by‑side without writing SQL every time.

### Action  
1. **Dive Deep** – inspected cardinality: 3 regions × 4 quarters = 12 distinct pivots, negligible compared to raw rows.  
2. **Design** – used `df.groupBy("region").pivot("quarter", ["Q1","Q2","Q3","Q4"]).agg({"revenue":"sum","units":"sum"})`.  
3. **AWS Services** – executed on an EMR cluster with Spark 3.x, using S3 for input/output (object storage) and Glue Catalog for schema.  
4. **Scalability / Cost** – the pivot ran in ~45 s on a 10‑node EMR cluster; spot instances reduced compute cost by 30 %.  

### Result  
Delivered dashboards in 12 h instead of 5 days, cutting analyst effort by 80 % and enabling real‑time insights for the VP of Sales. The pivot function was pivotal (pun intended) in achieving this outcome.

**Leadership Principles Highlighted:**  
- **Customer Obsession** – fast, accurate reporting for executives.  
- **Ownership & Dive Deep** – architected end‑to‑end solution, tuned for performance and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
