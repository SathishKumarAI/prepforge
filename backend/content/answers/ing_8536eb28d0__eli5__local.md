---
qid: ing_8536eb28d0__eli5__local
question: 'Explain: API — How Do Convolutional Layers Work in Deep Learning Neural
  Networks? - MachineLearningMastery.com'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 203
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:07:52-05:00'
sources: []
---

Think of a convolutional layer as a smart, moving stencil that looks at tiny windows of an image—like sliding a magnifying glass over a photo.  
Each window (say 3 × 3 pixels) is multiplied by a small weight matrix called a *filter*. The filter’s numbers tell the network what to look for: edges, corners, or textures.  
When the stencil slides one pixel at a time across the whole image, it produces a new map of “how strongly” that feature appears in each location—this is the **feature map**.  
Multiple filters run in parallel, so the layer can spot many patterns at once. The resulting maps are stacked and passed to deeper layers, which combine them into higher‑level concepts (faces, cars, etc.). In short, convolutional layers scan images with learned stencils, turning raw pixels into meaningful features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
