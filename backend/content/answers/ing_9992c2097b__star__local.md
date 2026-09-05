---
qid: ing_9992c2097b__star__local
question: 'Explain: Global Architecture — Disasterrecovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 393
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:39:50-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time recommendation engine that served 12 million daily users across North America and Europe. Within the first month of production, a mis‑configured load balancer caused an outage that took two hours to resolve, wiping out our 99.9% SLA.

**Task:**  
I was tasked with designing a global disaster‑recovery (DR) architecture that would guarantee at least 99.999% availability and zero data loss for the recommendation service while keeping latency under 50 ms in all regions.

**Action:**  
1. **Geo‑redundant clusters** – I set up active‑active Kubernetes clusters in us-east-1, eu-west-2, and ap-southeast-1 with cross‑region traffic mirroring via AWS Global Accelerator.  
2. **Data replication** – We moved from a single RDS instance to Aurora Serverless v2 with Multi‑Region Global Database, enabling continuous read replicas that replicate at <1 second latency.  
3. **Automated failover** – Implemented CloudWatch alarms and an AWS Lambda orchestrator that triggers Route 53 weighted routing changes within 30 seconds when a region’s health checks fail.  
4. **Chaos testing** – Ran simulated regional outages with Gremlin to validate recovery time objectives (RTO) and ensure the system could self‑heal without manual intervention.

**Result:**  
After deployment, we achieved 99.999% uptime over six months, reduced outage impact from 2 hours to under 30 seconds, and cut data loss incidents to zero. The project also lowered operational cost by 15% through serverless scaling. I learned that a robust DR strategy is as much about automation and continuous testing as it is about redundant infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
