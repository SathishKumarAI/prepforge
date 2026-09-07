---
qid: ing_461c9b7888__aws__local
question: 'Explain: We''re just considering the word "met" and'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 495
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:04:09-05:00'
sources: []
---

**Situation / Task**

In a recent product‑roadmap meeting, my team was asked to prototype an NLP feature that could automatically flag when a user’s input contains the word **“met”** in a context that signals a completed meeting or appointment. The goal was to surface these “meeting‑completed” events in real time for downstream analytics.

**Action**

1. **Data‑driven requirement gathering**  
   *Collected 120 k utterances from our chat logs, annotated with the intent (“meeting complete”, “other”). Achieved 93 % inter‑annotator agreement.*

2. **Model design & AWS services**  
   - Built a lightweight BERT‑based classifier (distilBERT) fine‑tuned on the labeled set.  
   - Deployed the model as a **Lambda@Edge** function behind an **API Gateway**, so every message hit the endpoint in < 200 ms.  
   - Used **Amazon S3** for raw logs, **Glue** for nightly ETL, and **Redshift** for downstream reporting.

3. **Scalability & cost**  
   *Lambda concurrency of 1 k ensures 99.9 % availability; estimated $0.0000167 per invocation → <$5/month at peak traffic.*

4. **Bias‑for‑Action / Deliver Results**  
   *Within two weeks, the feature was live and captured 87 % of “meeting complete” intents with a precision of 92 %. The analytics team reported a 15 % increase in actionable meeting insights.*

**Result**

- **Customer Obsession:** Users now see real‑time confirmation of completed meetings, improving trust.  
- **Ownership & Dive Deep:** I owned the full ML pipeline, from data labeling to deployment, and iterated on model accuracy after a post‑mortem that uncovered a 3 % false‑negative spike during peak hours.

**Takeaway**

By anchoring the solution in AWS services that balance latency, cost, and reliability—and by rigorously quantifying impact—I delivered a high‑value feature while embodying Amazon’s leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
