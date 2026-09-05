---
qid: ing_36d5ff6a35__eli5__local
question: 'Explain: Cloud Computing — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 209
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:02:35-05:00'
sources: []
---

Think of a big library that lets you read books online instead of carrying them home.  
**Client** = your computer or phone asking for information.  
**Server** = the library’s powerful computers that store and serve the books.  
When you type a question, your client sends it over the internet (the **network**) to the server. The server looks up the answer in its database (a huge collection of data files), runs any necessary calculations—like a machine‑learning model that predicts the best book for you—and then pushes the result back to you.

In this architecture the heavy lifting happens on the server side, so your device stays light and fast. That’s why many ML services run in the **cloud**: users (clients) request predictions or data processing, while remote servers handle storage, training, and inference, all coordinated through a secure network connection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
