---
qid: ing_2a1b5a2bdc__star__local
question: 'Explain: HTTPS Upgrade — What Happens When You Type a URL Into Your Browser?
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 362
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:52:19-05:00'
sources: []
---

**Situation**  
During my internship at a fintech startup, we noticed that users were dropping off when they typed “https://app.mybank.com” into the browser. The app was behind a load balancer and our analytics showed a 15 % drop‑off rate right after the initial request.

**Task**  
I needed to diagnose why HTTPS wasn’t being established automatically, fix the upgrade path, and reduce the drop‑off by at least 10 %.

**Action**  
First I reviewed the HTTP/1.1 response headers from our web server (NGINX). The `Strict-Transport-Security` header was missing, so browsers didn’t enforce HTTPS. I added `add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;`. Next, I enabled the HTTP/2 HSTS preloading list and updated our Cloudflare TLS settings to require TLS 1.3. I also implemented an HTTP redirect (301) from `http://` to `https://` in the server block, ensuring any accidental plain‑text requests were rerouted. Finally, I added a small JavaScript snippet that checks for `window.location.protocol !== 'https:'` and forces a reload.

**Result**  
After deployment, HTTPS upgrades happened automatically for 99.8 % of visits. The drop‑off rate fell from 15 % to 3 %, improving conversion by roughly 12 %. I learned how critical the HSTS header is for security posture and user experience, and that a single misconfigured redirect can silently erode trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
