---
qid: ing_46405643ec__faang__local
question: 'Explain: Status of This Memo — RFC 8707: Resource Indicators for OAuth
  2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 490
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:27:18-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question:* What is the current status and purpose of *RFC 8707 – “Resource Indicators for OAuth 2.0”*?  
*Assumptions to confirm:*  
- Audience knows OAuth 2.0 basics.  
- They want the memo’s lifecycle (draft → RFC) and its functional role.

**2️⃣ Approach**  
1. State the memo’s maturity level (RFC).  
2. Summarize why it was written – the “resource indicator” concept.  
3. Highlight key changes to OAuth flows.  
4. Note any implementation or deployment notes.

**3️⃣ Depth**  
- **Status:** *RFC 8707* is a final, published RFC (June 2023), endorsed by IETF’s OAuth working group.  
- **Purpose:** Introduces the **resource indicator** – an optional URI supplied by the client in the `Authorization` request to let the authorization server signal which protected resource the client intends to access.  
- **Key changes:**
  - Adds a new `resource` query parameter (or header) to the `/authorize` and `/token` endpoints.  
  - Allows authorization servers to enforce *resource‑specific* policies, such as scopes or consent.  
  - Enables fine‑grained token issuance: tokens may carry an audience that matches the indicated resource, improving security by limiting token misuse.  
- **Impact on existing flows:** Existing implementations remain backward compatible; clients simply add the `resource` field when needed.

**4️⃣ Edge Cases**  
- *Missing resource indicator:* Authorization server falls back to default policies.  
- *Multiple resources:* RFC allows a comma‑separated list; servers may reject if policy conflicts.  
- *Legacy servers:* Must ignore unknown parameters or return an error—test with older OAuth libraries.

**5️⃣ Optimize & Communicate**  
*Improvements:*  
- Future work could standardize resource indicator formats (e.g., OIDC scopes).  
- Provide SDK snippets to show minimal code changes.  

*Narrative tip:* “Think of the resource indicator as a *request header* for OAuth—just as HTTP lets you specify the target URL, this RFC lets clients tell the auth server which protected API they’ll call next, so the token is tailored and safer.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
