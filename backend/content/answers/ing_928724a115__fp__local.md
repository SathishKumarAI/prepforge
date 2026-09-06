---
qid: ing_928724a115__fp__local
question: 'Explain: 🔢 Numbers and formulas to know cold — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 587
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:16:59-05:00'
sources: []
---

## ❄️ Numbers & Formulas that Tell You if It’s “Cold” (or a Virus)

| Symbol | Meaning | Why it matters |
|--------|---------|----------------|
| **\(R_0\)** | Basic reproduction number | If \(R_0>1\), each infected person spreads to more than one new case; the outbreak grows. |
| **\(β\)** | Transmission rate per contact | Derived from *contact frequency × probability of transmission*. It connects social behaviour to spread. |
| **\(γ\)** | Recovery (or removal) rate | Inverse of the average infectious period \(T_I\): \(\gamma = 1/T_I\). Faster recovery shortens the epidemic’s pulse. |
| **\(S(t), I(t), R(t)\)** | Susceptible, Infectious, Recovered compartments | The classic SIR differential equations: \(\dot{I}=βSI/N-γI\). They encode how the pool of susceptibles depletes as infections rise. |
| **\(τ = 1/(βN - γ)\)** | Characteristic time for exponential growth | When \(βN>γ\), the epidemic’s early phase grows like \(e^{t/τ}\); this gives a quick “doubling time” estimate. |

### Derivation in one line
From mass‑action kinetics: \(\dot{I}=βSI/N-γI\).  
At the start, \(S≈N\), so \(\dot{I}=(βN-γ)I\).  
Thus \(I(t)=I(0)e^{t/τ}\) with \(τ=1/(βN-γ)\).  

### Non‑obvious insight
The *threshold* \(R_0 = βN/γ = 1\) is not just a number; it’s the fixed point of a **nonlinear map** that balances infection pressure against removal. If you can reduce either contact rate or infectious period by half, \(R_0\) drops below one—turning an epidemic into a self‑limiting outbreak. This geometric view explains why partial measures (mask‑wearing, isolation) can be more effective than full lockdowns: they shift the trajectory across the critical manifold.

> **Cheat‑sheet tip**: To decide if “cold” is merely seasonal flu or a new pathogen, calculate \(R_0\). If it’s significantly above 1 and the doubling time is < 3 days, you’re dealing with something more contagious than ordinary colds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
