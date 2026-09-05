---
qid: ing_bc18a87ea9__eli5__local
question: 'Explain: Testing in production — From Zero to 50 Million Uploads per Day:
  Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 260
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:35:27-05:00'
sources: []
---

Imagine you’re running a massive photo‑sharing party where guests can drop pictures into a huge digital gallery. In the first days, only a handful of friends join (zero to a few dozen uploads). You test the system by letting one or two people try uploading and watching how the gallery behaves—does it load quickly? Are the images saved correctly? That’s “testing in production” on a tiny scale.

As the party grows, more guests arrive. Instead of pausing the event, you keep letting new users upload while continuously monitoring the gallery’s performance. Every minute you check how many pictures are being processed and whether any errors pop up. When the traffic reaches 50 million uploads a day, you’re no longer just testing; you’re ensuring the gallery can handle that load in real time.

Key terms:  
- **Production**: The live system that users actually use.  
- **Scaling**: Making a system work smoothly as usage grows.  

By running small tests first and then gradually increasing traffic while watching for problems, Canva’s engineers ensure their media platform stays reliable even when millions of uploads hit the servers every day.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
