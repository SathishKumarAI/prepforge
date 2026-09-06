---
qid: ing_6ebffccacd__think__local
question: Anyone can add documents to your corpus. How do you stop an attacker planting
  a document that hijacks the assistant?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 461
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:19:36-05:00'
sources: []
---

**1. Clarify the threat and scope**  
   - *What is “adding a document” exactly?* Is it uploading files, submitting text via an API, or editing a shared knowledge base?  
   - *Who has access?* Identify all user roles (admin, editor, viewer) and their permissions.  
   - *Assumptions:* The system uses a central corpus that the model reads from; no sandboxing per‑user.

**2. Adopt a security framework**  
   - Treat it like **file‑system integrity**: use *authentication*, *authorization*, *input validation*, and *audit logging*.  
   - Apply the *principle of least privilege* to limit who can write to the corpus.

**3. Step‑by‑step reasoning toward mitigation**  
   1. Require **strong authentication** (OAuth, MFA) before any document operation.  
   2. Enforce **role‑based access control**: only admins or vetted editors may modify the corpus.  
   3. Validate uploads: scan for disallowed content (e.g., code that could alter model behavior).  
   4. Store documents in a *content‑addressed* store; detect duplicates and prevent overwriting critical files.  
   5. Maintain an **audit trail**—log who added what, when, and from where.  
   6. Periodically run integrity checks (hash sums) against the baseline corpus.

**4. Common traps to avoid**  
   - Assuming “user uploads” are harmless; attackers can craft malicious payloads.  
   - Relying solely on client‑side validation—always validate server‑side.  
   - Over‑engineering a full sandbox when simple RBAC + hashing suffices for many deployments.

**5. Sanity‑check & communicate**  
   - Run a tabletop test: “What if an attacker uploads X?” See if the controls block it.  
   - Explain to stakeholders that protection is layered: authentication → authorization → validation → audit.  
   - Emphasize that no single measure guarantees safety; continuous monitoring and updates are essential.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
