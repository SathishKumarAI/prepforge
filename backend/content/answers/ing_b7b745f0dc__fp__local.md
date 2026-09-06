---
qid: ing_b7b745f0dc__fp__local
question: 'Explain: Unacceptable Risk: Prohibited AI Practices'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 382
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:34:49-05:00'
sources: []
---

**Unacceptable risk: Prohibited AI practices**

The *fundamental problem* is that an algorithm can be used as a tool, but its outputs may cause **irreversible harm** when the system’s behaviour is opaque or uncontrollable.  
From the principle of *causal sufficiency*, any intervention must guarantee that all downstream effects are either bounded or fully observable. In practice this translates to: if we cannot predict or audit the causal chain from input to real‑world action, the risk is unacceptable.

Hence the prohibition list focuses on three core violations:

| Practice | Why it fails causal sufficiency |
|----------|---------------------------------|
| **Autonomous weapons** | No human oversight → uncontrolled lethal decisions. |
| **Algorithmic discrimination at scale** | Bias propagates through high‑volume systems, hard to detect post‑deployment. |
| **Privacy‑invasive surveillance** | Aggregated data creates “big‑picture” profiles that can be weaponised. |

Each is a *non‑observable* risk: the system’s internal state cannot be fully inspected in real time, and its outputs influence many actors simultaneously.

A non‑obvious insight: **the risk grows sublinearly with data volume**. Even if a model behaves benignly on 10 % of cases, scaling to billions can magnify rare failure modes exponentially—much like a small fire igniting a forest when humidity drops. Thus prohibitions must guard against *latent* dangers that only manifest under scale.

In short, prohibited practices are those where the causal chain from input to effect is too opaque or uncontrollable to satisfy the safety guarantee that every outcome can be bounded and audited.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
