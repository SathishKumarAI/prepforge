---
qid: ing_9051f28b28__fp__local
question: 'Explain: curious uh are there different types of — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 504
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:11:59-05:00'
sources: []
---

### Why a “Parking‑Garage” problem appears in a system‑design interview

A parking garage is a **resource‑allocation** puzzle: we have a finite set of *spots* (capacitated resources) and an unbounded stream of vehicles (requests). The goal is to assign spots so that **utilization is maximized, wait times are minimized, and the system remains scalable under heavy load**.  

The core trade‑offs mirror those in any distributed resource manager:

| Trade‑off | What it means for parking |
|-----------|--------------------------|
| **Space vs. Time** | A tighter layout (more spots per floor) saves land but forces longer walks, increasing travel time and congestion. |
| **Simplicity vs. Flexibility** | Fixed slot sizes are easy to manage; variable‑size slots (e.g., compact vs. large) increase capacity but complicate allocation logic. |
| **Determinism vs. Randomness** | Assigning the *first* free spot reduces lookup cost, but a randomized assignment can spread load and avoid hotspots. |

#### Core design principles

1. **Geometric bin‑packing** – The garage is a 3‑dimensional space; we must pack vehicles efficiently while respecting constraints (e.g., height limits).  
2. **Graph traversal for routing** – Vehicles move along edges (driveways, ramps); shortest‑path algorithms can compute optimal entry/exit routes to reduce collision probability.  
3. **Probabilistic load balancing** – If arrivals follow a Poisson process, we model the occupancy as an M/M/c queue; this informs how many “buffers” (extra spots) we need to keep the system below a target wait time.

#### A non‑obvious insight

Most designers focus on *spot allocation*. The **exit bottleneck** is often overlooked. By placing high‑flow exits adjacent to frequently used entry points and modeling traffic as a directed acyclic graph, you can guarantee that no single exit becomes a choke point even under peak load—essentially turning the garage into a *fluid network* rather than just a static storage facility.

In short, solving the parking‑garage interview problem is an exercise in applying optimization, queueing theory, and geometric reasoning to a tangible resource‑allocation challenge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
