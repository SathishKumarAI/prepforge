---
qid: ing_f36f0ec948__star__local
question: 'Can the task run independently? — Tools vs. Subagents: Building Effective
  AI Agents Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 363
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:34:46-05:00'
sources: []
---

**Situation**  
At my last company we were launching a customer‑support chatbot that had to triage 15k tickets per day. The original design used a monolithic LLM pipeline with a single “super‑agent” that called external APIs for ticket classification, sentiment analysis and routing.

**Task**  
I was tasked with reducing latency and increasing reliability so the bot could answer in under 2 seconds on average while still handling edge cases like multi‑language tickets.

**Action**  
I refactored the system into a hierarchy of lightweight subagents:  
1. A “Classifier” agent that uses a fine‑tuned BERT model to assign intent, running locally for instant response.  
2. A “Contextualizer” agent that calls a knowledge‑base API only when classification confidence is below 70 %.  
3. An “Action” agent that determines the final response or escalation.  

Each subagent ran independently in Docker containers orchestrated by Kubernetes, with a simple message bus (Kafka) to pass state. I added circuit‑breaker logic so if one subagent failed, the system fell back to a default response instead of cascading failure.

**Result**  
The average end‑to‑end latency dropped from 3.2 s to 1.8 s, and the error rate fell by 45 %. The modular design also cut infrastructure costs by 20 % because we could scale only the classifiers during peak hours. I learned that building independent, purpose‑built subagents not only improves performance but also makes debugging and future feature additions far simpler.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
