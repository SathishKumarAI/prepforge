---
qid: ing_d0e35a9542__eli5__local
question: 'Explain: Summary — Proxy vs Reverse Proxy (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 208
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:06:21-05:00'
sources: []
---

Think of the internet as a big office building full of desks (websites).  
A **proxy** is like a personal assistant who sits in front of you, takes your mail (requests), and forwards it to the right desk inside the building. You see the assistant’s address, not the actual office.  

A **reverse proxy** flips that role. It stands at the building’s front entrance, receives all visitors’ letters, decides which internal desk should handle each one, and then hands them over. The visitors only know the front‑door address; they never see or interact with the individual desks.

Examples:  
*Proxy*: You use a VPN server to browse sites so that the sites only see the VPN’s IP.  
*Reverse proxy*: A company uses Nginx in front of several web servers (app, static files) so all traffic comes through one public URL and is routed internally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
