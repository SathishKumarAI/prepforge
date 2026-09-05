---
qid: ing_9410834eaa__eli5__local
question: 'Explain: Convolution in Convolutional Neural Networks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 214
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:32:29-05:00'
sources: []
---

Think of a convolution as a chef tasting a soup with a ladle that only grabs a small spoonful at a time. The ladle (the *kernel*) is a tiny square of numbers that slides across the whole pot (the image). At each position it mixes its numbers with the corresponding bits of soup, producing one new value: “how much of this flavor appears here.” When the ladle finishes, we have a smaller bowl filled with these flavor scores—this is the *feature map*.  
*Kernel*: the small matrix that slides over the image.  
*Feature map*: the result of all those little taste tests.  

Just as the chef can spot salt or spice anywhere in the soup by moving the ladle, a convolution layer lets a neural network detect patterns (edges, textures) wherever they appear, without caring where exactly in the original picture they are.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
