---
qid: ing_e9c1c0961e__star__local
question: 'Explain: the backup data center will help to — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 285
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:15:43-05:00'
sources: []
---

**Situation:**  
When we were scaling the ride‑matching service for a citywide launch, our primary data center hit a hardware failure that dropped latency by 30 % and caused intermittent driver queue stalls.

**Task:**  
I had to design an immediate failover plan that kept real‑time trip matching under 100 ms and ensured no loss of user requests during the outage.

**Action:**  
I set up a geographically separate backup data center with synchronous replication via Kafka streams. We deployed a lightweight “hot standby” Kubernetes cluster, mirrored our PostgreSQL databases using logical streaming replication, and used Consul for service discovery to redirect traffic automatically. I also implemented health‑check probes that switched the API gateway to the backup cluster once the primary failed, then ran a canary rollback to confirm performance parity.

**Result:**  
The failover took under 4 seconds, keeping latency within 95 ms and avoiding any driver queue freezes. Post‑incident analysis showed a 25 % reduction in downtime compared to previous manual switchover procedures. I learned that investing in real‑time data replication and automated routing can keep critical microservices resilient without human intervention, a practice we now standardize across all urban deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
