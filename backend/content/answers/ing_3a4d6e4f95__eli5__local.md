---
qid: ing_3a4d6e4f95__eli5__local
question: 'Explain: country of booking and etc based on — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 221
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:08:34-05:00'
sources: []
---

Think of a ride‑hailing app like a giant international airport hub that instantly connects passengers (riders) with planes (drivers).  
When someone opens the app and types a city or country, the system first **identifies the “country of booking”**—just as an airline gate knows which terminal a passenger is arriving from. This tells the software where to look for available drivers: it loads only the drivers registered in that country’s database, saves bandwidth, and obeys local rules (taxes, regulations).  
If a rider accidentally types a nearby city in another country, the system checks both locations—just as an airport can reroute a flight if a gate is full. The result is fast, accurate matching without over‑loading servers with irrelevant data.  

Key terms:  
- **Country of booking** – the country where the ride request originates.  
- **Driver pool** – all drivers currently active in that region.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
