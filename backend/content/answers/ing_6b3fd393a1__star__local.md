---
qid: ing_6b3fd393a1__star__local
question: 'Explain: Neural Network Optimizers from Scratch in Python | Towards Data
  Science'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 378
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:01:49-05:00'
sources: []
---

**Situation** – At a six‑month hackathon for my university’s AI club, we were asked to build a lightweight neural net framework in Python that could run on an embedded device. The judges wanted us to show not just forward propagation but also custom training logic.

**Task** – I was responsible for implementing the optimizer layer from scratch: gradient descent, momentum, and Adam, all without relying on NumPy’s built‑in functions or external autograd libraries.

**Action** – First, I coded a simple vector class using Python lists to hold parameters and gradients. Then I wrote three optimizer classes:  
1) **SGD** that updates weights by `w -= lr * grad`;  
2) **Momentum** that maintained a velocity buffer with decay 0.9;  
3) **Adam** that kept running estimates of mean (`m`) and variance (`v`) using bias‑correction terms.  
I integrated them into the training loop, added unit tests to verify convergence on a synthetic XOR dataset, and benchmarked each optimizer’s runtime on a Raspberry Pi Zero. I also visualized loss curves with Matplotlib to demonstrate Adam’s superior stability.

**Result** – The team finished the framework in 48 hours, and our demo achieved a test accuracy of **96 %** on the XOR problem, outperforming the baseline TensorFlow model by 4 %. On the Pi Zero, Adam ran at ~12 ms per epoch versus SGD’s 18 ms. I learned how optimizer hyperparameters directly affect convergence speed and stability, and gained deep insight into back‑propagation mechanics without the abstraction of high‑level libraries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
