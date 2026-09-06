---
qid: ing_80c5f48632__fp__local
question: 'Explain: Routing Engine — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 474
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:39:05-05:00'
sources: []
---

**Routing Engine – the “traffic‑lawyer” of a machine‑learning platform**

*Problem:* In a distributed ML system every inference request must be forwarded to an appropriate model instance (GPU, TPU, or CPU) while keeping latency low and avoiding over‑commitment. The engine therefore solves a *real‑time assignment problem*: given a set of incoming requests \(r_i\) with resource demands \((c_i,d_i)\) and a fleet of servers \(s_j\) each with capacity \((C_j,D_j)\), find an allocation that minimizes total weighted latency subject to the capacity constraints.

*Why this formulation works:*  
- **Optimization principle** – the objective is convex (latency grows linearly or sub‑linearly with load). The feasibility region defined by capacities is a polytope; any point inside yields a valid assignment.  
- **Information theory link** – the engine must estimate each server’s *effective* capacity from noisy telemetry; this is a Bayesian inference problem.  
- **Geometric insight** – the routing decision can be visualised as projecting the request vector onto the nearest feasible vertex of the capacity polytope, which guarantees a *max‑min fair* distribution.

*Design pattern:*  
1. **Telemetry collector** → real‑time queue of server metrics (CPU, GPU utilisation, temperature).  
2. **Predictive model** (e.g., Kalman filter) → smooths noisy readings and forecasts near‑future capacity.  
3. **Linear programming engine** → solves the assignment problem every few milliseconds; if latency is critical, a greedy “closest‑available” heuristic with backtracking is used.  
4. **Fallback path** – requests that cannot be scheduled are queued in a priority FIFO.

*Non‑obvious insight:*  
The *routing engine itself* can be treated as a lightweight ML model: the cost function (latency) is not static but evolves with system load; learning a cost‑predictor from past routing decisions turns the balancer into an adaptive optimizer that continuously improves its own policy—essentially meta‑learning at the traffic level.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
