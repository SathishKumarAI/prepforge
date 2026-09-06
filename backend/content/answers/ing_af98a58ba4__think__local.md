---
qid: ing_af98a58ba4__think__local
question: 'Explain: Storage — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 497
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:33:16-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
   *What “back‑of‑the‑envelope” means?* – Rough, order‑of‑magnitude estimates, not production specs.  
   *Scope:* only storage for a ML system (data lake + feature store + model artifacts).  
   *Assume typical volumes: 10 TB raw data, 1 TB preprocessed, 100 GB of trained models, 50 GB logs.  
   *Use cloud‑native services (S3/Blob, Redshift/BigQuery, EFS/EBS).  

**2️⃣ Mental model / framework**  
   - **Data lifecycle stages:** ingestion → raw storage → processed → feature store → model artifacts.  
   - **Cost layers:** object storage (cheap, high capacity), block/file storage (fast, pricier), database tiers (SQL vs NoSQL).  
   - **Performance knobs:** IOPS, throughput, latency, consistency.  

**3️⃣ Step‑by‑step reasoning**  
   1. Estimate raw data: 10 TB × $0.023 /GB ≈ $230/mo.  
   2. Processed tier (hot): 1 TB in S3 infrequent access → ~$23/mo.  
   3. Feature store: 100 GB in DynamoDB on‑demand → ~$20/mo.  
   4. Model artifacts: 100 GB S3 Standard → $2.30/mo.  
   5. Logs: 50 GB Glacier → <$1/mo.  
   Sum ≈ **$276/mo**; round up to $300 for buffer and replication.  

**4️⃣ Common traps**  
   - Forgetting to account for network egress or API calls.  
   - Mixing object vs block storage costs.  
   - Ignoring redundancy (multi‑AZ) and lifecycle policies.  

**5️⃣ Sanity‑check & verbalize**  
   *Quick sanity:* 10 TB raw + 1 TB processed ≈ $250; rest is negligible → matches our ~\$300 total.  
   Communicate: “We’re looking at roughly \$300/month, dominated by raw data storage; the other tiers add only a few dollars.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
