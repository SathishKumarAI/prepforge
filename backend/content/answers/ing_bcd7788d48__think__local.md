---
qid: ing_bcd7788d48__think__local
question: 'Explain: Single-Sign On (SSO) — Generative AI for Clinical Conversations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 484
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:26:15-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- *What is SSO?* – A user logs in once to access multiple services.
- *Generative AI role?* – The system will generate responses or actions during a clinical conversation (e.g., triage, patient education).
- Assume we’re designing an integrated platform for clinicians and patients; privacy & compliance (HIPAA) matter.

**2️⃣ Adopt a mental model**

Use the “Technology–Process–People” framework:
- **Tech**: SSO protocols (OAuth, OpenID Connect), AI models (LLMs), secure APIs.
- **Process**: User authentication → token exchange → context‑aware prompt → AI output → action/feedback loop.
- **People**: Clinician workflow, patient experience, compliance officers.

**3️⃣ Step‑by‑step reasoning**

1. **SSO flow**  
   - Patient logs into portal → receives ID & access tokens.  
   - Tokens are passed to the clinical chat service.  
2. **Context capture**  
   - Token scopes limit AI’s view (e.g., only recent visits).  
   - Retrieve EMR snippets, vitals, prior notes.  
3. **Prompt engineering**  
   - Combine user intent + patient data → structured prompt for LLM.  
4. **AI response**  
   - Generate natural‑language reply or action plan.  
5. **Audit & compliance**  
   - Log token usage, AI decision rationale, clinician overrides.  

**4️⃣ Common traps to avoid**

- *Mixing authentication with data access*: SSO tokens must not grant raw EMR read unless explicitly scoped.  
- *Blindly trusting AI outputs*: Always flag uncertainty and allow clinician review.  
- *Neglecting audit trails*: HIPAA requires traceability; omit logs and you risk fines.  

**5️⃣ Sanity‑check & verbalize**

- Verify that the token lifecycle (issue → refresh → revoke) aligns with data access limits.  
- Ask: “Does this flow protect patient privacy while giving clinicians real‑time AI assistance?”  
- Communicate: “We’ll use OAuth2 for SSO, pass a scoped access token to our LLM service, and log every interaction so we can audit compliance.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
