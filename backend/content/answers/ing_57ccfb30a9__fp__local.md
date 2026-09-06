---
qid: ing_57ccfb30a9__fp__local
question: 'Explain: Let''s say there are these two roads — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 595
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:10:59-05:00'
sources: []
---

### Why the “two‑road” question appears in ML system‑design interviews

When a company builds a recommendation engine or an autonomous‑vehicle planner it must **choose paths** (features, models, pipelines) that satisfy conflicting goals: accuracy vs latency, interpretability vs flexibility, cost vs scalability.  
The two‑road metaphor forces the candidate to reason about *trade‑offs* in a concrete way.

1. **Fundamental problem** – we have a set of inputs \(x\) and want outputs \(y\). Two feasible algorithms exist:  
   - Road A: a deep neural net that achieves 95 % accuracy but requires 200 ms inference time.  
   - Road B: a shallow tree model that runs in 5 ms with only 80 % accuracy.

2. **Why it must work this way** – the system designer cannot pick both simultaneously; resources (GPU memory, CPU cycles) are finite. The choice is governed by an *optimization* over a multi‑objective loss:
   \[
   L = \lambda_{\text{err}}\,\mathbb{E}[{\rm loss}(y,\hat y)] + 
       \lambda_{\text{lat}}\;\mathbb{E}[t_{\text{inference}}]
   \]
   Adjusting the weights \(\lambda\) moves us along a Pareto frontier. The interview question asks you to *derive* that frontier from first principles.

3. **Connection to deeper principles** – this is an instance of *resource‑constrained optimization*.  
   - **Information theory:** Road A compresses more information (higher mutual info \(I(x;\hat y)\)) but at the cost of time, reflecting a Shannon–Hartley trade‑off between bandwidth and delay.  
   - **Geometry:** The two algorithms live in different feature spaces; projecting data onto a lower‑dimensional manifold (Road B) speeds inference but loses curvature information.

4. **Non‑obvious insight** – the *choice of metric* matters more than the algorithm itself. If user experience tolerates a 10 % drop in accuracy for a 95 % latency reduction, Road B becomes preferable even though its asymptotic error is higher. In practice, you often need to **profile** both algorithms on production hardware; theoretical latency can be misleading because of cache misses or GPU scheduling overhead.

---

In short, the two‑road question forces you to formalize a multi‑objective optimization problem, justify why each constraint (accuracy, speed) matters, and reveal that the optimal design is often about *when* and *how much* trade‑off you’re willing to accept.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
