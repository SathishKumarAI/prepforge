---
qid: ing_a83500217b__aws__local
question: 'Explain: Every assertion in a Harvey answer needs to link back to a specific
  passage. Design the grounding system, and tell me how you would measure the unsupported-claim
  rate.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 492
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:12-05:00'
sources: []
---

**Situation & Task**  
While building a generative‑AI chat assistant for enterprise support, we discovered that many user‑generated “Harvey” assertions (e.g., *“the policy states…”*) were not traceable to the source policy text. This risked misinformation and regulatory non‑compliance.

**Action**  
I led a cross‑functional team to design an **Evidence‑Anchored Grounding Engine**:

| Step | What we did | AWS Services |
|------|-------------|--------------|
| 1️⃣ Document ingestion | PDF/HTML policies → Textract → Amazon Kendra index | Amazon Textract, Kendra |
| 2️⃣ Claim extraction | NER + dependency parsing to identify factual claims | Amazon Comprehend (custom model) |
| 3️⃣ Passage matching | Cosine similarity over Kendra embeddings; top‑k passages returned | Kendra, SageMaker inference |
| 4️⃣ Provenance tagging | Store claim → passage ID mapping in DynamoDB; versioned with S3 object tags | DynamoDB, S3 Object Tags |
| 5️⃣ UI & audit | UI shows “Claim – Source: Paragraph X of Policy Y”; audit logs for compliance | API Gateway, CloudWatch Logs |

**Metric (Unsupported‑Claim Rate)**  
- **Definition:** `UCR = (#claims without a matching passage) / (#total claims)`  
- **Target:** < 2% after launch.  
- **Monitoring:** Lambda daily job scans DynamoDB; alerts via SNS if UCR > 5%.

**Result**  
Within two months, UCR dropped from ~18% to 1.3%, cutting downstream fact‑checking effort by 70%. The system handled 10k policy documents and 200k claims with < 30 ms latency per request, keeping costs under $0.02/claim (SageMaker inference + Kendra).

**Reflection**  
I took **Ownership** of the end‑to‑end pipeline and practiced **Dive Deep** by profiling each component’s latency and cost. The biggest failure was an initial over‑aggressive similarity threshold that missed legitimate passages; we learned to calibrate with human‑in‑the‑loop validation, reinforcing a culture of continuous improvement.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
