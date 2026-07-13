---
qid: q022
question: "What is computer vision and name a few core tasks?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd define computer vision as enabling machines to extract meaning from images and video. Core tasks: image classification (what is this), object detection (what and where, with bounding boxes), semantic and instance segmentation (per-pixel labeling), OCR (text extraction), and tracking across video frames.

To show **Customer Obsession** and **Ownership** I'd anchor it in a quality-inspection system I owned on a production line. We framed it as object detection to locate and classify defects in real time. The measurable result: we caught 95% of defects automatically, cut manual inspection labor by 60%, and reduced escaped defects reaching customers, which was the outcome that actually mattered to the business.

I'd surface the trade-offs I decided: detection is heavier than classification, so where we only needed a pass/fail I used classification to hit the line's throughput budget; and I balanced model accuracy against inference latency and cost, choosing edge inference to avoid per-image cloud round-trips. On AWS I'd prototype with Amazon Rekognition for common tasks and move to a custom SageMaker model when we needed domain-specific defects, deploying to edge with SageMaker Edge or Greengrass.

A bar-raiser listens for whether I pick the right task granularity for the real requirement and throughput budget, and whether I owned the end-to-end outcome, defects prevented, not just model accuracy.
