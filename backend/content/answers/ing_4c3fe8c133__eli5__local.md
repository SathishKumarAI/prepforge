---
qid: ing_4c3fe8c133__eli5__local
question: 'Explain: Architecture — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 215
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:37:51-05:00'
sources: []
---

Think of ResNet‑50 as a **tower of 50 stacked “stories” (layers)** that each read a picture and pass on what it sees to the next story, but with a twist: every few stories they also hand back a copy of the original picture so the lower stories never forget where they started.  
*Layer*: a tiny set of mathematical rules that changes the image into numbers.  
*Convolution*: sliding a small “filter” over the image to spot patterns like edges or colors.  
*Residual connection (shortcut)*: a quick route that adds the input of a block straight to its output, letting the network learn only the change needed rather than the whole transformation.  
The 50 layers are grouped into five blocks; each block deepens the understanding while the shortcuts keep the signal strong. The result is a model that can recognize objects with high accuracy without losing the original image context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
