---
qid: ing_63889bc205__fp__local
question: 'Explain: Disaster recovery relies on having a solid plan to get critical
  applications and infrastructure up and running after an outage—ideally within minutes.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 405
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:36:45-05:00'
sources: []
---

**Why disaster recovery is an optimisation problem**

When an outage strikes, the *utility* of a service drops to zero until it can be restored. The goal is to minimise the **expected loss**  
\(L = \sum_{t} P(\text{outage at }t)\times\text{cost per unit time}\).  
Because costs grow linearly with downtime, the optimisation reduces to *reducing the expected recovery time*.

A solid plan achieves this by:

| Component | Why it matters (principle) |
|-----------|-----------------------------|
| **Redundant data stores** | Information theory: entropy of state must be preserved; replication guarantees that the joint distribution remains available even if a node fails. |
| **Automated fail‑over scripts** | Deterministic control flow eliminates human error, turning a stochastic recovery time into a fixed, low‑variance interval. |
| **Immutable infrastructure (IaC)** | Geometry of configuration space shrinks; each deployment is a point on the manifold, so roll‑back to a known good state is instantaneous. |
| **Regular, realistic drills** | Bayesian updating: repeated tests refine the posterior distribution over recovery times, enabling tighter confidence bounds. |

**Non‑obvious insight:**  
Most plans focus on *what* must be recovered (databases, services) but ignore the *sequence* of actions. Because dependencies form a directed acyclic graph, restoring nodes in parallel where possible turns a linear optimisation into a **parallel scheduling problem**—the critical path dictates recovery time. Optimising that path often yields more than 50 % reduction in minutes compared to naïve serial restoration.

In short, disaster recovery is the application of probability‑weighted optimisation over a dependency graph; a well‑crafted plan flattens this graph and turns uncertainty into predictable, rapid recovery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
