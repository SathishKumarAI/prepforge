---
qid: ing_b59b8595c8__aws__local
question: 'Explain: Privacy and Multi-Tenancy — Long Term Memory'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 452
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:14:51-05:00'
sources: []
---

**Situation (S)** – At my previous role I led the design of a SaaS platform that stored user‑generated content for an AI chatbot. The product had to keep *long‑term memory* for each tenant while guaranteeing privacy and isolation across thousands of customers.

**Task (T)** – Build a multi‑tenant architecture where every tenant’s data is encrypted at rest, never shared, and can be retained or deleted on demand, all without compromising the model’s ability to learn from historical context.

**Action (A)** –  
1. **Ownership & Dive Deep** – I chose *Amazon DynamoDB* for its per‑partition isolation and fine‑grained IAM policies. Each tenant gets a dedicated table prefix (`tenant‑{id}`) and an attribute `sensitive:boolean`.  
2. **Privacy** – Data is encrypted with customer‑managed keys in **AWS KMS**, while the AI model reads only encrypted blobs via *Lambda@Edge* that performs on‑demand decryption, keeping keys out of the compute layer.  
3. **Long‑Term Memory** – Historical logs are archived to *S3 Glacier Deep Archive* for cost‑effective 7‑year retention; lifecycle rules trigger automatic deletion after the tenant’s SLA expires.  
4. **Scalability & Cost** – DynamoDB auto‑scales with on‑demand capacity, keeping latency < 5 ms even at 10M requests/day. S3 storage costs $0.004/GB/month, giving us <$2k/month for 500TB of archived context.

**Result (R)** – The solution supported 12,000 tenants with a 99.999% availability SLA and reduced data‑breach risk to zero by design. We cut operational cost by 35 % compared to a monolithic RDS approach and received an “Outstanding” peer review for **Customer Obsession** and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
