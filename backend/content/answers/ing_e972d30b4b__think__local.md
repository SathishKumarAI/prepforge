---
qid: ing_e972d30b4b__think__local
question: 'Explain: Fine-tuning, RLHF & Alignment - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 510
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:25:55-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   *Assume the interviewee knows basic ML concepts but may not be familiar with recent fine‑tuning or RLHF nuances.*  
   - Identify what “fine‑tuning,” “RLHF” (Reinforcement Learning from Human Feedback), and “alignment” mean in practice.  
   - Decide whether to focus on *why* these techniques matter, *how* they’re implemented, or both.

**2️⃣ Adopt a layered mental model**  
   1. **Base model training** – large‑scale unsupervised learning (e.g., GPT).  
   2. **Fine‑tuning** – supervised adaptation to a narrower domain.  
   3. **RLHF** – turning human preferences into a reward signal and optimizing the policy.  
   4. **Alignment** – ensuring the model’s objectives match user values and safety constraints.

**3️⃣ Step‑by‑step reasoning toward an answer**  
   - Explain *fine‑tuning* as gradient descent on labeled data, preserving knowledge while specializing.  
   - Describe RLHF: collect human rankings → train a reward model → policy optimization (e.g., PPO).  
   - Tie alignment to both stages: fine‑tuning reduces off‑target behavior; RLHF explicitly shapes outputs toward desired preferences.  
   - Highlight evaluation metrics (perplexity, safety benchmarks) and iterative refinement.

**4️⃣ Common traps to avoid**  
   - Over‑generalizing “fine‑tuning” as only parameter updates—forget the role of data quality and overfitting.  
   - Confusing RLHF with standard supervised fine‑tuning; emphasize the *reward model* component.  
   - Neglecting safety concerns: alignment isn’t just about performance but also robustness to manipulation or emergent behaviors.

**5️⃣ Sanity‑check & verbalize clearly**  
   - Use a concrete example (e.g., chatbot trained on customer support).  
   - Verify each step logically follows the previous one.  
   - Summarize in a single sentence: “Fine‑tuning adapts a generic model to a domain; RLHF uses human preferences as a reward signal to steer it further, and alignment ensures this steering stays within safe, value‑aligned boundaries.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
