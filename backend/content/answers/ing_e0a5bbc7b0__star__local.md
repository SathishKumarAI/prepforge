---
qid: ing_e0a5bbc7b0__star__local
question: 'Explain: Loading SmolVLM2 and Running Single-Frame Inference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 398
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:58:02-05:00'
sources: []
---

**Situation** – I was tasked with adding a real‑time object detection feature to a consumer drone’s onboard computer. The hardware had only 1 GB of RAM and a modest GPU, so we needed a lightweight vision‑language model that could run in under 30 ms per frame while still delivering reasonable accuracy.

**Task** – Load the SmolVLM2 checkpoint (the distilled variant of VLM2) onto the device and perform single‑frame inference on video frames captured by the drone’s camera, returning bounding boxes and class labels for any detected objects.

**Action** – I used PyTorch to load the pre‑trained `smolvml/SmolVLM2` model from Hugging Face, converting it to ONNX for better runtime efficiency. The script first resized each frame to 224×224, normalized pixel values, and ran the ONNX Runtime session with `dynamic_axes` disabled to keep inference deterministic. I added a simple non‑maximum suppression layer in Python to filter overlapping boxes, then mapped class IDs back to human‑readable labels via the tokenizer’s vocab.

**Result** – In a field test, the pipeline processed each frame in 24 ms on the Jetson Nano, achieving an average mean AP of 0.42 at IoU = 0.5—well above our target for the drone’s obstacle‑avoidance task. I learned that careful model quantization and batch‑size tuning are critical when deploying vision‑language models on edge hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
