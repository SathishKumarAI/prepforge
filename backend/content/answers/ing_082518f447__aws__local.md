---
qid: ing_082518f447__aws__local
question: 'Explain: When you send and receive money with Apple Cash (U.S. only)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 435
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:44:09-05:00'
sources: []
---

**Situation & Task**  
I was tasked with designing a payment flow for **Apple Cash** (US‑only) that could handle millions of daily transactions while keeping latency under 200 ms and maintaining PCI compliance.

**Action – Technical Design**  
1. **API Gateway + Lambda Authorizer** – gate traffic, enforce OAuth2 scopes, and log every request.  
2. **EventBridge → Step Functions** – orchestrate the “send/receive” workflow: debit sender’s Apple ID balance, credit receiver’s account, and publish a *transaction* event to SQS.  
3. **DynamoDB (partition key = user‑id)** – store balances with conditional writes (`ConditionExpression`) to prevent race conditions.  
4. **SQS + Lambda** – async reconciliation that updates the ledger in Aurora Serverless PostgreSQL, guaranteeing ACID guarantees for cross‑border transfers.  
5. **CloudWatch Alarms & XRay** – monitor latency and error rates; auto‑scale Lambda concurrency.

**Result**  
- Reduced end‑to‑end latency from 350 ms to 120 ms (30% improvement).  
- Throughput scaled from 10k tx/s to 1M tx/s with zero outages during a 2‑week peak event.  
- Cost dropped by 18 % through serverless compute and DynamoDB auto‑scaling.

**Leadership Principles Reflected**  
- **Customer Obsession** – instant, reliable transfers for users.  
- **Ownership & Dive Deep** – I led the design from requirements to deployment, drilling into consistency and failure paths.  

**Bar‑raiser cues**  
- Quantified impact (latency, throughput, cost).  
- Depth: conditional writes, event sourcing, replayability.  
- Learning loop: after a 5 % error spike in early tests, I added idempotent Lambda logic, turning a failure into a permanent guardrail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
