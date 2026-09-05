---
qid: ing_aeca08acc3__eli5__local
question: 'Explain: Availability Zones (AZ) — AWS-Services/AWS-Global-Architecture-Region-AZ.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 174
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:14:35-05:00'
sources: []
---

Think of an Availability Zone (AZ) like a city block in a big neighborhood. Each block has its own power plant, water line, and roads that are independent from the other blocks. If one block’s power goes down, the others keep running because they’re not sharing the same source. In AWS terms, a region is the whole neighborhood, and each AZ is a separate city block inside that region. A cloud service (like an EC2 instance or a database) lives in one AZ, but you can duplicate it in another AZ to stay safe if something happens locally—just like having two backup generators on different blocks. By spreading resources across multiple AZs, AWS gives you reliability and uptime without the risk of all your data going offline at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
