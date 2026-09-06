---
qid: ing_679787f960__fp__local
question: 'Explain: F7: Operator fatigue on the medium-risk queue'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 388
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:45:24-05:00'
sources: []
---

**Why “operator fatigue” pops up in a *medium‑risk* queue?**

Start with the **information bottleneck** that an operator faces: each incoming case is a noisy signal (data, images, text) that must be mapped to a decision (e.g., “treat now”, “monitor”). In a medium‑risk stream the mapping is neither trivial nor trivialised—there’s enough uncertainty to require judgment but not so much that automation can take over. The operator therefore sits at a *critical point* of cognitive load: each case demands a non‑trivial inference, yet the volume is high enough that they cannot afford to “think hard” on every one.

Mathematically, the expected effort per decision \(E[\tau]\) scales with the Shannon entropy of the posterior distribution over outcomes. In low‑risk queues \(\tau\) shrinks because the prior dominates; in high‑risk queues it is capped by safety protocols that force thorough review. Medium risk sits where \(\partial E[\tau]/\partial r > 0\) (r = case rate) but still below the safety threshold, so \(E[\tau]\) rises steeply with load. The operator’s working memory and attention span are finite; once the cumulative effort exceeds a personal capacity \(C\), performance degrades—this is *fatigue*.

**Non‑obvious insight:** Fatigue here is not merely “more cases” but **the shape of the entropy curve**. If you flatten the curve (e.g., by giving clearer decision aids or better pre‑processing), the same case volume requires less effort, postponing fatigue. Thus, in medium‑risk queues, *information quality* is the lever that controls operator endurance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
