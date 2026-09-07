---
qid: ing_5e8bb07618__aws__local
question: 'Explain: MAC (Mandatory Access Control) — Designing a Permission System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 424
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:59:24-05:00'
sources: []
---

**Situation – Task**  
In my last role I was tasked with replacing an ad‑hoc ACL system for a multi‑tenant SaaS platform that handled sensitive customer data. The legacy model violated *Customer Obsession* (customers couldn’t guarantee isolation) and *Ownership* (no single team owned the policy engine).

**Action – Design & Execution**  
I re‑architected the permission layer as a **Mandatory Access Control (MAC)** service using AWS IAM, Cognito, and DynamoDB.  

1. **Policy Store** – Policies in a single DynamoDB table keyed by *resource ARN* + *role*.  
2. **Evaluation Engine** – A Lambda function (Python) that ingests the request, fetches the relevant policy, and returns “allow/deny” via API Gateway.  
3. **Audit & Governance** – CloudTrail logs every evaluation; Athena queries generate compliance reports.

Key trade‑offs:  
* *Scalability*: DynamoDB’s on‑demand capacity handles 10k requests/sec with <5 ms latency.  
* *Availability*: Multi‑AZ tables + Lambda concurrency limits give 99.99% SLA.  
* *Cost*: $0.25/1M read ops vs the previous $4/M for custom DB queries.

**Result – Impact**  
Within three months, policy evaluation time dropped from 200 ms to <5 ms (40× speedup). We reduced data breach incidents by **100%** and cut operational cost by **$120k/year**. The team adopted the new MAC model as a reusable service across all products.

**Reflection – Learnings**  
I learned that *Dive Deep* into existing metrics reveals hidden bottlenecks, and *Bias for Action* means iterating quickly with measurable checkpoints (latency & error rates). This project is now a bar‑raiser for future security‑centric features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
