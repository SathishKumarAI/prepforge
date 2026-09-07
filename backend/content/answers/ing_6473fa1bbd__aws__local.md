---
qid: ing_6473fa1bbd__aws__local
question: 'Explain: Agent-card signed identity, not shared session cookies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 388
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:11:59-05:00'
sources: []
---

**Situation / Task**  
While building a federated login for our Alexa‑powered smart home hub, I had to let third‑party voice assistants (Alexa, Google Assistant) prove ownership of a user’s device without leaking the user’s session cookie or any other shared secret.

**Action**  
I designed an *Agent‑Card Signed Identity* flow:  

1. **Device registers** with our Auth service and receives a short‑lived JWT (`agent_card`) signed by AWS Cognito.  
2. The voice assistant presents this token to the hub over HTTPS; the hub verifies the signature using Cognito’s public key (AWS KMS).  
3. No session cookie travels between parties—only the stateless `agent_card`.  
4. We store a hash of the card in DynamoDB for replay protection and audit.  

Technologies: AWS Cognito (identity), KMS (key management), API Gateway + Lambda (verification), DynamoDB (audit). This keeps the system **highly available** (regional endpoints), **scalable** (serverless), and **cost‑effective** (pay‑as‑you‑go).

**Result**  
Within two weeks of rollout, we saw a 30 % drop in credential‑leak incidents and a 25 % reduction in support tickets related to “shared cookie” errors. The solution earned us a *Customer Obsession* badge from the product team.

**Learning**  
The first iteration used a shared session cookie; it failed under load due to stateful scaling. Switching to a signed, stateless token resolved that. I now always prototype with serverless in mind and audit security flows early—an example of **Dive Deep** and **Ownership**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
