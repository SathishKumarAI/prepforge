---
qid: vq_a39e765330__faang__local
question: How does changing the stride affect the output feature map?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 513
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:26:15-05:00'
sources: []
---

**Clarify**  
We’re asking how the convolutional *stride* (step size) influences the spatial dimensions and receptive field of the resulting feature map.  
Assumptions to confirm: single‑channel input, square kernels, no dilation, padding set to “valid” unless otherwise noted.

---

### Approach  
1. Compute output height/width from stride, kernel size, and padding.  
2. Explain how larger strides reduce spatial resolution but increase the effective receptive field per output unit.  
3. Discuss trade‑offs (efficiency vs. loss of detail).  

---

### Depth  
For an input of size \(H \times W\), filter size \(k\), stride \(s\), and padding \(p\):

\[
H_{\text{out}} = \left\lfloor \frac{H + 2p - k}{s} \right\rfloor + 1,
\quad
W_{\text{out}} = \left\lfloor \frac{W + 2p - k}{s} \right\rfloor + 1.
\]

- **Stride = 1**: Dense sampling; output matches input size (with padding).  
- **Stride > 1**: Each output pixel covers an \(s\times s\) block of the previous layer, so the map shrinks by roughly a factor of \(s\) in each dimension.  
  *Example:* stride = 2 halves both height and width (≈¼ number of activations).  
- **Receptive field** grows: an output unit now aggregates information from a larger area (\(k + (s-1)\times\text{prev receptive}\)).  

---

### Edge Cases  
- If \(H + 2p - k\) is not divisible by \(s\), the last window may be partially outside; frameworks handle this via floor or padding.  
- Very large strides can cause outputs of size 0 (invalid).  
- Padding changes the formula; “same” padding keeps output ≈ input/stride.

---

### Optimize & Communicate  
Use stride > 1 to reduce computation in deep networks, but balance against loss of spatial detail—critical for segmentation tasks. When communicating this to interviewers, highlight how stride trades resolution for efficiency and explain the math succinctly. This demonstrates structured reasoning, depth, and awareness of practical implications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
