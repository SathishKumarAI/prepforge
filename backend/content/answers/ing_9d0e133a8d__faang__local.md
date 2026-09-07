---
qid: ing_9d0e133a8d__faang__local
question: Your service consumes structured JSON from an LLM. How do you make that
  reliable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 496
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:49:15-05:00'
sources: []
---

**Clarify**  
We’re ingesting a *structured* JSON payload produced by an LLM (e.g., ChatGPT). The goal is to guarantee the payload can be parsed, validated, and safely used downstream. Key assumptions:  
1. The schema is known beforehand (fields, types, constraints).  
2. We control the request/response boundary but not the LLM’s internals.  
3. Failure modes include malformed JSON, missing fields, type mismatches, or semantic errors.

**Approach**  
1. **Schema‑driven validation** – define a strict JSON Schema (or protobuf/gRPC contract).  
2. **Pre‑flight filtering** – use a lightweight parser to catch syntax errors early.  
3. **Post‑validation logic** – after schema compliance, run business‑rule checks (e.g., value ranges, cross‑field consistency).  
4. **Graceful degradation** – if validation fails, request a retry with clearer prompts or fallback defaults.

**Depth**  
- Parse the raw string into an AST; if parsing throws → reject immediately.  
- Use a JSON Schema validator (`ajv`, `jsonschema`) to enforce types, required fields, and patterns. Complexity: O(n) where *n* is payload size.  
- Add custom validators for domain logic (e.g., date order).  
- Log all failures with context for auditability.  
- Optionally, use a “prompt‑engineer” layer that rewrites the LLM prompt to include explicit JSON formatting instructions and examples.

**Edge Cases**  
- Empty payloads or `null` values → reject.  
- Overlong strings causing buffer overflows → enforce max length.  
- Nested objects with circular references (unlikely in JSON but possible via malformed arrays) → detect depth > limit.  
- Non‑UTF8 characters → sanitize before parsing.

**Optimize & Communicate**  
To improve reliability, embed the schema into the LLM prompt so the model knows the exact shape it must output; this reduces post‑validation load. If latency is critical, cache common valid schemas and use a two‑stage validator (quick regex precheck + full JSON Schema). I’d explain this pipeline to stakeholders: “We first confirm syntax, then enforce structure, finally business rules—ensuring every downstream service receives trustworthy data.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
