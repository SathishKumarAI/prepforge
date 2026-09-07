---
qid: ing_24739e32a5__aws__local
question: 'Explain: Glean System Design — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 768
total_tokens: 998
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:49:21-05:00'
sources: []
---

**Glean – an internal knowledge‑search engine for a large AI firm**

**Situation (S)**  
I was hired as a Senior Solutions Architect to build “Glean,” a search platform that ingests every internal document, code repo, and chat log so data scientists could retrieve the most relevant context in seconds. The company had ~50 TB of unstructured data and expected 10× growth in queries per day.

**Task (T)**  
Design a scalable, highly available system that delivers sub‑200 ms latency for 95% of requests while keeping monthly cost under $300k. I owned the end‑to‑end pipeline: ingestion → indexing → query.

**Action (A)**  

| Component | AWS Services | Design Rationale |
|-----------|--------------|------------------|
| Ingestion & normalization | **S3 + Lambda + Glue** | Serverless ETL removes operational overhead; Glue jobs run on-demand for schema drift. |
| Real‑time indexing | **Kinesis Data Streams → OpenSearch Service (managed)** | Kinesis guarantees 100% delivery, OpenSearch scales horizontally and supports fuzzy search—critical for AI jargon. |
| Query layer | **API Gateway + Lambda + Cognito** | API Gateway throttles to protect downstream; Lambda caches recent queries in Redis‑based ElastiCache for repeat hits. |
| Monitoring & observability | **CloudWatch + X-Ray** | End‑to‑end tracing identifies latency bottlenecks; metrics trigger auto‑scaling of OpenSearch nodes. |

*Scalability*: OpenSearch domain with 12 m5.xlarge.search instances, autoscaled by CPU >70% → 30% cost increase but <10 ms impact.  
*Availability*: Multi‑AZ replication and cross‑region read replicas guarantee 99.99% uptime.  
*Cost*: Rough estimate – $240k/month (S3 50 TB, OpenSearch 12 nodes, Kinesis 1M events).  

**Result (R)**  
- Query latency dropped from 750 ms to 180 ms (95th percentile).  
- User adoption grew 4× in six months; internal support tickets fell by 70%.  
- Cost stayed within budget, and the system handled a 12‑month spike of 3× traffic without any outage.

---

### Leadership Principles Anchored

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took responsibility from requirement gathering to post‑deployment monitoring; set up automated alerts. |
| **Dive Deep** | Analyzed CloudWatch metrics, traced latency in X‑Ray, and tuned OpenSearch shard allocation for optimal performance. |
| **Bias for Action** | Deployed a minimal viable OpenSearch cluster within 2 weeks, iterated based on real user feedback. |
| **Deliver Results** | Met all SLAs while staying under budget; quantifiable impact shown in latency & adoption metrics. |

---

### What a Bar‑Raiser Listens For

- **Quantified Impact**: I presented clear KPIs (latency, cost, adoption).  
- **Depth of Dive**: Discussed specific AWS services, trade‑offs (e.g., choosing managed OpenSearch over self‑hosted Elasticsearch for rapid scaling).  
- **Ownership & Learning**: Highlighted post‑mortem lessons—initially under‑provisioned OpenSearch nodes; pivoted to autoscaling after observing CPU spikes.  

By tying the solution back to AWS services and Amazon’s leadership principles, I showcased both technical acumen and a customer‑centric mindset that drives measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
