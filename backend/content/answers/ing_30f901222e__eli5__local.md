---
qid: ing_30f901222e__eli5__local
question: 'Design a hybrid architecture: some requests on-device, some to the cloud.
  How does the router decide?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 225
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:53:27-05:00'
sources: []
---

Think of your phone as a kitchen that can cook two kinds of meals.  
One dish is quick and easy—like toast—that you make right on the counter (on‑device). The other is a fancy lasagna that needs an oven in the big kitchen downstairs (the cloud).  

The router is the chef’s helper who decides where to prepare each order. It looks at three things:

* **Speed needed** – If the user wants instant results, it chooses the on‑device “toast.”  
* **Complexity of the task** – Heavy, data‑hungry recipes go to the cloud oven because the phone can’t handle them alone.  
* **Privacy and cost** – Sensitive ingredients stay in the kitchen; if the user prefers not to send data out, everything stays local.

So the router checks the request’s urgency, size, and privacy flag, then sends it either to the phone’s tiny “CPU” or to the powerful cloud servers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
