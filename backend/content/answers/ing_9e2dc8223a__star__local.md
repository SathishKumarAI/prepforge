---
qid: ing_9e2dc8223a__star__local
question: 'Explain: General & Administrative — Careers | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 354
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:48:29-05:00'
sources: []
---

**Situation:**  
At my previous company, the product team was drowning in support tickets—about 1,200 per month—and our internal documentation was a mess, leading to duplicated work and slow onboarding for new hires.

**Task:**  
I volunteered to build an automated knowledge‑base generator that would pull from ticket logs, FAQ pages, and code comments, then rank the most useful answers so engineers could resolve issues in under 30 minutes instead of hours.

**Action:**  
First, I extracted text using a Scrapy crawler and cleaned it with spaCy. I trained a BERT‑based semantic similarity model to cluster related queries and then fine‑tuned an XGBoost regressor to score relevance against our internal SLA metrics. The output was a web app built on Flask that surfaced the top three answers for any search query, complete with confidence scores. I integrated it into Confluence via REST APIs so everyone could access it directly from their documentation space.

**Result:**  
Within two months of deployment, average ticket resolution time dropped from 4 hours to 35 minutes—a 91% reduction—cutting monthly support costs by roughly $18k. New hires found the onboarding docs 60% clearer, and the engineering team reported a 25% boost in productivity. I learned that blending NLP with classic ML pipelines can dramatically reduce G&A overhead while empowering product teams to focus on innovation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
