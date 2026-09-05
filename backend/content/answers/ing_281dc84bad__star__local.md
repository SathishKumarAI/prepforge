---
qid: ing_281dc84bad__star__local
question: 'Explain: Script — Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 329
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:48:31-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were building an AI‑powered chatbot to handle tier‑2 customer support tickets. Our QA team was struggling to simulate realistic user interactions; the manual test scripts kept missing edge cases and were time‑consuming.

**Task:**  
I needed to create a reusable “Mock Interview Kit” – a script that could generate diverse, human‑like conversation flows for the chatbot, covering intents, sentiment shifts, and error handling, all while allowing developers to quickly iterate on new features.

**Action:**  
Using Python and the Rasa NLU framework, I designed a modular generator. First, I defined intent templates and slot schemas in YAML. Then I wrote a script that pulled real ticket logs from our database, anonymized user data, and fed them into the template engine to produce synthetic dialogues. To mimic interview‑style probing, I added conditional branches that triggered follow‑up questions when the bot’s confidence dropped below 0.7. The kit also integrated with Docker containers so each test run spun up a fresh Rasa instance, ensuring isolation.

**Result:**  
The mock kit cut our QA cycle from 5 days to just 2 days per sprint and uncovered 12 previously unknown failure modes in the intent classifier. Customer satisfaction scores for tier‑2 tickets improved by 18% within three months of deployment, and I learned how to blend data‑driven generation with human‑inspired scripting to build robust AI test harnesses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
