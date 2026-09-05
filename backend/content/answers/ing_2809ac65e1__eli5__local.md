---
qid: ing_2809ac65e1__eli5__local
question: Walk me through why you would disaggregate prefill and decode onto separate
  machines, as Mooncake does. What does that buy you and what does it cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 296
total_tokens: 475
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:39:09-05:00'
sources: []
---

Think of a big recipe book (the model) that you want to read aloud quickly.  
**Prefill** is like scanning the whole book ahead of time: you let a fast scanner read every page and store all the “word‑to‑vector” tables in memory.  
**Decode** is the actual reading—each sentence is spoken one word at a time, using those pre‑stored tables.

If both steps run on the same computer, the scanner has to share the CPU with the reader, so the whole process slows down. By giving the scanner its own machine (Mooncake does this), it can work nonstop and fill memory as fast as possible. The reader’s machine then only needs to look up words in that ready‑made memory, making each new sentence appear almost instantly.

**What you gain:**  
- Faster response times for live or low‑latency applications.  
- Better use of specialized hardware (e.g., GPUs for decoding, CPUs for prefill).  

**What it costs:**  
- Extra servers and networking overhead.  
- More complex system orchestration to keep the two parts in sync.

So splitting prefill and decode is like giving a chef a dedicated prep station and a separate serving counter—speedy service but at higher operational cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
