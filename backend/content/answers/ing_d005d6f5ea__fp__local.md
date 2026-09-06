---
qid: ing_d005d6f5ea__fp__local
question: 'Explain: Experiments — Limit of RLVR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 691
total_tokens: 860
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:22:43-05:00'
sources: []
---

### Experiments – Limit of **RLVR**  
*(Relative Loss‑Variance Ratio)*  

The RLVR is the ratio  
\[
\text{RLVR}=\frac{\mathbb E[\text{cumulative regret}]}{\sqrt{\operatorname{Var}(\text{cumulative reward})}}
\]
used to compare learning algorithms in bandit or reinforcement‑learning (RL) experiments.  

---

#### 1. **Fundamental problem**  
We wish to learn a policy that maximises expected return while keeping the *sample‑to‑sample* variability of that return low. In practice, we run many Monte‑Carlo trials and compute two statistics: the mean regret (how far we are from optimal) and the variance of the reward (how noisy our performance is). RLVR normalises regret by a scale that reflects the intrinsic stochasticity of the environment.

---

#### 2. **Why it must behave this way**  
* **Exploration–exploitation trade‑off**: Any algorithm that aggressively exploits will have low mean regret but high variance because early mistakes persist. Conversely, an overly exploratory policy has high variance but can quickly correct itself, reducing mean regret. The ratio captures the *efficiency* of this trade‑off.
* **Information‑theoretic lower bound**: By Fano’s inequality one shows that to achieve regret \(O(\sqrt{T})\) in a K‑armed bandit we must observe at least \(\Omega(K\log T)\) samples. These samples drive the variance term; hence RLVR cannot fall below a constant determined by the *information gain* per sample.
* **Geometric view**: In policy space, regret is a projection of the error vector onto the reward gradient; variance measures the length of that vector. The ratio therefore bounds how “steep” the learning trajectory can be relative to its noise.

---

#### 3. **Non‑obvious insight**  
Most people treat RLVR as a *static* benchmark, but it is in fact a *dynamic* function of the exploration schedule. The limit is reached only when the policy’s support aligns with that of the optimal action distribution—i.e., every arm that could be optimal receives enough visits to estimate its mean within the noise level dictated by the environment. If an algorithm neglects even one sub‑optimal arm, the variance term blows up and RLVR collapses, regardless of how small the regret is on average.

---

#### 4. **Practical implication**  
When designing experiments, ensure that your exploration strategy guarantees *uniformly bounded* visitation counts across arms; otherwise the RLVR will be dominated by rare but high‑variance events, giving a misleading sense of efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
