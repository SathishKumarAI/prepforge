---
qid: ing_a6bbb910f6__fp__local
question: 'Explain: Problems with R-CNN — R-CNN, Fast R-CNN, Faster R-CNN, YOLO \u2014
  Object Detection Algorithms | Towards Data Science'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 578
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:00:16-05:00'
sources: []
---

### Why the early “R‑CNN” family struggled

At its core, object detection is a joint **classification + localization** problem: for every image we must decide *what* objects appear and *where* they are.  
The original R‑CNN tackles this by first generating a handful of region proposals (e.g., Selective Search), then feeding each proposal through a deep CNN to extract features, finally classifying the feature vector with SVMs and refining the bounding box with a linear regressor.

**1. Inference bottleneck**  
- Every proposal is forwarded independently through the convolutional backbone.  
- With ~2 000 proposals per image, inference becomes \(O(N_{\text{proposals}})\) times slower than a single forward pass.  
- The fundamental principle of *shared computation* (used in CNNs for whole‑image tasks) is violated.

**2. Training inefficiency**  
- SVM and regressor training are decoupled from the network’s back‑propagation, requiring two separate passes per batch.  
- Gradients cannot flow from the detection loss into earlier convolutional layers efficiently; the network learns only a shallow mapping for each proposal.

Fast R‑CNN addressed the first issue by **sharing** convolutions over the entire image and extracting region features via RoI pooling. However, it still relies on an external proposal generator, so its speed is limited by that stage. Moreover, the fixed grid of RoIs introduces quantization errors in localization.

Faster R‑CNN introduced a *Region Proposal Network* (RPN) that predicts anchors directly from convolutional feature maps, eliminating the need for Selective Search and achieving near‑real‑time speeds. Yet the RPN is still trained separately from the detector head; the two losses are only loosely coupled.

YOLO reformulates detection as a single regression problem over a dense grid of anchor boxes, allowing end‑to‑end training but sacrificing localization precision when objects are small or densely packed.

**Non‑obvious insight:**  
All these variants trade off *shared computation* against *proposal quality*. The deeper the network, the more expensive each proposal’s forward pass becomes. Hence, **optimizing for shared feature extraction (as in Faster R‑CNN) inherently limits the granularity of proposals**; pushing finer localization requires either a second stage or an entirely different architecture that can jointly learn detection and region refinement without duplicating convolutions.

In short, the evolution from R‑CNN to YOLO reflects a balancing act between computational sharing and proposal fidelity—each design choice is dictated by how efficiently the network can propagate gradients through shared convolutional layers while maintaining accurate localization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
