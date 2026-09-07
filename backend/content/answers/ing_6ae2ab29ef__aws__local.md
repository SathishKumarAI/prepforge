---
qid: ing_6ae2ab29ef__aws__local
question: 'Explain: API Key (API_KEY) — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 414
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:51-05:00'
sources: []
---

**Situation / Task**  
I was tasked with exposing a private Supabase‑backed GraphQL endpoint to an external mobile app while keeping data integrity and cost under control.

**Action**  
1. **Requirement Clarification** – The API must authenticate every request, enforce row‑level security, and log usage for billing.  
2. **Design** –  
   - Generate a short‑lived `API_KEY` stored in Supabase’s `.env`.  
   - Use the key as an HTTP header (`Authorization: Bearer <key>`) on all GraphQL calls.  
   - In the serverless function (AWS Lambda), validate the key against Secrets Manager, then forward the request to Supabase’s GraphQL endpoint.  
3. **Services** –  
   - **Supabase** for auth & Postgres.  
   - **AWS API Gateway + Lambda** to handle throttling and logging.  
   - **Secrets Manager** to rotate keys every 90 days.  
4. **Scalability / Availability** – API Gateway auto‑scales; Lambda keeps cold starts minimal with provisioned concurrency.  
5. **Cost & Trade‑offs** – Using a single key reduces IAM complexity but requires strict rotation logic; we trade off a tiny extra latency for tighter security.

**Result**  
- 99.9 % request success rate over 3 months.  
- API call cost dropped 25 % after switching to Lambda layers for the GraphQL client library.  
- Key rotation reduced potential breach window by 90 days.

**Reflection (Bar‑raiser focus)**  
I took full ownership of the security chain, dove deep into Supabase’s RLS docs, quantified performance gains, and learned that rotating keys in Secrets Manager, rather than embedding them in code, dramatically lowers risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
