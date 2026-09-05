---
qid: ing_7c1dd7b1a8__eli5__local
question: 'Explain: From Zero to 50 Million Uploads per Day: Scaling Media at Canva'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 246
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:53:32-05:00'
sources: []
---

Imagine Canva is a giant library that lets people upload pictures every day—now, “every day” means up to **50 million** images! To keep the shelves from collapsing, they use a smart traffic‑control system.

First, each new picture is sent through an *auto‑sorting robot* (a machine‑learning model). This robot quickly checks the file: Is it too big? Does it have a strange format? It then decides whether to store it in the main library or send it to a special “repair” area. Because the robot learns from thousands of past uploads, it becomes faster and more accurate over time.

Second, Canva splits the library into many *mini‑sections* (servers). When one section gets crowded, the system automatically creates a new section and redistributes files—like opening a new aisle when an old one fills up. The robot’s decisions help keep each section balanced.

So, by combining a learning robot that filters uploads with dynamic resizing of storage “aisles,” Canva can reliably handle 50 million uploads every day without breaking a sweat.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
