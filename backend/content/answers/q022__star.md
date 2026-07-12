---
qid: q022
question: "What is computer vision and name a few core tasks?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** At a warehouse automation startup, leadership asked me to scope a camera system for the packing line, but they kept using "computer vision" as one vague bucket. Estimates were all over the place because nobody separated the tasks.

**Task** I had to define what computer vision actually meant for us and break the ask into concrete core tasks so we could size each one and pick models.

**Action** I framed computer vision as getting machines to extract meaning from images and video, then mapped our needs to specific tasks. Classification told us which product was in the bin. Object detection with bounding boxes located and counted items using a YOLO model. Semantic segmentation flagged damaged packaging pixel-by-pixel. We also had OCR for reading shipping labels. For each task I named the metric, like mAP for detection and IoU for segmentation.

**Result** Splitting it this way let us ship detection first in six weeks at 0.88 mAP, then add segmentation later. The takeaway: naming the exact vision task upfront is what turns a fuzzy request into a buildable plan.
