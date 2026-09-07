---
qid: ing_69c00b8c53__aws__local
question: 'Explain: SSO (Single Sign-On) — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 417
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:23:19-05:00'
sources: []
---

**Answer (Amazon‑style)**  

When I redesigned the SSO flow for our global e‑commerce platform, I focused on **Customer Obsession** and **Ownership**.  

> **Situation:** Our legacy SSO used opaque session IDs stored in short‑lived cookies; this caused a 12 % drop‑off during checkout because users were forced to re‑authenticate when the cookie expired.  
> **Task:** Build a token‑based SSO that reduces friction, scales to 10M concurrent users, and complies with GDPR.  
> **Action:** I proposed a JWT‑backed flow:  
> * **Token** – A signed JSON Web Token (JWT) issued by Cognito, containing user claims and a 15‑minute expiration.  
> * **Cookie** – An HttpOnly, SameSite=Lax cookie that stores the token; it is refreshed via silent OAuth2 back‑channel renewals using AWS AppSync.  
> * **Session** – A short‑lived Redis‑cached session (TTL 30 s) for stateful actions (e.g., multi‑step checkout).  
> I used **AWS Cognito** for auth, **API Gateway + Lambda** for token validation, and **ElastiCache** for session caching. This architecture reduced checkout drop‑off to 3 % and cut server costs by 18 %.  
> **Result:** We achieved a 95 % single‑click login success rate globally and received the “Customer Obsession” award.  

*Bar‑raiser cues:* I took full ownership of security, dove deep into token replay risks, quantified impact with real metrics, and learned from an early failure where we underestimated cookie TTLs—leading to a redesign that now balances UX and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
