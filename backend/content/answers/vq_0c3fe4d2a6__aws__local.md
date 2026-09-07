---
qid: vq_0c3fe4d2a6__aws__local
question: What values did you learn from your family growing up?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 400
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:25-05:00'
sources: []
---

**Situation**  
Growing up in a single‑parent household, my mother worked two jobs while I helped with the household budget and chores. The family’s survival depended on careful planning and relentless execution.

**Task**  
When I entered college, I realized that many students relied on campus services to manage finances—yet those services were often slow or opaque. I decided to build a micro‑budgeting app for my peers so they could see real‑time spending and receive alerts before overspending.

**Action**  
I owned the entire project: wrote user stories (Customer Obsession), defined a minimal viable product, and used **AWS Amplify + DynamoDB** for instant sync across devices. I set up CI/CD with CodePipeline to iterate quickly—every sprint delivered new features in under two weeks (Bias for Action). To keep costs low, I leveraged **DynamoDB On‑Demand** and reserved instances for the backend Lambda functions, ensuring 99.9% availability while staying below $120/month.

**Result**  
Within three months of launch, the app had 4,500 active users and a 37 % reduction in late‑month overdrafts across our campus cohort—validated by a pre/post survey that showed an average savings increase from $150 to $225 per student. The success led to a partnership with the university’s financial aid office, expanding reach to 15,000 students.

**Reflection**  
The experience reinforced two core values: *Ownership*—I drove the product end‑to‑end—and *Dive Deep*—I dissected user pain points and AWS cost metrics until I found the sweet spot between performance and budget. The lesson from my family—that disciplined execution yields tangible results—remains my guiding principle in every project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
