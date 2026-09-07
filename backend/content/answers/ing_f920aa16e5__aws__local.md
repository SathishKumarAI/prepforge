---
qid: ing_f920aa16e5__aws__local
question: 'Explain: Societal Impacts — Research \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 395
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:35-05:00'
sources: []
---

**Situation & Task**  
I was leading a cross‑functional team to evaluate the societal impact of large language models (LLMs) developed by Anthropic for our internal policy tool. The goal: quantify bias, misinformation risk, and user safety while aligning with Amazon’s *Customer Obsession* and *Ownership* principles.

**Approach & Design**  
1. **Data‑driven audit** – built a pipeline in SageMaker to ingest 200K public prompts, run them through Anthropic’s API, and log outputs.  
2. **Bias scoring engine** – used Fairness Indicators + custom NLP classifiers to assign a *bias score* (0–100).  
3. **Safety overlay** – integrated AWS GuardDuty for real‑time content flagging; flagged 4.7% of responses as potentially harmful.  
4. **Cost/Scalability** – leveraged spot instances and Lambda parallelization, cutting inference cost by 32 % versus on‑prem GPU clusters.

**Result**  
- Reduced model‑generated misinformation by 28 % after fine‑tuning with curated data.  
- Cut false‑positive safety flags from 12 % to 3 %, improving user trust scores (↑15 pts).  
- Delivered a dashboard that provides live bias & safety metrics, adopted across three business units.

**Learning & Bar‑raiser cues**  
I practiced *Dive Deep* by inspecting token‑level attention maps; discovered that rare entity tokens were the main bias source. I iterated quickly (*Bias for Action*) and documented lessons in our internal playbook, ensuring future teams can replicate the audit without reinventing it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
