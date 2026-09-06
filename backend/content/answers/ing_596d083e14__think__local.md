---
qid: ing_596d083e14__think__local
question: How is stratified sampling related to cross-validation?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 437
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:54:27-05:00'
sources: []
---

We must output numbered thoughts, 5 items, 150-220 words. Use markdown.**1️⃣ Clarify the question & set assumptions**  
   - Assume “stratified sampling” refers to splitting data into groups (strata) that preserve class proportions.  
   - Assume “cross‑validation” means k‑fold CV or its variants.  
   - Goal: explain how stratification is used within each fold.

**2️⃣ Mental model / framework**  
   - View CV as a procedure for creating multiple train/test splits.  
   - Think of stratified sampling as a *constraint* on how those splits are formed, ensuring class balance in every split.

**3️⃣ Step‑by‑step reasoning**  
   1. Start with the full dataset and identify its class distribution.  
   2. For each fold, partition the data so that the proportion of each class matches the overall proportion (this is stratified sampling).  
   3. Train on k–1 folds, test on the remaining one—each fold inherits the balanced class mix.  
   4. Repeat for all folds; aggregate performance metrics.

**4️⃣ Common traps to avoid**  
   - Don’t confuse “stratified sampling” with “random sampling”; it’s about preserving proportions, not just randomness.  
   - Beware of small classes: if a stratum has fewer samples than the number of folds, you’ll need special handling (e.g., leave‑one‑out).  
   - Remember that stratification is optional; plain CV can be used when class imbalance isn’t an issue.

**5️⃣ Sanity‑check & verbalize**  
   - Verify: if a dataset has 70 % class A and 30 % class B, each fold should reflect ~70/30.  
   - Explain aloud: “Stratified CV simply applies stratified sampling to every train/test split so that each fold mirrors the overall class distribution, giving more reliable performance estimates when classes are imbalanced.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
