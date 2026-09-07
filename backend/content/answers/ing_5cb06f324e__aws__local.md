---
qid: ing_5cb06f324e__aws__local
question: 'Explain: Cardinality in Time Series Databases — What Is Cardinality in
  a Database? - SolarWinds Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 440
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:55:09-05:00'
sources: []
---

**Question:** *Explain cardinality in time‑series databases – what is it and why does it matter?*  

> **Leadership Principles Anchored:**  
> • **Ownership** – I own the data quality for every metric we surface to customers.  
> • **Dive Deep** – I unpack how cardinality drives storage, query latency, and cost.

---

### Situation
At my last role I led a migration of 3 TB of legacy metrics into Amazon Timestream so that our Ops dashboard could scale with 10× more sensors without hitting the 1‑hour SLA for anomaly alerts.

### Task
I had to design a schema that preserved **granularity** while keeping cardinality low enough to avoid exploding storage and query cost.

### Action
* **Define cardinality** – In time‑series terms, it’s the number of unique tag combinations (e.g., `region`, `device_id`, `metric_type`) per time bucket.  
* **Measure it** – I ran a 24‑hr export to calculate distinct keys; we hit ~2 million unique series.  
* **Reduce it** –  
  * Coalesce low‑value tags (`environment=dev/test`) into a single bucket.  
  * Use **hash‑based partitioning** in Timestream to spread writes evenly across shards.  
  * Enable **Timestream’s automated retention policy**: keep raw data for 30 days, downsample to hourly aggregates for the next year.  

### Result
* Cardinality dropped from 2M to 0.4M series → 80 % reduction in storage cost (≈$1.20/month).  
* Query latency on anomaly alerts fell from 8 s to <300 ms, meeting SLA.  
* The system now handles a projected 15× sensor growth with no redesign.

---

**Bar‑raiser notes:** I demonstrated ownership by leading the migration, dove deep into the cardinality metric, quantified impact (cost & latency), and learned that aggressive downsampling can safely trade freshness for scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
