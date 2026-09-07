---
qid: ing_83a8fd9bfd__faang__local
question: Define SLOs for a customer support agent. Every span returns 200 and latency
  is fine. What do you actually alert on?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 647
total_tokens: 896
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:51:06-05:00'
sources: []
---

**1️⃣ Clarify**  
*Goal:* “What SLOs should we monitor for a customer‑support agent’s service?”  
Assumptions I’d confirm:  
- The agent’s API is stateless and always returns HTTP 200.  
- Latency is already within acceptable bounds (e.g., < 500 ms).  
- The real business impact comes from *quality* of the support interaction, not raw availability.

**2️⃣ Approach**  
1. Identify *user‑perceived value* metrics that reflect agent effectiveness.  
2. Map those to observable signals in logs/metrics.  
3. Define thresholds (SLOs) and alerting rules.  

**3️⃣ Depth – Core SLOs & Alert Signals**  
| Metric | Why it matters | Observability | Threshold / Alert |
|--------|----------------|---------------|-------------------|
| **First‑Response Time (FRT)** | Customers expect a quick reply; delays hurt satisfaction. | Count of `first_response_started` → `first_response_completed`. | 90 % of tickets answered within *X* s (e.g., 60 s). |
| **Resolution Rate** | Indicates agent efficiency. | Success flag on `ticket_resolved` events. | < 95 % resolution in a rolling 24‑h window triggers alert. |
| **Escalation Rate** | High escalations signal knowledge gaps or complexity. | Count of `escalated_to_supervisor`. | > 5 % escalation per 1,000 tickets. |
| **Sentiment Score** | Direct proxy for customer happiness. | NLP‑derived sentiment on ticket replies. | Average score < 0.3 (on a 0–1 scale) triggers investigation. |

*Why these?*  
- They are **directly tied to business outcomes** (CSAT, churn).  
- They can be measured from existing logs/metrics without adding new instrumentation.  
- They provide actionable insight: e.g., a spike in FRT may point to backend latency or staffing gaps.

**4️⃣ Edge Cases & Testing**  
- *Bot responses:* Ensure alerts aren’t triggered by automated replies; filter by `agent_type`.  
- *Bulk ticket bursts:* Use sliding windows to avoid false positives during traffic spikes.  
- *Data skew:* Validate sentiment model on a sample of tickets before relying on it.

**5️⃣ Optimize & Communicate**  
- **Iterate thresholds** with data from CSAT surveys; use A/B testing.  
- **Add context** in alerts (e.g., top 3 pending ticket topics) to reduce triage time.  
- **Document SLOs** in a shared runbook, linking to the underlying metrics dashboards.

*Bottom line:* Even when every request returns 200 and latency is fine, the *real health* of customer support lies in how quickly and effectively agents respond—measure that, alert on deviations, and continuously refine thresholds with user‑feedback loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
