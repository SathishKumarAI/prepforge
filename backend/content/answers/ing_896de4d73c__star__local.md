---
qid: ing_896de4d73c__star__local
question: 'Explain: What Tools Are — Tools vs. Subagents: Building Effective AI Agents
  Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 380
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:08:00-05:00'
sources: []
---

**Situation**  
At my previous company we had a customer‑support chatbot that handled 70% of inbound tickets but still struggled with complex queries. The engineering team kept adding new modules—intent classifiers, entity recognizers, fallback handlers—turning the bot into a monolithic “mega‑agent” that was hard to debug and slow to deploy.

**Task**  
I needed to refactor the system so it could handle advanced tasks (like multi‑step troubleshooting) while remaining lightweight, maintainable, and quick to iterate on new features.

**Action**  
I introduced a *tool* architecture: instead of embedding every capability directly into the agent, I built reusable “tools”—small, stateless services that perform specific actions (e.g., querying a knowledge base, executing a REST API call, or running a Python script). The main agent uses an LLM to decide which tool to invoke based on the user’s intent. I also set up a lightweight sub‑agent layer for orchestration: a short‑lived orchestrator that chains tools when multiple steps are required, but keeps state minimal by passing only the necessary context forward. This approach leveraged open‑source frameworks like LangChain for tool registration and FastAPI for deployment, reducing our CI/CD cycle from days to hours.

**Result**  
After three sprints we cut the bot’s response time from 2.5 s to under 0.8 s, increased ticket resolution rate by 18%, and lowered engineering effort on new features by ~40% because adding a tool was as simple as publishing a REST endpoint. I learned that treating complex capabilities as composable tools—rather than hard‑coding them into the agent—yields scalable, maintainable AI systems without over‑engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
