---
qid: ing_10c912d098__eli5__local
question: 'Explain: It just becomes large and you can''t — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 256
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:02:17-05:00'
sources: []
---

Think of training a machine‑learning model like cooking a big pot of soup.  
The **model** is the recipe, the **data** are the ingredients, and the **compute resources** (CPU/GPU, memory) are the stove and pots.  

When you add more data or make the recipe more complex, the soup gets larger and hotter. If your stove has only one burner (a single GPU), it can’t keep up; the pot boils over, and the process stalls. That’s what happens when a model “just becomes large” – the memory and processing power required outgrow what you have.

In a **scalable** system you add more burners (more GPUs or machines) so each one handles a portion of the soup. The pieces are mixed together later, giving you the final dish without any single burner overheating.  

Key terms:  
- **Model size** – number of parameters in the neural network.  
- **Compute resources** – hardware that does the calculations (CPUs, GPUs).  
- **Scalability** – ability to add more resources so performance stays good as workload grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
