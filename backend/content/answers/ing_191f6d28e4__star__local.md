---
qid: ing_191f6d28e4__star__local
question: 'Explain: OAuth 2.0 — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 306
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:19:26-05:00'
sources: []
---

**Situation:**  
While redesigning the login flow for a mobile banking app, our QA team flagged that users were repeatedly prompted to re‑authenticate after each app launch. The root cause turned out to be how we handled OAuth 2.0 tokens versus traditional session cookies.

**Task:**  
I had to implement a seamless single sign‑on experience across iOS and Android, ensuring security compliance (PCI DSS) while keeping the user experience frictionless.

**Action:**  
I replaced server‑side sessions with stateless JWT access tokens stored in secure enclave keychains. Each token carried scopes and an expiry claim; we refreshed it via a short‑lived refresh token persisted in encrypted storage. I removed the legacy session cookie, which was being sent over HTTP only and causing repeated logins when the app reset its local cache. We also added PKCE to mitigate authorization code interception on mobile devices.

**Result:**  
The new flow cut login prompts from 75% of sessions down to <5%, improving NPS by 12 points. Token revocation was instant, and audit logs now show token issuance timestamps for compliance reporting. I learned that treating OAuth tokens as first‑class credentials—rather than as a substitute for cookies—drastically simplifies authentication logic while boosting security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
