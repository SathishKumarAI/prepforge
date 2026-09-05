---
qid: ing_515dbf68bc__star__local
question: How does dropout work - and what changes between training and inference?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 270
total_tokens: 508
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:11:09-05:00'
sources: []
---

**Situation** – In my last project I was fine‑tuning a ResNet‑50 for medical image classification on a limited dataset of 12,000 CT scans. The model overfit quickly: training accuracy hit 99 % while validation plateaued at 78 %.  
**Task** – I needed to reduce overfitting without sacrificing too much performance or adding complex regularizers.  
**Action** – I introduced dropout after each residual block with a keep‑probability of 0.8, implemented in PyTorch’s `nn.Dropout2d`. During training the layer randomly zeroed out entire feature maps per forward pass, effectively sampling from an ensemble of subnetworks and forcing the network to learn redundant representations. At inference time I disabled dropout (`model.eval()`), so all channels remained active; the expected activations were already accounted for by the keep‑probability during training.  
**Result** – Validation accuracy rose to 85 %, a 7 % lift, while test set performance stayed stable at 84 %. I learned that dropout is simply a stochastic mask applied only in training—at inference we use the full network, scaling activations implicitly via the keep‑probability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
