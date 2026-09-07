---
qid: ing_7316546646__aws__local
question: 'Explain: Availability in numbers — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 466
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:45:46-05:00'
sources: []
---

**Availability in Numbers – A Design‑First Lens**

**Situation:**  
I led the redesign of a multi‑tenant SaaS platform that previously delivered 99.9 % uptime but suffered “last‑mile” outages during traffic spikes. The business required *five nines* (99.999 %) to meet new SLAs.

**Task:**  
Architect a fault‑tolerant, cost‑effective system that guarantees 99.999 % availability for all tenants while keeping latency under 200 ms.

**Action:**  
1. **Region & AZ Redundancy** – Deployed across two AWS regions with *cross‑region read replicas* (RDS Aurora Global) to isolate failures.  
2. **Auto‑Scaling & Load Balancing** – Elastic Load Balancer + Application Auto Scaling for EC2 and ECS containers, backed by a *Lambda‑based health check* that restarts unhealthy tasks instantly.  
3. **Stateless Service Design** – All services were stateless; session data moved to DynamoDB with *DynamoDB Global Tables* (multi‑region) for fast reads.  
4. **Circuit Breaker & Retry Logic** – Implemented via AWS App Mesh, limiting cascading failures.  
5. **Monitoring & Alerts** – CloudWatch Alarms on RDS replication lag and ELB error rates; PagerDuty escalation to 24/7 on-call rotation.

**Result:**  
Post‑deployment, the platform achieved *99.9993 % availability* (≈4.38 minutes of downtime per year) while reducing operational cost by 12 %. The latency remained <180 ms for 95 % of requests.

**Leadership Principles:**  
- **Customer Obsession** – Delivering uninterrupted service directly improves user trust.  
- **Ownership** – I drove cross‑team collaboration and took end‑to‑end responsibility for the solution.

**Bar‑Raiser Notes:**  
*Clear ownership*, *deep dive into failure modes*, *quantified impact*, and learning from a prior outage (identified as a single AZ dependency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
