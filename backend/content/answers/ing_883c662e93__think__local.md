---
qid: ing_883c662e93__think__local
question: 'Explain: Your DPO run improves win rate against the SFT model, but outputs
  are longer, waffly and hedge constantly. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 440
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:02:55-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- *What is “DPO” and the “SFT model”?* Assume DPO = Direct Preference Optimization, SFT = Supervised Fine‑Tuning.  
- *Metrics:* win rate ↑ but text quality ↓ (longer, waffly, hedging).  
- *Goal:* keep higher win rate while improving output coherence.

**2️⃣ Mental framework**  
Use a **debug‑loop model**:  
1. Identify symptom → 2. Hypothesize cause → 3. Test/measure → 4. Iterate.  
Couple with a **reward‑engineering lens**: longer, hedging outputs often stem from reward mis‑specification or over‑regularization.

**3️⃣ Step‑by‑step reasoning**  
- Check *token budget*: DPO may not penalize length → increase max tokens or add length penalty.  
- Inspect *reward function*: is it too sparse? Add intermediate signals for brevity and clarity.  
- Examine *temperature/entropy* settings: high entropy can cause hedging; reduce temperature or use nucleus sampling.  
- Verify *pre‑training data overlap*: DPO might overfit to noisy preference pairs → augment with higher‑quality references.  
- Run ablation: disable length penalty, then reward shaping, observe win rate vs. quality.

**4️⃣ Common traps**  
- Assuming longer outputs are “better”; they’re often a symptom of reward leakage.  
- Tweaking only temperature without checking token budget leads to the same issue.  
- Ignoring that DPO can over‑fit preferences; add validation on unseen prompts.

**5️⃣ Sanity‑check & communicate**  
- Plot win rate vs. average length after each tweak.  
- Share findings: “Increasing length penalty by 0.02 reduced avg tokens from 140→90 while keeping win rate >95%.”  
- Iterate until the curve stabilizes, then document the final hyperparameters for reproducibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
