---
qid: ing_8798eeee18__faang__local
question: 'Explain: Capturing the briefing — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 410
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:59:17-05:00'
sources: []
---

## Clarify  
We’re asked to **explain how we would capture a briefing for a mobile system design interview**—i.e., the first phase where the interviewer outlines the problem and objectives.  
*Assumptions to confirm:*  
- Target platform (Android/iOS/React‑Native).  
- Scale expectations (users, traffic).  
- Core features (e.g., messaging, media sharing).  
- Constraints (battery, offline mode, security).  

## Approach  
1. **Restate the brief** back to the interviewer to confirm understanding.  
2. **Identify key requirements**: functional, non‑functional, and constraints.  
3. **Sketch a high‑level architecture diagram**—client, backend services, data stores, caching layers.  
4. **Highlight trade‑offs** (e.g., local cache vs. real‑time sync).  

## Depth  
- *Functional*: user authentication, CRUD for posts, push notifications.  
- *Non‑functional*: latency < 200 ms, 99.9% uptime, battery <5 % per hour.  
- *Tech choices*: REST + WebSockets, PostgreSQL + Redis, CDN for media, OAuth2 for auth.  
- Complexity: O(1) CRUD ops; push queues O(N).  

## Edge Cases  
- Network loss → optimistic UI updates and retry queue.  
- Large media uploads → chunked upload & resumable.  
- Scaling users → sharding DB, horizontal scaling of services.  

## Optimize & Communicate  
Explain that the initial briefing sets constraints guiding design choices; iterate with stakeholder questions to refine assumptions. End by summarizing the architecture and noting where future iterations can improve performance or reliability. This structured approach demonstrates clear communication, depth in technical decisions, and an eye for trade‑offs—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
