---
qid: ing_99ab90101d__eli5__local
question: 'Q: How would you estimate GPU requirements for serving a model?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 238
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:41:29-05:00'
sources: []
---

Imagine your model is a chef in a kitchen that must serve dishes (answers) to many hungry customers at once.  
The **GPU** is the stove: it heats up and cooks the dish quickly, but only one dish can be cooked on each burner at a time.  

To estimate how many GPUs you need, ask these simple questions:

1. **How many customers will order at the same moment?** (the *concurrent requests*).  
2. **How long does it take for the chef to finish one dish?** (the *inference latency* of your model).  
3. **Do you want a safety margin so the kitchen never stalls when a rush comes?**  

If one GPU can handle, say, 10 dishes per second and you expect 200 simultaneous orders, you’d need at least 20 GPUs (200 ÷ 10). Add a few more for backups or peak bursts.  

So, think of GPU count as the number of burners needed so every customer’s order is cooked without waiting too long.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
