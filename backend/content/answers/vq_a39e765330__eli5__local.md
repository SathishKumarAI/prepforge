---
qid: vq_a39e765330__eli5__local
question: How does changing the stride affect the output feature map?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 227
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:22:52-05:00'
sources: []
---

Think of a photo as a long row of beads on a string.  
A *convolution* is like sliding a small “reading frame” (the filter) along the beads and writing down what it sees in each position – that list of numbers is the *feature map*.  

The *stride* tells you how many beads to jump before you read again.  
If the stride is 1, you move bead‑by‑bead, so every tiny shift gives a new number and the feature map stays as wide as the original photo (minus filter size).  
If you increase the stride to 2 or 3, you skip beads between readings; fewer numbers are written down, so the feature map shrinks horizontally and vertically.  

In short: larger strides mean fewer, more widely spaced samples of the input, producing a smaller output map that still captures the same patterns but with less detail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
