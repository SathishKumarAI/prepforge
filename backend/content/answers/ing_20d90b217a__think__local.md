---
qid: ing_20d90b217a__think__local
question: 'Explain: Design an enterprise assistant that answers questions over a company''s
  internal documents, respecting per-user permissions (Amazon Q-shaped).'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 519
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:52:28-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**

- *What is required?* An AI assistant that can read company docs and answer user queries while obeying each user’s access rights.
- *Assumptions:*  
  - Documents are stored in a searchable index (e.g., Elasticsearch, OpenSearch).  
  - Permissions are already defined per document or folder.  
  - Users authenticate via an identity provider (IdP) that can supply claims/roles.

**2️⃣ Adopt a mental model**

Think of the system as three layers:  
1. **Auth & Policy Layer** – resolves who can see what.  
2. **Retrieval Layer** – fetches relevant documents from the index.  
3. **LLM Generation Layer** – turns retrieved snippets into a natural‑language answer.

Treat permissions as *filters* applied before the LLM sees any content.

**3️⃣ Step‑by‑step reasoning**

1. **User authenticates → receive JWT/claims** that encode role or explicit doc IDs.  
2. **Policy Engine** consults a policy store (e.g., AWS IAM, Azure RBAC) to produce an *allow list* of document identifiers for this user.  
3. **Query transformation**: take the raw question and embed it; run against the vector index but restrict results to only those IDs in the allow list.  
4. **Retrieve top‑k snippets** (with scores).  
5. **Pass snippets + original query to LLM** as context, ensuring no snippet outside the allow list is ever sent.  
6. **Generate answer**; optionally add a disclaimer “Answer based on accessible docs only.”  

**4️⃣ Common pitfalls**

- *Over‑exposing data:* sending full documents to the LLM before filtering.  
- *Policy drift:* forgetting to update the policy store when new docs are added or roles change.  
- *Latency spikes:* retrieving many snippets for a user with wide access; cache results per query.  

**5️⃣ Sanity checks & communication**

- Log each step: auth token, allowed IDs, retrieved IDs, LLM prompt size.  
- Periodically run audit queries to verify that no unauthorized docs appear in responses.  
- Explain the flow to stakeholders: “We first confirm you’re allowed to see X, then only those parts are fed into the model.”  

This structured approach keeps the assistant both functional and compliant with per‑user permissions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
