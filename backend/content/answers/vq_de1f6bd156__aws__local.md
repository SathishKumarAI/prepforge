---
qid: vq_de1f6bd156__aws__local
question: What is a Dimension Table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 384
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:18:39-05:00'
sources: []
---

**Answer (Amazon‑style)**  

A *dimension table* is the “what” side of a star schema – it holds descriptive attributes that slice and dice facts. In practice I built a product catalog dimension for our e‑commerce data lake: 3 M rows, 12 columns (SKU, brand, category, price tier, launch date).  

**Situation & Task**  
Our analytics team needed faster ad‑hoc queries on sales data; the existing fact table was bloated with repeated product strings, causing 40 % slower OLAP cubes. I proposed normalizing products into a dimension table and using surrogate keys in the fact table.  

**Action**  
1. Designed an EMR Spark job to extract product attributes from the transactional stream, de‑duplicate, and load them into a partitioned Amazon Redshift table.  
2. Added a surrogate key (product_id) and replaced string columns in the fact table with that key.  
3. Created read replicas for reporting workloads; set up automatic refresh via Lambda on each nightly ETL.  

**Result**  
Query latency dropped from 12 s to 1.5 s (+85 % improvement). Storage cost fell by ~30 % because we eliminated repeated text, and maintenance overhead decreased as the dimension grew independently of the fact table.  

*Leadership Principles:* **Ownership** – I drove the redesign end‑to‑end; **Dive Deep** – I profiled data to identify duplication hotspots. *Bar‑raiser note:* Look for clear ownership, deep technical reasoning, quantified impact, and a lesson learned (we later added a “last_updated” timestamp to guard against stale dimension rows).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
