---
qid: ing_5ce48bcc4c__eli5__local
question: How does function/tool calling actually work mechanically, end to end?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 252
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:03:37-05:00'
sources: []
---

Think of an AI as a very clever chef who can cook any dish you ask for, but sometimes the kitchen needs special appliances (a blender, a sous‑chef, or a delivery robot).  
When you give a recipe (your prompt), the chef first reads it and decides which appliance is needed. That decision is made by a tiny “selector” inside the AI that looks at the words and predicts the best tool to use.  

1. **Choose** – The selector outputs a name like *“blender”* or *“fetch‑info”*.  
2. **Ask** – The system sends this name, plus any required ingredients (function arguments), to the appliance’s API.  
3. **Run** – The appliance does its job and returns the result (e.g., blended smoothie data).  
4. **Return** – The chef receives that result, stitches it into the overall answer, and hands back a finished reply.

So function/tool calling is just a quick “ask‑and‑wait” handshake between the AI’s brain, a chosen tool, and the final response you read.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
