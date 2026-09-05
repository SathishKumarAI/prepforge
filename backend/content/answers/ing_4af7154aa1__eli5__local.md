---
qid: ing_4af7154aa1__eli5__local
question: 'Explain: DNS — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 228
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:35:45-05:00'
sources: []
---

**DNS is like a phone book for the internet.**  
When your computer asks “What IP address belongs to www.example.com?”, it sends a query to a DNS server.

Think of two ways you can call someone: a quick, one‑time text (UDP) or a reliable phone call that guarantees the other side hears every word (TCP).

* **UDP (User Datagram Protocol)** is the text. It’s fast and lightweight—DNS queries are usually tiny, so sending them over UDP lets answers arrive almost instantly. If a packet gets lost, the client simply retries.

* **TCP** is the phone call. When a DNS response is large or the client needs to be sure it received everything (for example, when zone transfers happen), TCP guarantees delivery and order, though it takes slightly longer because of handshakes and acknowledgments.

In system design, you choose UDP for speed on normal lookups and fall back to TCP only when reliability or larger data is required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
