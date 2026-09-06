---
qid: ing_c0f8ecfb7d__fp__local
question: 'Explain: Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 411
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:52:56-05:00'
sources: []
---

**Spaced Repetition – A First‑Principles View**

The core problem is *forgetting*: after learning a fact, its activation decays exponentially with time \(t\) as \(A(t)=Ae^{-\lambda t}\). To keep \(A(t)\) above a recall threshold \(T\), we must re‑expose the item before it drops below \(T\). If we schedule reviews at times \(t_i\) and each review boosts activation by \(\Delta A\), the optimal inter‑review interval satisfies  
\[
e^{-\lambda (t_{i+1}-t_i)} = \frac{T}{A+\sum_{j=1}^{i}\Delta A}.
\]
Rearranging gives a geometric progression: \(t_{i+1}=t_i + \frac{1}{\lambda}\ln\!\bigl(\frac{A+\sum_{j=1}^{i}\Delta A}{T}\bigr)\).  
Thus the optimal spacing grows multiplicatively, not linearly. Algorithms like SM‑2 approximate this by using a *difficulty factor* \(d\) to scale intervals: next = current × d.

This derivation ties spaced repetition to **information theory** (maintaining mutual information between memory and stimulus) and **control theory** (minimizing the expected recall error under resource constraints). It also reveals a subtle insight: the *optimal schedule depends on cumulative strength*, so early reviews should be tighter; later ones can stretch. Many learners ignore this, treating each interval independently. Recognizing the geometric growth explains why systems that reset intervals after failure (e.g., Anki’s “forget” button) degrade long‑term retention— they break the cumulative strength assumption and force a suboptimal restart.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
