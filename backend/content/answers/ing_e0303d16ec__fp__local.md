---
qid: ing_e0303d16ec__fp__local
question: 'Explain: Step 5. Add memory — How Do AI Agents Work - by Neo Kim and Fran
  Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 448
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:56:32-05:00'
sources: []
---

**Step 5 – Adding Memory to an AI Agent**

The core problem any learning agent faces is *partial observability*: at each time step it receives only a noisy, low‑dimensional observation \(o_t\) of the true world state \(s_t\). If the agent acts greedily on \(o_t\), it can’t recover from past mistakes or exploit long‑term patterns.  
The fix is to give the agent an internal *memory* that aggregates past observations into a hidden representation \(h_t\). Formally we want a function  

\[
h_{t} = f_{\theta}(h_{t-1}, o_t),
\]

where \(\theta\) are learnable parameters. This recurrence turns the problem into one of *sequence modeling*: the policy \(\pi(a_t|h_t)\) now conditions on an entire history, not just a single snapshot.

Why must this be learned? Because the optimal \(f_{\theta}\) is exactly the *belief update* in a partially observable Markov decision process (POMDP). In a POMDP, the belief state \(b(s)=P(s|o_{1:t})\) summarizes all past information. However, maintaining and updating an exact belief is computationally intractable for most domains. A neural recurrence (e.g., LSTM or GRU) offers a *low‑dimensional approximation* to this belief that can be trained end‑to‑end with the policy.

**Non‑obvious insight:**  
Many practitioners treat memory as a generic “look‑back” window, but the key is *what* the network must remember. In practice, the recurrent layer learns to encode *sufficient statistics*—for example, whether a previously seen door was locked. This emergent abstraction mirrors Bayesian belief compression: the agent discards irrelevant details and retains only those that influence future rewards.

In short, Step 5 turns an ill‑posed control problem into one of learning a compact, predictive representation of history, enabling the agent to act optimally under uncertainty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
