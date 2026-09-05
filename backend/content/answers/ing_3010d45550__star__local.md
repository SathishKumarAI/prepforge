---
qid: ing_3010d45550__star__local
question: 'Explain: Conclusion — R-CNN, Fast R-CNN, Faster R-CNN, YOLO \u2014 Object
  Detection Algorithms | Towards Data Science'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 345
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:04:33-05:00'
sources: []
---

**Situation:**  
During my senior capstone project I was tasked with building an autonomous delivery drone that could identify and avoid obstacles in real time while flying through a cluttered warehouse.

**Task:**  
I needed to select a suitable object‑detection pipeline that balanced accuracy, speed, and onboard compute limits so the drone could process video frames at 30 fps on a Jetson Nano.

**Action:**  
I evaluated four mainstream detectors: R‑CNN, Fast R‑CNN, Faster R‑CNN, and YOLOv3. I first benchmarked R‑CNN and Fast R‑CNN on our dataset; both delivered high mean average precision (mAP≈0.82) but required a separate region proposal step and were too slow (~5 fps). Switching to Faster R‑CNN improved speed to ~12 fps by integrating the Region Proposal Network into the backbone, yet it still exceeded my 30 fps target when running on the Jetson. I then prototyped YOLOv3, which runs a single forward pass and achieved ~28 fps with mAP≈0.78—acceptable for safety-critical avoidance. Finally, I fine‑tuned YOLOv3’s anchor boxes to match our object size distribution, boosting precision on small obstacles.

**Result:**  
The drone successfully avoided 96% of detected obstacles during flight tests, meeting the real‑time requirement. I learned that choosing an algorithm often involves trading off a few percentage points in accuracy for significant gains in latency and that customizing anchor boxes can bridge that gap.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
