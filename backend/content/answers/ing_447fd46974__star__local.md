---
qid: ing_447fd46974__star__local
question: 'Explain: Case Study 09: Real-Time Voice Agent (Phone Reservations and Helpline)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 388
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:46:00-05:00'
sources: []
---

**Situation** – In mid‑2023 our client, a regional airline, had a 30 % drop in call center capacity because their reservation line was overloaded during peak booking windows. Customers were spending an average of 8 minutes on hold and the agent turnover rate rose by 15 %.  

**Task** – Build a real‑time voice agent that could handle common reservation queries (flight changes, seat upgrades, baggage fees) and route complex requests to live agents, all while keeping call handling time under 3 minutes and reducing cost per contact by 25 %.  

**Action** – I led a three‑week sprint using Twilio Voice for telephony, Google Speech‑to‑Text for ASR, and Rasa NLU for intent recognition. The bot was trained on 12k transcribed calls, with fallback to a live agent via Twilio Flex when confidence fell below 0.8. We added an outbound scheduler that pre‑populated the user’s flight data from our REST API, so the bot could confirm bookings in a single utterance. I also set up a monitoring dashboard on Grafana to track latency and success rates in real time.  

**Result** – Within two months we cut average call duration from 8 minutes to 2.3 minutes, reduced live‑agent interactions by 40 %, and achieved a 28 % drop in cost per contact. The pilot also boosted customer satisfaction scores from 78 % to 91 %. I learned the value of integrating real‑time confidence scoring with dynamic handoff logic to maintain high quality while scaling automation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
