---
qid: ing_3b8aaec747__star__local
question: 'Explain: Build an AI-powered application from the ground up in our Deep
  Learning Course .'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 310
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:27:44-05:00'
sources: []
---

**Situation:** In my senior capstone I was tasked with creating a real‑time object detection app for a local delivery startup that needed to identify package types on their conveyor belts.

**Task:** Build an end‑to‑end AI system—from data collection to deployment—so the app could classify three package categories (small, medium, large) with >90 % accuracy and process at least 10 frames per second on a Raspberry Pi.

**Action:** I started by scraping 5,000 images from the warehouse camera feeds and used LabelImg for annotation. I pre‑processed the data with Albumentations (random flips, brightness jitter). For the model, I chose YOLOv5 due to its lightweight architecture; I fine‑tuned a pretrained backbone on our dataset using PyTorch Lightning, training over 50 epochs with a batch size of 16 and cosine annealing scheduler. After achieving 92 % mAP on validation, I converted the checkpoint to ONNX, then to TensorRT for inference acceleration. On the Pi, I wrapped the pipeline in a Flask API, added a simple UI with Streamlit, and set up a Docker container for reproducibility.

**Result:** The deployed app achieved 93 % accuracy and 12 FPS on the target hardware, reducing manual sorting time by 35 %. I learned how to balance model complexity against edge constraints and the importance of end‑to‑end testing in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
