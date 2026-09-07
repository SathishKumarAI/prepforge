---
qid: ing_424ea5ff99__faang__local
question: 'Explain: Pilot Light Approach: — Cloud Disaster Recovery Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 447
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:18:23-05:00'
sources: []
---

**Clarify**  
The question asks for an explanation of the *Pilot‑Light* model in cloud‑based disaster recovery (DR). I’ll assume we’re comparing it with “Cold” and “Warm” strategies, focusing on how Pilot‑Light keeps a minimal yet ready infrastructure that can be spun up quickly after a failure.

**Approach**  
1. Define Pilot‑Light relative to other DR tiers.  
2. Outline its architecture: lightweight copy of data + automated scripts.  
3. Discuss operational workflow (failover triggers, recovery time objective – RTO).  
4. Touch on cost/complexity trade‑offs and typical use cases.

**Depth**  
Pilot‑Light keeps a *minimal* production environment in the cloud—just enough VMs, networking, and a replicated database snapshot to start services. Data is continuously streamed (e.g., via change data capture) to keep the copy fresh; however, it does **not** run full workloads or perform real‑time load testing.  
On a failure, orchestrated scripts launch the environment, attach the latest data store, and bring up the application stack. RTO can be minutes rather than hours, while RPO is low because of near‑real‑time replication. Costs stay below Warm‑DR (no running instances) but above Cold‑DR (no pre‑provisioned resources). It’s ideal for services that tolerate brief outages but cannot afford data loss—e.g., e‑commerce checkout or banking.

**Edge Cases**  
- If replication lag exceeds RPO, data loss occurs.  
- A catastrophic event affecting both primary and cloud region would still require a backup snapshot.  
- Misconfigured automation can delay failover or leave services partially functional.

**Optimize & Communicate**  
I’d suggest adding health‑checks and automated rollback to mitigate mis‑spinups, and using infrastructure-as-code for repeatability. In an interview, I’d frame this as: “Pilot‑Light gives us the sweet spot—quick recovery with minimal overhead, perfect for services where uptime matters more than zero data loss.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
