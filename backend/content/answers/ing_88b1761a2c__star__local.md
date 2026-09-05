---
qid: ing_88b1761a2c__star__local
question: 'Explain: Marketing & Brand — Jobs \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 361
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:06:04-05:00'
sources: []
---

**Situation:**  
At a mid‑size consumer goods firm, our quarterly launch of a new eco‑friendly detergent was lagging behind projected sales by 18%. The marketing team needed sharper audience targeting and messaging to hit the 25% lift we promised to senior leadership.

**Task:**  
I was tasked with building an end‑to‑end ML pipeline that would segment customers, predict purchase intent, and recommend personalized ad creatives—all within a two‑week sprint.

**Action:**  
First, I scraped 12 months of CRM data (purchase history, browsing logs, social media sentiment) and cleaned it in Python using Pandas. Using Scikit‑Learn’s Gradient Boosting Classifier, I engineered features like recency, frequency, monetary value, and engagement score, achieving an AUC of .82 on the validation set. Next, I leveraged OpenAI’s embeddings to map product descriptions and ad copy into a semantic space; clustering with K‑means revealed three distinct brand affinity groups (Eco‑Warriors, Value Seekers, Trend Followers). Finally, I built a lightweight Flask API that served real‑time audience segments to our DSP, allowing the creative team to iterate on copy for each cluster.

**Result:**  
Within one month of deployment, targeted campaigns drove a 27% increase in conversion rates, exceeding the original goal. The project also cut ad spend waste by 15%, saving $120K annually. I learned that marrying classic tabular models with semantic embeddings can unlock deep customer insights without overengineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
