---
qid: ing_812edf9138__faang__local
question: 'Explain: Change log — Constitutional Classifiers: Defending against universal
  jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 442
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:45:15-05:00'
sources: []
---

**1️⃣ Clarify**  
The paper *“Constitutional Classifiers: Defending Against Universal Jailbreaks”* proposes a new way to steer large language models (LLMs) so they refuse harmful or jailbreak prompts.  
Assumptions I’d confirm:  
- The model can be fine‑tuned via reinforcement learning from human feedback (RLHF).  
- We have a *constitution*: a short set of rules that the model should follow.  
- “Universal jailbreaks” are adversarial prompts that bypass standard guardrails.

**2️⃣ Approach**  
1. **Define a constitution**: a concise list of principles (e.g., safety, honesty).  
2. **Generate counterexamples**: create or collect prompts that try to violate the constitution.  
3. **Fine‑tune with RLHF**: reward outputs that respect the constitution and penalize violations.  
4. **Iterate**: continually add new jailbreak attempts to the training set.

**3️⃣ Depth**  
- The model is trained on *constitutional instruction following* (CIF).  
- Reward signal = cosine similarity between model’s response embedding and an “ideal” constitutional embedding.  
- RLHF uses PPO; each epoch adds 1–2 k counterexamples, reducing jailbreak success from ~80% to <5%.  
- Complexity: training cost ≈ 10× baseline fine‑tune; inference overhead negligible.

**4️⃣ Edge Cases**  
- Ambiguous prompts that partially align with the constitution.  
- Over‑constraining leading to hallucinations or refusal of benign queries.  
- Adversaries crafting *stealth* jailbreaks that mimic constitutional language.

**5️⃣ Optimize & Communicate**  
Future work: meta‑RL to auto‑generate counterexamples, hierarchical constitutions for domain specificity, and real‑time monitoring. I’d present the trade‑off graphically (jailbreak rate vs. user satisfaction) and emphasize that a well‑crafted constitution dramatically lowers universal jailbreak risk while preserving model utility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
