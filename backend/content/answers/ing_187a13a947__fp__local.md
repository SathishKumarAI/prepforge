---
qid: ing_187a13a947__fp__local
question: How should tool results be formatted before they go back into the model's
  context?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 463
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:57:44-05:00'
sources: []
---

**Why format matters**

When a language model consumes a tool’s output, it treats that text as *information*—a signal to be integrated with its internal representations. The core problem is **confusion of semantic layers**: raw JSON, logs, or unstructured prose all carry the same tokens but different *meaning structures*. If the model cannot reliably map those tokens back to a coherent conceptual state, it will mis‑interpret or ignore useful data.

**Principle of alignment**

Let \(S\) be the set of possible semantic states (e.g., “numeric result”, “boolean flag”, “list of items”). The tool must emit an output \(o \in S\) that can be *unambiguously decoded* into a unique state. Formally, we require a deterministic decoding function \(d(o)\) such that:

\[
\forall o_1,o_2 \in S,\; d(o_1)=d(o_2) \implies o_1=o_2
\]

In other words, the output must be **injective** with respect to the semantic state. This guarantees that every distinct result has a unique textual representation, eliminating accidental collisions (e.g., “yes” could mean *approval* or *existence of an item*).

**Practical schema**

1. **Structured envelope** – always wrap the value in a minimal JSON object: `{"result": …}`.
2. **Explicit type tag** – include `"type":"number"` or `"type":"list"`.
3. **Canonical form** – normalize numbers (no thousand separators), dates (ISO‑8601), and booleans (`true/false`).
4. **Human‑readable fallback** – a short sentence that reproduces the JSON for debugging.

This design satisfies the injectivity requirement while keeping the text parsable by both humans and the model’s tokenizer. The non‑obvious insight: *the token sequence itself is insufficient; you must encode the type metadata so the decoder can reconstruct the state without guessing*, turning a free‑form output into a reliable, low‑entropy signal for the next inference step.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
