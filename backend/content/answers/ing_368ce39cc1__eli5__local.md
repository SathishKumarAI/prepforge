---
qid: ing_368ce39cc1__eli5__local
question: 'Explain: Use the least privileged user — 9 Docker Best Practices You Must
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 222
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:02:05-05:00'
sources: []
---

Think of a Docker container like a tiny apartment where your app lives. The “least‑privileged user” is the tenant who only gets keys to the rooms they actually need—no extra doors, no master key that opens everything. If the tenant slips, they can’t break into the kitchen or turn on the gas because they lack those keys.

In Docker terms, you create a non‑root user inside the image and run your application as that user. This limits what the app can do: it can’t change system files, install software, or bind to privileged ports (like 80) unless you explicitly grant permission. If a hacker exploits a flaw in your code, they’ll be stuck inside a “guest” account, unable to damage the host or other containers.

So, just as a tenant with limited keys keeps an apartment safe, using the least‑privileged user in Docker keeps your container—and the rest of your system—secure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
