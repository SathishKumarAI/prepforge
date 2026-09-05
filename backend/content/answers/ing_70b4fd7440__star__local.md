---
qid: ing_70b4fd7440__star__local
question: 'Explain: Session-Cookie — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 408
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:12:52-05:00'
sources: []
---

**Situation**  
I was onboarding a new data‑science team that had just moved their model‑serving API from a simple Flask app to a production‑grade microservice. The old version used plain query strings for auth, so we were seeing frequent credential leaks and session hijacks.

**Task**  
My job was to design a robust authentication flow that kept user tokens safe while still being fast enough for real‑time inference requests.

**Action**  
I chose JWTs as the token format because they’re stateless and easy to verify. The tokens were stored in HTTP‑Only, Secure cookies so JavaScript couldn’t read them, and I set SameSite=Lax to prevent CSRF. For session tracking, I kept a short‑lived session ID in Redis; each request would look up the session in Redis to enforce rate limits and audit logs. When a user logged out or a token expired, the session entry was deleted immediately. I also added a middleware that refreshed the JWT before it hit 80% of its lifespan.

**Result**  
After deployment we saw a 45 % drop in failed authentication attempts and no credential‑leak incidents for six months. The team learned that combining short‑lived Redis sessions with long‑lived JWTs gives both security and scalability, and the cookie flags were essential to keep attacks at bay.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
