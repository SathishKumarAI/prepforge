---
qid: ing_2a078b0f4a__aws__local
question: What's different about optimistic UI when the backend is an LLM rather than
  a CRUD API?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 429
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:00:18-05:00'
sources: []
---

**Situation / Task**  
I led a feature that let users edit product descriptions in real‑time using an LLM (Amazon SageMaker endpoint) instead of a classic CRUD API. The goal was to keep the UI responsive while still providing high‑quality, AI‑generated text.

**Action**  
1. **Design** – Adopted *optimistic updates* but with *streaming partial responses* from the LLM via WebSocket (API Gateway + Lambda).  
2. **AWS Services** – SageMaker for inference, API Gateway/WebSocket for real‑time push, DynamoDB for state persistence, CloudWatch for metrics.  
3. **Error handling** – If the LLM fails or returns a low‑confidence score (<0.7), the UI falls back to the last committed value and shows an inline warning.  
4. **Scalability** – Lambda scales automatically; SageMaker endpoints are autoscaled by GPU count.  
5. **Cost/Availability** – Leveraged spot instances for inference, reserved capacity for critical paths, and Multi‑AZ DynamoDB for 99.999% availability.

**Result**  
- Latency from user keystroke to first partial render dropped from 1.2 s (CRUD) to <300 ms.  
- User satisfaction scores rose by **12 pts** on the NPS survey.  
- Error rate stayed below 0.5 % after implementing confidence thresholds.

**Bar‑raiser takeaways**  
- Demonstrated *ownership* of end‑to‑end flow and *dive deep* into latency trade‑offs.  
- Quantified impact with real metrics (latency, NPS).  
- Learned from early failures by adding fallback logic that preserved UX consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
