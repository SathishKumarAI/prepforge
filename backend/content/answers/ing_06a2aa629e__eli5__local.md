---
qid: ing_06a2aa629e__eli5__local
question: When does on-device or edge inference make sense, and what actually constrains
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 238
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:46:05-05:00'
sources: []
---

Think of a recipe app that can suggest dishes in real time.  
**On‑device (edge) inference** is like having the chef’s notebook right on your kitchen counter instead of sending every ingredient list to a distant kitchen. It makes sense when  

* **Speed matters** – you need instant answers, so sending data over the network would slow you down.  
* **Privacy matters** – keeping photos or voice recordings local keeps sensitive info from leaving your home.  
* **Connectivity is spotty** – if the internet drops, a local model still works.  

What limits it? The “cheese” (compute power) and “spice rack” (memory). Modern phones have powerful but finite processors and RAM; large models can’t fit or run fast enough without draining battery. So edge inference shines when the task is small‑to‑medium, privacy‑oriented, or network‑unreliable, but big, heavy models still need a server to crunch the numbers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
