---
qid: ing_f258956d85__fp__local
question: 'Explain: What an AI agent is — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 619
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:34:24-05:00'
sources: []
---

**What an AI agent really is**

At its core an AI agent is a *policy*—a mapping from observations to actions—that seeks to maximise some cumulative reward in a stochastic environment.  
Formally we model the world as a Markov decision process (MDP) \(M=(S,A,T,R)\). An agent’s policy \(\pi:S\to A\) induces a trajectory whose expected return \(G=\mathbb{E}\sum_{t} \gamma^{t}R(s_t,a_t)\) we want to maximise. The “agentic” part is that the policy is *self‑generated*: it learns from experience (policy gradients, Q‑learning, etc.) rather than being hand‑crafted.

**Why this formulation must work**

1. **Optimality guarantees**: In finite MDPs a Bellman optimality equation guarantees that any policy satisfying \(Q^\pi(s,a)=R(s,a)+\gamma \sum_{s'}T(s'|s,a)\max_{a'} Q^\pi(s',a')\) is optimal.
2. **Generalisation**: By learning a function approximator (neural net), the agent can extrapolate to unseen states—essential for real‑world use where the state space explodes.
3. **Autonomy**: The agent need not be told *how* to act, only *what* it should achieve; this frees designers from enumerating all edge cases.

**Agentic AI Use Cases (Neo Kim’s taxonomy)**

| Domain | Typical Agent |
|--------|---------------|
| **Robotics** | Manipulation & navigation agents that learn to pick objects in cluttered scenes. |
| **Finance** | Portfolio‑rebalancing agents that adaptively allocate capital under market uncertainty. |
| **Healthcare** | Treatment recommendation agents that personalize therapy sequences based on patient trajectories. |
| **Gaming/Entertainment** | NPCs that improvise strategies, improving player engagement through emergent behavior. |
| **Operations** | Supply‑chain agents that optimise routing and inventory in real time. |

**Non‑obvious insight**

Most people think an agent *acts* only after full observation; but in practice the *partial observability* of many tasks forces agents to maintain internal belief states (RNNs, memory modules). This hidden state is what gives them “agency” beyond reactive control—it allows planning over *future* possibilities, not just immediate reactions. Thus, agentic AI is less about acting fast and more about learning a *predictive world model* that it can query to decide the best action.

In short, an AI agent is a learned policy operating in an MDP, chosen for its ability to optimise long‑term objectives autonomously across diverse real‑world domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
