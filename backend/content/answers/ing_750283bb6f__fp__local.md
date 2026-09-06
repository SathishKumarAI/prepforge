---
qid: ing_750283bb6f__fp__local
question: 'Explain: incorrect assumptions so to start off i — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 447
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:13:59-05:00'
sources: []
---

**Why “just count cars” is a fatal mistake in a parking‑garage design**

The core problem a parking‑garage system solves is *efficiently mapping a finite set of spots to a dynamic stream of arrivals and departures*.  
A naïve design assumes that each car can be assigned an arbitrary free spot at arrival time, and that the spot it leaves will become immediately available. This overlooks several deep principles:

| Assumption | Why it breaks down |
|------------|--------------------|
| **Spot availability is a simple binary flag** | In reality, spots differ by size, power outlet, EV‑charging capability, and proximity to exits. Treating them as homogeneous erases the optimization dimension that maximizes revenue or user satisfaction. |
| **Arrival is independent of current load** | High occupancy induces *queueing*—cars wait for a suitable spot, which introduces latency and deters drivers. Ignoring this leads to unrealistic throughput figures. |
| **Spot release is instantaneous** | A vehicle must physically clear the space; sensors may lag or misread. Modeling this as zero‑delay underestimates the required buffer capacity. |
| **All spots are equally likely to be chosen** | Drivers prefer spots near exits, elevators, or with amenities. A uniform random allocation yields suboptimal utilization and violates user expectations. |

**Non‑obvious insight:**  
Treating spot assignment as a *constrained bipartite matching* problem—drivers (with preferences) on one side, spots (with attributes) on the other—reveals that the system is essentially an online variant of the *assignment problem*. Greedy allocation maximizes short‑term fill but can trap the garage in a local optimum where later arrivals must occupy faraway or unsuitable spots. A small lookahead or stochastic policy (e.g., ε‑greedy) dramatically improves long‑run efficiency, yet most interview answers skip this nuance.

In sum, a correct design must model spot heterogeneity, arrival queuing, and physical release delays; otherwise the system will either underutilize space or fail to meet user expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
