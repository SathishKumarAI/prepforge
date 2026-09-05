---
qid: ing_9671cfd8f6__star__local
question: 'Explain: Key Results — Helix 02 Living Room Tidy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 396
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:33:45-05:00'
sources: []
---

**Situation** – In the third quarter of last year, I joined a product team building a smart home assistant called Helix. The team was tasked with launching “Helix 02 Living Room Tidy,” an autonomous cleaning routine that could detect clutter and plan a path for our robot vacuum. Our KPI was to reduce manual cleanup time by 40% and hit a user satisfaction score of 4.5/5 within six months.

**Task** – I needed to build a perception pipeline that could classify objects (e.g., toys, shoes, mugs) in real‑time from RGB-D data, generate an occupancy map, and output a prioritized cleaning plan while respecting dynamic constraints like moving pets.

**Action** – I first curated a dataset of 12k annotated frames using LabelMe, then fine‑tuned a YOLOv8 model for object detection. For depth, I integrated Open3D to create voxel grids at 5 cm resolution. The planning module used A* on the grid with cost penalties for fragile items and a learned priority score from a small MLP that weighed item type and user preferences. To keep latency below 200 ms, I deployed the inference graph on an NVIDIA Jetson Nano and optimized with TensorRT.

**Result** – After beta testing with 150 households, the robot reduced clutter‑related cleanup time by 48% (from 30 min to 15 min) and achieved a satisfaction score of 4.7/5. The model’s precision/recall for objects was 0.92/0.88 respectively. I learned that tight integration between perception, planning, and edge‑device optimization is key to delivering real‑world impact in smart home ML.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
