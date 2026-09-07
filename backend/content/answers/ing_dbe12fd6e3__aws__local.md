---
qid: ing_dbe12fd6e3__aws__local
question: 'Explain: Medical NER for Structured Extraction — Voice Ai Healthcare'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 427
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:34:55-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that built an AI‑powered voice assistant for a large health insurer. The goal was to extract structured entities (drug names, dosages, conditions) from patient calls and feed them into the claims system with < 5 % error—critical for downstream billing accuracy.

**Action – Technical Design**  
* **Data & Training** – Collected 200k anonymized call transcripts; used Amazon Transcribe Medical + custom phoneme‑level alignment.  
* **NER Pipeline** – Built a transformer (BERT‑based) fine‑tuned on the transcripts, deployed as an AWS Lambda function behind API Gateway for low latency.  
* **State Management** – Persisted interim results in DynamoDB with TTL; used Amazon Step Functions to orchestrate fallback to human review when confidence < 0.8.  
* **Scalability & Cost** – Serverless architecture auto‑scales to 10k concurrent calls, keeping average cost <$0.02 per call vs $1.20 for manual transcription.  
* **Security/Compliance** – Encrypted data at rest (KMS) and in transit; audit logs via CloudTrail; HIPAA‑eligible services.

**Result**  
Within 6 months:  
* 92 % NER accuracy, exceeding the 85 % SLA.  
* Reduced claim processing time by 35 %, saving $3M annually.  
* Cut manual review hours from 1,200 to 300 per month (70 % reduction).  

**Reflection – Bar‑raiser Lens**  
I owned the end‑to‑end product, diving deep into model drift and continuously re‑trained on new data. Learned that early integration of human‑in‑the‑loop safeguards prevented costly misclassifications—an example of *Bias for Action* balanced with *Customer Obsession*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
