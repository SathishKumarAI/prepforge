---
qid: ing_21f0ddd486__star__local
question: 'Explain: R-CNN — R-CNN, Fast R-CNN, Faster R-CNN, YOLO \u2014 Object Detection
  Algorithms | Towards Data Science'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 438
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:37:15-05:00'
sources: []
---

**Situation** – In a summer internship I was tasked with building an object‑detection model for a traffic‑camera dataset: 10 k images of cars, pedestrians and cyclists at night, where the baseline accuracy was only 55 % mAP and inference lagged behind real‑time requirements.

**Task** – My goal was to raise mAP above 80 % while keeping latency under 50 ms per image on a single GPU, so the system could run in an edge unit for autonomous parking assistance.

**Action** – I started with R‑CNN: extracted ~2000 selective‑search proposals per image, fed each crop into a pre‑trained VGG16, and trained a linear SVM. It gave 70 % mAP but took 2 s/image. Next I moved to Fast R‑CNN, sharing the convolutional backbone across all proposals; this cut inference to 0.8 s while boosting mAP to 75 %. Then I implemented Faster R‑CNN by replacing selective search with a Region Proposal Network (RPN) that learned anchors on the fly; training time dropped to 1 h and inference fell to 0.3 s, achieving 81 % mAP. Finally, for a pure speed test, I benchmarked YOLOv3: it ran at 15 ms/image with 78 % mAP, which is acceptable but slightly lower accuracy.

**Result** – Faster R‑CNN became the production choice: 81 % mAP and <0.5 s per image on a GTX 1080Ti. I learned how architectural changes (shared convolutions, learnable proposals) trade off speed vs. precision, and that choosing the right detector depends on the deployment constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
