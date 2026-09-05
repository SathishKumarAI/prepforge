---
qid: ing_708e19648d__eli5__local
question: 'Explain: Common Failure Modes — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 238
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:34:47-05:00'
sources: []
---

Think of an AI service like a busy restaurant that must keep serving food all day.  
**Availability** is how often the kitchen (the AI model) can actually take orders and deliver meals. Common failure modes are the “kitchen breakdowns” that stop service:

1. **Single point of failure** – If one stove (a single server) breaks, the whole kitchen stops cooking.  
2. **Resource exhaustion** – Too many chefs (requests) crowd the prep area; the ovens (GPU memory) run out and orders queue forever.  
3. **Dependency collapse** – The spice shop (external API or database) goes offline; recipes can’t be made.  
4. **Faulty updates** – A new menu (model update) contains a typo that crashes the kitchen software.  

Designing for availability means building many backup stoves, scaling ovens as traffic grows, keeping spare spices, and testing new menus before full rollout—just like a resilient restaurant keeps diners happy even when something goes wrong.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
