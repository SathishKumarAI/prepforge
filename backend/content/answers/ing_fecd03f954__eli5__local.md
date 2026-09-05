---
qid: ing_fecd03f954__eli5__local
question: 'Explain: Back-of-the-Envelope Estimation — Design WhatsApp | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 266
total_tokens: 435
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:18:36-05:00'
sources: []
---

Imagine you’re planning a road trip across a country with millions of travelers who need to send messages and pictures instantly. A **back‑of‑the‑envelope estimate** is like drawing a quick sketch on a napkin: you jot down rough numbers for how many cars (users), how fast they’ll travel (message rate), and how many toll booths (servers) are needed, just to see if the trip is even doable.

In this context:

- **Users** = people who own phones.  
- **Messages per second** = how many texts each user sends every second.  
- **Servers** = computers that store chats and route messages.  
- **Latency** = time it takes for a message to reach its destination (ideally < 200 ms).  

You start with big‑picture assumptions—say 1 billion users, each sending 10 messages per hour—and calculate total traffic. Then you divide by a server’s capacity to estimate how many servers are required. This quick math helps the interviewers see that you can think in scale and spot bottlenecks before diving into detailed designs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
