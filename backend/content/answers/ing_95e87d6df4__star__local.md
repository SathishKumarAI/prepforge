---
qid: ing_95e87d6df4__star__local
question: 'Explain: Component Three: Tool Use — LLM Powered Autonomous Agents | Lil''Log'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 346
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:32:42-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we had a data‑science platform that generated daily risk reports for our compliance team. The manual report generation took three hours each day, and the compliance lead complained about stale data and missed red flags.

**Task:**  
I was tasked with reducing the turnaround time to under one hour while keeping accuracy above 99% and enabling real‑time alerting.

**Action:**  
First I scoped a microservice architecture: a FastAPI gateway that exposed an endpoint for report requests, backed by a Celery queue. For the core intelligence I built a *tool‑using LLM agent* using LangChain’s AgentExecutor. The agent was given a set of Python tools—`pandas.read_csv`, `sqlalchemy.query`, and a custom `risk_score()` function—to fetch data, compute metrics, and flag anomalies. We fine‑tuned the prompt on 500 past reports and added a safety wrapper that cross‑checked outputs against a deterministic rule engine before publishing. The agent’s output was streamed back to the UI via Server‑Sent Events so users saw progress in real time.

**Result:**  
The new pipeline cut report generation from three hours to 45 minutes, with an accuracy of 99.3% on post‑deployment audits. User satisfaction scores jumped by 27%, and we saved roughly $12k annually in manual labor. I learned that blending LLMs with well‑defined toolsets can deliver reliable autonomy without sacrificing control or auditability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
