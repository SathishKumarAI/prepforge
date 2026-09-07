---
qid: ing_dc13b75546__aws__local
question: Your chat agent is moving to the phone. What actually changes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 419
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:35:18-05:00'
sources: []
---

**Situation & Task (S)**  
When we rolled out our conversational AI from web chat to a voice‑first mobile app, the product team had to preserve user intent accuracy while meeting strict latency and cost targets on the phone.

**Action (A)**  
1. **Ownership & Bias for Action:** I led a cross‑functional sprint, assigning “phone‑first” owners in UX, data science, and infrastructure.  
2. **Dive Deep into requirements:** We mapped call flows, defined confidence thresholds for intent recognition, and identified the 5 % of utterances that trigger fallback calls to human agents.  
3. **Design & AWS services:**  
   - *Amazon Lex* for intent parsing (multi‑language support).  
   - *AWS Lambda* + *Amazon API Gateway* for real‑time response logic.  
   - *Amazon DynamoDB* (global tables) for low‑latency user context storage.  
   - *Amazon Connect* for seamless handoff to live agents when confidence < 0.7.  
4. **Scalability & Availability:** Leveraged Lambda’s auto‑scaling and DynamoDB global tables to keep 99.9 % uptime across regions, while using S3 + CloudFront for static assets.  
5. **Cost Optimization:** Implemented provisioned concurrency only during peak hours, reducing spend by 18 %.  

**Result (R)**  
- Latency dropped from 350 ms (web) to < 120 ms on mobile.  
- User satisfaction rose 22 % (NPS +14 points).  
- First‑time resolution improved by 15 %, cutting support calls by $2.1M annually.

**Learnings**  
We discovered that fine‑tuning Lex slot types dramatically reduced fallback rates—an insight we shared in a post‑mortem, reinforcing a culture of continuous learning and ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
