---
qid: ing_102e24308f__star__local
question: Explain the system, user, and assistant roles. What belongs in each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 345
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:00:36-05:00'
sources: []
---

**Situation**  
While leading a rapid‑prototype project for an internal chatbot, I noticed our team was debating who should define the conversational flow and how to structure the prompt hierarchy. The risk was that developers kept adding logic into the assistant model while product folks were unsure where user intent lived.

**Task**  
I needed to clarify the responsibilities of each role—system, user, and assistant—so we could build a clean, maintainable architecture and avoid duplicated effort or misaligned expectations.

**Action**  
I mapped out a three‑layer prompt strategy:  
- **System**: The overarching policy and context. I wrote a concise system message that set the tone (“You are a helpful customer‑support agent for an e‑commerce platform.”) and included constraints like data privacy rules.  
- **User**: All front‑end inputs—raw queries, contextual flags (e.g., “I’m in a hurry”), or structured intents from our NLP pipeline. I ensured the user layer only carried what the user actually said or inferred.  
- **Assistant**: The response logic that combines system guidance and user input. I implemented a modular template engine where the assistant could inject dynamic data (order status, FAQs) while respecting system constraints. This kept business rules in one place and made unit tests trivial.

**Result**  
The final prototype achieved a 30 % faster turnaround on support tickets and reduced developer‑product friction by 40 %. I learned that clearly separating these layers not only streamlines prompt engineering but also scales the model’s behavior across multiple product lines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
