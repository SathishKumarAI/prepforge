---
qid: ing_e3642434f2__faang__local
question: 'Explain: Design a Copilot feature that answers questions over a user''s
  work email, documents, and meetings - without ever leaking content the user can''t
  access.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 412
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:27:49-05:00'
sources: []
---

**Clarify**  
You need an AI “copilot” that can answer queries about a user’s *work* emails, documents, and meeting transcripts, but must never expose data the user isn’t authorized to see. Key assumptions: (1) we have role‑based access controls; (2) data resides in separate silos (mailbox, document store, calendar); (3) the model runs on encrypted or tokenized content.

**Approach**  
1. *Access‑aware ingestion*: When a query arrives, fetch only the items the user’s permissions allow.  
2. *Contextual embedding*: Convert each permitted item into embeddings and build an in‑memory index per session.  
3. *Prompt‑shaping with redaction*: Feed the model a prompt that includes only the allowed text plus a “do not reveal anything outside this context” instruction.  
4. *Local inference*: Run inference on a secure enclave or a dedicated server that never persists raw data.  

**Depth**  
- Use fine‑tuned LLMs with prompt injection mitigations (e.g., safe completion wrappers).  
- Complexity: O(n) to build the index per query, constant‑time retrieval for answers; memory bounded by user’s accessible data.  
- Trade‑off: Real‑time latency vs. caching embeddings for frequent users.

**Edge Cases**  
- If a user’s permissions change mid‑session, re‑index and purge old context.  
- Queries that implicitly reference restricted content (e.g., “who sent the email about X?”) should trigger an “insufficient access” response.  

**Optimize & Communicate**  
Explain to interviewers that we balance privacy with usefulness by enforcing strict data gates at ingestion, using secure inference environments, and providing explicit denial messages when a query crosses permission boundaries. This guarantees no leakage while delivering context‑aware answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
