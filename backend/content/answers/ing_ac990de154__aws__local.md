---
qid: ing_ac990de154__aws__local
question: 'Explain: Infrastructure Choices — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 522
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:56:06-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of a fraud‑detection pipeline from on‑prem to AWS. The business required *zero downtime*, 99.9 % availability, and cost‑efficiency while keeping data residency compliant.  

**Action (Design)**  
I applied the OSI model as an abstraction for network segmentation:

| Layer | AWS Service | Purpose |
|-------|-------------|---------|
| **Physical / Data Link** | VPC + ENIs | Isolate traffic within a private subnet; use dedicated ENI for ML workers to avoid noisy neighbors. |
| **Network (IP)** | Transit Gateway, Security Groups | Control inter‑VPC routing; enforce least‑privilege access. |
| **Transport** | TLS via AWS Certificate Manager | Encrypt data in transit between SageMaker endpoints and downstream analytics. |
| **Session / Presentation** | Amazon API Gateway + Lambda@Edge | Provide RESTful APIs with throttling, caching (API Cache) for low latency inference. |
| **Application** | SageMaker Endpoint + ECS Fargate + EFS | Host models; autoscale based on CPU/memory; store artifacts in EFS for shared access. |

*Scalability*: Auto‑scaling groups and SageMaker’s model parallelism keep throughput > 10k requests/sec.  
*Availability*: Multi‑AZ deployments, Route 53 latency‑based routing, and Health Checks guarantee 99.9 % uptime.  
*Cost*: Spot instances for training (up to 70 % savings), Fargate for inference (pay per request).  

**Result**  
Post‑migration, inference latency dropped from **350 ms** to **75 ms**, throughput rose by **120 %**, and operational cost fell by **$250k annually**. The solution also met compliance audits with zero data exfiltration incidents.

**Leadership Principles Highlighted**  
- **Ownership**: I drove the end‑to‑end migration, coordinating security, networking, and ML teams.  
- **Dive Deep & Deliver Results**: Detailed layer‑by‑layer design led to measurable performance gains and cost savings.  

Bar‑raisers look for clear ownership, depth in architecture choices, quantified impact, and lessons learned (e.g., shifting from on‑prem to serverless reduced maintenance overhead).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
