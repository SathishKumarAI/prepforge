---
qid: ing_d133373c53__aws__local
question: What is the difference between an agent and a chatbot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 453
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:59-05:00'
sources: []
---

**Answer (Amazon Style)**  

> **Leadership Principles:** *Customer Obsession*, *Ownership*  

**Situation / Task**  
While redesigning our customer‑support stack at a fast‑growing SaaS, I was asked to explain the difference between an **agent** and a **chatbot** so the product team could decide which to launch first.

**Action**  
I built a quick prototype in Python, using **Amazon Lex** for intent recognition and **AWS Lambda** for business logic. For the *agent* side I added **AWS Step Functions** to orchestrate human‑in‑the‑loop flows and **Amazon Connect** to route calls to live reps when the bot’s confidence dropped below 0.75. I also instrumented metrics in **Amazon CloudWatch**: latency, error rate, and hand‑off frequency.

I presented a side‑by‑side comparison:

| Feature | Chatbot | Agent (Human‑in‑the‑Loop) |
|---------|---------|---------------------------|
| Primary interaction | NLP‑driven scripted dialog | NLP + human decision |
| Response time | < 1 s (stateless Lambda) | 5–10 s (human review) |
| Availability | 24/7, auto‑scales | 8 a.m.–6 p.m., limited by staff |
| Cost per request | $0.00075 | $0.05 + staffing |

**Result**  
The team chose to launch the chatbot first, achieving a **30% reduction in ticket volume** within two weeks and freeing agents to handle 40% of complex cases. The agent architecture later scaled to support peak loads with **95 % SLA**, costing <$2k/month vs $10k for on‑prem servers.

**Reflection**  
I learned that *defining clear boundaries* (automation vs human touch) is key to delivering value quickly while keeping costs low—exactly what the *Ownership* principle demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
