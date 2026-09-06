---
qid: ing_e3642434f2__think__local
question: 'Explain: Design a Copilot feature that answers questions over a user''s
  work email, documents, and meetings - without ever leaking content the user can''t
  access.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 489
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:00:38-05:00'
sources: []
---

**1️⃣ Clarify the scope & constraints**  
- *What* is “answering questions”?  Textual QA vs. summarization?  
- *Where* does data live?  Email, documents, meeting transcripts—each with its own access control.  
- *Privacy rule*: Never reveal content a user isn’t authorized to see. State this as an invariant.

**2️⃣ Adopt a layered security model**  
- **Local pre‑filtering**: Run the query against metadata (subject lines, tags) locally to decide which documents are eligible.  
- **Token‑based access control**: Attach fine‑grained tokens to each document/meeting that encode the user’s permissions.  
- **Zero‑knowledge inference engine**: The model never receives raw content; it only sees tokenized placeholders and a “context score” indicating relevance.

**3️⃣ Reason step‑by‑step through the workflow**  
1. User submits query → parse intent & entities.  
2. System scans local indices to list candidate resources (emails, docs, meetings) that the user can access.  
3. For each candidate, generate a *content mask* (e.g., `[EMAIL_SNIPPET_1]`) and a relevance score.  
4. Feed the masked prompt + scores into the LLM; it produces an answer using placeholders.  
5. Post‑process: Replace placeholders with actual snippets only if the user has permission—otherwise leave them abstracted or provide a “cannot access” note.

**4️⃣ Avoid common pitfalls**  
- *Leakage via embeddings*: Don’t store raw vectors that could be decoded; hash or encrypt them.  
- *Model hallucination*: The LLM might invent details; enforce strict placeholder usage and verify against the source before revealing.  
- *Performance bottlenecks*: Pre‑compute masks and relevance scores offline to keep real‑time latency low.

**5️⃣ Sanity‑check & communicate**  
- Run unit tests that simulate a user lacking access: ensure no content appears in the answer.  
- Log every decision point (which resources were considered, which tokens used) for auditability.  
- Explain to the user: “I’m only using summaries you can see; if I mention something you can’t view, it’s a placeholder.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
