---
qid: ing_0cade195d9__think__local
question: 'Q79: How do you approach prompt injection defense in a multi-tenant agentic
  system where the agent reads external web pages or documents?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 484
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:33:03-05:00'
sources: []
---

**1. Clarify scope & constraints**  
   - *Assumptions*: The agent can fetch arbitrary URLs; multiple users share the same model instance; prompts may be user‑supplied or derived from fetched content.  
   - *Questions to ask*: Are we defending against malicious users injecting code into prompt text? Do we need to preserve useful content from external sites while filtering out harmful instructions?

**2. Adopt a layered mental model**  
   - **Input sanitization** → remove or escape disallowed tokens.  
   - **Contextual moderation** → check the fetched content before it enters the prompt.  
   - **Prompt hardening** → enforce a strict prompt template that ignores user‑supplied fragments.  
   - **Runtime guardrails** → monitor the agent’s output for policy violations.

**3. Step‑by‑step reasoning**  
   1. Parse the fetched page into clean text, stripping scripts/HTML tags.  
   2. Run a lightweight content filter (e.g., keyword blacklist or ML classifier) to flag suspicious instructions.  
   3. If flagged, either discard the section or replace it with a neutral placeholder.  
   4. Assemble the final prompt using a fixed template that only injects sanitized user intent and safe context snippets.  
   5. Before sending to the LLM, run a second‑pass policy check on the full prompt string.

**4. Common traps to avoid**  
   - *Over‑aggressive filtering*: removing useful data (e.g., code examples) that could be benign.  
   - *Blind trust in source domains*: assuming “trusted” URLs are always safe.  
   - *Single‑point failure*: relying on one filter; attackers can bypass it by crafting new patterns.

**5. Sanity‑check & communicate**  
   - Test with known injection vectors (e.g., `"; rm -rf /"`) and confirm they’re neutralized.  
   - Log every filtering decision for auditability.  
   - Explain to stakeholders that the defense is a *combination* of sanitization, moderation, template hardening, and runtime monitoring—no single step guarantees safety, but together they form robust protection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
