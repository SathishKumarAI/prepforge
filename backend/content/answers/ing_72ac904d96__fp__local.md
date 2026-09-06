---
qid: ing_72ac904d96__fp__local
question: 'Explain: History — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 460
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:08:20-05:00'
sources: []
---

### Spaced Repetition in Machine Learning

The core problem solved by spaced repetition is **maximizing long‑term retention while minimizing rehearsal effort**.  
Mathematically, we model memory strength \(S(t)\) as an exponentially decaying function after a review at time \(t_0\):
\[
S(t)=e^{-\lambda (t-t_0)}\,,
\]
where \(\lambda\) depends on item difficulty and learner’s prior exposure.  
A rehearsal is worthwhile when the expected recall probability exceeds a threshold \(\theta\). Thus we solve for the next optimal review time \(t^*\):
\[
e^{-\lambda (t^*-t_0)}=\theta \;\Rightarrow\; t^*=t_0+\frac{\ln(1/\theta)}{\lambda}\,.
\]
This derivation shows that **spacing intervals must be inversely proportional to the decay rate**—harder items (\(\lambda\) large) get shorter gaps.

Historically, this idea traces back to Hermann Ebbinghaus (1885), who quantified forgetting curves. In the 1970s‑80s, researchers formalized it in the **“spacing effect”** literature. The first practical algorithms appeared in the 1990s with **SM-2** (SuperMemo) and later **Anki**, which implement adaptive scheduling based on user responses. Modern systems now integrate Bayesian models of recall probability, allowing real‑time updating of \(\lambda\).

#### Non‑obvious insight
Most people assume spaced repetition only benefits *long‑term* memory. In fact, the same decay‑based optimization also **improves short‑term learning**: by revisiting items just before they fade, we reinforce neural traces that would otherwise be overwritten during unrelated tasks—an effect rooted in synaptic consolidation dynamics.

Thus, spaced repetition is not a heuristic but an optimal control problem grounded in memory physics and Bayesian inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
