---
qid: ing_65a609f9d7__fp__local
question: 'Q: What is RLVR, and why does it scale more stably than RLHF for reasoning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 509
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:41:18-05:00'
sources: []
---

### Why “RLVR” outperforms “RLHF” for large‑scale reasoning

**The core problem**  
When we train a language model to *reason*, the reward signal must capture whether a chain of logical steps leads to the correct conclusion. A naive approach (RLHF) asks humans to rank entire completions; the signal is noisy, sparse, and expensive to collect.

**From first principles: reward as a function of intermediate states**  
In reinforcement learning we model a trajectory \(s_0,a_0,\dots,s_T\). The value \(V(s_t)\) should reflect how likely the *current partial reasoning* will finish correctly. This is an **optimal‑control** problem: each step must maximize expected future success.  

RLVR (Reward Learning from Verifiable Reasoning) constructs a reward that is *verifiable* at every intermediate state—by checking logical entailment, arithmetic correctness, or consistency with known facts. The reward becomes:

\[
r_t = \mathbf{1}\{\text{state } s_t \text{ satisfies verifiability criteria}\}
\]

This turns the sparse human signal into a dense, principled one derived from *information‑theoretic* guarantees: each bit of verified reasoning reduces uncertainty about the final answer.

**Why scaling is more stable**  
1. **Dense gradients** – every step receives feedback; policy updates do not wait for a terminal verdict.  
2. **Reduced human bias** – verifiability relies on formal checks, not subjective preference, so the reward distribution remains well‑conditioned as model size grows.  
3. **Modular training** – you can pretrain a verifier separately and fine‑tune it, decoupling the complexity of reasoning from the cost of annotation.

**Non‑obvious insight**  
RLVR’s stability stems not just from richer data but from *shaping* the reward to be a *conjugate prior* over logical validity. As models become larger, their internal representations approximate this prior more closely; thus the verifier’s feedback remains informative even when the policy’s exploration space explodes.

In short, RLVR supplies a mathematically grounded, dense signal that keeps learning gradients well‑behaved, enabling robust scaling where human‑only rewards (RLHF) collapse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
