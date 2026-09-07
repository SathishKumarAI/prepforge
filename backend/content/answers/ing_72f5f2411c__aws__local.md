---
qid: ing_72f5f2411c__aws__local
question: 'Explain: Supported hosts ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 467
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:45:29-05:00'
sources: []
---

**Situation (S)** – While leading the *Glean MCP* project at a mid‑size SaaS firm, we discovered that our ML inference layer was unable to support the growing number of on‑prem hosts that needed real‑time recommendations. The latency had ballooned from 120 ms to over 1 s, hurting user engagement (CTR dropped 18%).

**Task (T)** – My goal was to redesign the host‑support subsystem so it could scale to 10k concurrent hosts with <200 ms inference latency while keeping cost under $20K/month.

**Action (A)** –  
- **Ownership & Dive Deep:** I audited the current architecture, discovered that all models were served from a single EC2 instance and data was fetched over unencrypted HTTP.  
- **Design:** Migrated to an *Amazon SageMaker Endpoint* behind an *Application Load Balancer*, using *AWS Lambda* for lightweight pre‑processing and *DynamoDB* for host metadata (latency < 5 ms).  
- **Scalability & Availability:** Enabled auto‑scaling on CPU usage; set up Multi‑AZ deployment for the endpoint.  
- **Cost:** Leveraged Spot Instances for batch inference and reserved capacity for steady traffic, cutting spend by 35%.  
- **Bias for Action:** I prototyped in two weeks and rolled out to a pilot group of 500 hosts.

**Result (R)** – Latency dropped to 140 ms on average; the system now supports 10k concurrent hosts with 99.9% availability. User CTR improved by 12%, translating into an estimated $1.2M incremental revenue over six months. The experiment was documented in a post‑mortem, highlighting that early monitoring of model warm‑up times had prevented the spike in latency.

*Leadership Principles:* **Customer Obsession** (improving user experience), **Ownership** (taking full responsibility for the end‑to‑end pipeline), and **Dive Deep** (profiling every layer to uncover bottlenecks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
