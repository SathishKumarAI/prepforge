---
qid: ing_da252f3fdf__fp__local
question: 'Explain: Availability in Series vs Parallel — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 480
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:43:30-05:00'
sources: []
---

**Availability of a system is the probability that it is *operational* at an arbitrary instant, assuming components fail and are repaired independently.**  
For a component with constant failure rate \( \lambda \) and repair rate \( \mu \), its steady‑state availability is  

\[
A = \frac{\mu}{\lambda+\mu}\; .
\]

---

### Series configuration
All \(n\) components must be working simultaneously for the system to work.  
The system’s availability is the product of the individual availabilities:

\[
A_{\text{series}}=\prod_{i=1}^{n} A_i.
\]

*Why?*  The event “system up” equals the intersection of independent events “component \(i\) up”.  Probability of an intersection of independent events is the product.  

---

### Parallel configuration
The system functions if **any** of its \(n\) components works.  
Let \(U_i\) be the event that component \(i\) is *down*.  The system is down only when all components are down:

\[
P(\text{system down}) = \prod_{i=1}^{n} (1-A_i).
\]

Hence

\[
A_{\text{parallel}} = 1 - \prod_{i=1}^{n} (1-A_i).
\]

*Why?*  Complementarity turns the “any‑works” condition into an intersection of independent “all‑down” events, again a product.  

---

### Non‑obvious insight  
For **identical** components (\(A_i=A\)), series availability decreases *exponentially* with \(n\) (\(A^n\)), whereas parallel availability approaches 1 as

\[
A_{\text{parallel}} = 1-(1-A)^n \approx 1 - e^{-n(1-A)}.
\]

Thus, even a small improvement in single‑component reliability dramatically boosts the *redundant* system’s availability.  This exponential gain is why fault‑tolerant designs often favor parallelism over sheer component count.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
