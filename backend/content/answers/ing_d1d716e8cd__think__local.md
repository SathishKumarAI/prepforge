---
qid: ing_d1d716e8cd__think__local
question: 'Explain: How do you train a reward model? Explain the preference data and
  the Bradley - Terry loss.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 512
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:48:55-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
   *Assume we’re in an RL‑HF setting (human‑feedback‑based reinforcement learning).  
   The reward model is a neural network that predicts scalar scores for trajectories; it must be trained from pairwise human preferences, not absolute labels.*

**2️⃣ Mental model / framework**  
   - **Data generation**: sample two policy rollouts → show to annotator → get a preference.  
   - **Learning objective**: fit a function \(R_\theta(s)\) so that the probability of one rollout being preferred matches the Bradley–Terry model.  
   - **Loss**: cross‑entropy over these pairwise probabilities.

**3️⃣ Step‑by‑step reasoning**  
   1. Collect many \((\tau^A,\tau^B, y)\) tuples where \(y=0/1\) indicates preference for A or B.  
   2. Compute predicted rewards \(r_A = \sum_{t} R_\theta(s_t^A), r_B = \sum_{t} R_\theta(s_t^B)\).  
   3. Convert to a probability via the Bradley–Terry formula:  
      \[
      P(A\succ B)=\frac{\exp(r_A)}{\exp(r_A)+\exp(r_B)}
      \]  
   4. Define loss as binary cross‑entropy between \(P(A\succ B)\) and observed \(y\).  
   5. Backpropagate to update \(\theta\).

**4️⃣ Common pitfalls**  
   - Treating raw human scores instead of pairwise preferences.  
   - Forgetting to normalize or clip rewards, causing numerical instability.  
   - Using a point‑wise loss (e.g., MSE) which ignores the relative nature of feedback.

**5️⃣ Sanity checks & communication**  
   • Verify that when \(r_A \gg r_B\), the loss pushes the model toward higher \(r_A\).  
   • Inspect training curves: loss should monotonically decrease, and validation preference accuracy should rise.  
   • Explain to a non‑technical stakeholder: “We ask humans which of two examples they like better; we then adjust our reward function so that it’s more likely to say the same thing.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
