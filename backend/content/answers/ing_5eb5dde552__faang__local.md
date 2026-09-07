---
qid: ing_5eb5dde552__faang__local
question: Compare SFT, RLHF, DPO, and RLVR for improving an instruction-tuned model.
  What data does each need, and when would you pick which?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 568
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:24:15-05:00'
sources: []
---

**1️⃣ Clarify**  
We want to know how *Supervised Fine‑Tuning (SFT)*, *Reinforcement Learning from Human Feedback (RLHF)*, *Direct Preference Optimization (DPO)*, and *Reward‑Learning‑via‑Value‑Regression (RLVR)* differ in data needs and when each is preferable for an instruction‑tuned LLM.

**2️⃣ Approach**  
• List each method’s training loop.  
• Identify the type & quantity of human data it consumes.  
• Map trade‑offs: label cost, stability, sample efficiency, and policy quality.  

**3️⃣ Depth**

| Method | Core Loop | Human Data Required | Typical Use‑Case |
|--------|-----------|---------------------|------------------|
| **SFT** | Cross‑entropy on (prompt, target) pairs | Curated instruction–response pairs; no ranking or scoring | Baseline fine‑tuning when labeled data is abundant and cheap. |
| **RLHF** | Policy gradient using a reward model trained from pairwise preferences | Prompt pairs + human preference labels (≈10k–100k comparisons) | When you need behavior aligned with nuanced human values but can afford iterative labeling. |
| **DPO** | Directly optimizes the policy to match preference probabilities without an explicit reward model | Same preference set as RLHF, but no separate reward training | Faster convergence, lower variance; pick when label budget is tight and you want a single‑step objective. |
| **RLVR** | Value‑based RL that learns a scalar value function from demonstrations or preferences | Prompt–response pairs + optional preference ranking for value estimation | Best when you need stable off‑policy learning and can leverage large demonstration sets (e.g., apprenticeship learning). |

**4️⃣ Edge Cases**  
- *SFT* fails on distribution shifts; overfits to training style.  
- *RLHF* can diverge if reward model is miscalibrated or preferences are noisy.  
- *DPO* assumes preference probabilities are well‑estimated; poor ranking hurts performance.  
- *RLVR* struggles with sparse rewards and needs careful bootstrapping.

**5️⃣ Optimize & Communicate**  
Start with SFT for a quick baseline, then layer RLHF or DPO to fine‑tune alignment. If label cost is prohibitive, opt for DPO (single‑step) over RLHF. Use RLVR when you have abundant demonstrations and require off‑policy stability. Always validate on held‑out preference data and monitor reward drift during training. This structured choice shows clear trade‑offs and aligns with FAANG expectations of concise, data‑driven reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
