---
qid: ing_7219fe0855__faang__local
question: 'Explain: 🎛️ Fine-tuning, RLHF & Alignment — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 506
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:08:57-05:00'
sources: []
---

**Fine‑tuning, RLHF & Alignment – Cheat Sheet**

| Step | What it is | How it works | Key Metrics |
|------|------------|--------------|-------------|
| **1️⃣ Fine‑Tuning (FT)** | Supervised adaptation of a pre‑trained LLM to a target domain. | Freeze most weights; retrain last layers on labeled data. Often use LoRA or QLoRA for memory efficiency. | Loss, perplexity, task accuracy |
| **2️⃣ Reward Modeling (RM)** | Learn a scalar reward function that scores model outputs. | Human annotators label pairs of responses; train a neural net to predict preference. | Accuracy on validation set, Spearman correlation |
| **3️⃣ Reinforcement Learning from Human Feedback (RLHF)** | Optimize policy to maximize learned reward. | Use PPO or TRPO with clipped surrogate loss; sample prompts → generate → evaluate by RM → update policy. | KL‑divergence vs baseline, reward gain, safety metrics |
| **4️⃣ Alignment & Safety** | Ensure outputs respect human values and policies. | Add constraints (e.g., refusal tokens), apply post‑processing filters, conduct adversarial testing. | Toxicity rate, hallucination frequency, user satisfaction |

### Workflow
1. **Collect domain data → FT**  
2. **Gather preference labels → train RM**  
3. **Fine‑tune policy with RLHF** (PPO + KL penalty)  
4. **Validate safety via automated & human checks**  

### Complexity & Trade‑offs
- **FT**: O(#params × #steps) but cheap on GPU; risk of overfitting.  
- **RM**: Requires high‑quality labels → expensive; can use active learning to reduce cost.  
- **RLHF**: Sample inefficiency, needs many generations; mitigated by cached logits & low‑rank adapters.

### Edge Cases
- *Sparse rewards*: leads to mode collapse → use curriculum or reward shaping.  
- *Hallucinations*: countered by “truthful” loss or external knowledge retrieval.  
- *Bias amplification*: monitor demographic metrics; apply debiasing data augmentation.

---

**Takeaway:** Fine‑tuning gives a domain‑specific base, RLHF turns human preferences into a differentiable objective, and alignment layers the safety nets that keep the model useful yet responsible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
