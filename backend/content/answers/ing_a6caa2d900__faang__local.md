---
qid: ing_a6caa2d900__faang__local
question: 'Explain: How modern LLM training maps onto classic framings'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 469
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:12:48-05:00'
sources: []
---

**Clarify**  
We’re asked how the *modern* large‑language‑model (LLM) training pipeline relates to the *classic* machine‑learning paradigms: supervised learning, unsupervised/self‑supervised learning, and reinforcement learning. I’ll assume we’re focusing on pre‑training + fine‑tuning stages, not deployment.

**Approach**  
1. Map each LLM stage to a classic paradigm.  
2. Highlight the key algorithmic choices that differ from textbook versions.  
3. Note practical constraints (scale, data, compute).  

**Depth**  
- **Pre‑training (Self‑supervised)**: The core objective—masked language modeling or causal LM loss—is an unsupervised signal derived from raw text. Unlike classic unsupervised clustering, the model learns *conditional* distributions \(p(x_t|x_{<t})\), which is a supervised regression on token logits using the next‑token as target.  
- **Fine‑tuning (Supervised)**: A downstream labeled dataset turns the pre‑trained weights into a discriminative model. Losses (cross‑entropy, contrastive) mirror textbook supervised learning, but we start from a *rich prior* instead of random init.  
- **Reinforcement / RLHF**: Human feedback is treated as a reward signal \(r\). Policy gradients or PPO are applied to the policy defined by the language model’s sampling distribution, analogous to classic RL but operating in a discrete token space and with massive action sets.  

**Edge Cases**  
- If pre‑training data contains bias, downstream tasks inherit it—needs debiasing.  
- RLHF can overfit to narrow reward signals; requires diverse demonstrations.  

**Optimize & Communicate**  
I’d stress that LLMs *merge* paradigms: the same network is trained on a self‑supervised objective, then fine‑tuned supervisedly, and finally shaped by reinforcement. This layered approach scales because each stage reuses representations. In an interview, I’d conclude with “the modern pipeline is essentially a textbook pipeline that has been concatenated and massively parallelized.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
