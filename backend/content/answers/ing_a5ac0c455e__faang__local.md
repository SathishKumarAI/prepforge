---
qid: ing_a5ac0c455e__faang__local
question: 'Explain: Your agent buys things on behalf of users. Design the authorisation
  trail so a disputed transaction is resolvable.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 469
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:10:03-05:00'
sources: []
---

**Clarify**  
We’re building an autonomous purchasing agent that can order goods for users. The key requirement: if a user disputes a charge, we must be able to prove *who* authorized the transaction, *when*, and *why*. Assumptions to confirm:  

- Users authenticate via OAuth2 + 2FA;  
- The agent operates as a service account in our backend;  
- Transactions are processed through a payment gateway (e.g., Stripe).  

**Approach**  
1. **Authorization flow** – each purchase request must include an *authorization token* tied to the user’s session and signed by our auth server.  
2. **Audit record** – immediately after receipt, store a cryptographic log entry: user‑id, timestamp, item details, token hash, and gateway transaction id.  
3. **Immutable ledger** – append each audit record to a write‑once storage (e.g., S3 with versioning + KMS encryption) or a tamper‑evident blockchain shard.  

**Depth**  
- The auth server issues JWTs containing `sub`, `iat`, and a nonce; the agent validates signature & expiry before forwarding to the gateway.  
- Audit entries are signed by the agent’s service key, then hashed (SHA‑256) and stored with a Merkle root in the ledger.  
- On dispute, we retrieve the ledger entry, verify the hash chain, and present the signed JWT + gateway receipt. Complexity: O(1) lookup; storage is linear in transactions.

**Edge Cases**  
- Token replay: include nonce and enforce single‑use per transaction.  
- Clock skew: sync NTP on all services.  
- Partial failures: retry logic must preserve idempotency (use idempotency keys).

**Optimize & Communicate**  
We can batch audit writes to reduce I/O, but retain per‑transaction visibility by exposing a lightweight API that streams the latest Merkle root. When explaining to interviewers, emphasize how each layer (auth, audit, immutable ledger) isolates responsibility, guarantees non‑repudiation, and scales horizontally while keeping dispute resolution fast and auditable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
