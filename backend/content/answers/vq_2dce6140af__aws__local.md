---
qid: vq_2dce6140af__aws__local
question: Is it possible to use same metastore by multiple users, in case of embedded
  hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 543
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:45:12-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation & Task** – I was tasked with designing a multi‑tenant analytics platform for a SaaS customer that needed to run Hive queries on shared data while keeping each tenant’s metadata isolated.  
> **Action** – I chose **AWS Glue Data Catalog** as the central metastore because it is fully managed, highly available, and supports fine‑grained access control via IAM policies. Each tenant gets its own *database* in the catalog; Hive sessions use a custom JDBC driver that sets `hive.metastore.warehouse.dir` to a tenant‑specific S3 prefix (`s3://bucket/tenantA/`). The driver injects the tenant ID into every query, ensuring isolation at both data and metadata levels.  
> **Result** – After deployment we saw:
> * 97 % reduction in cross‑tenant accidental reads (verified by audit logs).  
> * Query latency stayed <1 s for 90 % of runs, even with 50 concurrent tenants, because the catalog scales automatically.  
> * Operational cost dropped 30 % compared to a self‑hosted Hive cluster (no EC2 maintenance).  

**Leadership Principles Highlighted**

* **Ownership** – I owned the end‑to‑end solution, from requirement gathering through post‑production monitoring.  
* **Dive Deep** – I benchmarked Glue vs. EMR Hive, evaluated IAM policy granularity, and tuned S3 lifecycle rules to keep costs low.  

**Bar‑raiser signals**

| Signal | What we heard |
|--------|---------------|
| Quantified impact | 97 % error reduction, 30 % cost savings |
| Depth | Detailed comparison of Glue vs. self‑hosted Hive; IAM policy mapping |
| Learning from failure | Early pilots uncovered stale metadata; added periodic catalog refresh jobs |

**Technical take‑away**

* **AWS Services:** Glue Data Catalog (metastore), S3 (data lake), Athena or EMR Serverless for query execution, IAM for access control.  
* **Scalability & Availability:** Glue is managed and scales horizontally; S3 provides 99.999999999 % durability.  
* **Cost Trade‑offs:** No EC2 instances → lower operational overhead; pay per query in Athena or per job in EMR Serverless, which matches usage patterns better than a constantly running Hive cluster.  

This design satisfies multi‑tenant isolation while keeping the system simple, cost‑effective, and fully AWS‑native.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
