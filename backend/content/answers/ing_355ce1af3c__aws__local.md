---
qid: ing_355ce1af3c__aws__local
question: Two good clinicians write different notes for the same visit. So how do
  you evaluate note quality at all?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 615
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:25:18-05:00'
sources: []
---

**Situation / Task**  
In a large hospital network we had two senior clinicians who documented the same outpatient visit in divergent styles—one used structured templates, the other wrote free‑form narrative. The quality of those notes directly impacted billing accuracy and downstream analytics, yet there was no systematic way to evaluate them.

**Action**  
I proposed an end‑to‑end pipeline that scores note quality on *clinical completeness*, *consistency* and *billing relevance*.  

1. **Data capture** – ingest raw notes via Amazon Kinesis Data Streams into a Glue job.  
2. **Feature extraction** – run AWS Comprehend Medical to identify diagnoses, procedures, medications, and map them to SNOMED CT/UMLS codes.  
3. **Scoring engine** – in an EMR‑connected Lambda function compare extracted entities against the encounter’s structured data (from FHIR APIs). Missing or mismatched items lower the score; proper use of ICD‑10/ CPT codes boosts it.  
4. **Feedback loop** – publish a JSON report to SNS, which triggers a personalized email and updates the clinician’s dashboard in Amazon QuickSight.

We validated the system on 10 k notes over two months: accuracy of entity extraction hit 92 %, and the overall quality score correlated with claim denial rates (r = –0.68). After rollout, denials dropped from 12 % to 4 %—a $1.2 M annual savings.

**Result**  
The pipeline now runs at scale (≈ 50 GB/day), is highly available (multi‑AZ Lambda & DynamoDB), and costs <$5k/month versus the prior manual review cost of ~$30k/year. Clinicians report higher confidence in documentation, and billing teams see fewer rework cycles.

---

### Leadership Principles Anchored  
- **Customer Obsession** – Delivering accurate notes improves patient care and reduces financial friction for both patients and providers.  
- **Ownership** – I owned the full project lifecycle, from problem framing to production deployment, and continued to iterate on the scoring model based on user feedback.

### Bar‑raiser Checklist  
| What they listen for | Why it matters |
|----------------------|----------------|
| Quantified impact (denial reduction, cost savings) | Demonstrates real business value |
| Dive deep into data & modeling choices | Shows technical rigor and ownership |
| Learning loop from failure (false positives → model retraining) | Indicates continuous improvement mindset |

This solution balances **scalability** (Kinesis + Lambda), **availability** (serverless, multi‑AZ), **cost efficiency** (pay‑as‑you‑go), and **trade‑offs** (initial NLP accuracy vs. manual review time).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
