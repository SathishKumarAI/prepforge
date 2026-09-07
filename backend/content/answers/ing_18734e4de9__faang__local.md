---
qid: ing_18734e4de9__faang__local
question: 'Explain: What you''re actually expected to know — Data Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 452
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:41:21-05:00'
sources: []
---

**Clarify**  
The interview asks what a *Data Engineer* should truly master, beyond the surface “ETL” label. I’ll assume we’re targeting senior FAANG‑level roles that drive production pipelines and data infrastructure.

**Approach**  
1. List core skill domains (data modeling, ingestion, processing, storage).  
2. For each domain, give concrete technologies/techniques and why they matter.  
3. End with a quick sanity check: what would break if you miss one piece?

**Depth**  

| Domain | Key Knowledge | Why it matters |
|--------|---------------|----------------|
| **Data Modeling & Schema Design** | Normalization vs. denormalization, columnar formats (Parquet), ACID guarantees in Snowflake/BigQuery | Enables fast queries and safe schema evolution |
| **Ingestion & Streaming** | Kafka/Kinesis, change‑data capture (Debezium), batch schedulers (Airflow) | Guarantees freshness and scalability |
| **Distributed Processing** | Spark, Flink, Beam; vectorized UDFs, partition pruning | Handles petabyte workloads efficiently |
| **Storage & Cost Management** | Tiered storage (S3 Glacier vs. hot S3), data lakehouse patterns | Balances performance with budget |
| **Metadata & Governance** | Data catalog (Amundsen), lineage, access controls (Lake Formation) | Ensures compliance and discoverability |
| **Observability & Reliability** | Monitoring (Prometheus + Grafana), alerting, automated retries | Detects failures before they hit users |

**Edge Cases**  
- Schema drift: test with evolving JSON payloads.  
- Backpressure in streaming: simulate 10× traffic spike.  
- Cost overruns: run cost‑simulation on a 1 TB shuffle.

**Optimize & Communicate**  
Highlight trade‑offs (e.g., Spark vs. Flink for low‑latency). Show that a strong data engineer balances performance, reliability, and cost while keeping observability tight—exactly what FAANG teams need to ship large‑scale ML pipelines at speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
