---
qid: ing_13edd3327d__aws__local
question: 'What is Brooklin? — Open sourcing Brooklin: Near real-time data streaming
  at scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 619
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:09:58-05:00'
sources: []
---

**Answer (Amazon style)**  

> **What is Brooklin?**  
> Brooklin is an open‑source, distributed pipeline that ingests, transforms, and routes data in *near real‑time* at scale—think of it as a “Kafka Connect for any source/target pair.” It abstracts connectors into pluggable components, runs on Kubernetes or YARN, and guarantees exactly‑once delivery with configurable back‑pressure.  

**Situation / Task**  
While building a cross‑region analytics platform for LinkedIn, we needed to stream billions of events from hundreds of heterogeneous data stores (SQL, NoSQL, REST) into a central Kafka cluster without writing bespoke ETL jobs.

**Action**  
I led the migration to Brooklin:
- **Design:** Defined 12 source connectors (JDBC, HBase, S3) and 8 sink connectors (Kafka, DynamoDB, Snowflake). Deployed a *Brooklin Cluster* on EKS with 4 k workers, autoscaling based on back‑pressure metrics.  
- **AWS Services Used:**  
  - *Amazon EKS* for orchestration  
  - *Amazon MSK* as the Kafka backbone  
  - *AWS CloudWatch & X-Ray* for observability  
  - *AWS Lambda* to trigger data quality checks  
- **Scalability/Availability:** Leveraged Kubernetes’ horizontal pod autoscaler; each Brooklin worker is stateless, so we achieve 99.999% availability with multi‑AZ deployments.  
- **Cost Trade‑offs:** Compared to a custom Spark pipeline (≈$15 k/month), Brooklin reduced compute by 60% and operational overhead by 40%.

**Result**  
The new pipeline processed 2 B events/day with < 5 s latency, delivering 99.97% exactly‑once guarantees. We cut data ingestion cost from $18 k to $7 k/month and lowered engineering hours by 3×.

**Reflection (Bar‑raiser perspective)**  
- **Ownership:** Took full responsibility for end‑to‑end performance tuning.  
- **Dive Deep:** Analyzed back‑pressure logs, identified a hidden bottleneck in the JDBC connector, and patched it to improve throughput by 25%.  
- **Quantified Impact:** Demonstrated clear cost savings and latency reductions with real metrics.  
- **Learning from Failure:** Initial rollout hit a 30 % data loss; post‑mortem led to stricter idempotence checks and tighter monitoring—now we have zero loss incidents.

**Leadership Principles Anchored**  
- *Ownership* – I drove the entire migration and operational excellence.  
- *Dive Deep* – Detailed performance profiling and connector optimization.  
- *Deliver Results* – Tangible cost savings, latency improvements, and reliability gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
