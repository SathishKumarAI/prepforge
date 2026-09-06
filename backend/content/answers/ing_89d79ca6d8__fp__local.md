---
qid: ing_89d79ca6d8__fp__local
question: 'Explain: When is an LLM the wrong tool? Give me real examples where you''d
  push back on a PM.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 348
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:58:07-05:00'
sources: []
---

When the *goal* of a task is to **ensure fidelity to a single source**—whether that’s an official policy, a proprietary dataset, or a narrowly defined legal standard—an LLM becomes a liability rather than a helper.  
Why? A language model learns by interpolating patterns from its training corpus; it has no mechanism for *verifying* facts against a live reference. Thus, in situations where **certainty and traceability** are paramount, the probabilistic nature of an LLM can inject hallucinations or outdated information.

### Real‑world pushbacks

| Context | Why the PM’s request fails |
|---------|---------------------------|
| **Regulatory compliance dashboard** | The dashboard must pull *exact* clauses from a current law text. An LLM would rephrase them, risking legal misinterpretation. |
| **Medical diagnosis assistant** | Clinical guidelines are fixed; an LLM might mix evidence levels or cite obsolete trials, endangering patient safety. |
| **Enterprise data catalog** | The catalog must list exact schema names and owners. A generative model could invent plausible but non‑existent tables. |

### Non‑obvious insight

The core issue is *information provenance*. An LLM’s output carries no pointer to its source; it cannot be audited like a deterministic lookup. Whenever auditability or regulatory traceability is required, the tool that preserves explicit provenance—databases, static code, or rule engines—is not just preferable but mandatory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
