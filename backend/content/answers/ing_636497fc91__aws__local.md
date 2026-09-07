---
qid: ing_636497fc91__aws__local
question: Design agent orchestration across dozens of connected SaaS systems. Where
  is authorization enforced, and why can it not live in the model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 464
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:09:53-05:00'
sources: []
---

**Situation / Task**  
I was tasked to architect an AI‑driven agent that orchestrates dozens of SaaS products (CRM, billing, analytics) while ensuring secure, policy‑based access for each tenant. The challenge: where do we enforce authorization so the system is both auditable and scalable?

**Action**  
1. **Central Policy Service** – I built a *Policy Decision Point* (PDP) using AWS IAM with fine‑grained resource policies stored in DynamoDB.  
2. **Gateway Layer** – All SaaS calls route through an API Gateway + Lambda “Orchestrator” that first invokes the PDP.  
3. **Token Delegation** – The Orchestrator exchanges a short‑lived Cognito ID token for a signed JWT containing tenant & role claims, then passes it to downstream SaaS via OAuth 2.0 scopes.  
4. **Model Isolation** – The ML model lives in SageMaker endpoints; it receives only the *intent* and contextual data, never raw tokens or policy tables.

**Result**  
- Reduced authorization latency by 70 % (from 250 ms to 75 ms per call).  
- Achieved 99.9 % availability across 12 regions with DynamoDB Global Tables for policy replication.  
- Cut cost by 35 % versus embedding policy logic in every model container.

**Why not inside the model?**  
Models are stateless, versioned artifacts; embedding policy checks would tie the business rule to the training pipeline, hindering rapid iteration and violating *Ownership* (models should focus on inference). Placing authorization in a dedicated PDP keeps security **separable**, auditable, and scalable—exactly what Amazon expects for high‑velocity delivery.  

**Bar‑raiser takeaways**  
- Ownership: I owned end‑to‑end policy flow.  
- Dive Deep: I quantified latency, cost, and replication trade‑offs.  
- Learning from failure: Initial prototype leaked tenant IDs; moving logic out of the model prevented data leakage and regulatory risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
