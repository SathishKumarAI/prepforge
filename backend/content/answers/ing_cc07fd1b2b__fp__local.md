---
qid: ing_cc07fd1b2b__fp__local
question: 'Explain: Tsinghua PACMAN — the Parallel Architecture & Compiler technology
  of Mobile, Accelerated, and Networked systems Group at Tsinghua'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 388
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:14:14-05:00'
sources: []
---

**Tsinghua PACMAN (Parallel Architecture & Compiler Technology for Mobile, Accelerated, and Networked Systems)**

At its core, PACMAN tackles the *mapping problem*: how to place a massive number of fine‑grained parallel operations onto heterogeneous, power‑constrained hardware while respecting data dependencies and communication bottlenecks.  
The first principle is that *data locality* dominates energy consumption in modern mobile/edge processors. PACMAN formalises this by modelling every instruction as a node in a directed acyclic graph (DAG) where edges carry bandwidth and latency estimates. The compiler then solves a multi‑objective optimisation: minimise total execution time **and** cumulative data movement, subject to constraints on register pressure, memory hierarchy, and network topology.

The deeper insight is that *compiler‑generated hardware scheduling* can be expressed as a linear programming problem over a discretised space of “tiles” (small, reusable compute kernels). By allowing the compiler to *choose* both the tile size and its placement in the accelerator fabric, PACMAN turns static code analysis into an adaptive resource allocation strategy. This bridges the gap between algorithm designers—who traditionally hand‑tune loops for a fixed architecture—and the rapidly evolving landscape of mobile GPUs, NPUs, and network‑on‑chip interconnects.

A non‑obvious takeaway: **PACMAN’s tile‑based approach implicitly performs online learning**. Each compilation run observes actual data traffic patterns on the target device and feeds this back into the optimisation model, gradually converging to an architecture‑aware “sweet spot” that would be impossible to hand‑craft. Thus, PACMAN is not merely a compiler; it is a self‑optimising design loop for next‑generation mobile and networked systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
