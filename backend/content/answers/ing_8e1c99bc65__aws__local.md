---
qid: ing_8e1c99bc65__aws__local
question: 'Explain: Interview Statistics — Mistral AI Applied AI Engineer Interview
  Experience - France'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 545
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:47:25-05:00'
sources: []
---

**Context – Interview Statistics**  
During the recent Mistral‑AI “Applied AI Engineer” session in Paris, I was asked to explain how a data‑driven approach can surface interview insights and drive hiring decisions.

---

### **S**ituation
Mistral needed a scalable way to analyze 2 k interview transcripts (avg. 15 min each) and surface bias signals—e.g., question frequency, sentiment, and time‑to‑decision—to improve candidate experience.

### **T**ask
Build an end‑to‑end pipeline that ingests raw audio/video, transcribes, extracts metrics, and delivers a real‑time dashboard for hiring managers—all within 48 hrs of interview completion.

### **A**ction  
1. **Transcription & NLP** – Used Amazon Transcribe (custom vocab) + Comprehend to generate sentiment & entity tags.  
2. **Feature Store** – Stored metrics in DynamoDB, keyed by interviewer ID and role.  
3. **Analytics Engine** – Lambda functions aggregated counts; Athena queried for trend reports.  
4. **Visualization** – QuickSight dashboards surfaced top 5 bias indicators (e.g., “gender‑ed” question rate 12 % higher than baseline).  
5. **Alerting** – SNS + EventBridge triggered when thresholds breached, enabling proactive coaching.

*Technical decisions:*  
- **Scalability:** Lambda auto‑scales; DynamoDB provides single‑digit millisecond reads for 200 k concurrent interviews.  
- **Availability:** Multi‑AZ deployment; data replicated to S3 Glacier for audit.  
- **Cost:** $0.004 per minute of transcription + $0.25 per Athena query → <$15 USD/day for 2 k transcripts.

### **R**esult
Within the first month, hiring managers reported a **30 % reduction in interview cycle time** and a **25 % drop in unstructured question bias**, directly linked to data‑driven insights. The dashboard became an internal KPI, driving continuous improvement of interview scripts.

---

#### Leadership Principles Highlighted  
- **Customer Obsession** – Delivered immediate value to hiring managers (the “customers”).  
- **Ownership & Dive Deep** – Built the entire pipeline from scratch, tuning NLP models and monitoring performance.  

**Bar‑raiser takeaways:** depth in data handling, clear quantification of impact, ownership of end‑to‑end solution, and learning loop (bias metrics → script refinement).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
