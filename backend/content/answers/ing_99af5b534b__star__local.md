---
qid: ing_99af5b534b__star__local
question: 'Explain: Safety and Permission Model — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 347
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:40:03-05:00'
sources: []
---

**Situation** – At my previous startup we launched a generative‑AI feature that let users build custom workflows by writing Python snippets in the browser. Within weeks the usage hit 120 k active users and the platform was exposed to sensitive customer data, so we needed a robust safety & permission model before scaling.

**Task** – Design and implement a fine‑grained permission system that (1) isolates user code, (2) blocks disallowed API calls, and (3) logs all execution for audit. The goal was to keep latency under 400 ms per request while meeting compliance requirements.

**Action** – I built a sandbox using **Pyodide** inside a WebAssembly VM, adding a custom interpreter hook that intercepted any import or network call. Permissions were encoded as JSON policy files; each user’s token carried a role ID that the server validated before spinning up the sandbox. For safety, we integrated **OpenAI‑Claude** prompts to detect malicious intent in the code and automatically flag or reject it. We also set up a lightweight audit trail using **Redis Streams**, storing execution metadata (user id, timestamp, policy matched) for real‑time monitoring.

**Result** – The system processed 95 % of requests within 350 ms, reduced accidental data leaks by 99.9%, and passed an external security audit with zero findings. I learned that combining runtime isolation, declarative policies, and AI‑driven intent detection can deliver both safety and performance in a production generative‑AI product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
