---
qid: vq_f5bfe59190__star__local
question: How do you pass values from one form to another form ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 307
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:26:57-05:00'
sources: []
---

**Situation**  
During a recent e‑commerce overhaul, I was tasked with migrating the checkout flow from a single-page form to two separate pages: shipping details and payment confirmation. The original implementation stored all user inputs in a global context that didn’t survive page reloads, causing lost data when users navigated back.

**Task**  
I needed to preserve the shipping address across the redirect while ensuring the new payment form could validate against it without exposing sensitive fields on the URL or server logs.

**Action**  
I introduced a short‑lived JSON Web Token (JWT) that encoded the shipping object. After validating the first form, I signed the payload with our secret key and stored it in `sessionStorage`. On the second page, I decoded the JWT, rehydrated the state with Redux, and prefilled the payment fields. To keep the token secure, I set the `HttpOnly` flag on a server‑generated cookie that only served the checkout domain. If the user refreshed, the client fetched the token from the cookie via an API call.

**Result**  
The two‑step flow now retains 100 % of shipping data across navigation, reducing cart abandonment by 18 %. I learned that coupling form state to a signed, short‑lived token balances security and UX without over‑engineering the solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
