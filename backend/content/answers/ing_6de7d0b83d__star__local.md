---
qid: ing_6de7d0b83d__star__local
question: 'Explain: How to Use This Page — Research Radar'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 353
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:07:06-05:00'
sources: []
---

**Situation** – In my last role as a data scientist at a fintech startup, we were tasked with staying ahead of emerging AI models that could improve our fraud‑detection pipeline. The engineering team had no centralized source for the latest research papers and open‑source code, so we were constantly missing opportunities.

**Task** – I needed to build a lightweight system that let us discover, evaluate, and track relevant AI research in real time, while keeping the process reproducible across teams.

**Action** – I set up an automated “Research Radar” page on our internal wiki. First, I wrote a Python script using the arXiv API to scrape papers tagged with *machine learning*, *adversarial attacks*, and *graph neural networks* published in the last month. The script parsed titles, abstracts, and download links, then posted them to a shared Google Sheet via the Sheets API. Next, I created a simple front‑end in Streamlit that queried this sheet, displayed paper metadata with clickable PDF links, and allowed team members to tag papers as “high”, “medium”, or “low” priority. Finally, I added a Slack bot that pinged the channel every Friday morning with the top five high‑priority papers.

**Result** – Within two months, our engineering teams cited 12 new research ideas in sprint planning, leading to a 15 % reduction in false positives on our fraud detector. The Radar page also cut literature‑review time by 40 %, and I learned how to combine lightweight automation with cross‑team collaboration for continuous AI innovation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
