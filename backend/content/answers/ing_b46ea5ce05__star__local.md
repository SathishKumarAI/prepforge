---
qid: ing_b46ea5ce05__star__local
question: 'Explain: How do you evaluate an agent? Compare trajectory evals and final-outcome
  evals.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 351
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:32:28-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we launched an AI‑driven loan underwriting agent. The beta period showed mixed performance: some customers were approved too quickly, others too slowly, and overall satisfaction lagged behind our target.

**Task:**  
I had to design a rigorous evaluation framework that would let us measure the agent’s effectiveness both in real time (how it behaved along each interaction) and at the end of the customer journey (final credit decision accuracy).

**Action:**  
First I implemented *trajectory evaluations* by instrumenting every state transition with contextual metrics—time per turn, confidence scores, and user sentiment. This allowed us to spot pattern anomalies early, like a sudden drop in confidence after a policy change. Then I set up *final‑outcome evaluations*, aggregating the entire interaction into key KPIs: approval accuracy (target 92%), default rate, and NPS. I compared both by aligning the trajectory logs with the outcome labels, using A/B tests to see how early signals predicted final decisions. The trade‑off was clear: trajectory evals gave high‑resolution diagnostics but required more data storage; final‑outcome evals were simpler and directly tied to business metrics.

**Result:**  
By balancing both approaches we cut mis‑approvals by 18% and increased NPS from 62 to 78 in three months. I learned that continuous, granular monitoring is essential for rapid iteration, while outcome‑centric metrics keep the team focused on business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
