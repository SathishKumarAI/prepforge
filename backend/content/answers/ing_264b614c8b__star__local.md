---
qid: ing_264b614c8b__star__local
question: 'Explain: Classification/Extraction: ROC, PR, class distributions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 375
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:45:20-05:00'
sources: []
---

**Situation**  
While leading a fraud‑detection pilot for a fintech client, the existing model had an AUC of 0.78 and was flagging too many legitimate transactions, inflating false positives to 12 %. The business required a tighter balance between catching fraud and maintaining customer trust.

**Task**  
I needed to rebuild the classifier, tune its threshold, and present performance metrics that reflected both class imbalance and operational cost—specifically ROC, PR curves, and the impact of skewed class distributions on evaluation.

**Action**  
1. Collected a balanced validation set (5 % fraud) using SMOTE, then re‑trained a Gradient Boosting model with calibrated probabilities.  
2. Generated ROC and Precision–Recall curves; noted that while AUC‑ROC was 0.84, the PR curve’s average precision rose from 0.12 to 0.29—highlighting sensitivity to minority class prevalence.  
3. Conducted cost‑based threshold analysis: plotted true positive rate vs. false positive cost per $1M of flagged volume, choosing a threshold that reduced FP cost by 35 % while raising TP by 8 %.  
4. Documented how a highly skewed distribution (0.5 % fraud) can inflate ROC AUC but mislead stakeholders; PR curves better represented real‑world performance.

**Result**  
The new model achieved an AUPRC of 0.29 and cut false positives from 12 % to 7 %, saving the client ~$2M annually in processing costs. I learned that when classes are imbalanced, PR curves provide a more honest picture of model utility, and that threshold tuning must consider business‑specific cost functions rather than raw accuracy alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
