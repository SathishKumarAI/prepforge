---
qid: ing_8aa8f18a3c__star__local
question: 'Explain: High-Level Architecture — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 381
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:09:42-05:00'
sources: []
---

**Situation:**  
While leading the AI product team at a fintech startup, we were tasked with launching an internal chatbot to handle support tickets and account queries for our 200k active users. The existing ticketing system was slow and required manual triage, causing a 30% backlog.

**Task:**  
Design a scalable high‑level architecture that could understand user intent, maintain context across turns, and route requests to the appropriate microservices or human agents without compromising latency (target < 500 ms per response).

**Action:**  
I mapped out a modular stack: an NLP front end using spaCy for tokenization + BERT fine‑tuned on our domain data; an intent classifier feeding into a stateful dialogue manager built with Rasa Core, which kept slot values and conversation history. For back‑end integration I exposed RESTful APIs to the account service, payment gateway, and ticketing system, all orchestrated by Kubernetes with autoscaling pods based on request volume. We added a fallback policy that escalated ambiguous queries to human agents via a WebSocket queue. Continuous evaluation pipelines fed metrics (F1 score, response latency) into Grafana dashboards for real‑time monitoring.

**Result:**  
Within three months the chatbot resolved 65% of tickets automatically, cutting average resolution time from 12 hours to under 30 minutes. User satisfaction rose by 22 points on our NPS survey, and the engineering team reported a 40% reduction in manual triage effort. I learned that balancing sophisticated NLP with lightweight orchestration is key to delivering a responsive conversational experience at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
