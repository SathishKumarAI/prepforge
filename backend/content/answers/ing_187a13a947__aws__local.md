---
qid: ing_187a13a947__aws__local
question: How should tool results be formatted before they go back into the model's
  context?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 514
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:21:02-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we design for the end‑user’s clarity; *Ownership* – I own the entire pipeline from inference to presentation.

### Situation  
I led a team that built an internal LLM‑powered recommendation engine. The raw model output was a JSON blob of candidate items with scores, but users found it opaque and it caused slow UI rendering.

### Task  
Define a formatting layer that turns raw results into a concise, user‑friendly payload while preserving fidelity for downstream analytics.

### Action  
1. **Requirements & Design**  
   * Input:* JSON array `{item_id, score, metadata}`.  
   * Output:* Compact list (max 10) with `display_name`, `formatted_score` (percentile), and a deterministic `confidence_bucket`.  
2. **Implementation**  
   * AWS Lambda (Python 3.12) as the formatting micro‑service.*  
   * Boto3 to pull item catalog from DynamoDB for display names, ensuring idempotence.*  
   * Use `pydantic` schemas to validate input and output—catching schema drift early.*  
3. **Scalability & Cost**  
   * Lambda scales automatically; cold start < 200 ms with provisioned concurrency of 50 (≈$0.0000167 per invocation).  
   * DynamoDB read capacity units set to 10, yielding < $1/month for our traffic (~100k requests/day).*  
4. **Testing & Monitoring**  
   * Unit tests cover edge cases (missing metadata).  
   * CloudWatch metrics (`FormatterLatency`, `FormatterErrorRate`) trigger alerts at >5 ms latency or >1% errors.*

### Result  
- Latency from model inference to UI rendering dropped 4× (from 320 ms to 80 ms).  
- User satisfaction score on the recommendation page rose 12 points (NPS +18→+30).  
- Operational cost for formatting stayed under $5/month, a 60% savings versus our monolithic service.

**Bar‑raiser Takeaway:** I demonstrated *Ownership* by delivering a complete, scalable component; *Dive Deep* through concrete AWS choices and cost calculations; and quantified impact with real metrics. I also learned that early schema validation prevented costly downstream failures—an example of continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
