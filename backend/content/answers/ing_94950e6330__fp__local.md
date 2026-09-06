---
qid: ing_94950e6330__fp__local
question: 'Explain: Action Success Rate (ASR) — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 539
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:21:13-05:00'
sources: []
---

**Action Success Rate (ASR)**  
*Why it matters*: An agent’s goal is to transform a state \(s_t\) into a desirable successor \(s_{t+1}\). In sequential decision‑making we observe only the chosen action \(a_t\); whether that action “worked” is a binary event, but its frequency is a powerful statistic.  

**Derivation from first principles**  
Let \(\mathcal{A}(s)\) be the set of admissible actions at state \(s\). For each \(a\in\mathcal{A}\), define an indicator
\[
I_a(s)=
\begin{cases}
1 & \text{if executing } a \text{ leads to a goal‑aligned transition},\\
0 & \text{otherwise}.
\end{cases}
\]
The *true* success probability of action \(a\) is \(p_a=\mathbb{E}[I_a(s)]\).  
An agent with policy \(\pi(a|s)\) samples actions; the empirical mean over \(N\) trials,
\[
\widehat{\text{ASR}} = \frac{1}{N}\sum_{t=1}^{N} I_{\pi}(s_t),
\]
converges to \(\mathbb{E}_{s\sim d^\pi}[p_{\pi(s)}]\), where \(d^\pi\) is the state distribution induced by \(\pi\). Thus ASR estimates *expected* per‑step success under the agent’s own dynamics, a natural objective for any task that rewards successful transitions.

**Deep connection**  
ASR is an unbiased estimator of the **policy value** in environments where each step’s reward is binary and independent of future states. It reduces to the expected reward rate, linking ASR to policy gradient theory: maximizing ASR maximizes expected cumulative reward when rewards are sparse.

**Non‑obvious insight**  
Because ASR aggregates over all states visited by the agent, it inherently penalises *exploratory* policies that wander into low‑reward regions. A high ASR thus signals not just skill but also a *self‑consistent* state distribution. Consequently, an agent can improve ASR by reshaping its exploration strategy (e.g., via intrinsic motivation) even without changing the underlying policy network. This subtlety—ASR as both performance and coverage metric—is often overlooked in standard reinforcement‑learning benchmarks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
