---
qid: ing_9d92f2dc2b__star__local
question: 'Explain: What Makes Something an Agent — AI Agents Explained - by Sairam
  Sundaresan and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 316
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:47:22-05:00'
sources: []
---

**Situation:**  
During a hackathon I was tasked with building a chatbot that could autonomously schedule meetings for a small sales team using Slack and Google Calendar.

**Task:**  
I needed to design the system so it behaved like a true AI agent: perceiving user intent, deciding on actions, learning from interactions, and acting independently within defined boundaries.

**Action:**  
First, I set up an NLP pipeline with spaCy to parse incoming messages (perception). Then I built a finite‑state decision engine that mapped intents (“schedule”, “cancel”) to API calls—this was the agent’s deliberation component. To give it autonomy, I wrapped the logic in a lightweight microservice that could trigger itself via webhooks whenever a new Slack message arrived (action). For learning, I logged each interaction and used reinforcement signals from user confirmations to adjust confidence thresholds over time. Finally, I enforced safety constraints by sandboxing API keys and adding a human‑in‑the‑loop override for any calendar change above a certain duration.

**Result:**  
The chatbot successfully booked 87% of meetings on the first day, reduced manual scheduling effort by 60%, and earned positive feedback from users who appreciated its proactive suggestions. I learned that an agent is defined not just by its ability to act but by its continuous perception‑decision‑action loop coupled with learning and bounded autonomy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
