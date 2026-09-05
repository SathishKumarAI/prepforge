---
qid: ing_12aa7ae1d4__eli5__local
question: 'Explain: Build the full GPU memory budget for a serving deployment, and
  show how it determines maximum batch size and concurrency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 264
total_tokens: 435
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:05:08-05:00'
sources: []
---

Think of a GPU as a giant kitchen counter that can hold only so many dishes at once.  
First, you add up everything that must sit on the counter while your model serves:  

1. **Model weights** – the recipe book (often several hundred megabytes).  
2. **Input tensors** – each dish you put in for inference (size = input size × batch × number of GPUs).  
3. **Output tensors** – the finished dishes (output size × batch × GPUs).  
4. **Intermediate buffers** – extra space the kitchen uses while cooking (usually a small fixed amount per layer).  

Add these amounts and compare to the counter’s total area (GPU memory). The largest batch that fits is the “maximum batch size.”  

If you want more customers at once, you split the counter into separate “tables” (multiple GPUs) or serve several orders in parallel using time‑slicing. Concurrency is limited by how many tables can be filled without exceeding the total area. Thus, the memory budget tells you both the biggest order you can cook at once and how many orders you can handle simultaneously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
