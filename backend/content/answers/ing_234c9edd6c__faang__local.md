---
qid: ing_234c9edd6c__faang__local
question: 'Explain: Dashboard Metrics — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 470
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:06:15-05:00'
sources: []
---

**Dashboard Metrics for a Conversational AI Agent**

| **Metric** | **What it Measures** | **Why It Matters** |
|------------|----------------------|--------------------|
| **Conversation Volume** | # of active chats per day/week | Gauges user engagement & system load. |
| **First‑Response Time (FRT)** | Avg time to reply after user message | Direct indicator of perceived responsiveness. |
| **Resolution Rate** | % conversations closed without escalation | Measures agent effectiveness and user satisfaction. |
| **Escalation Ratio** | # handoffs to human / total chats | Helps tune confidence thresholds and identify knowledge gaps. |
| **Intent Accuracy** | Correct intent detection rate | Core quality metric for NLP pipeline. |
| **User Satisfaction Score (CSAT)** | Avg rating post‑chat | Final business KPI linking tech to revenue. |

### Clarify
- **Goal:** Drive continuous improvement of the agent’s UX and cost efficiency.
- **Assumptions:** Data is available via logs; users rate satisfaction after chat; escalation triggers are logged.

### Approach
1. Aggregate logs → compute raw counts & averages.  
2. Normalize by user base to account for growth.  
3. Visualize in a real‑time dashboard (e.g., Grafana) with alert thresholds.

### Depth
- **Data Pipeline:** Ingest via Kafka, aggregate in Spark/SQL; store in ClickHouse for low‑latency queries.  
- **Complexity:** O(N) per batch; near‑real‑time (≤ 1 min).  
- **Trade‑offs:** Rich metrics vs. storage cost—use downsampling for older data.

### Edge Cases
- Sudden traffic spikes → FRT may inflate; need smoothing.  
- Bot failures → Intent accuracy drops sharply; set anomaly alerts.  
- Sparse CSAT → impute via NPS or use Bayesian smoothing.

### Optimize & Communicate
- **Auto‑tune thresholds** based on historical escalation ratios to reduce human handoffs.  
- Present findings in a concise slide deck: current state, trend line, action items.  
- Emphasize how each metric feeds into the product roadmap and ROI calculations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
