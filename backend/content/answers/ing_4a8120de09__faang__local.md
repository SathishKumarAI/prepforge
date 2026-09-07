---
qid: ing_4a8120de09__faang__local
question: What is stratified sampling? — What is Stratified Cross-Validation in Machine
  Learning? | Towards Data Science
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 474
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:37:55-05:00'
sources: []
---

**Stratified Sampling & Cross‑Validation**

---

### Clarify  
The interviewer asks for *stratified sampling* and its use in *cross‑validation*.  
Assumptions:  
- We’re dealing with a supervised learning task where class distribution matters.  
- The dataset is large enough to partition but still imbalanced.

### Approach  
1. **Explain stratified sampling** – maintain class proportions when drawing subsets.  
2. **Show how it applies to k‑fold CV** – each fold preserves the label ratio of the full set.  
3. **Mention implementation details** (e.g., `StratifiedKFold` in scikit‑learn).  
4. **Highlight benefits & trade‑offs**.

### Depth  
- *Stratified sampling* selects samples such that every stratum (class) is represented proportionally to its frequency in the population.  
- In **stratified k‑fold cross‑validation**, we split the data into `k` folds, each containing roughly the same class distribution as the entire dataset. The algorithm iterates: train on `k–1` folds, test on the remaining one, ensuring that every model sees a representative mix of classes during training and evaluation.  
- **Complexity** is O(n) for shuffling plus O(k·n) for constructing folds; negligible overhead compared to standard k‑fold CV.  
- The key benefit: reduces variance in performance estimates for imbalanced problems, preventing a fold from being dominated by the majority class.

### Edge Cases  
- Extremely rare classes may still be underrepresented if `k` is large; use stratified sampling with *stratified shuffle split* or increase `k`.  
- Multiclass with many small subclasses can lead to folds that miss some labels entirely—consider hierarchical or nested CV.  
- For time‑series data, stratification must respect order; combine with a sliding window.

### Optimize & Communicate  
Explain that while standard k‑fold is fine for balanced data, stratified CV is the default for classification tasks with skewed distributions. I’d conclude: “By preserving label ratios, we obtain unbiased performance metrics and more reliable model selection.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
