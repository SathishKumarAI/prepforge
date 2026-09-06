---
qid: ing_677fcdc9c0__fp__local
question: 'Explain: Cloth masks can protect the wearer — fast.ai\u2014Making neural
  nets uncool again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 382
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:45:08-05:00'
sources: []
---

**Why a cloth mask can shield the wearer**

At its core, protection is about *reducing the flux of infectious droplets* that reach the respiratory tract.  
In kinetic theory, the rate at which particles strike an area \(A\) equals  

\[
J = n\,v_{\text{avg}}\frac{\Omega}{4},
\]

where \(n\) is particle concentration, \(v_{\text{avg}}\) their mean speed, and \(\Omega\) the solid‑angle subtended by the mask. A mask therefore acts as a filter that removes a fraction \(1-\eta\) of these particles, so the transmitted flux becomes \(J(1-\eta)\).  

The filtration efficiency \(\eta\) depends on two intertwined mechanisms:

1. **Mechanical interception** – larger droplets collide with fibers and are trapped by inertia.  
2. **Diffusive capture** – sub‑micron aerosols undergo Brownian motion; the probability of a collision rises as fiber spacing shrinks.

A multi‑layer cloth mask, especially one with an inner hydrophilic layer (cotton) and an outer hydrophobic layer (polyester), creates a *gradient* of pore sizes. This gradient maximizes \(\eta\) across the entire size spectrum: large droplets are stopped by the coarse outer layer, while fine aerosols diffuse into the finer inner weave.

**Non‑obvious insight:**  
The mask’s **hydrophilicity matters for wearer comfort more than filtration**. A hydrophilic inner layer absorbs exhaled moisture, keeping the fabric soft and preventing droplet rebound—an effect often overlooked when evaluating mask efficacy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
