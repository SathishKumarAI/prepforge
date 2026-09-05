---
qid: ing_1218cb2951__eli5__local
question: What do you monitor in production LLM serving, and what pages someone at
  3 a.m.?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 251
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:04:21-05:00'
sources: []
---

Imagine your LLM is a busy kitchen that never closes. In the day‑to‑day shift you keep an eye on three things:  

1. **Temperature (latency)** – how fast the model replies to a request. If it starts “cooking” too long, something’s slowing down.  
2. **Ingredient levels (resource usage)** – CPU, GPU, and memory must stay within limits; otherwise the kitchen stalls.  
3. **Recipe accuracy (accuracy & error rate)** – monitor how often the model returns nonsensical or harmful answers.

At 3 a.m., when the kitchen is quiet, a supervisor would:

- Check the **latency dashboard** to see if any request is stuck.  
- Look at the **resource‑usage chart** for unexpected spikes.  
- Scan the **error log** for failed prompts or hallucinations.  

If anything looks off, they’ll reboot that service or scale up resources before the next rush of orders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
