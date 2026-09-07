---
qid: ing_3a4d6e4f95__aws__local
question: 'Explain: country of booking and etc based on — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 704
total_tokens: 950
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:38:07-05:00'
sources: []
---

**Situation – Task**  
I was hired by a ride‑hailing startup to build an *“country‑of‑booking”* inference service that determines the most likely country where a user is booking from, based on noisy data (IP, device locale, payment method, GPS drift). The goal was to improve fraud detection and compliance reporting, which required 99.9 % accuracy while keeping latency under 30 ms for every request.

**Action – Design & Implementation**  
1. **Data Pipeline**  
   * Ingest raw logs into **Amazon Kinesis Data Streams** (real‑time) and **S3** (batch).  
   * Use **AWS Glue** to clean, enrich with GeoIP tables (MaxMind) and store in a partitioned **Redshift** warehouse for model training.  

2. **Model Training**  
   * Feature engineering in **Amazon SageMaker**: one‑hot encode country codes, GPS proximity scores, device OS, payment region.  
   * Train an ensemble of **XGBoost** models; evaluate with stratified cross‑validation to achieve 99.6 % F1 on a held‑out 10M sample.  

3. **Inference Service**  
   * Deploy the model as a **SageMaker Endpoint (RealTime)** behind an **Amazon API Gateway**.  
   * Use **Lambda@Edge** to short‑circuit obvious cases (e.g., known corporate VPN IPs) for cost savings.  

4. **Observability & Scaling**  
   * Metrics sent to **CloudWatch**; alarms trigger auto‑scaling of the endpoint based on request latency and error rates.  
   * Cost‑optimized by reserving 70 % of the endpoint instances (USD 0.10/hr) and using spot capacity for batch retraining.

5. **Governance & Feedback Loop**  
   * Every hour, a Lambda job compares predictions against ground truth from the compliance team; drift alerts trigger re‑training.  

**Result – Impact**  
* Reduced false positives in fraud checks by 45 % (from 12 % to 6 %).  
* Cut compliance reporting latency from 2 h to under 5 min.  
* Saved ~$30k/month on inference costs by leveraging spot instances and request routing logic.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered a highly accurate, low‑latency service that directly improved user trust and regulatory compliance.  
- **Dive Deep & Ownership** – Built the end‑to‑end pipeline, tuned models, and instituted continuous monitoring—owning every layer from data ingestion to inference.

---

### What a Bar‑Raiser Listens For
1. **Ownership** – Took responsibility for all moving parts (data, model, infra).  
2. **Depth (“Dive Deep”)** – Quantified accuracy, latency, cost; explained trade‑offs between on‑demand vs spot instances and real‑time vs batch inference.  
3. **Quantified Impact** – Provided concrete metrics (45 % reduction in false positives, $30k/month savings).  
4. **Learning from Failure** – Discussed how drift alerts led to a feedback loop that prevented model decay over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
