---
qid: ing_c1e63e6f2d__fp__local
question: 'Explain: Example of 2D Convolutional Layer — How Do Convolutional Layers
  Work in Deep Learning Neural Networks? - MachineLearningMastery.com'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 781
total_tokens: 971
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:54:22-05:00'
sources: []
---

### Why a 2‑D Convolution Layer Exists  

Deep nets learn functions \(f:\mathbb{R}^{H\times W\times C}\to\mathbb{R}^{H'\times W'}\).  
A naïve linear layer would need \((HWC)\!\cdot(H'W'C')\) parameters – far too many to train from data.  

The *fundamental problem* is that natural images exhibit **local correlation** and **shift invariance**: a pattern (edge, texture) looks the same no matter where it appears.  
Mathematically, we want an operator \(T\) such that  
\(T[x](u,v)=g(\{x(u+i,v+j)\}_{i,j})\) depends only on a small neighbourhood and is **equivariant** to translations: shifting input shifts output.  

The convolution satisfies both:

1. **Locality:** kernel size \((k\times k)\) limits receptive field.  
2. **Weight sharing:** the same \(k^2C\) weights are reused at every spatial location, enforcing equivariance and drastically reducing parameters.

---

### A Concrete Example

Let an input image be a 5×5 single‑channel matrix \(X\), and a filter (kernel) \(K\) be 3×3:

```
X = [[1,2,3,4,5],
     [6,7,8,9,10],
     [11,12,13,14,15],
     [16,17,18,19,20],
     [21,22,23,24,25]]

K = [[-1,0,1],
     [-2,0,2],
     [-1,0,1]]   (Sobel horizontal edge detector)
```

The convolution output \(Y\) at position \((u,v)\) is:

\[
Y_{uv}=\sum_{i=0}^{2}\sum_{j=0}^{2} K_{ij}\,X_{u+i,\;v+j}
\]

Computing the top‑left element (u=v=0):

\[
Y_{00}=(-1)\cdot 1+0\cdot 2+1\cdot3
      +(-2)\cdot6+0\cdot7+2\cdot8
      +(-1)\cdot11+0\cdot12+1\cdot13=4
\]

Repeating this sliding‑window operation yields a \(3\times3\) feature map highlighting horizontal edges.  
Note that the same 9 weights are reused across all 9 positions – *parameter sharing*.

---

### Deep Insight

Convolution is essentially a **projection onto a basis of local, shift‑invariant patterns**.  
Because each filter learns a linear combination of pixel neighbourhoods, it can be interpreted as extracting a *feature* that optimizes the loss under gradient descent.  

A non‑obvious fact: *convolutions are equivalent to multiplication in the Fourier domain*.  
Thus training a convolutional layer is akin to learning an optimal frequency response over local patches—connecting image processing, signal theory, and deep learning in one elegant operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
