---
qid: ing_ff5e327f11__faang__local
question: 'Explain: Worked Example of Convolutional Layers — How Do Convolutional
  Layers Work in Deep Learning Neural Networks? - MachineLearningMastery.com'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 456
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:33:47-05:00'
sources: []
---

**Clarify**  
The interview asks for a concrete, step‑by‑step illustration of how a convolutional layer transforms an input image into feature maps in a neural network. I’ll assume a single‑channel (grayscale) image, a small kernel, stride = 1 and no padding.

**Approach**  
1. Present the input tensor shape.  
2. Show the convolution operation mathematically.  
3. Compute the first few output pixels manually.  
4. Explain bias addition, activation, and output dimension.  

**Depth**  
*Input*: 5×5 matrix `I`.  
*Kernels*: one 3×3 filter `W` with weights \(w_{ij}\).  
Convolution at position (1,1):  
\[
O_{11} = \sum_{i=0}^{2}\sum_{j=0}^{2} w_{ij}\cdot I_{i+1,j+1}
\]
Compute each term, sum to get a scalar. Repeat for all valid positions → 3×3 output `O`.  
Add bias \(b\): \(\tilde{O}_{pq}=O_{pq}+b\).  
Apply ReLU: \(R_{pq}=\max(0,\tilde{O}_{pq})\).  
Output shape: \((H-k+1,\,W-k+1)\) → 3×3 here.  

**Edge Cases**  
*Zero padding*: preserves input size.  
*Stride > 1*: subsamples the feature map.  
*Multiple filters*: stack outputs along depth dimension.  
*Non‑square kernels or multi‑channel inputs*: extend summation accordingly.

**Optimize & Communicate**  
Highlight that convolution is a linear filter followed by non‑linearity, and that GPU implementation uses im2col or direct kernel tricks for O(n k²). Mention that deeper layers learn higher‑level abstractions. Conclude: “So each conv layer slides its learned weights over the image, aggregates local patterns into feature maps, then passes them forward—exactly what we just computed.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
