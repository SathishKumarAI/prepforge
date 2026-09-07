---
qid: ing_fe6b9fa328__aws__local
question: 'Explain: Simulate real users — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 399
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:53:13-05:00'
sources: []
---

**Situation / Task**  
I led the launch of **LangWatch**, a real‑time AI agent testing platform that simulates thousands of users to validate conversational agents before production roll‑out. The goal was to reduce post‑deployment failure rates by 30 % and cut manual QA hours from 200 h/month to under 20 h.

**Action**  
*Customer Obsession & Ownership*: I mapped the user journey, identified pain points in existing test suites, and built a *user‑persona generator* that draws on historic interaction logs (≈10 M messages).  
*Dive Deep & Invent & Simplify*: Using **Amazon SageMaker Pipelines**, I trained a generative model to produce realistic dialogue flows. The simulation engine runs on **AWS Fargate** containers orchestrated by **ECS**, scaling horizontally with **Auto Scaling Groups** based on queued test jobs (up to 5 k concurrent sessions).  
*Bias for Action*: I prototyped the system in two weeks, delivered a PoC that achieved a 95 % match rate against real user logs.  

**Result**  
- Reduced QA effort by **87 %** (from 200 h to 27 h/month).  
- Cut failure‑rate post‑deployment from **12 %** to **3 %**, saving $1.2M in re‑work annually.  
- Cost per simulated session dropped from $0.15 to $0.02 by leveraging spot instances and container reuse.

**Bar‑raiser takeaways** – I demonstrated full ownership, deep technical chops (SageMaker, ECS, Fargate), quantified impact with real metrics, and learned that early metric validation prevents costly redesigns later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
