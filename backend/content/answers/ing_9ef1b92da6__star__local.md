---
qid: ing_9ef1b92da6__star__local
question: 'Explain: Step 3. Add MCP Tools — How Do AI Agents Work - by Neo Kim and
  Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 313
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:50:06-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with building a customer‑support chatbot that could pull data from our CRM, interpret user intent, and route tickets to the right team. The deadline was tight—just two weeks before the product launch.

**Task**  
I needed to integrate multi‑party communication (MCP) tools so the bot could not only understand user input but also act on it: create tickets, update statuses, and send follow‑up emails—all while maintaining a single source of truth across Slack, email, and our internal ticketing system.

**Action**  
First, I mapped out the agent’s state machine using Neo Kim’s “Add MCP Tools” framework. I implemented a lightweight event bus with Kafka to stream user intents from the NLP module. Then I wrote micro‑services in Python that subscribed to these events: one service created tickets via the Zendesk API; another updated our internal DB and pushed Slack notifications through Bolt for Python. To keep the agents responsive, I used async/await patterns and capped retries to avoid duplicate actions.

**Result**  
The bot handled 1,200 support queries in the first week with a 98% success rate on ticket creation and a 30 % reduction in average resolution time compared to our manual process. The experience taught me that coupling clear intent handling with robust MCP integration is key to scalable AI agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
