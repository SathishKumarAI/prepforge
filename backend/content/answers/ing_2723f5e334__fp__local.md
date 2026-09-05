---
qid: ing_2723f5e334__fp__local
question: What should you log for every LLM call in production, and what are the pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 502
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:28:44-05:00'
sources: []
---

### Why we must log every LLM call

An LLM is a *black‑box* probabilistic model: given input **x**, it samples an output **y** from a distribution \(P_\theta(y|x)\). In production, the **objective** is to keep that distribution aligned with business goals (accuracy, safety, fairness) while guaranteeing observability for debugging and compliance.  
To achieve this we must record enough data to *reconstruct* the inference trajectory:

1. **Input prompt** – the exact token sequence; without it you cannot reproduce or audit the reasoning.  
2. **Model identifier & version** – the architecture + checkpoint hash; different weights can produce vastly different outputs.  
3. **Token‑level log** – every generated token, its probability, and the cumulative log‑probability. This is the *internal state* of the sampling process and lets you detect anomalies (e.g., sudden probability drops).  
4. **Response metadata** – total tokens, latency, GPU/CPU usage, and any post‑processing flags. These metrics expose performance regressions or resource leaks.  
5. **Safety & bias tags** – automatic classifiers that flag disallowed content or demographic bias; required for regulatory audits.

### Pitfalls

- **Data volume vs. utility**: Logging every token inflates storage exponentially; compressing via delta‑encoding or sampling only high‑entropy tokens preserves insight while saving space.  
- **Privacy leakage**: Prompts often contain PII. Mask or hash sensitive fields before persisting, but keep a reversible mapping for internal debugging if needed.  
- **Non‑determinism**: Random seeds must be recorded; otherwise identical inputs can yield divergent outputs, making reproducibility impossible.  
- **Replay attacks**: Store logs in an append‑only, signed format to prevent tampering and ensure integrity.

### Non‑obvious insight

*Token probability traces are a cheap proxy for the model’s internal attention distribution.* A sudden spike in token entropy often signals that the model is “confused” about context—precisely when you should trigger fallback logic or human review. This subtle cue can preempt catastrophic failures without needing full attention maps, which are expensive to compute at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
