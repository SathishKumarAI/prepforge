---
qid: ing_062b36df02__eli5__local
question: 'Explain: Summary — How Do Convolutional Layers Work in Deep Learning Neural
  Networks? - MachineLearningMastery.com'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 215
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:45:22-05:00'
sources: []
---

Imagine a detective looking for clues in a long, dark hallway. Instead of scanning the whole room at once, she walks with a flashlight that only lights up a small window of tiles ahead. She notes every pattern—like a repeated mosaic or a crack—within that tiny spot before moving on. In a convolutional neural network, each “flashlight” is called a **convolutional filter** (or kernel). It slides across the image pixel by pixel, multiplying its numbers with the underlying pixels in that window and summing them to produce one new number—a feature map entry. As the filter moves, it builds up a whole map of where particular patterns appear. Multiple filters run in parallel, each spotting different shapes (edges, corners, textures). After several layers, these maps are combined like clues from many detectives, letting the network understand complex objects without seeing the entire picture at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
