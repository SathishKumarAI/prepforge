---
qid: ing_e9dbcb9b85__aws__local
question: 'Explain: Research Radar'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 223
output_tokens: 639
total_tokens: 862
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:07:08-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Customer Obsession* – I built a self‑service “Research Radar” for our ML research team so they could discover, benchmark, and track state‑of‑the‑art models without leaving the AWS ecosystem.  
> *Ownership & Dive Deep* – I owned the entire pipeline from data ingestion to model cataloging, digging into every bottleneck.

### STAR (Behavioral)

- **Situation**: The research group had 200+ papers, each with dozens of variants; no single view existed for performance comparison.  
- **Task**: Deliver a dashboard that surfaced key metrics (accuracy, latency, FLOPs) and updated in near‑real time.  
- **Action**: Built an end‑to‑end ETL on **AWS Glue** to parse PDF/LaTeX abstracts → **Amazon S3** for raw artifacts → **Glue Catalog** for metadata. Trained models were automatically profiled using **AWS SageMaker Profiler**, pushing results to **Amazon Athena** tables. Visualized via **QuickSight** dashboards with drill‑down to code repos on **CodeCommit**. Added a Lambda trigger that runs nightly to scrape arXiv RSS feeds, ensuring freshness.  
- **Result**: Adoption grew from 3 researchers to 50+ in 4 weeks; average model search time dropped from 15 min to <30 s (a 80% reduction). Cost per query stayed under $0.02 thanks to Athena’s pay‑per‑query pricing.

### Technical Design

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Ingest papers | Glue + S3 | Serverless, scales with traffic; low maintenance |
| Metadata store | Glue Catalog / DynamoDB | Fast schema evolution and key‑value lookups |
| Profiling & benchmarking | SageMaker Profiler + CloudWatch | Built‑in metrics, auto‑scaling |
| Query layer | Athena (Presto) | Cost‑effective analytics on S3; no data movement |
| Dashboard | QuickSight | Embedded BI with fine‑grained access control |
| Automation | Lambda + EventBridge | Serverless triggers, zero admin overhead |

**Scalability**: Each service auto‑scales. **Availability**: Multi‑AZ deployments and Glue’s retry logic mitigate failures. **Cost**: Leveraging serverless (Glue, Athena, Lambda) keeps spend proportional to usage; we achieved a 35% reduction in data processing costs compared to our legacy on‑prem ETL.

---

> *Bar‑raiser focus*: I demonstrated ownership by owning the full stack, dove deep into Glue’s job metrics to tune performance, quantified impact with real adoption and cost numbers, and learned from early failures (e.g., over‑provisioned Spark clusters) by iterating on Glue job configurations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
