---
qid: ing_b33f7dc11a__aws__local
question: 'Explain: List of time series databases — Timeseries Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 615
total_tokens: 847
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:10:03-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:**  
> In my last role I led the migration of our IoT telemetry pipeline from a legacy relational store to a purpose‑built time‑series database (TSDB). The goal was to reduce query latency for 200 M daily events and cut storage costs by 35 %.  

> **Task:**  
> Identify candidate TSDBs, benchmark them under realistic workloads, and recommend the best fit while ensuring high availability and cost efficiency.  

> **Action:**  
> 1. **Research & shortlist** – I compiled a list of production‑grade TSDBs: InfluxDB (open‑source + Enterprise), TimescaleDB (PostgreSQL extension), OpenTSDB (HBase‑backed), Prometheus (for short‑term retention), and Amazon Timestream.  
> 2. **Define criteria** – Through a cross‑functional workshop I mapped requirements to AWS Leadership Principles: *Customer Obsession* (low latency for analysts) and *Ownership* (full lifecycle management).  
> 3. **Prototype & benchmark** – Built a micro‑benchmark using Apache JMeter that simulated 10 k concurrent writes at 1 kHz. Measured:
>    - InfluxDB Enterprise: 5 ms avg write, 200 GB/month storage
>    - TimescaleDB on Aurora PostgreSQL: 12 ms, 210 GB/month
>    - OpenTSDB on EMR/HBase: 30 ms, 180 GB/month
>    - Prometheus (short‑term): 3 ms, but limited retention
>    - **Amazon Timestream:** 4.5 ms write, 170 GB/month with automatic tiering  
> 4. **Cost & scalability analysis** – Calculated Timestream’s on‑demand pricing ($0.25/MB-month for the first 10 TB) vs. self‑managed clusters’ EC2 + EBS costs (~$1.20/MB).  
> 5. **Recommendation** – Adopted Amazon Timestream, achieving a 40 % reduction in write latency and 35 % lower storage spend while eliminating operational overhead (no cluster management).  

> **Result:**  
> • Latency dropped from 12 ms to <6 ms for 95th percentile queries.  
> • Cost savings of $120k annually on storage and maintenance.  
> • Team adoption rate >90%, enabling faster data‑driven decisions for the product roadmap.  

**Key takeaways:**  
- *Dive Deep* into real metrics, not just vendor claims.  
- Leverage AWS services that align with ownership and customer obsession.  
- Quantify impact early to win stakeholder buy‑in and iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
