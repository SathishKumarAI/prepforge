---
qid: ing_109f6a2435__eli5__local
question: What are MCP's sampling and elicitation primitives for, and why does hardly
  anyone use them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 248
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:01:48-05:00'
sources: []
---

Think of an AI that learns from a *menu* instead of a *recipe book*.  
The **sampling primitive** is like a waiter who hands you random dishes (samples) from the menu so you can taste what’s possible. The **elicitation primitive** is the chef asking you, “Do you prefer spicy or mild?” and using your answer to adjust the menu.  

In Machine‑Learning‑Powered (MCP) systems these tools let the model ask for specific examples it’s unsure about and then learn from your feedback. They’re powerful because they can focus learning on the hardest parts, but most people skip them because:

1. **Setup is extra work** – you need to write code that lets the AI request samples and record answers.  
2. **You feel like a judge** – it feels intrusive to be asked for data during training.  
3. **Results aren’t obvious** – without careful design, you might not see big gains.

So while sampling and elicitation can sharpen an AI’s knowledge, their extra effort and subtlety make them less popular in everyday projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
