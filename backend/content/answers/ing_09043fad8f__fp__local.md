---
qid: ing_09043fad8f__fp__local
question: 'Explain: How should an agent authenticate to downstream systems? Compare
  a shared service account with acting on behalf of the user.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 461
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:24:59-05:00'
sources: []
---

**Why an agent must prove “who it is” before speaking to a downstream system**

An agent’s goal is to obtain data or perform actions on behalf of *someone* (a user, another service, or itself). Downstream systems enforce *access control*: they grant privileges only to principals that can be proven to belong to a particular trust boundary. The authentication problem is thus a **identification‑trust mapping**: the agent must convince the system that it holds a credential whose cryptographic proof has been issued by an authority the system recognizes.

### 1. Shared service account

*Fundamental idea*: a single, long‑lived credential (e.g., API key) that all agents use.  
- **Pros**: Simple to deploy; no per‑user state needed.  
- **Cons**: Violates *least privilege*. If the key is compromised, every operation can be performed as if it were the service itself. Moreover, downstream systems cannot distinguish which user triggered a change, breaking auditability and violating data‑owner privacy models.

### 2. Acting on behalf of the user

Here the agent obtains an **identity token** (e.g., OAuth 2.0 `access_token`) that is bound to a specific user.  
- The token is short‑lived and scoped; it encapsulates *user consent* and *policy*.  
- The downstream system sees the real principal, enabling fine‑grained access control, revocation per user, and transparent audit trails.  
- From an information‑theoretic view, each token carries exactly the entropy needed for that user’s rights—no more, no less.

#### Non‑obvious insight
The *real* security advantage lies in **entropy budgeting**: a shared key is effectively one high‑entropy secret that all operations share. When acting on behalf of users, the system distributes entropy across many short tokens; if one token leaks, only that user’s rights are exposed, not the entire service. This mirrors cryptographic key‑management best practices and dramatically reduces blast radius.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
