---
qid: ing_b1776c42cf__fp__local
question: 'Explain: Fast R-CNN — R-CNN, Fast R-CNN, Faster R-CNN, YOLO \u2014 Object
  Detection Algorithms | Towards Data Science'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 444
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:21:21-05:00'
sources: []
---

**From proposal to prediction: the evolution of object detectors**

The core problem is *localising* and *classifying* every object in an image with minimal computation.  
1. **R‑CNN** solves this by first generating ≈2000 region proposals (via selective search), warping each to a fixed size, feeding it through a CNN, then classifying with SVMs. The bottleneck is the repeated forward pass for each proposal; the model learns a shared feature extractor but never reuses intermediate activations.

2. **Fast R‑CNN** removes this redundancy by running the CNN once on the whole image to obtain a convolutional feature map. Each proposal is *roi‑pool*‑ed from this map, giving fixed‑size features that feed directly into fully connected layers and softmax classifiers. Training becomes end‑to‑end because gradients flow through roi‑pooling back to shared conv layers.

3. **Faster R‑CNN** turns the still‑handcrafted proposal stage into a learnable *Region Proposal Network (RPN)*: a tiny CNN that slides over the feature map and outputs bounding‑box offsets and objectness scores for anchors. Thus both localisation and classification share the same backbone, yielding ~30× speedup.

4. **YOLO** reframes detection as a single regression problem: an image is divided into an \(S\times S\) grid; each cell predicts \(B\) bounding boxes plus class probabilities. The network is trained end‑to‑end with a multi‑task loss, trading some localization precision for extreme speed (≈45 fps).

**Non‑obvious insight:**  
All these methods implicitly solve the *spatial correspondence* problem: how to map a dense feature map back to irregular image coordinates. RPNs and YOLO’s anchor mechanism are two different strategies—one learns anchors, the other fixes them—but both rely on the same geometric principle that convolutional features preserve relative spatial layout, enabling efficient mapping from pixels to boxes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
