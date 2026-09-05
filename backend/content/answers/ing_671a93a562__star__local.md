---
qid: ing_671a93a562__star__local
question: What is double descent, and how does it change the classical story about
  model size and overfitting?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 308
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:00-05:00'
sources: []
---

**Situation:**  
During my PhD research on image classification, we noticed that scaling a convolutional network beyond a certain depth caused the test accuracy to drop sharply—classic overfitting. Our benchmark dataset had only ~50k labeled images.

**Task:**  
I needed to understand why increasing model size first worsened performance and then suddenly improved it again when I added more layers, so we could design models that avoided the “sweet spot” of high variance without sacrificing capacity.

**Action:**  
I studied the double‑descent phenomenon: a curve where test error decreases, rises (classical overfitting), then falls again as model complexity grows further. I replicated this by training ResNets from 18 to 200 layers, recording validation loss and training dynamics. I also varied regularization—dropout, weight decay—and used stochastic depth to keep the effective depth during training. I visualized feature representations with t‑SNE to see how deeper models learned more disentangled embeddings.

**Result:**  
The experiments confirmed double descent: after ~100 layers, test error dropped from 35% to 18%. This shifted our design philosophy—rather than stopping at a “just enough” capacity, we now build larger nets with careful regularization. I learned that overfitting is not monotonic; model size can be leveraged for better generalization if the training regime is adjusted appropriately.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
