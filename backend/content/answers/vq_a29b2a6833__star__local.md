---
qid: vq_a29b2a6833__star__local
question: Is there a formatter for SQL or PL/SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 311
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:12:53-05:00'
sources: []
---

**Situation:**  
While leading the migration of our legacy Oracle database to a new data warehouse, I discovered that hundreds of PL/SQL stored procedures were written in a single line with inconsistent indentation, making debugging and code reviews impossible.

**Task:**  
I had to standardize all PL/SQL code across the team so that future developers could read, maintain, and audit it efficiently without breaking existing functionality.

**Action:**  
I evaluated several tools: SQL Developer’s built‑in formatter, PL/SQL Developer, and an open‑source package called *sqlformat*. I chose SQL Developer because it integrates with our IDE, supports custom formatting rules, and can batch process files. I created a JSON rule set that enforces 4‑space indentation, capitalizes keywords, aligns SELECT clauses, and ensures each statement ends with a semicolon. Then I wrote a PowerShell script to run the formatter on all .sql and .pls files in our Git repo, capturing any formatting failures into a report.

**Result:**  
Within two days, over 1,200 lines of PL/SQL were reformatted consistently. Code reviews became 30 % faster, and we reduced syntax‑related bugs by 25 %. I also documented the formatter settings for future onboarding, turning an unmanageable codebase into a readable, maintainable asset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
