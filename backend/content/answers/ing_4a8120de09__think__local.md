---
qid: ing_4a8120de09__think__local
question: What is stratified sampling? — What is Stratified Cross-Validation in Machine
  Learning? | Towards Data Science
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 487
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:09:35-05:00'
sources: []
---

**1️⃣ Clarify the ask & state assumptions**  
   - The user wants a concise definition *and* an explanation that ties it to cross‑validation.  
   - Assume they’re familiar with basic ML concepts but not the nuances of stratification.

**2️⃣ Adopt a “definition → example → application” mental model**  
   1. Define the core idea (preserving class proportions).  
   2. Illustrate with a small numeric example.  
   3. Show how that idea is extended to CV folds.

**3️⃣ Step‑by‑step reasoning**  

| Step | What to say | Why it matters |
|------|-------------|----------------|
| A | Explain “sampling” in ML: selecting data points for training/testing. | Sets the context. |
| B | Introduce *stratification*: splitting data so each subset mirrors overall class distribution. | Highlights purpose (avoiding bias). |
| C | Give a quick numeric example (e.g., 70% positives, 30% negatives in the full set; each fold should reflect that ratio). | Makes abstract concrete. |
| D | Transition to CV: each fold is a stratified sample of the whole data. | Connects sampling to validation. |
| E | Mention common libraries (scikit‑learn’s `StratifiedKFold`) and why it matters for imbalanced datasets. | Provides practical touchpoint. |

**4️⃣ Common traps to avoid**  

- Mixing up *stratified sampling* (single split) with *stratified CV* (multiple splits).  
- Forgetting that stratification preserves class proportions but not other features.  
- Assuming it’s only useful for classification; note its use in regression via quantile stratification.

**5️⃣ Sanity‑check & verbalise**  

- Re‑read the answer: does it define, exemplify, and link to CV?  
- Say it out loud: “Stratified sampling keeps class ratios intact… In cross‑validation we create several such balanced folds…”  
- Ensure the final paragraph wraps up with a quick takeaway: why stratification improves model evaluation on imbalanced data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
