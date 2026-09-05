---
qid: ing_9111fc510e__eli5__local
question: 'Explain: Multiple Filters — How Do Convolutional Layers Work in Deep Learning
  Neural Networks? - MachineLearningMastery.com'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 212
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:26:55-05:00'
sources: []
---

Think of a convolutional layer like a set of *photo‑filters* that scan a picture for patterns.  
A filter is just a small square (say 3×3 pixels) filled with numbers. When the filter slides over an image, it multiplies its numbers by the underlying pixel values and sums them up—this gives one new number in a “feature map.”  
Doing this many times across the whole image produces a map that highlights where a specific pattern (a corner, edge, or texture) appears.  
The network learns dozens of such filters simultaneously; each learns to recognize a different feature. By stacking layers, later ones combine simple edges into shapes, shapes into faces, and so on—just like building blocks forming a complex structure. The key terms: *filter* (the small weight matrix), *feature map* (the output grid), and *stride* (how far the filter jumps each step).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
