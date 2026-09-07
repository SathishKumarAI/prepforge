---
qid: ing_9b5c791814__faang__local
question: Design a secure architecture for an agent that reads untrusted web/email
  content AND has access to a user's private data. How do you defeat prompt injection
  by construction?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 489
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:45:28-05:00'
sources: []
---

**Clarify**  
We need an AI “agent” that (1) consumes untrusted web/email text and (2) can query the user’s private data (e.g., calendar, contacts). The goal is to eliminate prompt‑injection attacks—where malicious input coerces the model into disclosing or acting on private data. Assume we control the LLM runtime but not the provider’s underlying weights.

**Approach**  
1. **Input sanitization & intent classification** – pre‑process user content with a lightweight NLU that flags potential injection patterns.  
2. **Zero‑knowledge prompt construction** – embed all private facts in *encrypted* key/value pairs and never reveal them directly to the LLM.  
3. **Query abstraction layer** – convert any LLM output that requests data into an API call that returns only the explicitly requested field, validated against a whitelist.  
4. **Output sandboxing** – run model responses through a second pass that strips or masks private identifiers before delivering them back to the user.

**Depth**  
- Use a deterministic prompt template: “You are a helper. Only use data from keys X, Y…”. The keys are encrypted with a symmetric key derived from the user’s session and never exposed.  
- The LLM receives only the ciphertext; it cannot decrypt or infer content, so even if it tries to manipulate the output, it can’t produce real private data.  
- All data requests are funneled through an API that checks the request against a strict schema (e.g., `GET /calendar?date=YYYY-MM-DD`). Complexity: O(1) per lookup; overall latency dominated by LLM inference.

**Edge Cases**  
- Malicious prompts that try to infer ciphertext patterns → mitigated by random IVs.  
- User requests for “all data” → blocked by the whitelist.  
- API abuse (rate limits) → enforce token bucket per user.

**Optimize & Communicate**  
To improve UX, cache recent decrypted results locally and re‑encrypt before sending back to the LLM. I’d explain this pipeline to interviewers as a *multi‑layer defense*—sanitization, encryption, abstraction, sandboxing—each layer adding a small constant overhead but eliminating the attack surface entirely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
