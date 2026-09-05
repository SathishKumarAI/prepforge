---
qid: ing_2ae2c94f80__fp__local
question: 'Explain: Task Success Rate (TSR) — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 542
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:36:04-05:00'
sources: []
---

**Task Success Rate (TSR)**  
*Why it matters:* An agent’s ultimate purpose is to accomplish a set of goals reliably. TSR quantifies *how often* that goal is achieved in practice, abstracting away the exact mechanics of learning or planning.

---

### From first principles

1. **Define success as a binary event**  
   For each episode \(e\), let  
   \[
   S(e)=
   \begin{cases}
   1 & \text{if goal achieved},\\
   0 & \text{otherwise}.
   \end{cases}
   \]
2. **Probability of success**  
   Under a stationary policy \(\pi\), the probability that an episode ends in success is \(p = \mathbb{E}[S(e)]\).  
3. **Empirical estimate**  
   Running \(N\) independent episodes yields the sample mean  
   \[
   \widehat{p}=\frac{1}{N}\sum_{e=1}^{N} S(e).
   \]
4. **TSR as a performance metric**  
   TSR is simply this empirical success probability:  
   \[
   \text{TSR} = \widehat{p}.
   \]

---

### Why it *must* work that way

- **Optimality criterion:** In stochastic control, the value function \(V^\pi(s)=\mathbb{E}_\pi[\sum_{t} r_t]\) collapses to \(V^\pi(s)=R_{\text{goal}}\cdot p\) when rewards are binary. Maximizing TSR is equivalent to maximizing expected return with a unit reward on success.
- **Statistical efficiency:** The sample mean has variance \(\frac{p(1-p)}{N}\), the smallest possible for an unbiased estimator of a Bernoulli parameter (Cramér–Rao bound). Thus TSR is statistically optimal.

---

### Non‑obvious insight

**TSR conflates speed and reliability.**  
If each episode has variable length, a policy that achieves success quickly but sometimes fails will have the same TSR as one that succeeds slowly but always does. Hence TSR alone cannot distinguish *how efficiently* tasks are completed; it must be paired with metrics like *Average Episode Length* or *Cumulative Reward*. This subtlety is often overlooked when interpreting high TSR values in benchmark papers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
