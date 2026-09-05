---
qid: ing_ca25a237aa__star__local
question: 'Explain: What is your favorite color? Now, we — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 324
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:13:32-05:00'
sources: []
---

**Situation** – While leading a capstone project for my data‑science bootcamp, we were tasked to build an image‑recognition app that could identify the dominant color in street photography for a local tourism board. The client wanted real‑time feedback on Instagram posts.

**Task** – My goal was to create a lightweight model that accurately classified images into one of ten primary colors and displayed the result instantly, all while keeping inference time under 200 ms on a Raspberry Pi.

**Action** – I started by collecting a balanced dataset from Unsplash, then pre‑processed the images with OpenCV to normalize brightness. Using TensorFlow Lite, I trained a shallow CNN (two convolutional layers + global average pooling) and quantized it to 8‑bit weights. I wrapped the model in a Flask API and deployed it on the Pi, profiling latency with `cProfile` and tweaking batch size until we hit our target.

**Result** – The final app achieved 92 % top‑1 accuracy across the test set, and inference averaged 145 ms per image. The tourism board launched a “Color of the Day” feature that increased user engagement by 18 %. I learned how to balance model complexity with edge‑device constraints and how color perception can be leveraged in marketing analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
