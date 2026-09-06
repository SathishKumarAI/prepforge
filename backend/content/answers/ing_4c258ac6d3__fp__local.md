---
qid: ing_4c258ac6d3__fp__local
question: 'Explain: Meta (formerly Facebook) — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 465
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:46:56-05:00'
sources: []
---

**Meta’s “FAANG‑style” interview for a Machine Learning role**

| What the question asks | Why it matters |
|------------------------|----------------|
| *“Build a recommender that scales to 3 billion users with < 5 ms latency.”* | The core problem is **distributed, low‑latency inference** on massive data. It forces you to formalise a pipeline: preprocessing → model training → deployment → monitoring. |
| *“Design an A/B test for a new ranking algorithm while guaranteeing statistical validity under heavy traffic.”* | Here the student must understand **sequential hypothesis testing** and **online learning**; it tests their grasp of **information‑theoretic limits** on early stopping and power. |
| *“Explain how you’d detect and mitigate bias in a content‑filtering model that receives user‑generated text.”* | This probes knowledge of **fairness metrics, causal reasoning**, and the trade‑off between **utility vs. equity**—a geometric view of decision boundaries under distribution shift. |

### Why this structure works
1. **Fundamental problem** – all three revolve around *optimising a function (e.g., click‑through rate) subject to constraints* (latency, fairness, statistical power).  
2. **Deep principle** – each question maps to an optimization or probability framework: convex optimisation for latency, sequential decision theory for A/B testing, and causal inference for bias.  
3. **Non‑obvious insight** – the interviewer expects you to *re‑parameterise* the problem: e.g., turn a ranking objective into a *duality gap minimisation*, or cast bias detection as an *adversarial robustness* task.

### Takeaway
A solid answer demonstrates:
- A clear mathematical formulation of the objective and constraints.  
- Choice of algorithmic primitives (e.g., tree‑based models, bandit algorithms, causal graphs).  
- Practical deployment concerns (distributed training, caching, monitoring).  

That blend of theory + engineering is what Meta looks for in its FAANG‑style ML interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
