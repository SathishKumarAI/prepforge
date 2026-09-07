---
qid: ing_64898efd1d__faang__local
question: Where does the API key live, and how do you update a prompt after release?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 400
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:38:08-05:00'
sources: []
---

**Clarify**  
*Problem:* We need to explain where an API key for an AI service is stored in production and how we can modify the prompt after a release without redeploying code.  
*Assumptions:* The key is used only on the server side; the prompt is static content that may change over time.

**Approach**  
1. Store secrets securely (e.g., AWS Secrets Manager, Azure Key Vault).  
2. Load the secret at runtime via environment variables or SDK calls.  
3. Persist prompts in a configuration store (database, key‑value store) so they can be edited through an admin UI or API.

**Depth**  
- **Secret storage:** Use KMS‑encrypted secrets; rotate automatically every 90 days. Access is granted by IAM roles, not hardcoded credentials.  
- **Prompt updates:** Store prompts in a lightweight JSON table with versioning. The application fetches the current prompt on each request or caches it with short TTL (e.g., 5 min). Updating the prompt writes a new record; the cache invalidates automatically.

**Edge Cases**  
- *Key compromise:* Immediate revocation and rotation, followed by alerting.  
- *Prompt drift:* Version history prevents accidental rollbacks.  
- *Cache staleness:* Use pub/sub to notify services when a prompt changes.

**Optimize & Communicate**  
- **Performance:** Cache prompts in Redis; avoid DB hits per request.  
- **Observability:** Log key usage and prompt change events.  
- **Narrative:** “We keep the API key out of source control by storing it in a managed secrets vault, and we decouple the prompt from code so non‑devs can tweak it via an admin UI—this keeps our release cycle short while maintaining security.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
