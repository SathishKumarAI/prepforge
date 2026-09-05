---
qid: ing_ff1b96223a__star__local
question: 'Explain: Agent Skills (SKILL.md) — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 301
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:58:51-05:00'
sources: []
---

**Situation:** At a fintech startup, we were building an automated customer support chatbot that needed to handle complex user queries—like querying transaction histories or initiating money transfers—while staying compliant with regulatory constraints.

**Task:** I had to design the agent’s skill set (as defined in our SKILL.md) so it could safely invoke external tools (database APIs, payment gateways, compliance engines) without exposing sensitive data or breaching policy rules.

**Action:** First, I mapped every user intent to a specific “skill” entry: `fetch_transactions`, `initiate_transfer`, `check_fraud_risk`. Each skill wrapped its tool call in a sandboxed execution context that validated inputs against a schema and enforced rate limits. I used the OpenAI function calling interface to let the LLM request the exact parameters, then had our orchestration layer verify them before forwarding to the tool. For compliance, I added a post‑execution policy checker that scanned logs for any policy violations and rolled back or flagged actions automatically.

**Result:** The chatbot’s first month saw a 35 % drop in manual ticket volume, and we achieved 99.8 % accuracy on transaction queries while maintaining zero policy breaches. I learned how careful skill definition and tool‑sandboxing turn an LLM into a reliable, auditable agent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
