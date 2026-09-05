---
qid: ing_034498214b__eli5__local
question: 'Explain: The Journey of a DNS Query — How DNS Actually Works - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 266
total_tokens: 434
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:40:13-05:00'
sources: []
---

Think of the internet like a huge city where every website is a house, but houses only know their own street names, not each other’s exact addresses.  
When you type “www.example.com” into your browser, it’s like asking: “Where does this house live?”  

1. **Your computer asks its local librarian (the DNS resolver)** – the first question is sent to a nearby library that keeps a quick‑reference book of popular houses.  
2. **If the book doesn’t have it, the librarian goes to the city hall (root servers).** The city hall knows only the major streets (top‑level domains like .com) and points you to the right neighborhood office.  
3. **The neighborhood office (TLD server)** gives you a map to the specific district’s post office (authoritative DNS server for example.com).  
4. **Finally, the post office hands over the exact street address (the IP number).**  

Your browser then uses that address to talk directly to the house’s mailbox. The whole trip is quick—just a few library visits—and it lets you reach any web “home” without remembering its numeric address.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
