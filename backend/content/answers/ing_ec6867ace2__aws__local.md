---
qid: ing_ec6867ace2__aws__local
question: 'Explain: Proxy vs Reverse Proxy (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 444
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:13:11-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I was asked to migrate the legacy API gateway to AWS while keeping latency < 50 ms for our 1 M daily users. The interview question: “Explain Proxy vs Reverse Proxy with examples.”  

**Action – Technical Design**  
I mapped out two architectures:

| | **Proxy (Forward)** | **Reverse Proxy** |
|---|---------------------|--------------------|
| **Purpose** | Client → external service (e.g., a third‑party payment API). | External clients → internal services (microservices). |
| **Example** | A mobile app uses an AWS *API Gateway* proxying to Stripe. | Our public REST endpoint proxies to ECS Fargate containers via Application Load Balancer. |

I chose **AWS API Gateway + Lambda@Edge** for the forward‑proxy path—low cost, 99.999% availability, and built‑in request throttling (10 k RPS). For the reverse‑proxy, I used an **ALB** in front of ECS Fargate with *path‑based routing* to separate user‑profile vs transaction services.  

**Result**  
Post‑migration latency dropped from 78 ms to 32 ms (+59%). Traffic spikes (up to 150 k RPS) were handled without a single outage, and we reduced infrastructure cost by 27% versus the on‑prem solution.

**Leadership Principles Anchored**  
- **Customer Obsession** – delivering sub‑50 ms API calls for end users.  
- **Ownership & Dive Deep** – selecting services after benchmarking request patterns and failure modes.

**Bar‑raiser Takeaway**  
Showed ownership (end‑to‑end migration), depth (service trade‑offs, cost analysis), quantified impact (latency & cost metrics), and learning from the initial 5 % SLA breach that led to adding a CloudWatch alarm for warm‑up.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
