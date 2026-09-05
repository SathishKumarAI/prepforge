---
qid: ing_406f3c893f__eli5__local
question: 'Explain: API Request Structure — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 244
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:18:11-05:00'
sources: []
---

Imagine you’re sending a letter to a helpful robot that lives inside your computer.  
The **API request** is the envelope, and its parts are:

* **Endpoint (address)** – tells the robot where to look for what you want, like the robot’s mailbox in a specific room.  
* **Method (action)** – says whether you’re asking it to *read* (GET), *write* (POST), *update* (PUT) or *delete* (DELETE) something, just as you’d tell the robot “please open the file” or “please delete the note.”  
* **Headers (post‑it notes)** – give extra instructions such as your name or a secret key that proves you’re allowed to ask.  
* **Body (letter content)** – carries the actual data you want the robot to act on, like the text of a new file.

When all these parts fit together correctly, the robot understands exactly what you need and does it—just like a well‑addressed letter gets the right reply.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
