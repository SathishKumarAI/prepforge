---
qid: ing_27ed5c4c86__star__local
question: 'Explain: Key Capabilities — Autogen Crewai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 375
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:48:17-05:00'
sources: []
---

**Situation:**  
At my previous role we were building a real‑time customer support chatbot for a telecom provider that handled over 50k tickets daily. The existing system was slow and required manual script updates whenever new FAQ items appeared.

**Task:**  
I needed to create an autonomous agent framework—Autogen Crewai—that could automatically ingest new knowledge bases, generate relevant responses, and iterate on its own answers without human intervention, while keeping latency under 200 ms per request.

**Action:**  
First I set up a pipeline that fetched the latest FAQ JSON from our content team’s CMS, parsed it with spaCy for entity recognition, and fed the cleaned data into an OpenAI GPT‑4 model wrapped in LangChain. Using Crewai’s orchestration layer, I defined a “crew” of sub‑agents: one agent handled question classification, another retrieved the best answer snippet, and a third agent performed post‑processing to ensure compliance with brand guidelines. I added a reinforcement learning loop that logged every user interaction, scored responses against a human‑rated rubric, and fine‑tuned the retrieval model nightly via PPO. Finally, I deployed the crew on AWS Lambda with an API Gateway trigger for sub‑second response times.

**Result:**  
Within three weeks of rollout, ticket resolution time dropped from 12 minutes to 3 minutes, reducing volume by 35%. User satisfaction scores climbed from 78% to 92%, and we eliminated the need for manual script updates, saving the support team 15 person‑hours per week. I learned that combining automated knowledge ingestion with a lightweight crew architecture can dramatically scale AI services while keeping latency low and governance tight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
