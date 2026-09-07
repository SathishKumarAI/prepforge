---
qid: ing_4b4ccd73c3__faang__local
question: 'Explain: Non-functional — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 493
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:39:33-05:00'
sources: []
---

**Non‑Functional Requirements for an AI Customer Support Agent**

| # | Clarify | Approach | Depth | Edge Cases | Optimize & Communicate |
|---|---------|----------|-------|------------|------------------------|
| 1 | *Goal*: Deliver reliable, scalable, secure, and user‑friendly AI support. <br>*Assumptions*: Multi‑channel (chat, email), 24/7 uptime, GDPR/HIPAA compliance, SLA of 95% resolution within 2 min. | • List key NFR categories: **Performance**, **Scalability**, **Reliability**, **Security & Privacy**, **Maintainability**, **Usability**.<br>• Prioritize based on business impact. | *Performance*: <br>• Latency <300 ms average, 95th percentile <600 ms. <br>*Scalability*: <br>• Auto‑scale to 10k concurrent users; stateless microservices with Redis cache. <br>*Reliability*: <br>• 99.9% uptime; circuit breaker & fallback to human queue after 3 retries. <br>*Security*: <br>• End‑to‑end encryption, role‑based access, audit logs, token rotation. <br>*Maintainability*: <br>• CI/CD pipelines, versioned models, automated retraining triggers. <br>*Usability*: <br>• Conversational UI with tone‑adaptation; fallback prompts for ambiguous queries. | • Latency spikes during peak hours.<br>• Model drift causing incorrect answers.<br>• Data leakage through logs.<br>• Accessibility (screen readers) failing. | • Use A/B testing to validate latency improvements.<br>• Implement monitoring dashboards (Prometheus, Grafana). <br>• Communicate trade‑offs: tighter latency vs. model size; higher accuracy vs. inference cost. <br>• Document all NFRs in a living spec and review quarterly with stakeholders. |

**Takeaway:** By structuring NFRs into measurable targets, we align engineering effort with business goals, ensuring the AI agent is fast, secure, and continuously improvable while delivering an excellent customer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
