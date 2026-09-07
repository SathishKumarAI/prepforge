---
qid: ing_1ad89dbeb7__aws__local
question: 'Explain: Choosing the right Glean interface ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 507
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:27:00-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of our on‑prem ML pipeline to an AWS‑based **Glean MCP (Machine‑Learning Compute Platform)**. The challenge was selecting the correct Glean interface (REST vs. gRPC) so that data scientists could ingest training data at 10 GB/s while keeping latency under 200 ms for inference requests.

**Action**  
I first *dived deep* into the workload: profiling CPU, memory, and network usage of sample notebooks and production jobs. I benchmarked both interfaces using `wrk` and `grpcurl`, measuring throughput, error rates, and cost per GB transferred.  

- **REST (S3 + API Gateway)** yielded 8 GB/s but incurred $0.12/GB transfer cost and 350 ms latency due to HTTP overhead.  
- **gRPC (ECS Fargate + App Mesh)** achieved 12 GB/s, reduced transfer cost to $0.07/GB, and maintained 150 ms latency.

I then *owned* the decision by drafting a proof‑of‑concept, rolling it out to two data‑science teams, and tracking key metrics:  
- **Throughput** increased from 8 GB/s to 12 GB/s (50% gain).  
- **Cost** fell 42%.  
- **Error rate** dropped from 1.2% to 0.3%.

I presented the results in a sprint review, highlighting that the gRPC interface enabled faster model iteration and lower operational spend.

**Result**  
The migration delivered a 30 % reduction in inference cost per request and a 40 % improvement in model deployment velocity, directly boosting revenue by $1.2M annually.

**Leadership Principles**  
- **Customer Obsession** – Delivered a faster, cheaper interface for data‑science customers.  
- **Ownership** – Took end‑to‑end responsibility from profiling to production roll‑out.  
- **Dive Deep & Bias for Action** – Thoroughly benchmarked and acted on findings swiftly.

*Bar‑raiser takeaways:* clear ownership, quantitative impact, deep technical dive, and learning loop (we iterated on the gRPC config after the first failure).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
