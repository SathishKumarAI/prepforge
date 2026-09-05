---
qid: ing_2d0956ed10__fp__local
question: 'Explain: a garage you''re going to be end — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 396
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:40:06-05:00'
sources: []
---

**Designing a Parking Garage – From First Principles**

The core problem is *maximising usable space while minimising customer effort and operational cost*.  
1. **Capacity vs. footprint** – Every square foot that becomes a car occupies a “slot” (a 2‑m × 4‑m rectangle). To fit *N* cars in a given footprint, we must stack them vertically: the taller the structure, the fewer levels of circulation needed. The trade‑off is construction cost per floor and structural load.  
2. **Throughput** – A single entrance/exit that handles all traffic creates a bottleneck. By modelling vehicle arrivals as a Poisson process (λ cars/min) and using queuing theory (M/M/1), we can solve for the minimal number of gates *G* such that queue length stays below a target.  
3. **Revenue‑per‑square‑foot** – Each slot yields a fixed fee; thus revenue ∝ N. The optimal floor count is where marginal construction cost equals marginal revenue, i.e., d(Cost)/dF = d(Revenue)/dF.  
4. **Safety & ergonomics** – Structural loads dictate ceiling height and ramp angles (≤10 % grade). Lighting and fire‑suppression systems scale with volume; their cost per slot is a constant.

*Non‑obvious insight*: **Slot density can be increased by using *sloped “car‑stack” levels***. Instead of horizontal car bays, tilt the floor so cars drive in, park, then reverse out. This cuts aisle width from 6 m to ~3 m, effectively doubling capacity without adding floors—an elegant geometric shortcut that many designers overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
