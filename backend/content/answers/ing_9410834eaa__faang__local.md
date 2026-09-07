---
qid: ing_9410834eaa__faang__local
question: 'Explain: Convolution in Convolutional Neural Networks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 573
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:28:39-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *convolution* as used inside a CNN. I’d confirm whether the interviewer wants a mathematical description, intuition about feature extraction, or how it’s implemented on hardware.

**Approach**  
1. Define convolution mathematically.  
2. Show its role in sliding a kernel over an input tensor.  
3. Explain key hyper‑parameters (kernel size, stride, padding).  
4. Relate to learning: weights are shared across spatial locations.  
5. Touch on back‑propagation and GPU acceleration.

**Depth**  
In 2D CNNs, the output at position \((i,j)\) for channel \(k\) is  
\(O_{ijk} = b_k + \sum_{c=1}^{C_{\text{in}}}\sum_{u=0}^{K-1}\sum_{v=0}^{K-1} W_{uvkc}\,I_{(i+u)(j+v)c}\).  
The kernel \(W\) (size \(K\times K\), depth \(C_{\text{in}}\)) slides over the input image \(I\); each location produces a scalar that becomes part of the next feature map.  

*Stride* controls how far the kernel moves each step; larger strides reduce spatial resolution but increase speed.  
*Padding* (zero or reflective) keeps output size consistent with input when needed.  

Because the same weights are reused everywhere, convolution dramatically reduces parameters compared to a fully connected layer and preserves locality—critical for images.

During training, gradients flow through the same shared weights: \(\partial L/\partial W_{uvkc} = \sum_{i,j}\partial L/\partial O_{ijk}\cdot I_{(i+u)(j+v)c}\). This operation is highly parallelizable on GPUs (tensor cores), giving a typical time complexity of \(O(HW C_{\text{out}} K^2 C_{\text{in}})\).

**Edge Cases**  
- Very small kernels (\(1\times1\)) reduce to channel‑wise linear transforms.  
- Stride > 1 can cause aliasing; need careful downsampling or pooling.  
- Padding with non‑zero values changes receptive field and may introduce artifacts.

**Optimize & Communicate**  
I’d highlight that modern libraries fuse convolution with bias addition, activation, and even batch‑norm into a single kernel launch, cutting overhead. I would conclude by noting that understanding these primitives lets us design efficient models (e.g., depthwise separable convs) and debug training issues such as vanishing gradients or overfitting due to too large kernels.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
