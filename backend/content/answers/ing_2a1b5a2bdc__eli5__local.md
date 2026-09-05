---
qid: ing_2a1b5a2bdc__eli5__local
question: 'Explain: HTTPS Upgrade — What Happens When You Type a URL Into Your Browser?
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 260
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:42:15-05:00'
sources: []
---

Imagine you’re about to call someone at their home phone number, but you want to use the secure “phone line” that keeps your conversation private.  
1. **You type a web address (URL)** – like dialing the number. The browser first asks the internet’s directory (DNS) for the house’s address (IP).  
2. **It connects via plain text** – it reaches the server and says, “Can we talk over a secure line?” This is the *HTTP Upgrade* request: “I’d like to switch from ordinary HTTP to HTTPS.”  
3. **The server agrees** – if it supports HTTPS, it replies with an *Upgrade* header saying it’s ready. The browser then opens a new, encrypted tunnel (TLS) on the same connection.  
4. **All future traffic is protected** – every page request and response now travels through that secure line, just like your phone call stays hidden from eavesdroppers.  

So typing a URL first checks where to go, asks for encryption, and if granted, flips everything to HTTPS—just as you’d upgrade to a private phone line before speaking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
