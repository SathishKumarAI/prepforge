---
qid: ing_1294ef4339__star__local
question: 'Explain: Policy-based language — Designing an Authorization Model for an
  Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 420
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:05:41-05:00'
sources: []
---

**Situation**  
In a fintech startup, our core product was a real‑time fraud detection API that handled over 10 k requests per second. The internal audit team flagged inconsistencies in how user roles were enforced across microservices—some services were hard‑coding permissions while others used legacy ACL tables, leading to duplicated logic and frequent security bugs.

**Task**  
I had to design a single, declarative authorization model that would replace the fragmented approach, ensure compliance with PCI‑DSS, and allow rapid policy changes without redeploying code. The solution needed to be auditable, support fine‑grained resource scopes, and integrate with our existing OAuth2 identity provider.

**Action**  
I evaluated several policy engines and chose **Cerbos** for its expressive JSON‑based language and lightweight Go SDK. I defined a global “policy set” that captured roles (e.g., analyst, auditor), actions (read, write, delete), and resource attributes (account ID, transaction type). Using Cerbos’s `allow` rules with condition expressions, I encoded business rules such as “an auditor can read transactions older than 30 days but cannot modify them.” I then instrumented each microservice to call the Cerbos SDK on every request, passing the user token and requested action. For auditability, I enabled Cerbos’s event logging to CloudWatch, which produced a tamper‑evident trail of decisions.

**Result**  
The new model reduced authorization code by 70 % across services and eliminated the previous “role drift” incidents. Runtime overhead was under 2 ms per call, keeping latency within SLA. After three months, we saw a 40 % drop in security‑related tickets, and the audit team praised the transparent policy logs. I learned that a well‑chosen policy engine can turn fragmented permissions into a single source of truth while keeping performance high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
