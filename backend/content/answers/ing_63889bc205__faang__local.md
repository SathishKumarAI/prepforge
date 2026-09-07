---
qid: ing_63889bc205__faang__local
question: 'Explain: Disaster recovery relies on having a solid plan to get critical
  applications and infrastructure up and running after an outage—ideally within minutes.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 439
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:35:02-05:00'
sources: []
---

**Clarify**  
We’re asked to explain why disaster recovery (DR) hinges on a robust plan that can bring critical apps and infra back online “within minutes.” I’ll assume: *critical* means business‑continuity services (billing, customer support), *outage* could be data center loss or major service disruption, and *minutes* refers to recovery time objective (RTO).  

**Approach**  
1. Define DR objectives (RTO/RPO).  
2. Identify critical workloads & dependencies.  
3. Design fail‑over architecture (geo‑redundancy, active‑passive/active‑active).  
4. Automate recovery workflows (IaC, scripts).  
5. Test & validate regularly.  

**Depth**  
- **RTO vs RPO:** Minutes‑level RTO requires near real‑time data replication and instant failover.  
- **Architectural choices:** Multi‑AZ/region clusters, shared storage (e.g., EFS, FSx), replicated databases (Aurora Global Database).  
- **Automation:** Terraform/CloudFormation for infra, Helm/Kustomize for apps; use CI/CD pipelines to deploy “dr‑ready” stacks.  
- **Health checks & monitoring:** Prometheus + Alertmanager to trigger auto‑switchover.  
- **Cost vs speed trade‑off:** Maintaining standby capacity is expensive; balance with acceptable RTO.  

**Edge Cases**  
- Partial outages (network only) → network‑centric failover.  
- Data corruption during sync → implement checksums or application‑level idempotence.  
- Simultaneous region failures → rely on multiple independent regions.

**Optimize & Communicate**  
I’d present a diagram of active–passive clusters, highlight key metrics (latency, replication lag), and explain how automated tests surface bottlenecks early. Emphasize continuous improvement: run quarterly DR drills, log incidents, and iterate the plan—this shows ownership and deep understanding to FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
