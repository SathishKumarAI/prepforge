---
qid: ing_11b9b1f994__fp__local
question: Disengagement rate is a weak safety proxy. How would you actually measure
  whether the Driver is safe enough to ship?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 539
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:43:36-05:00'
sources: []
---

### Why disengagements aren’t the whole story

Disengagement rate (DR) counts how often a human takes over, but it conflates *awareness* with *competence*. A driver may intervene early because of uncertainty, yet still be safe; conversely, a low‑DR system might have subtle failures that never trigger an intervention. Thus DR is a **proxy**—not the target.

### The true safety objective

Safety for a self‑driving car is the probability that *no harm* occurs during its operation:
\[
P(\text{collision or injury}\mid \text{system state}) \leq \varepsilon,
\]
with ε a regulatory bound (e.g., 1 in \(10^9\) miles). This is an *absolute risk* measure, not a relative performance metric.

### How to measure it

| Step | What to do | Why it matters |
|------|------------|----------------|
| **Define failure modes** | Enumerate all unsafe states (collision, near‑miss, traffic‑law violation) and the minimal conditions that trigger them. | Guarantees coverage of every hazard, not just those that cause disengagements. |
| **Collect high‑fidelity telemetry** | Record vehicle state, sensor data, control commands, and environmental context at 100 Hz or higher for all test miles. | Enables post‑hoc reconstruction of the *exact* circumstances leading to a failure, even if no intervention occurred. |
| **Statistical risk estimation** | Use Bayesian hierarchical models that pool data across similar conditions (weather, road type) to estimate \(P(\text{failure}\mid \text{context})\). | Handles sparse failures by borrowing strength from related contexts, yielding credible intervals for safety guarantees. |
| **Simulation‑based extrapolation** | Run a calibrated physics engine with the same perception–control pipeline on millions of synthetic scenarios, injecting realistic sensor noise and rare events. | Provides *unobserved* failure data; the simulation must be validated against real telemetry to avoid “simulation bias.” |

### Non‑obvious insight

The **dominant source of risk is not how often drivers intervene** but how often the system’s *perception* misclassifies a critical object in a *high‑impact* context. By shifting focus from disengagements to *critical perception errors*, you can detect failures that would never trigger an intervention yet could still cause harm. This aligns safety measurement with the underlying decision‑making pipeline, giving a clearer path to improvement and regulatory compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
