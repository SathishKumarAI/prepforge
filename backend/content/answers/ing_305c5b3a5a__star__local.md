---
qid: ing_305c5b3a5a__star__local
question: 'Explain: Safety and Governance for Tool-Using Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 356
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:05:11-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new internal chatbot that could call external APIs to pull data from our CRM and scheduling system. Early testing revealed the bot occasionally suggested booking meetings outside of approved hours or accessed customer records it shouldn’t have, raising compliance concerns.

**Task:**  
I was tasked with designing a safety and governance framework so the agent could use tools reliably without violating policy or exposing sensitive data, while still delivering useful responses to users.

**Action:**  
First, I mapped out the tool‑interaction flow and defined “safe states” for each API call. I built an internal policy engine that intercepted every request, checked a whitelist of allowed parameters, and logged context metadata (user role, time, intent). Next, I added a reinforcement‑learning safety layer: a small classifier scored each generated prompt against a curated set of forbidden patterns; low‑score prompts were rewritten or rejected. I also implemented an audit trail using PostgreSQL that stored the agent’s decision tree per session for later review. Finally, we ran A/B tests with 200 users and collected metrics on error rate, compliance violations, and user satisfaction.

**Result:**  
The bot’s policy‑violations dropped from 12 % to <1 %, while response latency increased only by 8 ms. User satisfaction rose 15 % as measured by NPS. I learned that combining rule‑based guardrails with lightweight ML safety nets gives robust governance without crippling performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
