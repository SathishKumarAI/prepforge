---
qid: ing_2673a531af__star__local
question: 'Explain: Use IP Allow Lists Carefully — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 303
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:45:42-05:00'
sources: []
---

**Situation:**  
When redesigning our payment‑processing API, we had to expose a webhook endpoint that third‑party merchants used to receive transaction updates. Our internal load balancer was open to any IP, and the initial security review flagged a risk of spoofed requests flooding the service.

**Task:**  
I needed to secure the webhook so only legitimate merchant servers could post data, while keeping latency low enough for real‑time fraud alerts (target < 200 ms).  

**Action:**  
I implemented an IP allow list that pulled each merchant’s verified server ranges from our config store. The webhook handler first performed a fast in‑memory lookup against this list; if the source IP wasn’t present, it returned a 403 immediately. For dynamic merchants, I scheduled nightly jobs to sync their IP blocks via DNS TXT records, reducing manual ops. To avoid performance hits, I cached the allow lists per region and refreshed only on change events. Additionally, I added HMAC validation so that even if an attacker guessed an allowed IP, they’d still need the secret key.

**Result:**  
Within a month we saw a 97 % drop in failed or malicious webhook attempts, while average response time stayed at 180 ms. The team learned that combining lightweight IP filtering with cryptographic signing gives robust security without compromising real‑time guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
