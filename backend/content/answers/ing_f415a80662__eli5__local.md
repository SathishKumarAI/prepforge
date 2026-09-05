---
qid: ing_f415a80662__eli5__local
question: 'Explain: Terminologies — Cdns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 314
total_tokens: 469
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:00:49-05:00'
sources: []
---

**What are “CNNs” (Convolutional Neural Networks)?**  
Think of a CNN as a *photo‑editing team* that looks at an image one tiny square after another, just like how you scan a picture for patterns: edges, colors, shapes. Each tiny square is called a *convolution filter*. The filter slides over the whole picture, and whenever it finds a matching pattern—say a vertical edge—it writes down “yes!” in a new map. Those maps are stacked to form deeper layers, each time recognizing more complex features (corners, faces, cars).  

**Key terms explained simply:**  
- **Filter (kernel):** A small matrix that slides over the image to detect patterns.  
- **Feature map:** The output of one filter; it shows where the pattern appears.  
- **Pooling layer:** A step that shrinks each feature map, keeping only the strongest signals—like taking the best photo from a series.  

By stacking many such layers, a CNN learns to recognize objects without anyone explicitly telling it what to look for. It’s like training a child to identify cats by showing thousands of pictures; after practice, the child instantly spots a cat in any new photo.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
