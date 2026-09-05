---
qid: ing_76a049b202__eli5__local
question: 'Explain: Convolutional Neural Network Architecture'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 220
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:44:18-05:00'
sources: []
---

Think of a convolutional neural network (CNN) as a detective team that looks for clues in a picture.  
The **image** is the “scene” they investigate. The first group, called a **convolution layer**, walks over the scene with a small magnifying glass (a *filter*). As it moves, it highlights patterns—edges, colors, textures—and writes them down as a new map.  
Next comes a **pooling layer**: it’s like summarizing each neighborhood of the map into one key fact so the detective can focus on the big picture without getting lost in every tiny detail.  
Finally, a **fully‑connected layer** (the “final verdict”) reads all those summarized facts and decides what the whole scene is—e.g., cat or dog.  

So, a CNN scans images with sliding windows, compresses information, and then makes an informed guess, just as a detective pieces together clues to solve a mystery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
