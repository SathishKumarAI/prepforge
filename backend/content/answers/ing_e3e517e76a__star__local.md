---
qid: ing_e3e517e76a__star__local
question: 'Explain: Salary by City (Yes, Location Still Matters)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 323
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:04:22-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup as a data analyst, the leadership team wanted to benchmark our compensation against competitors in the U.S. market. They were skeptical about investing in high‑cost metros because they assumed salaries were uniform nationwide.

**Task:**  
I had to demonstrate whether location significantly affected salary levels and provide actionable insights for our hiring strategy.

**Action:**  
Using LinkedIn Salary API data, I extracted base pay for 3,500 software engineers across 20 major cities. I cleaned the dataset in Python (pandas), calculated median salaries per city, and normalized them against local cost‑of‑living indices from NumCen. Then I built an interactive Tableau dashboard that plotted salary versus cost of living, highlighting outliers. I also ran a regression model to quantify how much variance was explained by location versus role level.

**Result:**  
The analysis showed that salaries in San Francisco and New York were 27% higher than the national median after adjusting for cost of living, while Chicago and Dallas were only 5–8% above. The dashboard helped the hiring team decide to offer a 15% premium in tech hubs but keep base pay consistent elsewhere, saving $1.2 M annually while attracting top talent. I learned that data‑driven location insights can directly shape compensation strategy and operational budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
