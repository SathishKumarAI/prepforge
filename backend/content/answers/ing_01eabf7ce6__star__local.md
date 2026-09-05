---
qid: ing_01eabf7ce6__star__local
question: 'Explain: Make a difference — Transforming Clinical Documentation with Advanced
  AI | Abridge AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 336
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:32:11-05:00'
sources: []
---

**Situation:**  
At my last hospital, the radiology department was drowning in unstructured dictations—over 4 million words a month—leading to a 12% error rate in structured reports and slow turnaround for critical findings.

**Task:**  
I had to design an AI‑driven pipeline that could ingest raw voice notes, auto‑extract key findings, map them to SNOMED CT codes, and produce ready‑to‑publish structured reports within two minutes of the dictation ending, all while meeting HIPAA compliance.

**Action:**  
First, I built a custom transformer model fine‑tuned on 300k anonymized radiology notes, using Hugging Face’s 🤗 Transformers and NVIDIA GPUs. I integrated a BERT‑based named entity recognizer with a rule‑based post‑processor to resolve ambiguities. For coding, I leveraged the open‑source MedCAT library to map entities to SNOMED codes, then wrapped everything in an AWS Lambda microservice that streamed results back to the EHR via FHIR APIs. To ensure security, all data stayed encrypted at rest and transit; we used VPC endpoints and IAM roles for strict access control.

**Result:**  
Within three months of deployment, report accuracy jumped from 88% to 97%, reducing chart review time by 35%. The department saved roughly $450k annually in manual editing costs. I learned that combining deep learning with lightweight rule‑based post‑processing can yield both high performance and regulatory compliance in a clinical setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
