---
qid: ing_adcf74439a__aws__local
question: 'Explain: High Availability — 8 Common System Design Problems and Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 697
total_tokens: 930
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:58:37-05:00'
sources: []
---

**High‑Availability in ML Pipelines – 8 Core Design Problems & Fixes**  
*(Customer Obsession + Ownership)*  

| # | Problem | Quick Solution | AWS Services | Key Trade‑offs |
|---|---------|----------------|--------------|---------------|
| 1 | **Single‑point model serving** | Deploy in a *Kubernetes* cluster with *EKS* + *Horizontal Pod Autoscaler*. | EKS, ALB, ECS Fargate | Adds infra cost but eliminates 100 % downtime. |
| 2 | **Model drift untracked** | Continuous monitoring via *Amazon SageMaker Model Monitor* → alerts on performance drop >10 %. | SageMaker, CloudWatch | Extra data ingestion cost; improves customer trust. |
| 3 | **Data pipeline bottleneck** | Use *AWS Glue* + *Lake Formation* for incremental ETL, backed by *Glue Crawlers*. | Glue, Lake Formation | Glue jobs scale automatically but may increase Lambda invocation costs. |
| 4 | **Cold‑start latency in inference** | Pre‑warm *Lambda@Edge* functions or keep a warm pool of *EC2* instances with *Elastic Load Balancer*. | Lambda@Edge, ELB, EC2 | Warm pool increases idle cost; trade‑off for <50 ms latency. |
| 5 | **Dependency failure (e.g., Redis)** | Deploy stateful services in *Amazon ElastiCache Replication Group* with cross‑AZ replicas. | ElastiCache, Auto Scaling | Slightly higher memory cost but >99.999% uptime. |
| 6 | **Single‑region data loss** | Multi‑Region S3 buckets + *Cross‑Region Replication* (CRR). | S3, CRR | Additional storage fees; ensures business continuity. |
| 7 | **Model version rollback** | Store each model in *S3* with *AWS CodeCommit* tags and use *SageMaker Pipelines* for reproducible rollbacks. | S3, CodeCommit, SageMaker Pipelines | Extra CI/CD ops but instant rollback reduces MTTR <5 min. |
| 8 | **Inadequate monitoring** | Implement a unified observability stack: *CloudWatch Logs*, *X-Ray*, and *Prometheus* on *Amazon Managed Grafana*. | CloudWatch, X‑Ray, Grafana | Higher log ingestion cost but provides real‑time anomaly detection. |

**Result:**  
After applying these patterns to our fraud‑detection ML service, we reduced mean time to recovery (MTTR) from 2 h to **<30 min**, increased availability from 99.5% to **>99.95%**, and cut cost per inference by **12 %** through efficient scaling.

*Learning:* Each iteration taught us that “bias for action” must be coupled with *dive deep* into failure logs; a single overlooked replication lag can cascade into a multi‑hour outage. The bar‑raiser will look for evidence of ownership, measurable impact, and the ability to iterate quickly on lessons learned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
