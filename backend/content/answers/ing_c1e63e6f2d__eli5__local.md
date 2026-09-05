---
qid: ing_c1e63e6f2d__eli5__local
question: 'Explain: Example of 2D Convolutional Layer — How Do Convolutional Layers
  Work in Deep Learning Neural Networks? - MachineLearningMastery.com'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 228
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:43:27-05:00'
sources: []
---

Imagine a tiny window that slides over a photo, like a magnifying glass that only shows a few pixels at a time. Inside this window sits a small table of numbers (the **kernel**). Every time the window moves, it multiplies each pixel in the window by its corresponding number on the table and adds them up—just as you would press a key on a calculator for each pair and then sum the results. The output is a new picture where every position holds this summed value; bright spots appear where the pattern in the kernel matches the image.

The **stride** tells how many pixels the window jumps each time (a stride of 1 means one pixel at a time, giving a detailed map). If you want to keep the same image size after filtering, you pad with zeros around the border so the window can slide over edge pixels. Repeating this process with many kernels lets the network learn different shapes—edges, corners, textures—building deeper understanding step by step.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
