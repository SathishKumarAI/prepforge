---
qid: ing_cfdbab641d__star__local
question: 'Explain: Output Formatting — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 339
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:24:52-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with creating an AI‑powered coding assistant that could generate and format SQL queries on demand for a data analytics platform. The existing system produced raw query strings, but our clients complained about inconsistent formatting—missing line breaks, improper indentation—which made the output hard to read in their dashboards.

**Task:**  
I needed to build a “tool agent” that not only generated correct SQL syntax but also applied consistent, human‑readable formatting rules (e.g., aligning `WHERE` clauses, capitalizing keywords) so developers could copy and paste the code directly into their IDEs without extra steps.

**Action:**  
I implemented an output formatter module using Python’s `sqlparse` library. First, I defined a set of formatting conventions in a JSON schema—indentation width, keyword case, line‑break positions for joins—and exposed them as a reusable configuration. The agent then wrapped the raw query string, passed it through `sqlparse.format()` with those options, and returned the beautified code. I also added a lightweight CLI that allowed users to preview formatting changes before committing, which integrated smoothly with our existing chatbot UI.

**Result:**  
After deployment, user‑reported confusion dropped by 68 %, and the average time spent debugging query syntax in IDEs fell from 12 minutes per week to under 2 minutes. I learned how critical a well‑designed output formatter is for usability, and that exposing formatting rules as data lets future agents adapt without code changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
