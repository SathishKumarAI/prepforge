---
qid: ing_db518aae9d__fp__local
question: 'Explain: Score a trace — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 636
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:45:33-05:00'
sources: []
---

**Why we score a trace?**  
An *AI evaluation* is essentially a decision‑making problem under uncertainty: the system must choose actions that maximise expected utility while satisfying safety constraints. A *trace* (the logged sequence of states, actions and rewards) is the evidence we use to infer how well the policy performed. To turn this evidence into a quantitative assessment we need an objective function \(J(\tau)\) that maps any trace \(\tau\) to a scalar score.

**Deriving the scoring rule from first principles**  
1. **Define the goal**: We want a score proportional to the expected cumulative reward the policy would achieve in an environment with known dynamics \(P(s'|s,a)\).  
2. **Express expectation as an integral over trajectories**:
   \[
   J(\pi) = \mathbb{E}_{\tau\sim P_\pi}\!\left[\sum_{t=0}^{T-1} r_t\right]
          = \int_{\tau} \Bigl(\sum_t r_t\Bigr)\,P_\pi(\tau)\,d\tau .
   \]
3. **Invert the expectation**: Given a single observed trace \(\tau^{obs}\), we cannot recover \(J(\pi)\) exactly, but we can estimate it by weighting the reward sum with an importance weight that corrects for the mismatch between the true policy and the one that generated the trace.
4. **Importance sampling** gives the *score*:
   \[
   S(\tau^{obs}) = \Bigl(\sum_{t=0}^{T-1} r_t\Bigr)\,
       \frac{P_\pi(\tau^{obs})}{Q(\tau^{obs})},
   \]
   where \(Q\) is the distribution that produced the trace (often a logging policy).  
5. **Variance reduction**: To keep scores stable we add *control variates*—typically a baseline \(b(s_t)\)—yielding
   \[
   S(\tau^{obs}) = \sum_{t=0}^{T-1}\bigl(r_t - b(s_t)\bigr)
       \frac{P_\pi(a_t|s_t)}{Q(a_t|s_t)}.
   \]
This expression satisfies three desiderata: unbiasedness, bounded variance (via baseline), and compatibility with any policy class.

**Non‑obvious insight**  
Most practitioners treat the score as a simple sum of rewards. The crucial hidden layer is that *the weighting factor itself encodes the trust we place in the trace*. If the logging policy \(Q\) assigns very low probability to an action, the weight explodes, signalling that the trace is unlikely under the target policy and should be discounted. Thus, a high raw reward can still produce a modest score if it came from a rarely‑visited state—an elegant safeguard against overfitting to anomalous trajectories.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
