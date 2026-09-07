---
qid: ing_4c2f5e1f1f__aws__local
question: 'Explain: Relational Model — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 468
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:17:22-05:00'
sources: []
---

**Situation (S)**  
At my last role I led a team that had to migrate an on‑premises relational data store used for credit scoring into a fully managed cloud solution. The system served ~200 k daily API requests and the latency budget was 50 ms.  

**Task (T)**  
Choose between SQL (Amazon RDS) and NoSQL (DynamoDB) while ensuring ACID guarantees, horizontal scalability, and cost predictability.  

**Action (A)**  
I performed a **Dive Deep** analysis:  

| Criterion | SQL (RDS) | NoSQL (DynamoDB) |
|-----------|----------|------------------|
| Schema flexibility | Fixed | Flexible |
| Strong consistency | Yes | Eventual (can be strong with DynamoDB Global Tables) |
| Scale‑out | Read replicas, sharding via partition keys | Automatic sharding, 10 TB throughput per table |
| Cost model | Pay‑per‑hour + IOPS | On‑demand capacity or provisioned read/write units |

I proposed a **Hybrid** design:  
- Use **Amazon Aurora Serverless v2** for transactional credit rules (ACID).  
- Store user profile embeddings in **DynamoDB** for rapid similarity lookups.  
- Leverage **AWS Lambda + API Gateway** for request routing, keeping latency < 40 ms.  

**Result (R)**  
The migration cut operational overhead by 30% and reduced monthly spend from $120k to $75k while maintaining a 99.999% SLA. The system handled a 4× traffic spike during a promotional event without performance regression.

---

### Leadership Principles Anchored
- **Ownership** – I took full responsibility for the migration, risk assessment, and cost optimization.  
- **Dive Deep** – Detailed trade‑off analysis led to a data‑driven hybrid solution.  

Bar‑raisers look for: clear ownership, quantitative impact, depth of technical reasoning, and evidence that lessons from prior failures (e.g., over‑provisioned RDS instances) informed the new design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
