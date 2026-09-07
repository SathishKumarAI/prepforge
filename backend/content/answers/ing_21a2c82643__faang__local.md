---
qid: ing_21a2c82643__faang__local
question: Design the human-handoff path for a customer-service agent. When should
  it escalate, and what does a good handoff look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 570
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:03:08-05:00'
sources: []
---

**Clarify**  
We’re building a *human‑handoff* workflow for an AI customer‑service bot.  
Goal: decide **when** the bot should pass control to a live agent and define what a smooth handoff looks like (information transfer, context preservation, user experience).  
Assumptions to confirm:  
- The bot has access to ticket history, user profile, and real‑time sentiment.  
- Agents can take over via the same UI or an internal portal.  
- SLA targets exist for response time and resolution.

**Approach**  
1. Define *escalation triggers* (content, sentiment, request type).  
2. Build a handoff package: context snapshot + suggested next steps.  
3. Design UX flows for both bot‑to‑human transition and human‑to‑bot re‑engagement.  
4. Implement monitoring & feedback loop.

**Depth**  
| Trigger | Condition | Reasoning |
|---------|-----------|-----------|
| **Complex intent** | Query not matched by any KB article or falls outside trained intents. | Bot lacks solution. |
| **Negative sentiment** | Sentiment score < –0.6 or escalation flag set. | User frustration requires empathy. |
| **Multiple unresolved sub‑issues** | >2 open tickets or repeated clarifications. | Human coordination needed. |
| **High‑value request** | Account changes, billing disputes, policy questions. | Regulatory compliance. |

*Handoff package*:  
- Ticket ID & status  
- Full conversation history (last 3 turns)  
- User profile snapshot (preferences, past issues)  
- Bot’s suggested resolution steps and confidence score  

*UX*:  
1. Bot says: “I’m going to connect you with a specialist.”  
2. System displays loading animation; ticket ID auto‑generated.  
3. Agent receives the handoff package instantly in their queue.  
4. User sees agent’s name, estimated wait time, and can upload files directly.

**Edge Cases**  
- Bot misclassifies sentiment → unnecessary escalation (test with annotated datasets).  
- Network latency causes delay; fallback to “please wait” message.  
- Agent unavailable: auto‑queue back to bot after timeout.  

**Optimize & Communicate**  
- Continuously log trigger hits and resolution times; retrain intent models on new failure cases.  
- Use A/B testing to compare handoff UI variants (e.g., with/without agent preview).  
- Document the workflow in a living SOP and share metrics in quarterly reviews.

This structured plan balances automation efficiency with human empathy, meeting SLA goals while ensuring users feel heard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
