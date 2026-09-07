---
qid: ing_596d083e14__faang__local
question: How is stratified sampling related to cross-validation?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 474
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:11:45-05:00'
sources: []
---

**Clarify**  
The interviewer asks how *stratified sampling* connects to *cross‑validation*. I’ll assume they mean the common supervised learning setting where we want each fold of CV to preserve class proportions, and that “sampling” refers to selecting training/test splits.

---

### 1️⃣ Approach  

- **Explain stratification**: a random sample that keeps the same label distribution as the full dataset.  
- **Show how it’s used in k‑fold CV**: before splitting, we partition each class separately into k roughly equal parts, then combine one part from every class to form each fold.

---

### 2️⃣ Depth  

| Technique | Purpose | Implementation |
|-----------|---------|----------------|
| Stratified sampling (single split) | Ensures training/test sets reflect overall class balance. | Weighted random choice per label. |
| Stratified k‑fold CV | Guarantees every fold has the same relative class frequencies, reducing variance in performance estimates, especially with imbalanced data. | For each label `l`, shuffle its indices and split into `k` chunks; then for each fold `i`, take chunk `i` from all labels as the test set, remaining as training. |

- **Complexity**: O(n) to construct folds; negligible overhead versus ordinary CV.  
- **Trade‑off**: If classes are very rare, some folds may contain zero instances of a minority class—acceptable if we still want fair estimates but may need *stratified shuffle‑split* instead.

---

### 3️⃣ Edge Cases  

- Extremely imbalanced data → some folds lack minority samples.  
- Multi‑label settings → stratification becomes non‑trivial; use iterative proportional fitting or label‑pair sampling.  
- Small datasets → k must be chosen carefully (e.g., leave‑one‑out).

---

### 4️⃣ Optimize & Communicate  

I’d highlight that stratified CV is essentially *stratified sampling applied repeatedly* to each fold, preserving distributional fidelity and yielding more reliable error estimates. I would finish by stressing its importance when evaluating models on skewed datasets—without it, a model could appear robust simply because rare classes were absent from validation folds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
