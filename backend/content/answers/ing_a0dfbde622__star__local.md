---
qid: ing_a0dfbde622__star__local
question: How do computer-use agents work? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 350
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:54:24-05:00'
sources: []
---

**Situation**  
During my senior year I built a proof‑of‑concept for an AI assistant that could browse the web and complete simple data‑entry tasks in a corporate portal. The client wanted to see if an automated agent could reduce manual hours by 30% on weekly reports.

**Task**  
I had to design a computer‑use agent that could log into a protected site, navigate multiple pages, extract structured data, and populate a spreadsheet—all while handling dynamic content and occasional CAPTCHAs.

**Action**  
First, I wrapped the Selenium WebDriver in a Python class with explicit waits and retry logic. I used BeautifulSoup to parse HTML once loaded, then applied a rule‑based decision tree (implemented with PyYAML) to decide which elements to click or scrape. For authentication, I stored session cookies securely using keyring, avoiding hard‑coded passwords. To manage CAPTCHAs, I integrated the 2Captcha API and only triggered it when a “captcha” class appeared in the DOM. Finally, I wrote unit tests with pytest‑selenium and logged each step to an ELK stack for auditability.

**Result**  
The agent completed 90% of the weekly report tasks autonomously, cutting manual effort from 8 hours to 1.2 hours per week—a 85% reduction. It also logged failures in real time, enabling rapid fixes. I learned that robust state‑management and graceful error handling are as critical as the underlying AI model for reliable computer‑use agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
