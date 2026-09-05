---
qid: ing_b5cc01c440__eli5__local
question: 'Explain: 4.2 Requirement 2: Health Monitoring — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 218
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:24:46-05:00'
sources: []
---

Imagine a busy hospital where patients (data requests) arrive at the front desk, and nurses (servers) must see them quickly. If one nurse gets overloaded, patients wait too long or get lost. The “load balancer” is like a smart receptionist who watches how many patients each nurse has and directs new arrivals to the least busy one.

**Health monitoring** means the receptionist constantly checks each nurse’s status—whether they’re still present, how many patients they’re handling, and if any are stuck or offline. If a nurse falls ill (a server crashes), the receptionist immediately stops sending patients there and redirects them elsewhere. This keeps everyone moving smoothly, prevents bottlenecks, and ensures no patient is left unattended.

*Unavoidable terms defined:*  
- **Load balancer**: software that distributes incoming work across multiple servers.  
- **Health check**: periodic test to confirm a server is alive and functioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
