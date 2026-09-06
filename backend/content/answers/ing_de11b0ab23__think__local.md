---
qid: ing_de11b0ab23__think__local
question: 'Explain: Q58: Design a system where one user''s prompt cannot leak to another
  user'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 658
total_tokens: 853
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:38:21-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**

- *What is “leak” in this context?*  
  - Data that becomes accessible to an unauthorized user (e.g., copy‑paste, logs, cache).  
  - We assume a multi‑tenant environment: many users share compute resources but must not see each other’s prompts.  
- *Scope of the system*: prompt ingestion → model inference → response delivery.  
- *Security goals*: confidentiality, integrity, and auditability.

**2️⃣ Mental model / framework**

Use the **“Zero‑Trust, Multi‑Tenant, Isolation”** paradigm:

1. **Isolation layer** – separate user contexts (processes/containers).  
2. **Secure input pipeline** – sanitize & encrypt at rest.  
3. **Access control** – fine‑grained policies for who can read/write each context.  
4. **Audit trail** – immutable logging of prompt handling events.

Map the system onto this stack: Ingestion → Storage → Compute → Output.

**3️⃣ Step‑by‑step reasoning**

1. **Prompt ingestion**  
   - Accept via HTTPS with TLS.  
   - Immediately tag with a unique user/session ID; do *not* log raw text in plain form.  
2. **Secure storage**  
   - Store prompts encrypted at rest (e.g., AES‑256) with per‑user key material derived from a KMS.  
   - Use a separate logical database/table per tenant or enforce row‑level security.  
3. **Compute isolation**  
   - Run inference in isolated containers/VMs, each bound to one user’s context.  
   - If using GPU sharing, employ memory partitioning (e.g., NVIDIA Multi‑Process Service) so no shared buffers contain raw prompts.  
4. **Output handling**  
   - Directly stream the model output back to the originating session; never write it to a shared cache or log that other users can read.  
5. **Audit & monitoring**  
   - Log only metadata (timestamp, user ID, operation) in an append‑only store.  
   - Store raw prompts separately and purge them after a short TTL.

**4️⃣ Common traps**

- *Shared memory*: using global buffers or shared caches that copy prompts.  
- *Logging middleware*: many frameworks auto‑log request bodies; disable or scrub.  
- *Key leakage*: storing per‑user keys in the same vault accessible to all tenants.  
- *Container breakout*: misconfiguring namespaces can allow a user process to read sibling containers.

**5️⃣ Sanity‑check & verbalizing**

- **Ask “Can User A see User B’s prompt?”** → No, because data is encrypted per‑user and compute isolated.  
- **Check logs**: only contain non‑sensitive metadata.  
- **Review code paths** for any implicit copies of the prompt to shared structures.

Explain the design as a pipeline: *Ingest → Encrypt → Isolate → Compute → Stream → Audit*. This structure guarantees that each user’s prompt stays within their own sandbox, preventing leakage to others.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
