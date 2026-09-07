---
qid: vq_ff15d1c1d2__faang__local
question: Can you explain what a confusion matrix is in R?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 436
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:44:15-05:00'
sources: []
---

**Clarify**  
You’re asking about the *confusion matrix*—a table that summarizes how predictions from a classification model line up against true labels in R. I’ll assume you want to compute it for a binary or multiclass problem and display it nicely.

**Approach**  
1. Collect predicted labels (`pred`) and true labels (`true`).  
2. Use `table(true, pred)` (or `caret::confusionMatrix`) to build the matrix.  
3. Convert to a data frame if you need custom formatting or export.

**Depth**  
```r
# Example with caret for richer output
library(caret)
pred  <- factor(sample(c("Yes","No"), 100, replace = TRUE))
true  <- factor(sample(c("Yes","No"), 100, replace = TRUE))

cm   <- confusionMatrix(pred, true)          # matrix + stats
print(cm$table)                              # raw counts

# Basic R table
tbl <- table(true, pred)
print(tbl)

# Convert to tibble for tidyverse use
library(tibble)
df_tbl <- as_tibble(tbl, rownames = "True")
```
- `confusionMatrix` gives sensitivity, specificity, Kappa, etc.  
- Complexity: O(n) time and O(k²) space where *k* is class count.

**Edge Cases**  
- Imbalanced classes → many zeros; interpret with caution.  
- Multi‑label problems need a different representation (e.g., one‑vs‑rest).  
- If `pred` or `true` have unseen levels, `table` will drop them—check factor levels first.

**Optimize & Communicate**  
For large datasets, use data.table’s `table()` for speed. When presenting to stakeholders, highlight key metrics (accuracy, precision/recall) derived from the matrix rather than raw counts. Explain that the confusion matrix is the foundational diagnostic tool before moving to ROC or PR curves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
