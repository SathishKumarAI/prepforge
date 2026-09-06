---
qid: ing_9d0e133a8d__fp__local
question: Your service consumes structured JSON from an LLM. How do you make that
  reliable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 504
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:39:17-05:00'
sources: []
---

**Why the output must be “self‑consistent”**

An LLM is a stochastic text generator; it does not *know* that the JSON it emits satisfies any schema. If we treat every token as a deterministic data point, errors propagate: a missing field, an extra comma, or a string where a number should be will break downstream pipelines. The fundamental problem is *information loss*: the LLM’s internal representation of the structure is hidden; we only see its probabilistic surface form.

**Derive a correctness condition**

Let \(S\) be the set of all valid JSON strings under our schema and let \(p_{\theta}\) be the LLM’s distribution. We want \(\Pr_{x\sim p_{\theta}}[x\in S] \approx 1\). Since we cannot change \(p_{\theta}\), we must *filter* samples by a test that approximates membership in \(S\).

**Filtering via semantic parsing + type‑checking**

1. **Parse the raw string into an AST** (e.g., with a tolerant JSON parser).
2. **Infer types for each node** using the schema’s constraints.
3. **Validate against the schema**: check required keys, value ranges, mutually exclusive fields.

If any step fails, discard and re‑prompt. This is essentially *projection* of the LLM output onto the manifold defined by \(S\). The projection is a deterministic map that guarantees safety regardless of the underlying stochasticity.

**Non‑obvious insight**

The most subtle failure mode comes from *implicit context*. A model may produce a field with the correct type but semantically inconsistent values (e.g., an “age” of 200). Pure syntactic validation misses this. Incorporate *semantic scoring*: compute a likelihood that the value fits the domain distribution (using a lightweight statistical model or a secondary LLM prompt) before accepting.

**Putting it together**

```text
while true:
    raw = llm.generate()
    try:
        obj = tolerant_json_parse(raw)
        if validate_schema(obj) and semantic_score(obj) > τ:
            return obj
    except ParseError:
        continue  # re‑prompt
```

This pipeline guarantees that every output lies on the valid manifold, while still allowing the LLM to explore creative structures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
