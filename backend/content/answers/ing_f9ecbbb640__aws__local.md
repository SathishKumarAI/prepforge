---
qid: ing_f9ecbbb640__aws__local
question: 'Explain: Non-Functional Requirements (What Are the Constraints?)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 687
total_tokens: 919
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:43:23-05:00'
sources: []
---

**Non‑Functional Requirements (NFRs) are the constraints that shape how a machine‑learning system behaves beyond its core predictive accuracy.**  
They govern **performance, reliability, security, scalability, cost, and maintainability**, ensuring the model delivers value *at scale* without breaking business processes.

---

### Behavioral (STAR)

- **Situation:** At my previous company we launched a fraud‑detection ML pipeline that ran in real time for every transaction (~2 M/day).  
- **Task:** The product manager demanded 99.9 % availability and sub‑100 ms inference latency while keeping the cloud bill under $30k/month.  
- **Action:** I led a cross‑functional squad to define NFRs, built an automated canary test harness, and introduced a multi‑region deployment with auto‑scaling Lambda functions backed by DynamoDB.  
- **Result:** We achieved 99.95 % uptime, 85 ms average latency, and reduced cost by 12 % compared to the legacy batch system—delivering $1.2M in avoided fraud that month.

*Leadership Principles:* **Ownership** (I drove the end‑to‑end delivery), **Dive Deep** (I dissected every metric source), **Bias for Action** (we iterated on infra within weeks).

---

### Technical Design & AWS Services

| Constraint | Service(s) | Why |
|------------|------------|-----|
| **Latency ≤ 100 ms** | *Amazon SageMaker Endpoint* (GPU/CPU), *AWS Lambda*, *API Gateway* | Edge‑proxied, auto‑scaling; low‑cold‑start via provisioned concurrency. |
| **Availability ≥ 99.9%** | *Multi‑AZ deployment*, *Elastic Load Balancer*, *Auto Scaling Groups* | Redundancy across regions; health checks + blue/green rollouts. |
| **Cost ≤ $30k/mo** | *Spot Instances*, *Savings Plans*, *S3 for training data*, *Glue ETL* | Right‑size compute, use spot for inference bursts, pay‑as‑you‑go storage. |
| **Security & Compliance** | *KMS*, *IAM*, *VPC endpoints*, *AWS Secrets Manager* | Encryption at rest/in transit; least‑privilege access. |
| **Scalability** | *Amazon SQS*, *Step Functions*, *DynamoDB Streams* | Queue backpressure, stateful orchestration, auto‑scale DB writes. |

---

### Trade‑offs & Learning

- **Latency vs. Accuracy:** We accepted a slightly lower F1 score (from 0.92 to 0.88) for a 3× speedup—validated by A/B tests that showed no measurable revenue loss.  
- **Cost vs. Redundancy:** Multi‑region deployment increased spend by ~15 %, but the SLA penalty avoided $5M in potential downtime costs.

**Bar‑raiser takeaway:** The answer demonstrates *ownership* (driving delivery), *deep dive* into metrics, and a quantified impact that ties NFRs directly to business outcomes. It also shows learning from trade‑offs—a key Amazon expectation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
