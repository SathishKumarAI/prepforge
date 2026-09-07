---
qid: ing_a5ac0c455e__aws__local
question: 'Explain: Your agent buys things on behalf of users. Design the authorisation
  trail so a disputed transaction is resolvable.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 480
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:41:31-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build an “agent‑on‑behalf” e‑commerce feature for a fintech startup that would let users authorize recurring purchases via voice or chat. The biggest risk was disputes – we needed an immutable, auditable trail so every transaction could be traced back to the user’s intent and the agent’s decision.

**Action**  
1. **Auth & Consent Layer** – Users authenticate with Amazon Cognito; each purchase request is signed with a short‑lived JWT that contains a *consent hash* (user ID + timestamp + merchant ID).  
2. **Decision Service** – A Lambda function receives the signed intent, validates the hash via KMS‑encrypted keys, and writes a *decision record* to DynamoDB (`TransactionID`, `UserID`, `AgentAction`, `Timestamp`).  
3. **Event & Audit Trail** – The same Lambda publishes an event to EventBridge; CloudTrail logs every API call (Cognito auth, Lambda invoke). All events are persisted in an S3 “audit bucket” with server‑side encryption and lifecycle policies (10 yrs).  
4. **Dispute Flow** – A customer support portal queries DynamoDB for the decision record, cross‑checks with CloudTrail logs, and presents a signed PDF (via AWS Signer) to the user. If needed, a manual review Lambda can trigger an automated escalation.

**Result**  
The end‑to‑end audit trail reduced dispute resolution time from 3 days to <6 hours and cut chargeback costs by **27 %** in the first quarter after launch.  

**Leadership Principles** – *Customer Obsession* (transparent evidence for users), *Ownership* (full end‑to‑end design), *Dive Deep* (cryptographic signing, immutable logs).  
Bar‑raiser cues: clear ownership of each component, quantifiable impact, and a learning loop that fed back into tightening the consent hash after an early false‑positive incident.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
