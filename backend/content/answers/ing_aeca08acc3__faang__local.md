---
qid: ing_aeca08acc3__faang__local
question: 'Explain: Availability Zones (AZ) — AWS-Services/AWS-Global-Architecture-Region-AZ.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 404
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:29:58-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of *Availability Zones (AZs)* in AWS: how they fit into the global architecture, their relationship with regions and services, and why they matter for high‑availability deployments.

**Approach**  
1. Define an AZ and its physical isolation.  
2. Explain how multiple AZs form a region.  
3. Show how services span or limit AZ usage (e.g., EC2, RDS).  
4. Highlight the benefits: fault tolerance, low‑latency inter‑AZ links, and disaster recovery.

**Depth**  
An **Availability Zone** is an isolated data center within an AWS Region, separated by redundant power, networking, and physical security. A region contains at least two AZs; most regions have 3–6. Services expose AZ‑level endpoints (e.g., `us-east-1a`) so you can launch resources in specific zones. Multi‑AZ deployments replicate data across zones via synchronous replication or cross‑region read replicas, ensuring that a failure of one zone does not bring down an application. Services like S3 are global and abstract AZs, while RDS requires explicit AZ selection for multi‑AZ failover.

**Edge Cases**  
- Some services (e.g., DynamoDB) automatically distribute data across AZs; you can’t pick zones.  
- Certain regions have only one AZ, limiting high‑availability options.  
- Inter‑AZ traffic is charged; excessive cross‑zone transfers inflate costs.

**Optimize & Communicate**  
When designing, choose at least two AZs per region, use Elastic Load Balancing to distribute traffic, and enable automatic failover features (e.g., RDS Multi‑AZ). Explain that this strategy balances cost, latency, and resilience—key metrics for any FAANG‑level cloud architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
