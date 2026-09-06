---
qid: ing_9ff230e2a6__fp__local
question: 'Explain: You RL-trained an agent against a mocked environment, held-out
  reward improved, and the gains did not show up in production. Diagnose it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 568
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:45:27-05:00'
sources: []
---

### Why the “improved” reward vanished in production

| Step | What you did | Core principle that explains the failure |
|------|--------------|-------------------------------------------|
| **1. RL‑train on a mock** | The agent maximises a *proxy* reward \(R_{\text{mock}}\) defined by your simulator. | **Reward shaping bias** – any mismatch between \(R_{\text{mock}}\) and the true production reward \(R_{\text{real}}\) creates an incentive that is only locally optimal. |
| **2. Hold‑out test on the mock** | You evaluate \(R_{\text{mock}}\) on unseen states of the same simulator. | **Distributional shift** – the hold‑out set still lives in the *model*’s manifold; it doesn’t expose the simulator’s blind spots. |
| **3. Deploy to production** | The agent now receives \(R_{\text{real}}\), which depends on real‑world signals (e.g., latency, user engagement). | **Reward misalignment + covariate shift** – the policy learned a trajectory that works under \(R_{\text{mock}}\) but is suboptimal or even harmful when evaluated with \(R_{\text{real}}\). |

#### Deep insight: *The value function is only as good as its training distribution.*

Even if the mock model is perfect for the states it sees, any policy that exploits a **local optimum** in that space will perform poorly once it encounters states outside that manifold. The RL algorithm optimises the expected return under the empirical distribution \(p_{\text{mock}}\). In production you evaluate under \(p_{\text{real}}\), and unless the two match closely (or you regularise toward model‑agnostic features), the learned value function is biased.

#### Practical diagnostics

1. **Compare state distributions**: Plot histograms of key observables in mock vs real. Large gaps signal covariate shift.
2. **Replay with ground‑truth reward**: Simulate a handful of production traces inside the mock and compute \(R_{\text{real}}\). If the policy’s actions systematically reduce \(R_{\text{real}}\), you’ve found the misalignment.
3. **Adversarial validation**: Train a discriminator to tell mock from real states; high accuracy indicates that the simulator fails to capture crucial dynamics.

#### Takeaway

A held‑out improvement on a *mock* does not guarantee production gains unless the reward and state spaces are faithfully aligned. The non‑obvious lesson is that **distributional fidelity matters more than reward magnitude**—the RL objective must be evaluated under the same distribution it will face in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
