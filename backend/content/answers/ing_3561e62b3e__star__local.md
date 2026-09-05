---
qid: ing_3561e62b3e__star__local
question: 'Explain: F2: IPI via Confluence page or Slack thread'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 405
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:06-05:00'
sources: []
---

**Situation** – In my last role, the product team was rolling out a new AI‑driven recommendation engine. Every sprint required an *Implementation Plan Index* (IPI) that tracked feature readiness and risk for each component. The challenge was keeping the IPI visible to both engineers and stakeholders without cluttering our Jira board.

**Task** – I had to design a lightweight, real‑time IPI dashboard that could be updated on demand and referenced easily by anyone on the team, regardless of their tool preference (Confluence or Slack).

**Action** – First, I created a master Confluence page using the “Table” macro. Each row represented an AI sub‑feature, with columns for status, owner, estimated effort, risk level, and link to pull requests. I then wrote a small Node.js script that pulled the latest Jira issue fields via REST API every 15 minutes and updated the table automatically, ensuring the Confluence page was always current. For Slack users, I set up an incoming webhook that posted a concise summary of any status change in a dedicated #ai‑plan channel, using block kit to format the message with emoji indicators for risk and blockers. Team members could also trigger a “/ipi” slash command to pull the latest snapshot directly into chat.

**Result** – The dual‑channel IPI system cut manual update time by 70 % and reduced miscommunication incidents by 45 %. Stakeholders reported that they could now view feature progress without opening Jira, while engineers appreciated the real‑time alerts in Slack. From this, I learned that combining a central Confluence reference with lightweight Slack notifications balances transparency and agility for AI projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
