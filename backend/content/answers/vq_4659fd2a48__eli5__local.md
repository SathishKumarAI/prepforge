---
qid: vq_4659fd2a48__eli5__local
question: What are SVM's different Kernels?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 257
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:09:46-05:00'
sources: []
---

Think of a Support Vector Machine (SVM) as a smart border guard that decides whether an item belongs to one side or the other.  
The *kernel* is like the guard’s special “lens” – it changes how the guard looks at the items so he can separate them even when they’re not cleanly split.

- **Linear kernel**: The guard just draws a straight line (or flat wall) between the two sides, good when the items are already clearly separated.  
- **Polynomial kernel**: He twists the wall into a curved shape that can follow a polynomial pattern—think of bending a ruler to match a curve on a map.  
- **Radial Basis Function (RBF) or Gaussian kernel**: The guard uses a flexible, bubble‑like boundary that hugs each cluster tightly, like wrapping a rubber sheet around groups of items so they stay distinct.  
- **Sigmoid kernel**: He behaves like an S‑shaped switch, useful when the data resembles neural activation patterns.

Each kernel reshapes the space in which the guard operates, letting the same basic decision rule (a hyperplane) work on more complex arrangements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
