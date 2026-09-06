---
qid: ing_c68b9b961f__think__local
question: What's the difference between continued pretraining and SFT? When do you
  need domain knowledge injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 477
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:04:10-05:00'
sources: []
---

**1. Clarify the terms & set assumptions**  
   - *Continued pre‑training*: further training a large model on more data after its initial pre‑train phase.  
   - *SFT (Supervised Fine‑Tuning)*: training the same model on labeled examples for a specific task.  
   Assume we’re dealing with transformer‑based LLMs, standard pre‑train objectives (masked LM, causal LM), and that “domain knowledge injection” refers to adding domain‑specific signals beyond raw data.

**2. Choose a mental framework**  
   Use a *training pipeline* lens: start → pre‑train → post‑pre‑train (continued) → task‑level fine‑tune. Identify what each stage modifies: model weights, representation space, and inductive biases.

**3. Reason step‑by‑step toward the answer**  
   - **Step 1:** List inputs & objectives of continued pre‑training vs SFT.  
   - **Step 2:** Map how each influences generalization vs specialization.  
   - **Step 3:** Identify when domain knowledge is useful: (a) data scarcity, (b) high‑stakes or safety‑critical domains, (c) need for compliance or interpretability.  
   - **Step 4:** Tie domain injection to the stage where it matters most (often during continued pre‑train if you have unlabeled domain corpora; otherwise in SFT with curated labels).

**4. Avoid common traps**  
   - Don’t conflate *more data* with *domain relevance*.  
   - Beware of “over‑fitting” to a narrow domain by only doing SFT.  
   - Remember that continued pre‑training can still benefit from domain signals if the corpus is large enough.

**5. Sanity‑check & verbalize**  
   - Re‑explain in plain terms: “Continued pre‑train keeps the model’s broad knowledge, while SFT sharpens it for a specific job.”  
   - Ask yourself: does each bullet logically follow from the previous?  
   - If any step feels shaky, revisit the assumptions or look up empirical studies comparing the two approaches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
