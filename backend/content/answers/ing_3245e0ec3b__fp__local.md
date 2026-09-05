---
qid: ing_3245e0ec3b__fp__local
question: 'Explain: But while the user is in transit — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 434
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:51:52-05:00'
sources: []
---

**Why a “transit‑aware” maps system must be built the way it is**

The core problem is *to give an accurate, low‑latency estimate of arrival time (ETA) for a moving user while they are on public transport*.  
1. **State estimation:** A mobile device reports GPS samples every ~1 s. The map backend fuses these with a high‑resolution transit schedule (arrival/departure times, dwell times) and the real‑world line geometry. This is a classic Kalman‑filter problem: we predict the next stop from the current velocity and schedule, then correct with each new observation.  
2. **Uncertainty propagation:** Public transport exhibits systematic delays (traffic, signal timing). We model this as a time‑varying Gaussian process and propagate its variance through the route graph. The ETA is thus a *distribution*, not a point estimate; we expose the 90 % confidence bound to users.  
3. **Scalable routing:** For millions of concurrent users, we pre‑compute “live” edge weights on a subgraph around each vehicle (e.g., within 5 km). A two‑phase Dijkstra—first on a static backbone, then fine‑tuned on the live slice—keeps latency <50 ms.  
4. **Consistency guarantees:** Because multiple devices may observe the same vehicle, we use a conflict‑free replicated data type (CRDT) for its state; eventual consistency ensures all clients see the same ETA up to bounded staleness.

**Non‑obvious insight:** The *only* way to keep latency low while handling the stochasticity of transit is to **pre‑compute probabilistic edge weights offline** and update them in real time with a lightweight delta stream. This hybrid approach gives both scalability (batch pre‑computation) and freshness (online corrections), something pure streaming or purely static solutions cannot achieve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
