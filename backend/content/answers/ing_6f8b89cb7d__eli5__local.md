---
qid: ing_6f8b89cb7d__eli5__local
question: 'Explain: Clarifying Requirements — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 237
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:32:57-05:00'
sources: []
---

Imagine you’re building a tiny post office that turns long, clunky letters into short postcards so they fit on a postcard and travel faster. Before you start stamping, the clerk must ask the sender exactly what kind of service is needed:  

* **What will the postcards be used for?** (Public links or private, temporary or permanent)  
* **How many people will send/receive them?** (Traffic volume, peak load)  
* **Do we need to remember where each postcard goes?** (Redirect accuracy, analytics)  
* **Can we change the address later?** (Mutable URLs)  

These questions are “clarifying requirements.” They shape the post office’s size, how many boxes (servers) it needs, whether it keeps a master list of addresses (database), and if it should check for duplicates or spam. By asking them first, you avoid building a system that can’t handle real‑world letters—just like a good clerk ensures every postcard reaches its destination smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
