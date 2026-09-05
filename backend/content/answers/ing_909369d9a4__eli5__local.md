---
qid: ing_909369d9a4__eli5__local
question: What is domain name resolution? — What Happens When You Type a URL Into
  Your Browser? - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 221
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:26:00-05:00'
sources: []
---

Imagine you’re looking for a friend’s house on a street map that only lists names, not numbers. The friend’s name is the **domain** (like *example.com*), and the street number is the **IP address** (the computer’s unique numeric label). When you type the URL into your browser, it first asks a local “address book” called the DNS resolver on your device. If that book doesn’t have the answer, it forwards the question to a big, public “phone directory” – the root DNS servers. These point to the next level of directories (country or top‑level domain servers), which eventually lead to the specific server that knows *example.com*’s exact IP address. Once found, your browser uses that number to dial the website’s computer and load the page. The whole process is like looking up a friend’s house: you start with a name, ask increasingly detailed directories until you get the precise address needed to visit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
