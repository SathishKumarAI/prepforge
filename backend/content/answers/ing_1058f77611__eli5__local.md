---
qid: ing_1058f77611__eli5__local
question: 'Explain: Hardware Failures — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 214
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:01:10-05:00'
sources: []
---

Imagine your computer is a big kitchen where dishes (data) are cooked and served to guests (users). **Hardware failures** are like the stove suddenly going out or the fridge breaking. Even if one appliance stops working, you can still keep the kitchen running by using another stove or moving cold food elsewhere.

In system design, *availability* means the kitchen should stay open most of the time, even when a piece of equipment breaks. Designers use **redundancy**—extra stoves, duplicate refrigerators, and backup power—to keep cooking going. They also set up **fail‑over paths**, so if one server (the stove) dies, another picks it up automatically.

The key terms:  
- *Hardware failure*: a physical component stops working.  
- *Availability*: the fraction of time the system can serve requests.  

By building in spare parts and automatic switches, systems stay available even when some hardware goes kaput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
