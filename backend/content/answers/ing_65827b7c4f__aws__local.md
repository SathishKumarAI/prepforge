---
qid: ing_65827b7c4f__aws__local
question: 'Explain: Results from automated evaluations — Constitutional Classifiers:
  Defending against universal jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 566
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:14:38-05:00'
sources: []
---

**Situation / Task**

At a previous cloud‑platform role I led the migration of our internal compliance engine to an AI‑driven “Constitutional Classifier” that automatically flags policy violations in user prompts—essentially defending against universal jailbreaks (like those discussed by Anthropic). The goal was to reduce manual review time, maintain 99.9 % availability, and keep cost below $0.05 per inference.

**Action**

1. **Requirements & Design**  
   * Built a stateless Lambda layer that ingests prompt‑text → calls SageMaker real‑time endpoint (BERT‑based classifier).  
   * Implemented a retry & dead‑letter queue in SQS to guarantee at‑least‑once processing and audit trail.  
   * Added CloudWatch metrics for latency, success rate, and policy‑flag counts; alerts on >5 % error spike.

2. **AWS Services**  
   * SageMaker Endpoint (Auto Scaling) → 1–3 GPU instances, auto‑scales to 10× peak traffic.  
   * Lambda (container image) → 256 MB memory, 500 ms timeout.  
   * DynamoDB for flag persistence and audit logging (on‑demand capacity).  
   * IAM policies with least privilege; KMS‑encrypted data at rest.

3. **Scalability & Cost**  
   * Leveraged spot instances for SageMaker to cut GPU cost by 40 %.  
   * Implemented caching of frequent prompts in ElastiCache Redis (1 % hit rate → $0.02/day savings).  

4. **Testing & Rollout**  
   * A/B test against legacy rule‑based engine: latency dropped from 250 ms to 90 ms, false‑positive rate fell from 12 % to 3 %.  
   * Deployed in blue/green fashion; rollback script ready.

**Result**

* **Customer Obsession & Deliver Results** – Reduced manual review workload by 70 %, freeing 15 FTEs.  
* **Ownership & Dive Deep** – Achieved 99.97 % uptime over 6 months, with cost per inference at $0.04 (↓20 %).  
* **Bias for Action** – Deployed within 4 weeks of concept approval; learned to tune confidence thresholds after a 1‑day spike in false negatives.

**Bar‑raiser takeaway**

I owned the end‑to‑end pipeline, dug into latency & error patterns, quantified impact with real metrics, and iterated quickly on failures—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
