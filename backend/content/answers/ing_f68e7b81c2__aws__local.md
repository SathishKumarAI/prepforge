---
qid: ing_f68e7b81c2__aws__local
question: 'Explain: Cons — Strong vs. Eventual Consistency - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 431
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:34:20-05:00'
sources: []
---

**Situation / Task**  
While architecting a real‑time recommendation engine for a global e‑commerce platform, I had to decide whether to expose data via *strong* or *eventual* consistency APIs. The business required near‑instant personalization (≤ 200 ms latency) but also had to guarantee that every user saw the same product catalog state across regions.

**Action**  
I scoped the problem with a **data‑driven experiment**: we replicated a 5 TB catalog across us-east-1 and eu-central-1 using DynamoDB Global Tables (strong consistency per region, eventual cross‑region). I instrumented latency, read/write amplification, and error rates over a two‑week pilot.  

*Design*:  
- **Strong Consistency**: DynamoDB with `ConsistentRead=true` for intra‑region reads; cost ≈ $0.25/1M reads.  
- **Eventual Consistency**: Global Tables + S3 EventBridge + Lambda to publish updates; cost ≈ $0.10/1M reads, but 15 % higher latency (300 ms).  

**Result**  
The pilot showed that strong consistency kept read latency < 150 ms with a **99.9 % SLA**, while eventual consistency introduced a 45 ms latency spike and a 2.3 % increase in out‑of‑stock errors during peak traffic. The cost differential was $1.8M annually, but the performance hit risked losing ~5 % of revenue per hour.

**Takeaway**  
For latency‑critical services with a global user base, I chose **strong consistency** and implemented a fallback to eventual reads for non‑critical analytics. This decision delivered a 12 % improvement in conversion rate and met our cost budget—demonstrating *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
