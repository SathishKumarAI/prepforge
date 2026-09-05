---
qid: ing_e1deb6c207__eli5__local
question: Full fine-tuning vs. parameter-efficient fine-tuning - how do you choose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 246
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:33:29-05:00'
sources: []
---

**Imagine a huge library (the pretrained model).**  
*Full fine‑tuning* is like sending the whole librarian to learn a new subject: every book, shelf and rule can change. It gives the most flexibility but takes time, memory, and risk of “forgetting” what was already useful.

*Parameter‑efficient fine‑tuning (PEFT)* is more like giving that librarian a small notebook of notes—just the few pages they need to remember for the new subject. Only those pages are updated; the rest of the library stays intact. It’s faster, uses less memory, and keeps most of the original knowledge.

**How to choose?**  
- If you have plenty of data, compute power, and need maximum performance on a very different task, go full fine‑tuning.  
- If resources are tight, the new task is similar to what the model already knows, or you want to keep the original skills intact, use PEFT.  

Think of it as deciding whether to rewrite an entire manual or just add a handy appendix.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
