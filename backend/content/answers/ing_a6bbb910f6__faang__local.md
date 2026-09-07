---
qid: ing_a6bbb910f6__faang__local
question: 'Explain: Problems with R-CNN — R-CNN, Fast R-CNN, Faster R-CNN, YOLO \u2014
  Object Detection Algorithms | Towards Data Science'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 602
total_tokens: 860
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:12:40-05:00'
sources: []
---

**Clarify**  
The interview asks you to compare the evolution of object‑detection pipelines: R‑CNN → Fast R‑CNN → Faster R‑CNN → YOLO, focusing on their shortcomings and how each successor mitigates them. Assume the reader knows basic CNNs but not the specific architectures.

**Approach**  
1. List key metrics (speed, accuracy, complexity).  
2. For each model, state its core idea, main limitation, and the improvement that follows.  
3. Conclude with a high‑level trade‑off summary.

**Depth**  

| Model | Core Idea | Main Problem | Fix in Next Version |
|-------|-----------|--------------|---------------------|
| **R‑CNN** | Region proposals (Selective Search) + CNN per proposal | *Slow* – ~200 ms per image; heavy I/O due to separate forward passes. | **Fast R‑CNN**: RoI pooling inside a single forward pass, reducing time to <30 ms. |
| **Fast R‑CNN** | Unified backbone + shared features | Still needs external proposal generator → *extra overhead* and non‑end‑to‑end training. | **Faster R‑CNN**: Adds Region Proposal Network (RPN) that shares convolutional layers, fully end‑to‑end, ~2× speedup. |
| **Faster R‑CNN** | Anchor‑based RPN + ROI head | *Complex* hyper‑parameters (anchors, IoU thresholds); struggles with very small or crowded objects due to fixed anchors. | **YOLOv3/v4**: Single‑stage detector that predicts boxes and classes in one forward pass; uses multi‑scale feature maps for small objects, eliminating anchor tuning. |
| **YOLO** | Grid cells → direct bounding box + class prediction | *Lower precision* on tiny/overlapping objects (single‑box per cell). | YOLOv4/v5: Uses CSPDarknet backbone, CIoU loss, and PANet for better feature fusion, improving AP while keeping <30 fps. |

**Edge Cases**  
- Extremely small or densely packed objects still hurt YOLO; anchor‑based methods (Faster R‑CNN) can perform better if tuned.  
- RPN may generate redundant boxes on cluttered scenes, affecting Fast/​Faster speed.

**Optimize & Communicate**  
Explain that the evolution trades **accuracy for speed** and **complexity for end‑to‑end training**. Highlight that YOLO’s single‑stage design is ideal for real‑time applications (e.g., drones), whereas Faster R‑CNN remains preferable when highest precision on varied object scales is required. Use this narrative to show you understand both algorithmic internals and practical deployment trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
