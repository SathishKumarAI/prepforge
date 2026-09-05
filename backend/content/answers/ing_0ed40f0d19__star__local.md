---
qid: ing_0ed40f0d19__star__local
question: 'Explain: Example Domain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 358
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:58:08-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a conversational AI to triage customer support tickets. The engineering team was skeptical because our internal knowledge base had hundreds of product manuals, and there was no clear way to teach the model about the specific jargon used by each product line.

**Task:**  
I was tasked with creating an “example domain” that would give the language model a concrete set of entities, intents, and relationships so it could learn to map user queries to the correct support articles within 24 hours of deployment.

**Action:**  
First I mapped out the core concepts: *Product*, *Feature*, *ErrorCode*, and *Resolution*. Using Python and spaCy, I extracted these entities from our manuals and tagged them in a JSON schema. Then I wrote a rule‑based intent classifier that matched user questions to intents like “troubleshoot” or “upgrade”. To bootstrap the model, I generated 500 synthetic QA pairs with GPT‑4, ensuring each pair referenced at least one entity from the domain. Finally, I integrated this example domain into our Rasa NLU pipeline and fine‑tuned a BERT base on it for two epochs.

**Result:**  
Within three days of launch, the bot’s accuracy in routing tickets to the correct article jumped from 62 % to 88 %. The average resolution time dropped by 30 %, saving roughly 120 support hours per month. I learned that a well‑structured example domain can dramatically reduce training data needs and accelerate deployment for AI products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
