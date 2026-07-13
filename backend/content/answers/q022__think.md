---
qid: q022
question: "What is computer vision and name a few core tasks?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** State that you'll give a crisp definition plus a spanning list of tasks, and assume the interviewer wants breadth (a taxonomy) rather than a deep dive into one. A quick "should I go broad or deep on one task?" shows judgment.

2. **Mental model.** Organize tasks by the *granularity of the output*: whole-image label, boxes, per-pixel, then generation. This ladder makes the list memorable and shows you understand how tasks relate rather than reciting buzzwords.

3. **Reason step by step.** Define CV as giving machines the ability to interpret images/video. Then climb the granularity ladder: classification (one label), object detection (boxes + labels, e.g. YOLO/Faster R-CNN), semantic/instance segmentation (per-pixel), then specialized tasks - OCR, face/landmark recognition, pose estimation, and image generation. Close by naming the modeling backbone: CNNs and increasingly Vision Transformers.

4. **Traps to avoid.** Don't conflate classification with detection, or semantic with instance segmentation. Don't forget video/temporal tasks exist.

5. **Sanity-check.** Anchor one or two tasks to real applications (autonomous driving, medical imaging) so the list feels grounded, and verify each named task actually differs in output type from its neighbors.
