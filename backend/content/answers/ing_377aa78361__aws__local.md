---
qid: ing_377aa78361__aws__local
question: 'Explain: Step 3: Categorize Errors Using Axial Coding'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 593
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:30:03-05:00'
sources: []
---

**Step 3 – Categorize Errors Using Axial Coding (Amazon‑style answer)**  

**Situation & Task**  
In the “Smart‑Home AI” project I led a cross‑functional squad that built an intent‑recognition model for voice commands. After the initial 2‑week sprint, our QA team flagged 1 200 errors across three domains: *misclassification*, *out‑of‑scope* and *language‑model drift*. My goal was to surface high‑impact patterns so we could prioritize fixes that would lift overall accuracy by at least 5 %.

**Action – Technical & Design**  
I applied **axial coding**—a grounded‑theory technique—to cluster error logs. First, I parsed the raw JSON from our Lambda‑based ingestion pipeline into a DynamoDB table keyed by *error type* and *timestamp*. Then, using AWS Glue ETL jobs, I generated pivot tables that linked each error to feature vectors (e.g., utterance length, acoustic score). The resulting schema let us feed data into Amazon SageMaker’s **feature store** for downstream analysis.  

Key AWS services:  
- **Lambda** – lightweight parsing.  
- **DynamoDB** – low‑latency lookup of error categories.  
- **Glue + Athena** – ad‑hoc SQL queries for axial coding.  
- **SageMaker Feature Store** – persistent, versioned feature sets for model retraining.

I surfaced three root causes: (1) *misclassification* tied to noisy audio (~30 % of errors), (2) *out‑of‑scope* due to unhandled dialects (~45 %), and (3) *drift* from a 12‑month training window (~25 %).  

**Result**  
We refactored the audio preprocessing pipeline, added a fallback intent for dialects, and scheduled monthly drift checks. Accuracy jumped from **82 % → 88 %**, translating to $120k in avoided support tickets per quarter. I documented lessons learned: always map error clusters to actionable feature updates and automate axial coding with Glue jobs—reducing analysis time from 2 days to 3 hours.

**Leadership Principles Highlighted**  
- **Customer Obsession** – reducing user‑reported errors directly improved satisfaction scores by 12 %.  
- **Ownership & Dive Deep** – I owned the entire error‑analysis loop and dove deep into data to uncover root causes.  

**Bar‑raiser cues**: ownership of end‑to‑end process, depth in technical solution, quantified impact, and iterative learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
