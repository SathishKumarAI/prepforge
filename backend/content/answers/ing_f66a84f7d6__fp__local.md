---
qid: ing_f66a84f7d6__fp__local
question: What is the difference between precision and recall? How F1 combines both?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 456
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:43:39-05:00'
sources: []
---

**Precision–Recall from first principles**

In a binary classifier we are asked: *“Given an instance is predicted positive, how often is it truly positive?”*  
This question is a conditional probability \(P(Y=1\mid \hat Y=1)\), which is precisely **precision**.  

Conversely, we ask: *“Among all true positives, how many did the model catch?”*  
That is \(P(\hat Y=1\mid Y=1)\), i.e. **recall** (or sensitivity).  

Both metrics are limits of a confusion matrix; they arise from different conditioning events—one fixes the prediction, the other fixes the ground truth. Thus precision penalizes false alarms while recall penalizes missed detections.

**Why both matter**

- A model that predicts almost everything as positive has high recall but low precision.
- A model that is very conservative achieves high precision but may miss many positives.

The **F1 score** is the harmonic mean \( \displaystyle F_1 = 2\frac{P\,R}{P+R}\).  
It can be derived from the requirement that a combined metric should reward both high precision and recall, yet penalize imbalance more strongly than an arithmetic mean. The harmonic mean is the *minimum* of two numbers under the constraint that their product remains constant; thus \(F_1\) cannot exceed either \(P\) or \(R\), forcing simultaneous improvement.

**Non‑obvious insight**

Precision and recall are not symmetric: improving one often hurts the other because they condition on different events. The F1 score, being a harmonic mean, implicitly encodes a *trade‑off curve* that is convex in the precision–recall space—any point on this curve cannot be surpassed by another with equal product \(P\times R\). This geometric property explains why models tuned to maximize F1 tend to sit near the “elbow” of the ROC/PR curves, balancing both errors optimally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
