---
qid: vq_a39e765330__fp__local
question: How does changing the stride affect the output feature map?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 414
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:49:33-05:00'
sources: []
---

**Stride as a geometric resampling operator**

When a convolutional kernel slides over an input tensor, each position produces one element of the output feature map.  
If we denote the input size by \(H\times W\), the kernel size by \(k\times k\) and the stride by \(s\), then the number of valid positions along one dimension is  

\[
n = \Bigl\lfloor \frac{H-k}{\,s} + 1 \Bigr\rfloor .
\]

Thus the output spatial dimensions shrink roughly proportionally to \(1/s\).  
From an information‑theoretic view, stride performs **downsampling**: every step of size \(s\) selects a new “sample” from the input’s receptive field. The larger the stride, the fewer samples we keep and the coarser the representation becomes.

Because each output element aggregates values over a \(k\times k\) window that now moves in jumps of \(s\), the **receptive field** grows: an output pixel at position \((i,j)\) actually depends on input pixels from \([i s, i s + k-1]\times[j s, j s + k-1]\). Larger stride therefore gives a larger receptive field per neuron without increasing filter size.

*Non‑obvious insight*: Stride not only reduces spatial resolution but also **controls aliasing**. When \(s>1\) the convolution samples the input at lower frequency; if the input contains high‑frequency content, this downsampling can introduce aliasing artifacts that are hard to remove later. Thus choosing stride is a trade‑off between computational efficiency and preserving fine detail—often overlooked in casual network design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
