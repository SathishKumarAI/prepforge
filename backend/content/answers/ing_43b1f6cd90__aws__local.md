---
qid: ing_43b1f6cd90__aws__local
question: 'Explain: Security Requirements — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 432
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:59:19-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the launch of a voice‑enabled conversational AI for a fintech client that handled sensitive customer data (account balances, transaction history). The regulatory brief demanded *end‑to‑end encryption*, role‑based access control, and real‑time threat detection.  

**Action**  
I owned the solution design:  
1. **Secure Data Path** – used Amazon Connect with **TLS 1.3** for channel transport; integrated **Amazon Lex** behind an **AWS WAF** to block OWASP Top‑10 attacks.  
2. **Encryption at Rest & In‑Transit** – leveraged **KMS** keys stored in a dedicated VPC, and enabled **Lex encryption** for session state.  
3. **Fine‑grained IAM** – created custom Cognito user pools with attributes `role:agent|customer` and attached **resource policies** that restrict Lex intents to the appropriate role.  
4. **Threat Monitoring** – deployed **Amazon GuardDuty** + **AWS Security Hub**; built a Lambda pipeline that flags anomalous intent calls (e.g., repeated “balance” queries) and auto‑locks accounts after 3 failed attempts.  

**Result**  
The platform processed ~1 M voice sessions/month with <0.01 % latency impact, achieved an **SLA of 99.9 % availability**, and passed SOC‑2 Type II in 30 days—down from the expected 60. The cost was $12K/yr, 25 % below the initial $16K estimate.

**Learning**  
I realized that *Ownership* means iterating on feedback loops: after a minor breach simulation I added a **real‑time encryption audit log** in CloudWatch, which cut incident response time by 40 %. This reinforced my belief that “Dive Deep” and “Bias for Action” together drive resilient security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
