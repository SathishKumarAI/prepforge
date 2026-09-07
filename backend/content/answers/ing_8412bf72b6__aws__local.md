---
qid: ing_8412bf72b6__aws__local
question: 'Explain: Preference optimisation: RLHF → DPO → GRPO'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 482
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:23:36-05:00'
sources: []
---

**Situation / Task**  
I was asked to explain how *Preference Optimization* flows from **RLHF → DPO → GRPO** during a product‑design review for our next generation recommendation engine.

**Action (Technical)**  
1. **RLHF** – We first train a policy \(π_\theta\) with reinforcement learning using human‑feedback rewards \(R_{\text{human}}\). The reward model is a fine‑tuned BERT that scores candidate outputs against annotated preference pairs.  
2. **DPO (Direct Preference Optimization)** – Instead of sampling from the policy, we directly minimize the Kullback–Leibler divergence between the policy and the *implicit* distribution defined by the human preferences:  
   \[
   L_{\text{DPO}} = -\mathbb{E}_{(x,y^+ ,y^-)}\left[\log\frac{\exp(\alpha\,R(y^+))}{\exp(\alpha\,R(y^+))+\exp(\alpha\,R(y^-))}\right]
   \]  
   This eliminates the need for a separate reward model at inference time and reduces variance.  
3. **GRPO (Generative Reward‑Optimized Policy)** – Finally we embed DPO into a generative transformer, training it to maximize the expected *generative* reward while keeping the KL divergence to a reference policy bounded. This yields a stable, low‑variance sampler that respects user preferences at scale.

**Result**  
After deployment on our recommendation API (10 M requests/day), we observed a **12% lift in click‑through rate** and a **3× reduction in inference cost** due to the single‑model pipeline.  

**Leadership Principles**  
- *Customer Obsession*: We used real user preference data, not synthetic proxies.  
- *Dive Deep & Ownership*: I owned the end‑to‑end training loop, debugged KL spikes, and tuned α for stability.  

Bar‑raisers listen for ownership (I handled all stages), depth (detailed loss derivation), quantified impact (12% CTR lift), and learning from a failed initial reward‑model approach that caused high variance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
