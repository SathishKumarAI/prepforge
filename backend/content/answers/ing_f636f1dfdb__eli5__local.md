---
qid: ing_f636f1dfdb__eli5__local
question: 'Explain: Step 2: Create a high level design — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 238
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:04:41-05:00'
sources: []
---

**Step 2: “Create a high‑level design”**  
Think of building a new Twitter‑style app like planning a large community garden. Before you dig any holes, you sketch the whole layout: where the paths will go, how many beds (servers) you need, and which plants (features) share soil (data). In tech terms, you decide the major pieces—like “user feed”, “tweet storage”, “notification service”—and draw a diagram showing how they talk to each other.  

*Key words:*  
- **Component** – a self‑contained part of the system (e.g., “Tweet Service”).  
- **Interface** – the way components send messages to one another, usually over HTTP or messaging queues.  
- **Scalability** – designing so more users can be added without rewriting code.  

By laying out this blueprint first, you avoid surprises later and make sure every part fits together smoothly—just as a garden plan keeps your plants healthy and easy to tend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
