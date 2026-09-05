---
qid: ing_64898efd1d__eli5__local
question: Where does the API key live, and how do you update a prompt after release?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 264
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:15:22-05:00'
sources: []
---

Imagine your AI app is a robot that needs two things to work: **fuel** (the API key) and a **recipe book** (the prompt).  

The **API key** is the fuel tag stamped on a small card hidden inside the robot’s battery pack. In code, we keep that card in a secret spot—usually an *environment variable* or a protected config file—so nobody can read it by accident. The program pulls the key from there each time it starts up and uses it to pay the AI service.

The **prompt** is like the robot’s recipe book. When you first release the app, you write the recipe into the code. If you later decide to tweak how the robot speaks or what information it gives, you simply edit that recipe file in your project (or add a new version). Then you rebuild or redeploy the app; the robot will read the updated recipe next time it runs.

So: keep the key secret in an env‑var or protected config, and update prompts by editing the code or prompt file and re‑deploying.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
