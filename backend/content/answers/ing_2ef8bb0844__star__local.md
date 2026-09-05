---
qid: ing_2ef8bb0844__star__local
question: 'Explain: Google Agent Development Kit (ADK) — Autogen Crewai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 340
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:02:14-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with launching a conversational AI for our customer support portal that could handle over 10,000 daily queries while keeping latency below 300 ms. The existing chatbot framework couldn’t scale and required manual script writing.

**Task**  
I needed to build an auto‑generating agent system that could ingest new FAQs, learn from live chats, and deploy updated policies without human intervention—essentially a self‑learning “crew” of agents.

**Action**  
Using the Google Agent Development Kit (ADK) I set up an Autogen Crewai pipeline. First, I defined a *Crew* consisting of three agent roles: Data Curator, Policy Trainer, and Response Generator. The Curator pulled new FAQs from our knowledge base via BigQuery, while the Trainer used Vertex AI’s AutoML to fine‑tune a BERT model on recent chat logs. Finally, the Generator leveraged the trained model with Firestore triggers to produce instant responses. I orchestrated everything in Cloud Run, and implemented continuous evaluation with A/B testing using Google Optimize to automatically roll out the best performing crew.

**Result**  
Within two months the system handled 12,500 daily queries at 250 ms average latency, cutting manual content updates by 80%. User satisfaction rose from 72% to 88% in CSAT surveys. I learned that a well‑structured crew architecture lets you separate concerns and scale each component independently, turning a static bot into a dynamic learning system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
