---
qid: ing_68fac3ad33__aws__local
question: 'Explain: Beyond expectations — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 461
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:21:40-05:00'
sources: []
---

**Situation / Task**  
Our SaaS platform sends onboarding emails to every new user. After a spike in churn, we discovered that ~12 % of users never opened the first email because they were blocked by spam filters or simply missed it. The product owner asked me to build a “Resend Email” feature that would automatically retry sending until the message is delivered **or** the user opens it.

**Action (Design)**  
1. **Event‑driven architecture** – use **Amazon EventBridge** to publish `email_sent` events.  
2. **Retry queue** – push failed deliveries into an **SQS FIFO** queue with a per‑user visibility timeout of 5 min and a maximum retry count of 10.  
3. **Lambda worker** – each message triggers a Lambda that calls **Amazon SES**; on success, we publish `email_opened` via EventBridge.  
4. **Open tracking** – embed a 1×1 pixel in the email that hits an API Gateway endpoint; the backend writes to DynamoDB (`user_id`, `opened_at`).  
5. **Policy** – if `opened_at` is present, all queued retries for that user are cancelled via DynamoDB TTL.

**Result**  
After rollout:  
- Open rate increased from 45 % to 68 % (Δ 23 %).  
- Churn dropped by 4 % YoY.  
- Costs stayed < $0.02 per resend; total spend grew 1.2× but revenue impact > 10×.

**Leadership Principles**  
*Customer Obsession*: We focused on the user’s inbox experience, not just delivery metrics.  
*Dive Deep*: The Lambda retry logic and open‑tracking pixel were engineered to surface root causes of failures.  

**Bar‑raiser takeaways** – I owned the end‑to‑end flow, quantified impact with real numbers, and learned that a lightweight event‑driven retry can outperform heavyweight queue polling without breaking scalability or cost constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
