---
qid: ing_f52483acd9__faang__local
question: How do you design good tool/function definitions for an LLM? What makes
  tool calling fail?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 508
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:09:54-05:00'
sources: []
---

**Clarify**  
We’re asked how to craft *tool* or *function* definitions that an LLM can reliably invoke, and what typical failure modes look like. I’ll assume the tools are HTTP APIs or local functions exposed via a schema (e.g., OpenAPI, JSON‑RPC) and that the LLM is a large language model with a “tool‑calling” interface.

**Approach**  
1. Define clear *intent* and *payload* contracts.  
2. Validate input types/constraints.  
3. Provide rich examples in the schema.  
4. Monitor invocation logs to surface mis‑uses.  
5. Iterate on the definition based on failure patterns.

**Depth**  
- **Schema design:** Use JSON Schema or OpenAPI v3 with explicit `type`, `enum`, and `pattern` constraints; include default values where sensible.  
- **Documentation strings:** Embed concise, usage‑oriented docs in the `description` fields so the LLM can surface them during prompt generation.  
- **Versioning & deprecation tags** help prevent callers from using stale signatures.  
- **Error handling contract:** Define a standard error response shape (e.g., `{error: {code, message}}`) so the model can parse and recover gracefully.

Failures often stem from *ambiguous* or *over‑permissive* definitions—missing constraints let the LLM generate malformed payloads; missing docs cause it to guess intent. Another culprit is *stateful* tools that expect prior context but the LLM treats each call as isolated, leading to repeated or contradictory requests.

**Edge cases**  
- Empty or null arguments where a value is required.  
- Nested objects with optional sub‑fields causing partial payloads.  
- Circular references in schema.  
Test by fuzzing inputs against the schema and checking that the LLM’s generated JSON always validates.

**Optimize & communicate**  
Iteratively tighten schemas, add unit tests for the tool interface, and expose a “dry‑run” mode where calls are logged but not executed. When explaining to interviewers, I’d narrate: *“I start by formalizing the contract so both machine and human understand it, then I surface failures through validation logs, and finally I refine until the model’s output consistently satisfies the schema.”* This demonstrates structured thinking, clear communication, and depth in API‑LLM integration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
