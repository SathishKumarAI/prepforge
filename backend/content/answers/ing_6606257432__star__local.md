---
qid: ing_6606257432__star__local
question: 'Explain: Frameworks — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 396
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:51:55-05:00'
sources: []
---

**Situation:**  
During my last role at a fintech startup, we had to build an AI‑powered customer support bot that could answer regulatory queries and also trigger internal workflows—like opening new accounts or updating KYC data—using our existing ERP system. The SLA was 95 % accurate answers within two seconds.

**Task:**  
I needed to design a modular agent framework where the LLM could decide when to call external APIs, handle retries, and log every decision for auditability, all while keeping latency low.

**Action:**  
I chose LangChain as the orchestration layer and built an “Agent Executor” that wrapped OpenAI’s GPT‑4. The executor parsed user intent into a set of tool calls (e.g., `open_account`, `update_kyc`). I implemented a policy engine in Python that weighted tool usage based on confidence scores, added exponential backoff for API failures, and logged each step to a ClickHouse analytics table. To keep latency under 1.5 s, I pre‑cached frequent lookup data in Redis and used async calls with `httpx`. I also created a simple UI dashboard so support staff could see the agent’s reasoning path.

**Result:**  
Within two weeks of deployment, we achieved 97 % answer accuracy and cut average response time from 2.8 s to 1.3 s. The audit logs helped us reduce false positives by 40 %. I learned that a well‑structured agent framework—clear intent parsing, weighted tool selection, and robust retry logic—is key to balancing speed, reliability, and compliance in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
