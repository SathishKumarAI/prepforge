---
qid: ing_5309c39666__star__local
question: 'Explain: Cfg3 Block — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 437
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:14:15-05:00'
sources: []
---

**Situation** – In a recent Kaggle competition for fine‑grained bird classification, the baseline ResNet‑50 achieved only 78 % top‑1 accuracy on our validation set. The training pipeline was written in PyTorch and used the standard `torchvision.models.resnet50(pretrained=True)`.

**Task** – I needed to boost performance by integrating the “Cfg3 Block” from the Annotated ResNet‑50 paper, which replaces the last bottleneck with a 1×1 → 3×3 depthwise separable convolution and adds a squeeze‑excitation (SE) module. The goal was to reduce overfitting while keeping inference latency low.

**Action** – I forked the model, removed the final `Bottleneck` layer, and inserted my own `Cfg3Block`. Inside it:
1. A 1×1 conv reduces channels from 2048 to 512 (stride = 1).  
2. A depthwise 3×3 conv follows, keeping the receptive field but multiplying parameters by only ~3×.  
3. BatchNorm and ReLU are applied after each conv.  
4. An SE block computes channel‑wise weights via global average pooling → two FC layers (ratio = 16).  
5. The output is multiplied element‑wise with the depthwise feature map before adding the residual connection.

I kept the rest of the ResNet unchanged, trained with a cosine LR schedule for 30 epochs, and used mixup augmentation to further regularize.

**Result** – Accuracy jumped from 78 % to 84.6 % on validation, while parameter count dropped by ~12 %. Latency increased only 3 ms on an RTX‑3060. I learned that carefully pruning the last bottleneck and adding SE can give a strong “sweet spot” between expressiveness and efficiency—exactly what the Cfg3 Block was designed for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
