---
qid: vq_b67c26a197__eli5__local
question: Who are SCOTT, SYSTEM and SYS ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 187
total_tokens: 344
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:25:12-05:00'
sources: []
---

Think of an operating system as a big kitchen where many chefs (processes) cook dishes at the same time.  
**SCOTT** is one chef – a user program that runs under your own name and has its own cooking space.  

**SYSTEM** is the head waiter who takes orders, makes sure every chef gets what they need, and keeps the kitchen running smoothly. It’s the part of the OS that manages resources (memory, CPU time, files) for all chefs.

**SYS** is the recipe book that SYSTEM uses. It contains the low‑level instructions (system calls) that let any chef ask the waiter to do things like open a file or start another program.  

So SCOTT cooks, SYSTEM serves and organizes, and SYS holds the instructions that allow both to work together.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
