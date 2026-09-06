---
qid: ing_341ae2decc__think__local
question: 'Explain: From the blog — Amazon Science homepage'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 422
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:52:21-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
   • Identify what “Amazon Science homepage” refers to (the public‑facing site that showcases research, teams, and open‑source projects).  
   • Assume the reader knows basic web‑scraping or data‑science terminology but not Amazon’s internal structure.  

**2️⃣ Adopt a mental model**  
   Use the *“information architecture → content taxonomy → data extraction”* framework:  
   1. Map the site’s navigation hierarchy (home → Research → Teams → Projects).  
   2. Identify key metadata fields (team name, research area, publication links).  
   3. Decide on a data‑capture strategy (HTML parsing vs API calls).

**3️⃣ Step‑by‑step reasoning**  
   • Inspect the page source to locate consistent CSS selectors or JSON blocks that hold team/project info.  
   • Write a lightweight scraper (e.g., BeautifulSoup + requests) that iterates over each section, extracts text, and normalizes URLs.  
   • Store results in a structured format (CSV/JSON), adding timestamps for future updates.

**4️⃣ Common pitfalls to avoid**  
   – Ignoring pagination or dynamic content loaded via JavaScript → use Selenium or `requests_html`.  
   – Over‑parsing: grabbing too many irrelevant tags, leading to noisy data.  
   – Forgetting to respect robots.txt and rate limits; throttle requests to stay compliant.

**5️⃣ Sanity‑check & verbalize the plan**  
   • Verify extracted fields against a manually inspected sample of 3–5 pages.  
   • Explain each step aloud: “We first locate the `<div class='team-card'>` block, then pull its title and link.”  
   • Iterate until the output matches expected counts (e.g., number of teams reported on the site).  

By following this structured approach you can reliably harvest Amazon Science’s homepage data for analysis or integration into your own projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
