---
qid: ing_ae10ea7bc0__eli5__local
question: 'Explain: How the Internet Works — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 246
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:13:19-05:00'
sources: []
---

When you type “www.example.com” into your browser, imagine it as calling a friend’s house through a huge city of phone lines.  

1. **Your computer (the caller)** writes the address on a paper note and hands it to your local Internet Service Provider (ISP).  
2. **The ISP (a big telephone company)** reads the note, looks up which “phone number” (IP address) belongs to that house in its directory, and forwards the call.  
3. **Domain Name System (DNS) servers** act like a phone book: they translate the human‑friendly name into the numeric IP address your ISP needs.  
4. The request travels through routers—tiny traffic lights that decide which path is best—to reach the server at that IP.  
5. The server sends back the web page, and your browser shows it, just as you’d receive a reply from your friend.

So typing a URL is like dialing a number after looking it up in a giant phone book; routers are traffic lights that route the call through the internet’s highways.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
