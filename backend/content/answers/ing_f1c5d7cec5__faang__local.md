---
qid: ing_f1c5d7cec5__faang__local
question: R1-Zero was trained with reinforcement learning and essentially no supervised
  fine-tuning first. What did that show, and why did the full R1 add SFT back?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 389
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:01:47-05:00'
sources: []
---

**Clarify**  
The question asks what insights were gained from training an AI model (R1‑Zero) solely with reinforcement learning (RL), without any supervised fine‑tuning (SFT), and why the subsequent full R1 iteration re‑introduced SFT.

**Approach**  
1. Identify key outcomes of RL‑only training.  
2. Explain limitations that surfaced during deployment or evaluation.  
3. Justify adding back SFT to address those gaps.

**Depth**  
R1‑Zero demonstrated that a large language model could learn task‑specific behaviors (e.g., following instructions, generating helpful responses) purely from reward signals—showing the feasibility of RL for aligning models with human preferences. However, the model suffered from several deficiencies:  
- **Sample inefficiency:** RL required massive interaction data to converge.  
- **Hallucination & factual drift:** Without supervised grounding, it drifted from known facts.  
- **Safety gaps:** Rare but dangerous outputs were not adequately penalized in the reward design.  

Full R1 therefore incorporated SFT on curated instruction‑follow datasets (e.g., OpenAI’s “Instruct” data). This step re‑established a strong baseline alignment, reduced hallucinations, and accelerated convergence by providing high‑quality gradients before fine‑tuning with RLHF.

**Edge Cases**  
- If the reward model misjudges nuanced user intent, RL may reinforce undesirable behavior.  
- Pure RL can amplify token‑biases present in training data.  
- SFT alone cannot guarantee safety without subsequent RL refinement.

**Optimize & Communicate**  
Future iterations could blend *SFT → RL* with continual learning and better reward modeling to balance sample efficiency and alignment, while communicating the rationale as: “RL proves learnability; SFT grounds reliability.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
