---
qid: ing_6836afb67f__aws__local
question: How do you make a streaming chat UI accessible?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 383
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:20:07-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of our real‑time chat interface for a global SaaS platform that had 3 M monthly active users and a 30 % churn rate among disabled customers. The goal was to make the UI fully WCAG 2.1 AA compliant while preserving low latency.

**Action**  
*Customer Obsession & Ownership* – I first ran a usability study with screen‑reader users, mapping their pain points (e.g., missing ARIA labels, poor color contrast).  
I re‑architected the front end using **React + Redux Toolkit** and added semantic markup plus dynamic **ARIA live regions** for incoming messages.  
For scalability, I shifted to **Amazon API Gateway + Lambda@Edge** with a WebSocket endpoint backed by **AWS AppSync** (GraphQL subscriptions) so that each user receives real‑time updates with < 150 ms latency across 200 regions.  
I introduced an **accessibility testing pipeline** using **Percy** and **axe-core**, integrated into CI/CD on **GitHub Actions**.  

**Result**  
Post‑launch, the accessibility score jumped from 58 % to 98 %, and usage among disabled users grew by 2.3×, cutting churn in that segment by 18 %. The new architecture handled a peak of 500 k concurrent connections with < $0.03 per 1 000 messages, keeping costs 27 % lower than the legacy system.

**Reflection**  
I learned that early stakeholder buy‑in and continuous automated testing are critical; skipping either had led to a costly rollback in my first attempt.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
