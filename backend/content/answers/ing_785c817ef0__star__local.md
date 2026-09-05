---
qid: ing_785c817ef0__star__local
question: 'Explain: Prefer Names for Service Contracts — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 334
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:34:46-05:00'
sources: []
---

**Situation:**  
In a micro‑service architecture at my last company, we had an API gateway that routed requests to several backend services. The gateway’s configuration stored each downstream service by its hard‑coded IP address (e.g., `10.0.3.12:8080`). A recent deployment added a new instance of the user‑profile service behind a load balancer.

**Task:**  
I was tasked with updating the gateway so that it could automatically discover and route to the new instance without redeploying or manually editing IPs, while keeping the system resilient during rolling updates.

**Action:**  
I replaced the static IP entries with DNS names (`profiles.service.local`) in the gateway’s contract file. I then configured Kubernetes’ internal DNS and enabled service‑discovery annotations so that each pod registered its own hostname. The gateway now resolves these names at runtime, caching them for 30 seconds to avoid excessive lookups. I also added health‑check endpoints and implemented circuit‑breaker logic in the gateway to handle any transient resolution failures.

**Result:**  
The gateway automatically detected new profile instances within seconds of deployment, eliminating manual edits and reducing downtime from 15 minutes to under a minute during rollouts. Our team cut configuration errors by 80 % and gained the flexibility to scale services horizontally without touching the contract code. I learned that using names for service contracts decouples infrastructure from application logic, vastly improving agility in dynamic environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
