---
qid: vq_d72b9042b8__fp__local
question: What is the ROC Curve, and how do you make one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 474
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:58:49-05:00'
sources: []
---

The ROC curve answers a **fundamental design question** for binary classifiers: *how well can the model separate positives from negatives when we are allowed to adjust its decision threshold?*  
A classifier outputs a score \(s(x)\). By varying a cutoff \(\tau\) and declaring “positive” whenever \(s(x)>\tau\), we obtain two error rates:

- **True‑Positive Rate (TPR)** = \(P(s(x)>\tau\,|\,y=1)\)
- **False‑Positive Rate (FPR)** = \(P(s(x)>\tau\,|\,y=0)\)

Plotting \((\text{FPR},\text{TPR})\) for all \(\tau\in[0,1]\) yields the ROC curve. This construction is rooted in **information theory**: both TPR and FPR are expectations of indicator functions over the score distribution; their joint variation captures how much the score discriminates between classes. The area under the curve (AUC) equals the probability that a randomly chosen positive receives a higher score than a random negative—an elegant, threshold‑independent measure of ranking quality.

**Non‑obvious insight:**  
The ROC is *invariant to class prevalence*. Because it normalizes by each class’s size, comparing ROC curves across datasets with different imbalance levels is valid—a property that precision–recall plots lack. This invariance stems from the ROC’s foundation in conditional probabilities rather than absolute counts.

**How to make one:**  
1. Compute scores \(s_i\) for all samples.  
2. Sort by decreasing \(s_i\).  
3. Walk through sorted list, updating cumulative TP and FP counts.  
4. At each unique score (or every step), compute TPR = TP/total positives, FPR = FP/total negatives.  
5. Connect points to form the curve; add \((0,0)\) and \((1,1)\) anchors.  

The resulting ROC succinctly encapsulates a classifier’s discriminatory power across all operating points.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
