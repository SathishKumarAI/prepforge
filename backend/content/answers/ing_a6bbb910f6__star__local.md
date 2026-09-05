---
qid: ing_a6bbb910f6__star__local
question: 'Explain: Problems with R-CNN — R-CNN, Fast R-CNN, Faster R-CNN, YOLO \u2014
  Object Detection Algorithms | Towards Data Science'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 345
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:06:37-05:00'
sources: []
---

**Situation**  
When I joined a startup building an autonomous delivery robot, we needed real‑time object detection for navigation. Our first prototype used the original R‑CNN model trained on COCO, but it struggled to meet the 30 fps requirement on our embedded GPU.

**Task**  
I was tasked with diagnosing why R‑CNN lagged and refactoring the pipeline so that detection stayed accurate while running at least 15 fps on a Jetson Nano.

**Action**  
I broke down R‑CNN’s bottlenecks: (1) it ran a full ResNet‑101 forward pass for every of the ~2000 selective search proposals, costing ~3 s per image; (2) the two‑stage pipeline (proposal generation then classification) forced redundant computation. I replaced selective search with a fast Region Proposal Network (RPN), merged proposal and classification into a single network (Faster R‑CNN), and finally switched to YOLOv5, which uses a single convolutional head for bounding boxes and class scores. I tuned the anchor sizes to our robot’s typical object scales and pruned the model with TensorRT to fit the Nano.

**Result**  
YOLOv5 achieved 18 fps on the Jetson while maintaining 78% mAP—an 8× speedup over R‑CNN and a 12% increase in accuracy. I learned that architectural coupling (proposal + classifier) can cripple latency, and end‑to‑end training with appropriate anchors is key for edge deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
