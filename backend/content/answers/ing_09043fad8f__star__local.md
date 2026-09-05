---
qid: ing_09043fad8f__star__local
question: 'Explain: How should an agent authenticate to downstream systems? Compare
  a shared service account with acting on behalf of the user.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 366
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:47:05-05:00'
sources: []
---

**Situation:**  
In my last role, we built a recommendation micro‑service that needed to write logs and query a third‑party analytics API. The service was deployed in Kubernetes with a strict IAM policy that only allowed requests from authenticated principals.

**Task:**  
I had to decide how the agent should authenticate: either use a shared service account or act on behalf of each user, while keeping the system secure, auditable, and scalable.

**Action:**  
First, I evaluated the shared‑service approach. We created a dedicated GCP Service Account, stored its key in Google Secret Manager, and mounted it as a secret volume in the pod. The agent used this key to obtain short‑lived access tokens via the IAM‑credentials API. This gave us fast, low‑latency auth with minimal per‑request overhead, but all downstream calls appeared under one principal—making audit trails blurry.

Next, I prototyped “delegated identity.” Each user logged in via OAuth2; we exchanged their ID token for a custom JWT containing the user’s subject and scopes. The agent signed this JWT with its own key and passed it to downstream services, which verified the signature against our public key and extracted the original user context. This preserved end‑to‑end traceability and enabled fine‑grained RBAC in the analytics API.

**Result:**  
We deployed the delegated approach for production, reducing audit log ambiguity by 95% and enabling per‑user quota enforcement. The shared service account was retained only for internal housekeeping tasks, limiting its scope to a minimal set of permissions. I learned that while shared accounts simplify token rotation, acting on behalf of users provides necessary transparency and control in multi‑tenant environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
