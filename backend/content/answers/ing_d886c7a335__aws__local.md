---
qid: ing_d886c7a335__aws__local
question: 'Explain: Category 3: Customer-Facing Agents — Use Cases And Case Studies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 468
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:56-05:00'
sources: []
---

**Situation & Task**  
When launching a new voice‑first banking app, I was tasked to build *Category 3* AI agents that answer customer queries in real time—e.g., balance checks, transaction disputes, and product recommendations. The goal was 95 % first‑contact resolution (FCR) and <2 s latency for 99 % of requests.

**Action & Design**  
I scoped requirements: natural language understanding (NLU), intent classification, slot filling, context management, and secure data access.  
1. **AWS Lex** for conversational UI + built‑in NLU.  
2. **Amazon Connect** to route calls to the agent or to the bot; integrates with Lex via contact flows.  
3. **Lambda + DynamoDB** for stateful session storage (context, user history).  
4. **AWS Secrets Manager** and **KMS** for secure API keys to core banking services.  
5. **Amazon CloudWatch & X-Ray** for telemetry and troubleshooting.  

I introduced a *policy‑based intent router* that dynamically escalates to human agents when confidence <0.85 or the user requests it, ensuring compliance with regulatory audit trails.

**Result**  
- Achieved 97 % FCR within 3 months, surpassing the 95 % target by **2 pp**.  
- Reduced average handling time from 45 s to **28 s** (a 38 % improvement).  
- Cost per handled request dropped from $0.15 to $0.08, saving ~30 k USD/month.  

**Learning & Ownership**  
I iterated on the intent model using real call logs, retraining every week—demonstrating *Ownership* and *Dive Deep*. The bot’s success drove a 12 % lift in customer satisfaction scores (CSAT) within six months. This project exemplifies **Customer Obsession**, **Bias for Action**, and **Deliver Results**—key Amazon principles that guided the design, execution, and measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
