---
qid: ing_934451acd3__faang__local
question: Design an LLM agent that files and updates work orders in a customer's ERP
  - real writes to a production system. How do you make that safe?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 456
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:26:46-05:00'
sources: []
---

**Clarify**  
We’re building an LLM‑driven agent that submits and edits work‑order records in a live ERP. The key assumptions: (1) the ERP exposes REST/GraphQL APIs with proper auth; (2) writes are transactional; (3) we have audit logs and rollback hooks; (4) the user wants real‑time feedback but no accidental data loss.

**Approach**  
1. *Sandboxing*: route all LLM outputs through a staging layer that validates intent before hitting production.  
2. *Intent classification*: fine‑tune a classifier to detect “create”, “update”, or “cancel” actions and required fields.  
3. *Dry‑run simulation*: use the ERP’s sandbox API (or a replicated DB) to apply changes, capture diffs, and surface them back to the user for confirmation.  
4. *Transactional guardrails*: wrap each write in a transaction; on failure roll back and notify.  
5. *Audit & versioning*: log every change with LLM prompt, response, timestamp, and user ID.

**Depth**  
The agent’s core loop:  
- Receive user request → LLM generates JSON payload.  
- Classifier verifies schema compliance.  
- Dry‑run via sandbox API; diff presented.  
- User confirms → production API call inside a DB transaction.  
Complexity: O(1) per write, but the dry‑run adds an extra network roundtrip (~200 ms). Trade‑off: safety vs latency.

**Edge Cases**  
- *Ambiguous prompts*: classifier flags uncertainty; agent asks clarifying questions.  
- *Concurrent edits*: implement optimistic locking (ETag/rowversion).  
- *API rate limits*: queue writes and retry with exponential backoff.

**Optimize & Communicate**  
Future improvements: use a state‑ful LLM session to remember context, reduce repeated prompts. In interviews, emphasize the multi‑layer safety net—sandboxing, classification, transactionality—and how each layer lowers risk while keeping UX smooth. This structured design showcases problem understanding, engineering rigor, and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
