---
qid: ing_09a724f6cb__aws__local
question: 'Q: Why is HyDE (Hypothetical Document Embedding) risky for some applications?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 427
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:47:53-05:00'
sources: []
---

**Answer**

> *Why is HyDE (Hypothetical Document Embedding) risky for some applications?*

I once led a project to add a HyDE‑based retrieval layer to our FAQ chatbot. **Customer Obsession** guided me: we had to guarantee that every answer stayed trustworthy. I followed the **Dive Deep** principle by instrumenting the pipeline.

### Situation & Task
Our model generated *hypothetical* passages to augment sparse documents, boosting recall from 62 % to 84 %. However, we noticed a spike in hallucinated facts—critical for compliance‑heavy clients.

### Action
1. **Audited embeddings**: compared cosine similarity of HyDE outputs vs. ground truth; flagged 13 % outliers.
2. **Added provenance tags**: each generated snippet was tagged “HyDE‑generated” and routed through a stricter confidence filter (AWS Comprehend Custom Classification).
3. **Implemented fallback**: if confidence < 0.75, the system served the original document only.

We used **Amazon SageMaker** for model hosting, **SQS** for decoupling generation from validation, and **CloudWatch** dashboards to monitor hallucination rates in real time.

### Result
Post‑deployment, hallucination dropped from 13 % to 2.4 %, while recall improved from 62 % to 81 %. Latency increased by only 15 ms per query—well within SLA. This trade‑off was accepted because it preserved **customer trust**.

### Bar‑raiser takeaway
- **Ownership**: I owned the end‑to‑end pipeline, not just the model.
- **Dive Deep**: Quantified hallucination rates and linked them to business impact.
- **Learned from failure**: The first rollout taught us that augmenting data without provenance can erode trust; we built safeguards accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
