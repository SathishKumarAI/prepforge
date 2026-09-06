---
qid: ing_6c82d2e1b7__fp__local
question: 'Explain: Particle sizes for mask filtration — fast.ai\u2014Making neural
  nets uncool again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 469
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:54:57-05:00'
sources: []
---

**Why particle size matters for mask filters**

A filter’s job is to stop airborne particles long enough that they can be captured or deflected.  
The fundamental constraint is the *size exclusion* principle: a pore of diameter \(d_p\) will block any particle whose hydrodynamic radius exceeds \(\tfrac{1}{2}d_p\).  However, real aerosols are not rigid spheres; they carry charge, deform, and interact with airflow.  

For most respiratory viruses (≈ 100–200 nm), the *most penetrating particle size* (MPPS) is ≈ 0.3 µm.  This counter‑intuitive value emerges from a balance of three mechanisms:

| Mechanism | Dominant for | Why it matters |
|-----------|--------------|----------------|
| **Diffusion** | < 0.1 µm | Brownian motion gives small particles random kicks that push them into pores. |
| **Interception & impaction** | > 0.5 µm | Larger particles follow streamlines and collide with fibers. |
| **Electrostatic attraction** | 0.1–0.5 µm | Charged fibers can attract neutral or oppositely charged particles, but the effect weakens as particle size grows. |

At ≈ 0.3 µm, diffusion is still strong enough to keep particles mobile, yet interception has not yet become efficient; electrostatic forces are at their peak.  Thus a filter that works well for sub‑micron dust will be *worst* at this size.

**Non‑obvious insight**

Manufacturers often tune fiber diameter and charge density together.  If you reduce pore size to improve MPPS, you also increase pressure drop—an optimization trade‑off governed by Darcy’s law.  The key is to use a **multi‑layered** design: a fine outer layer for diffusion + electrostatics, a thicker middle layer for mechanical capture, and a soft inner layer for comfort.  This layered approach lets each mechanism dominate in its optimal size range, achieving overall efficiency without prohibitive airflow resistance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
