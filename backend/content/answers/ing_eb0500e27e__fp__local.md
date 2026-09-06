---
qid: ing_eb0500e27e__fp__local
question: The system prompt says one thing, the user asks for another, and a retrieved
  document says a third. How do you design conflict resolution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 458
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:18:34-05:00'
sources: []
---

**Conflict resolution in a multi‑source instruction system**

1. **Fundamental problem** – The agent must decide which signal most faithfully serves the *intention* of the user while respecting policy constraints and factual correctness.  
2. **Why it works that way** – Treat each source (system prompt, user request, retrieved doc) as a probability distribution over “valid next tokens”. The goal is to maximize *expected utility*:  

\[
U = \sum_{t} P_{\text{source}}(t)\,\bigl[\lambda\,\mathbf{1}_{\text{policy‑safe}}(t)+\mu\,\mathbf{1}_{\text{factually‑correct}}(t)-\nu\,\mathbf{1}_{\text{hallucination}}(t)\bigr]
\]

where λ, μ, ν weight safety, truth, and hallucination penalties.  
3. **Optimization principle** – The optimal policy is the *Bayesian mixture* that weights each source by its credibility score (derived from calibration, recency, provenance). This yields a single soft‑max distribution that naturally balances conflicting signals.  
4. **Non‑obvious insight** – Instead of hard‑coding precedence rules (“system > user > doc”), allow *contextual gating*: if the retrieved document’s source is highly trustworthy and the user request is ambiguous, let the doc dominate; if policy constraints are violated by any source, down‑weight all. This dynamic gating prevents “policy leakage” while preserving flexibility.

**Implementation sketch**

```python
cred = {
    'system': 0.4,
    'user'  : 0.3,
    'doc'   : 0.3
}
weights = normalize(cred * (1 - policy_penalty) * fact_correction)
final_logits = sum(weights[src] * logits[src] for src in weights)
```

The agent thus resolves conflicts by a principled, data‑driven optimization rather than ad‑hoc hierarchies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
