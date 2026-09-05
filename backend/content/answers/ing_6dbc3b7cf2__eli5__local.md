---
qid: ing_6dbc3b7cf2__eli5__local
question: 'Explain: Posts — How Do Convolutional Layers Work in Deep Learning Neural
  Networks? - MachineLearningMastery.com'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 231
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:30:06-05:00'
sources: []
---

Imagine a chef who wants to taste every bite of a long sandwich without eating the whole thing.  
The sandwich is an image, and the chef’s little hand‑shaped spoon is the *convolution filter*.  
She dips the spoon into a small square (say 3×3) of the bread, tastes it, then slides the spoon one step to the right, tastes again, and keeps moving across the whole sandwich. Each time she records how much “salt” (a feature like an edge or texture) she finds in that tiny square.  

In a neural network, the filter is a small matrix of numbers that scans over the image’s pixels. For every position it multiplies the overlapping pixel values with its own weights and sums them up—just as the chef sums the flavors. The resulting grid of sums is called a *feature map*, showing where that particular pattern appears.  

So, convolution layers “taste” local regions of an image, building maps of patterns that higher layers can combine to recognize complex objects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
