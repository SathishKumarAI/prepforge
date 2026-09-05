---
qid: ing_3e77747acd__star__local
question: 'Q: Why is "Prompt Sanitization" harder than "SQL Sanitization"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 356
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:33:19-05:00'
sources: []
---

**Situation** – In mid‑2023 I led the rollout of an internal chatbot that pulled data from our CRM and answered user queries in natural language. Within a week we received complaints that the bot was returning sensitive customer fields when users typed vague prompts like “Show me all customers.”  

**Task** – My goal was to build a sanitization layer that would strip or mask any request for personally identifiable information (PII) while still allowing legitimate, high‑level queries. I had to do this without breaking the conversational flow or limiting the bot’s usefulness.

**Action** – First I mapped every entity in our database and defined a whitelist of safe fields. For SQL sanitization we could rely on parameterized queries and strict schema enforcement. Prompt sanitization required an NLP pipeline: tokenizing user input, using a transformer model to detect entities, then applying context‑aware masking rules (e.g., replacing “customer name” with “the customer’s first name”). I also added a fallback rule that flagged any prompt containing the word “PII” or “sensitive” for manual review. The system logged each sanitization event and fed it back into an LLM fine‑tuning loop to improve detection over time.

**Result** – Within two weeks we reduced accidental PII leaks by 98 % and cut support tickets related to privacy concerns by 70 %. I learned that unlike SQL, where the structure is fixed, prompts are open‑ended and require continuous learning and human oversight to keep sanitization accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
