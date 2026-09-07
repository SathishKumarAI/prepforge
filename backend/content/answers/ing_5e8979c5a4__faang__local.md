---
qid: ing_5e8979c5a4__faang__local
question: 'Explain: Evaluation plan — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 528
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:23:38-05:00'
sources: []
---

**Evaluation Plan for an AI‑Powered Customer Support Agent**

| Step | What | Why |
|------|------|-----|
| **Clarify** | • Define the scope: ticket routing, first‑contact resolution (FCR), sentiment detection, escalation logic.<br>• Confirm metrics: FCR %, average handle time (AHT), CSAT, agent workload, SLA compliance. | Ensures all stakeholders agree on success criteria. |
| **Approach** | 1. **Baseline** – measure current human performance for the same KPIs.<br>2. **Pilot** – deploy AI to a subset of agents or channels (e.g., chat only).<br>3. **Data collection** – log every interaction, agent feedback, and customer ratings.<br>4. **Analysis** – compute KPI delta vs baseline; run A/B tests on routing rules, confidence thresholds.<br>5. **Iterate** – adjust model retraining frequency, fallback policies, and human‑in‑the‑loop triggers. | Provides a controlled experiment to isolate AI impact. |
| **Depth** | • Use multi‑class classification for intent + sentiment; fine‑tune on domain data.<br>• Confidence thresholds determine when the bot hands off to an agent (e.g., <0.75).<br>• Retraining pipeline: nightly batch from new tickets, with active learning via human flagging.<br>• Complexity: inference O(1) per message; training O(N log N). | Technical robustness and scalability. |
| **Edge Cases** | • Ambiguous queries or mixed sentiment → fallback to agent.<br>• Regulatory data (PII) handling → encryption & audit trail.<br>• Zero‑downtime rollout: blue/green deployment, circuit breaker for model failures.<br>• Test with synthetic edge inputs (long messages, typos). | Prevents catastrophic failures and compliance breaches. |
| **Optimize & Communicate** | • Reduce AHT by 20% while keeping CSAT ≥ baseline → ROI ≈ $X per agent.<br>• Present findings in a dashboard: KPI trends, confidence heatmaps, agent feedback loops.<br>• Narrative: “We started with human benchmarks, introduced the AI in a controlled cohort, measured impact, and iterated until we hit target FCR and AHT gains.” | Demonstrates data‑driven decision making and clear stakeholder communication. |

**Word Count:** ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
