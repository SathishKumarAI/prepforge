---
qid: ing_43105ca5b9__star__local
question: 'Q: Compare computer-use agents with Selenium for web automation. When would
  you choose each?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 356
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:42:49-05:00'
sources: []
---

**Situation** – At my last role I was tasked with automating a quarterly compliance report that pulled data from two internal dashboards and an external API. The dashboards were heavy‑JS sites that rendered content only after user interaction, and the API required OAuth tokens refreshed every 15 minutes.

**Task** – Build a reliable, maintainable pipeline that ran on our CI server without manual clicks, delivering a PDF report within 30 minutes of data availability.

**Action** – I first evaluated Selenium: its WebDriver could mimic browser interactions, handle dynamic JS, and capture screenshots for audit trails. However, Selenium’s overhead (launching Chrome, managing driver binaries) made the test suite slow and brittle on our CI agents. I then introduced a lightweight computer‑use agent using headless Chrome with Puppeteer‑like scripting via Playwright, which allowed me to script low‑level keyboard/mouse events at OS level, bypassing the need for full WebDriver bindings. For the API side, I wrote a simple Python `requests` wrapper that handled token rotation. The two components were orchestrated in GitHub Actions with Docker containers.

**Result** – The new pipeline cut runtime from 45 minutes to 18 minutes (a 60% speedup), reduced flakiness by 80%, and the CI logs now include direct page screenshots for audit. I learned that Selenium is great when you need cross‑browser compatibility or complex DOM manipulation, but for fast, headless CI jobs a computer‑use agent with minimal overhead can be more efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
