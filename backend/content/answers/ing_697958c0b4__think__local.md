---
qid: ing_697958c0b4__think__local
question: 'Explain: Full-Vocabulary OPD. — Rethinking On-Policy Distillation of Large
  Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 537
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:59:10-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Confirm that *Full‑Vocabulary OPD* refers to the “On‑Policy Distillation” technique described in the cited paper (not a generic NLP term).  
- Assume the reader knows basic LLM terminology (teacher, student, policy) but may not know the specific “full‑vocabulary” variant.  

**2️⃣ Adopt a mental model**  
Think of distillation as *policy transfer*: the teacher’s generation policy is learned by the student while staying on the same action space (the full vocabulary).  
- Map each component:  
  - **Teacher policy** → probability distribution over all tokens.  
  - **Student policy** → approximated distribution trained to mimic teacher.  
  - **On‑policy** → sampling from the *student* during training, not from a fixed curriculum.  

**3️⃣ Step‑by‑step reasoning**  
1. **Define the objective**: minimize KL(teacher || student) over the entire token set for each decoding step.  
2. **Sampling strategy**: at every step, let the student sample its next token (on‑policy), feed that back as context, and compute loss on the same position.  
3. **Full‑vocabulary coverage**: unlike top‑k or nucleus filtering, use the *entire* softmax output; this preserves rare tokens and long‑tail behavior.  
4. **Training recipe**:  
   - Warm‑up with a small learning rate.  
   - Alternate between teacher‑forced and student‑generated prefixes to stabilize convergence.  
5. **Evaluation**: compare perplexity, BLEU, or task‑specific metrics against baseline distillation (e.g., offline KD).  

**4️⃣ Common pitfalls**  
- Forgetting that “on‑policy” requires using the *student’s* distribution for sampling; otherwise you’re back to teacher‑forced KD.  
- Neglecting to mask out padding tokens when computing KL over a full vocab.  
- Over‑regularizing: too many on‑policy steps can cause divergence if the student is weak initially.  

**5️⃣ Sanity checks & verbalize**  
- Verify that loss decreases monotonically for a toy dataset before scaling up.  
- Explain aloud how the full vocabulary ensures coverage of rare words, which is why OPD often outperforms top‑k distilled models on open‑domain generation tasks.  

Follow this checklist to articulate Full‑Vocabulary OPD clearly and avoid common misunderstandings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
