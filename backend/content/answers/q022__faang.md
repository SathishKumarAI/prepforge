---
qid: q022
question: "What is computer vision and name a few core tasks?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll define computer vision as a field, then enumerate canonical tasks with their output types. I'll assume the interviewer wants breadth plus a sense of how tasks differ in granularity.

**Approach** — Define the goal, then order tasks by increasing spatial precision so the structure is obvious.

**Depth** — Computer vision is the field enabling machines to extract meaning from pixels — deriving structured understanding from images and video. Core tasks, by granularity: *Image classification* — one label per image ("dog"). *Object detection* — bounding boxes plus labels for multiple objects (YOLO, Faster R-CNN). *Semantic segmentation* — per-pixel class labels, no instance distinction. *Instance segmentation* — per-pixel masks that separate individual objects (Mask R-CNN). Beyond these: *pose estimation* (keypoints), *optical flow* (motion), *depth estimation*, *image generation/captioning* bridging to multimodal models. Each raises output complexity and annotation cost.

**Edge cases** — Occlusion, scale variation, lighting, class imbalance, and domain shift between train and deployment all break naive models.

**Optimize & communicate** — I'd mention transfer learning from ImageNet/CLIP backbones and that vision transformers now underpin many SOTA systems. Signal I aim to send: I organize a broad field into a clean taxonomy rather than listing buzzwords.
