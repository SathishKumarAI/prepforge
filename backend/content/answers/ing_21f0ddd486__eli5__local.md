---
qid: ing_21f0ddd486__eli5__local
question: 'Explain: R-CNN — R-CNN, Fast R-CNN, Faster R-CNN, YOLO \u2014 Object Detection
  Algorithms | Towards Data Science'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 252
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:30:19-05:00'
sources: []
---

Imagine you’re a photographer trying to find all the people in a crowded street photo.  
**R‑CNN** is like first taking thousands of tiny zoomed‑in pictures (region proposals) and then sending each one through a separate camera (a neural net) to decide if it’s a person. It works, but it’s slow because every proposal gets its own image file.

**Fast R‑CNN** speeds this up by looking at the whole photo once with a single camera, then just pointing the same camera at each proposal area—no extra images needed.

**Faster R‑CNN** adds a smart “region generator” that learns where people are likely to be and produces proposals on the fly, so everything runs inside one fast pipeline.

**YOLO** (You Only Look Once) skips separate proposals entirely. It divides the photo into a grid, and each grid cell simultaneously predicts both the class (person or not) and the exact box around it—like having a single camera that instantly spots and outlines everyone in one pass.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
