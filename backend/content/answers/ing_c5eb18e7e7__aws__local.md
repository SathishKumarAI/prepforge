---
qid: ing_c5eb18e7e7__aws__local
question: How do you decide when to stop prompt engineering and fine-tune instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 404
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:50:26-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Leadership Principles:* **Customer Obsession**, **Ownership**, and **Dive Deep**.

### Situation  
At my previous role we built a chatbot for a global e‑commerce site that answered 12 M queries/month. Initial success came from prompt engineering on GPT‑4, but response accuracy plateaued at 78% F1, below the SLA of 90%.

### Task  
I needed to decide whether to keep tweaking prompts or move to fine‑tuning (FT) to hit the target.

### Action  
* **Dive Deep** into telemetry:  
  * Prompt‑level A/B tests showed a diminishing return after 8 iterations.  
  * Error analysis revealed 22% of failures were domain‑specific (product attributes, regional tax rules).  

* I evaluated FT feasibility using **SageMaker** and **EFS** for training data, estimating $1.2 M/epoch versus $200k/month in prompt costs.  

* I ran a **cost‑benefit simulation**:  
  * FT would add 5% latency but reduce inference cost by 30% and improve F1 to 92%.  
  * Prompt engineering would keep latency low but require constant human effort ($3 M/year).  

I presented the model to leadership, emphasizing ownership of SLAs.

### Result  
We pivoted to FT; deployment on **AWS Lambda + SageMaker Endpoint** yielded a 4× faster inference and a 14% lift in conversion (from 2.1% to 2.39%). The project saved $900k annually and met the SLA within two weeks of rollout.

> *Bar‑raiser cue:* clear ownership, data‑driven trade‑off analysis, quantified impact, and learning from an initial plateau.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
