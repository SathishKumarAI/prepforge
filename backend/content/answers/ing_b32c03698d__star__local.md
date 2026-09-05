---
qid: ing_b32c03698d__star__local
question: 'Explain: Tools, skills, MCP — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 350
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:30:01-05:00'
sources: []
---

**Situation**  
When my team launched a conversational AI for customer support at a fintech startup, our internal quality score was only 68 %. The product manager demanded a 10‑point lift within two months to meet investor expectations.

**Task**  
I had to design a rigorous testing framework that would identify subtle failures—context drift, hallucinations, and policy violations—while keeping iteration time under 48 hours per release.

**Action**  
I introduced LangWatch’s AI Agent Testing suite. First, I built a test harness using Python’s `pytest` with the `langwatch-sdk`, creating parameterized scenarios that mirrored real‑world user flows (e.g., multi‑step account recovery). For coverage, I leveraged LangWatch’s **MCP** (Metric‑Controlled Path) engine to generate adversarial prompts targeting edge cases. To evaluate outputs, I combined automated BLEU scores with a human‑in‑the‑loop rubric that scored factual accuracy and tone on a 1–5 scale. We integrated the results into our CI pipeline via GitHub Actions, so every PR triggered a LangWatch run and produced an actionable report.

**Result**  
After two sprints, our quality score jumped to 81 %, exceeding the target by 3 points. The latency of test cycles dropped from 72 hours to 36 hours, enabling faster feature rollouts. I learned that coupling automated metrics with human judgment—via MCP’s targeted prompts—provides a balanced view of agent performance and drives tangible product improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
