---
qid: ing_16e7fbedc2__star__local
question: 'Explain: Introduction — What Happens When You Type a URL Into Your Browser?
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 435
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:14:22-05:00'
sources: []
---

**Situation:**  
During a client‑facing workshop on web performance, the audience was curious why their page load times were inconsistent across regions. I decided to walk them through the journey of a URL request from typing it into a browser.

**Task:**  
Explain in plain language how a browser resolves a URL and fetches content while highlighting key design choices that affect latency and scalability.

**Action:**  
I broke the process into four concrete steps:  

1. **DNS lookup** – the browser first checks its cache, then queries local DNS resolvers; if missing, it hits authoritative name servers using UDP/TCP to resolve the domain to an IP. I noted how recursive caching reduces round‑trips.  
2. **TCP handshake & TLS negotiation** – a three‑way handshake establishes a connection; for HTTPS, the browser performs a TLS 1.3 handshake, leveraging session resumption and zero‑RTT where possible to cut RTTs.  
3. **HTTP request & server response** – I described pipelining, keep‑alive, and HTTP/2 multiplexing, showing how parallel streams reduce head‑of‑line blocking. The server’s load balancer distributes the request across stateless containers behind a CDN edge for low latency.  
4. **Content delivery & caching** – static assets are served from edge caches; dynamic data hits an application tier that queries a distributed cache (Redis) before hitting the database, illustrating how read‑through caching cuts query time.

**Result:**  
The audience could map each phase to measurable metrics: DNS lookup < 10 ms on average, TLS handshake ~30 ms with session resumption, HTTP/2 multiplexing cuts total payload time by 40%. I highlighted that optimizing any single step—like adding a CDN or enabling HTTP/3—can dramatically improve user experience. This concrete walkthrough helped them prioritize performance improvements in their own stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
