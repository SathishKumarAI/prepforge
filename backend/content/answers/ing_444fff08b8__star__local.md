---
qid: ing_444fff08b8__star__local
question: 'Explain: Software Engineer, Agent - Travel & Hospitality'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 328
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:45:38-05:00'
sources: []
---

**Situation:**  
At a mid‑size travel tech startup I was part of the product team building an AI‑powered travel assistant that could suggest itineraries and book flights on behalf of users. The existing booking flow had a 35 % drop‑off rate at checkout because travelers were overwhelmed by options and time‑consuming manual steps.

**Task:**  
My goal was to design an autonomous agent that could understand user intent, generate personalized trip plans, and execute bookings through multiple airline APIs while keeping latency under 2 seconds per request.

**Action:**  
I built the agent on top of a transformer‑based intent classifier (BERT fine‑tuned on travel dialogues) and used reinforcement learning to optimise itinerary scoring against conversion metrics. The agent queried airline SOAP/REST services via an orchestration layer written in Go, caching responses with Redis to hit SLA targets. I integrated a rule engine for compliance checks (e.g., fare rules, cancellation policies) and added fall‑back logic that prompted the user for clarification when confidence dropped below 0.7.

**Result:**  
Within three months the agent handled 18 % of all bookings automatically, cutting checkout time by 55 % and raising conversion from 35 % to 48 %. The team learned that combining NLP intent models with a lightweight rule engine yields both high accuracy and regulatory safety, setting the stage for scaling the assistant across additional regions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
