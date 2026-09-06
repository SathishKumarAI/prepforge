---
qid: ing_f1c5d7cec5__think__local
question: R1-Zero was trained with reinforcement learning and essentially no supervised
  fine-tuning first. What did that show, and why did the full R1 add SFT back?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 505
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:59:24-05:00'
sources: []
---

**Metacognitive Roadmap for Tackling “R1‑Zero & SFT”**

1. **Clarify the Question & Assumptions**  
   - Identify *R1-Zero* (the baseline model) and *full R1* (the final product).  
   - Assume the reader knows RLHF basics: a policy is first trained by reinforcement learning on an objective, then optionally fine‑tuned with supervised data.  
   - The question asks *why* the authors chose pure RL for R1‑Zero and *what* that experiment demonstrated.

2. **Framework to Apply**  
   - **Experiment → Insight → Design Decision**: treat each step as a logical chain.  
   - Use the “Why‑Did They Do X?” schema: *What did we learn from X, and how does it inform Y?*

3. **Step‑by‑Step Reasoning**  
   1. **Purpose of R1‑Zero**: an ablation to test if a large language model can acquire useful behavior solely from RL rewards without any supervised instruction.  
   2. **Outcome Observed**: the agent learned to follow high‑level goals (e.g., “help user”) but struggled with fine‑grained, task‑specific phrasing and had noisy responses—indicating that pure RL can capture broad intent but lacks linguistic polish.  
   3. **Why Add SFT Later?**: Supervised fine‑tuning (SFT) injects high‑quality human demonstrations to shape language style, factual accuracy, and safety signals that RL alone cannot guarantee efficiently. It also stabilizes training and speeds up convergence.

4. **Common Pitfalls to Avoid**  
   - Confusing *RL* with *RLHF*: remember RL was guided by a reward model trained on human preferences, not raw text supervision.  
   - Assuming pure RL always yields “perfect” language—highlight that it mainly learns policy shape, not fluent syntax.

5. **Sanity‑Check & Communicate**  
   - Rephrase: “R1‑Zero proved that large models can learn goal‑directed behavior from reward alone, but the resulting language was rough; adding SFT polished the output and anchored it to human‑preferred phrasing.”  
   - Confirm with known results (e.g., OpenAI’s RLHF paper) before finalizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
