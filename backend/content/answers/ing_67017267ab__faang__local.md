---
qid: ing_67017267ab__faang__local
question: 'Explain: Validating Bounding Box Annotations — Uber Engineering \u2014
  Where the Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 433
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:43:50-05:00'
sources: []
---

**Clarify**  
You’re asked how an engineering team at a ride‑hailing company would validate bounding box annotations used for training computer vision models (e.g., detecting cars or pedestrians). I’d confirm: *What data source?* (camera feeds, LIDAR fusion) and *what metrics matter?* (IoU thresholds, class coverage).

**Approach**  
1. **Ground‑truth audit** – sample frames, have human labelers re‑draw boxes, compute IoU against originals.  
2. **Statistical checks** – mean/variance of box sizes, aspect ratios per class to spot outliers.  
3. **Cross‑modal consistency** – compare 2D boxes with 3D detections (LIDAR) for spatial alignment.  
4. **Automated sanity tests** – run a quick inference on the same frame; if the model predicts a different box, flag it.

**Depth**  
- Compute *Intersection over Union* (IoU) for each pair; flag boxes with IoU < 0.5 as potential errors.  
- Use clustering to detect anomalous box coordinates that deviate from class‑specific distributions.  
- Leverage an active learning loop: model uncertainty drives which frames get re‑labelled, reducing human effort.  
Complexity: O(N) per frame for IoU; overall linear in dataset size.

**Edge Cases**  
- Occlusions leading to partial boxes (should be accepted with lower IoU).  
- Rare classes (e.g., bicycles) where variance is naturally higher – need separate thresholds.  
- Video frames where the same object appears across multiple views—ensure consistent labeling.

**Optimize & Communicate**  
Explain that validation balances *precision* (high IoU) and *coverage* (all objects labeled). Highlight that automated sanity checks drastically cut manual QA time while maintaining high annotation quality, which directly improves model accuracy in production. This structured reasoning demonstrates problem‑solving depth expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
