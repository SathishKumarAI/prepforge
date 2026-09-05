---
qid: ing_15d7f50277__eli5__local
question: How do you deploy Mastra applications? — TypeScript AI Framework for Agents
  and Apps | Mastra
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 230
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:10:05-05:00'
sources: []
---

Deploying a Mastra application is like sending a well‑packed toolbox to a workshop.  
First, **build** your app: you write TypeScript code that tells Mastra what agents (little helper programs) should do and how they talk to each other. Think of this as gathering all the tools in one box.  
Next, you run **`mastra build`** – this turns the toolbox into a bundle that can run anywhere, just like packing a tool kit so it fits in any truck.  
Then, choose where the box will live: on your own server, in the cloud (AWS, Azure, etc.), or inside a Docker container. That’s the **deployment destination**.  
Finally, launch the app with **`mastra start`** (or use a Docker‑compose file). The agents pop out of the bundle and begin working, just as workers open the toolbox and start using the tools.  

So, build → package → choose host → run: that’s Mastra deployment in plain terms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
