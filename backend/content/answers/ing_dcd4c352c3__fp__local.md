---
qid: ing_dcd4c352c3__fp__local
question: 'Explain: Convolutional Neural Networks, Explained | Towards Data Science'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 455
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:48:50-05:00'
sources: []
---

### Why a *Convolution* is the right operation for images

An image can be seen as a function \(x:\mathbb{R}^{2}\to\mathbb{R}^C\) (two spatial axes, \(C\) channels).  
The goal of vision tasks is to extract **local, shift‑invariant patterns**—edges, textures, shapes—that are informative no matter where they appear.  

If we let a learnable filter \(\theta\in\mathbb{R}^{k\times k\times C}\) slide over the image and compute inner products

\[
y_{i,j} = \sum_{u,v,c}\theta_{u,v,c}\,x_{i+u,j+v,c},
\]

we are performing a *discrete convolution*. This operation is equivalent to projecting each local patch onto a learned basis vector. Because the same \(\theta\) is reused everywhere (weight sharing), the network automatically enforces translation equivariance: moving an object in the image shifts the activation by the same amount.  

From an optimization standpoint, this drastically reduces parameters—from \(O((k^2C)\times HW)\) to just \(O(k^2C)\)—making learning feasible on limited data and avoiding overfitting. It also imposes a *local receptive field* that mirrors biological vision: neurons respond only to their neighbourhoods.

### Non‑obvious insight

Most people view the filter as “detecting edges,” but mathematically it is performing **basis projection** in a high‑dimensional feature space. Each convolutional layer learns an orthogonal (or nearly so) basis for *local* image patches, turning raw pixels into a sparse representation that later layers can compose. This perspective explains why deeper networks discover increasingly abstract features: each layer re‑bases the previous one, akin to successive wavelet transforms. Thus CNNs are not merely edge detectors; they are learned multiscale linear transforms that respect geometry and locality while keeping parameter counts tractable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
