---
qid: ing_770be7c282__eli5__local
question: 'Explain: Questions and Solutions — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 290
total_tokens: 458
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:45:10-05:00'
sources: []
---

Imagine your browser is a friendly mail‑delivery service, and the URL you type is an address on a postcard. First, the service (your computer) looks up that address in its own small map (the DNS cache). If it can’t find it, it asks a bigger map‑service (a DNS server) for the exact street name—this is called “resolving” the domain into an IP address, like turning *example.com* into 93.184.216.34.

Once it has the street number, your browser sends a package (an HTTP request) over the internet to that house. The house’s front door is the web server listening on port 80 or 443. The server receives the request, reads what you asked for (the page path), and writes back a reply—your webpage—just like the mail‑man brings the letter back to you.

Along the way, your browser may ask a local “post office” (a proxy or VPN) to forward the package, and it can also encrypt the whole trip with TLS so nobody else can read what’s inside. The result? A web page appears on your screen, all because your browser followed that simple address through a chain of lookup, routing, and delivery steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
