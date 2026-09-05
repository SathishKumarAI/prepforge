---
qid: ing_f8ca975a3d__eli5__local
question: 'Explain: System Requirements — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 252
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:08:50-05:00'
sources: []
---

Imagine you’re a detective who needs to gather clues from every corner of a city. The **web crawler** is that detective, but instead of streets it follows links on the internet.

**What it needs:**

1. **A “list of places” (URL queue)** – like a notebook where the detective writes down every new address discovered.
2. **A way to read each place (HTTP client)** – the detective’s phone that lets him open any building’s door and look inside.
3. **A memory filter (deduplication)** – he never wants to revisit the same house twice, so he keeps a quick list of addresses already checked.
4. **Speed control (rate limiting)** – to avoid getting arrested for trespassing, he waits a short time before entering another building.
5. **Storage (database)** – all clues are saved in a filing cabinet that can be searched later by the machine‑learning model.

Together these parts let the crawler roam the web, collect data, and hand it off cleanly to ML algorithms that learn patterns from the gathered information.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
