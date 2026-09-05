---
qid: ing_c95a3deda6__star__local
question: What are Agent Skills, and when do you package knowledge as a skill rather
  than a tool, an MCP server, or retrieval?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 366
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:11:55-05:00'
sources: []
---

**Situation**  
At my previous company we were building an AI-powered customer support chatbot that needed to handle a growing set of product issues. The backlog grew from 1,200 tickets per month to over 3,000, and our engineering team was scrambling to add new responses without bloating the core model.

**Task**  
I had to design a modular way to add domain expertise so we could ship updates quickly, keep the base model lightweight, and avoid retraining on every new FAQ.

**Action**  
I mapped out “skills” as reusable, declarative knowledge units: each skill was a JSON schema defining intents, slot types, and response templates. For high-frequency, logic-heavy tasks I wrapped them in micro‑services (MCP servers) that the bot could call via REST. For content‑heavy or context‑sensitive queries I used a retrieval layer backed by ElasticSearch to surface relevant knowledge base articles. When a skill required both reasoning and data lookup—like calculating shipping cost—I packaged it as an “Agent Skill” that combined a lightweight inference model with a rule engine and external API calls. This kept the main model small, allowed independent versioning, and let us roll out new skills in minutes.

**Result**  
We reduced ticket volume by 27% within three months, cut average resolution time from 12 min to 4 min, and cut engineering effort on new feature deployment from weeks to days. I learned that packaging as a skill is ideal when the knowledge can be expressed declaratively, reused across intents, and needs to be updated independently of the core model. Tools are for low‑level utilities, MCP servers for heavy logic, and retrieval for content lookup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
