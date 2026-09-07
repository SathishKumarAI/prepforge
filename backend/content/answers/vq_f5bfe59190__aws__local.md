---
qid: vq_f5bfe59190__aws__local
question: How do you pass values from one form to another form ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 435
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:22:40-05:00'
sources: []
---

**Situation**  
At my previous startup we built a multi‑step onboarding wizard (Form A → Form B). After a user filled out the first form, we needed to persist their data until they completed the second form without exposing sensitive fields in URLs.

**Task**  
Design a robust, scalable way to transfer values between forms while ensuring data integrity and compliance with GDPR.

**Action**  
1. **Server‑side state** – Store the intermediate payload in an encrypted DynamoDB table keyed by a UUID returned to the client as a short‑lived token (JWT signed by Cognito).  
2. **Client flow** – After Form A submits, the Lambda authorizer validates the JWT, writes data to DynamoDB, and returns the token. The browser stores it in `sessionStorage`.  
3. **Form B** reads the token from `sessionStorage`, calls API Gateway `/fetch` (GET) with the token; the backend retrieves the record, strips PII, and sends only what Form B needs.  
4. **Security** – All endpoints are protected by Cognito authorizers, data at rest encrypted with KMS keys, and TLS everywhere.

**Result**  
- 0 % loss of user sessions (previously ~12 % dropped when users refreshed).  
- API latency <30 ms; DynamoDB throughput scaled automatically to >10k RPS during launch.  
- Cost: <$0.05 per transaction using on‑demand capacity.  

**Learnings** – The key was *ownership* of the entire data flow and *dive deep* into AWS services (Cognito, Lambda, DynamoDB, KMS). Future iterations will replace `sessionStorage` with a signed cookie for better UX across tabs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
