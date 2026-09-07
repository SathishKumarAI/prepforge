---
qid: ing_187a13a947__faang__local
question: How should tool results be formatted before they go back into the model's
  context?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 440
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:41:29-05:00'
sources: []
---

**Clarify**  
We’re asked how a downstream AI system (e.g., LLM) should format the output of an external “tool” (API, database query, calculator) before re‑injecting it into the model’s prompt/context.  
Assumptions:  
- The tool returns JSON or plain text.  
- The model expects deterministic input for next turn.  
- Security and privacy constraints apply.

**Approach**  
1. **Normalize** the raw output to a canonical schema (e.g., `{ “status”: “ok”, “data”: … }`).  
2. **Validate** against a JSON‑schema or type checker; reject malformed results.  
3. **Sanitize**: escape control characters, strip sensitive fields.  
4. **Serialize** into a minimal, well‑documented string (e.g., `JSON.stringify` with sorted keys).  
5. **Annotate** with provenance tags (`tool: <name>`, `timestamp`).  

**Depth**  
- Use strict schema validation (Ajv, pydantic) → O(n) time over payload size.  
- Keep the representation compact; avoid verbose logs that bloat context length.  
- For text results, wrap in triple backticks and label (`Result from Weather API:`).  
- Include a checksum or hash if integrity is critical.

**Edge Cases**  
- Empty or null responses → inject `{“status”: “error”, “reason”: "no data"}`.  
- Unexpected types (e.g., binary) → refuse and log.  
- Very large payloads → stream or truncate with an indicator (`... [truncated]`).

**Optimize & Communicate**  
Explain that a deterministic, validated JSON string keeps the model’s inference stable, reduces hallucination risk, and facilitates auditability. Highlight trade‑offs: stricter validation increases latency but improves safety; minimal formatting saves context tokens but may be harder to debug. This structured pipeline mirrors production best practices in FAANG teams, balancing correctness, performance, and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
