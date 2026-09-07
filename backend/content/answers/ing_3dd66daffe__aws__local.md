---
qid: ing_3dd66daffe__aws__local
question: 'Explain: Agent Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 223
output_tokens: 420
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:40-05:00'
sources: []
---

**Situation / Task**  
While building a customer‑support chatbot for a global retailer, I was asked to move from a single‑purpose “rule‑based” agent to a modular *Agent Pattern* architecture that could support multiple domains (returns, payments, shipping) and scale with traffic spikes during holiday seasons.

**Action**  
1. **Dive Deep into requirements** – mapped each domain to an independent micro‑service, defined clear input/output contracts, and created a lightweight “Orchestrator” Lambda that routes user intents via Amazon Lex.  
2. **AWS services & design choices** –  
   * **Amazon Lex** for intent detection (high accuracy >95 % with fine‑tuned slots).  
   * **AWS Step Functions** to chain domain agents, ensuring atomicity and retries.  
   * **Amazon DynamoDB** as a shared state store (low latency, auto‑scaling).  
   * **Amazon CloudWatch & X-Ray** for observability; set up custom metrics (e.g., “agent response time”, “fallback rate”).  
3. **Bias for Action & Ownership** – rolled out the pattern incrementally using feature flags, monitored real‑time metrics, and adjusted concurrency limits to keep cost < $0.03/1 k messages.

**Result**  
- Reduced average customer wait time from 45 s to 12 s (72 % improvement).  
- Cut fallback rate by 80 %, increasing first‑contact resolution from 58 % to 84 %.  
- Scaled to 150 k concurrent sessions during Black Friday with no outages, keeping monthly spend under $3,200.

**Learning & Bar‑raiser cues** – I documented failure cases (e.g., intent misclassification) and added automated retraining pipelines; the team now reviews these logs weekly to keep model drift in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
