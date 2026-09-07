---
qid: ing_47dda10cdb__faang__local
question: 'Explain: Title: Deep reinforcement learning from human preferences'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 510
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:30:58-05:00'
sources: []
---

**Deep Reinforcement Learning from Human Preferences (DRL‑HP)**  
*Meta/Google style FAANG answer – ~200 words*

---

### **1️⃣ Clarify**
We want an RL agent that learns a policy not by hand‑crafted rewards but by observing human feedback on its actions.  
Assumptions to confirm:  
- Humans can provide pairwise or scalar preference signals (e.g., “trajectory A > B”).  
- Feedback is noisy, sparse, and expensive.  
- The environment’s dynamics are known only through simulation.

---

### **2️⃣ Approach**
1. **Collect demonstrations** → initial policy via imitation learning.  
2. **Generate candidate trajectories** from current policy.  
3. **Ask humans to rank pairs** of trajectories (or snippets).  
4. **Train a reward model** \( \hat{R}(s,a) \) that predicts human preferences using supervised loss (e.g., cross‑entropy on pairwise comparisons).  
5. **Reinforce** the agent with policy gradient or actor–critic, optimizing expected predicted reward.  
6. **Iterate**: periodically query humans to refine the reward model.

---

### **3️⃣ Depth**
- Reward model uses a neural net over state‑action embeddings; loss \( \mathcal{L} = -\log\sigma(\hat{R}_A-\hat{R}_B) \).  
- Policy update via PPO or DDPG with clipped surrogate objective.  
- Complexity: O(batch × T) per iteration, where T is trajectory length; reward model training linear in number of comparisons.  
- Trade‑off: richer feedback (e.g., absolute scores) reduces sample complexity but increases human effort.

---

### **4️⃣ Edge Cases**
- *Non‑stationary preferences*: retrain reward model periodically.  
- *Sparse signals*: use curriculum learning to focus on high‑variance regions.  
- *Human bias*: calibrate with synthetic ground truth or consensus voting.

---

### **5️⃣ Optimize & Communicate**
- Use active learning: query human only on trajectories where the reward model is most uncertain (entropy sampling).  
- Cache trajectory embeddings to avoid recomputation.  
- Present results via a dashboard showing policy improvement versus human effort, enabling stakeholders to gauge ROI.  

**Result:** An agent that learns complex, nuanced objectives directly from humans while minimizing manual reward engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
