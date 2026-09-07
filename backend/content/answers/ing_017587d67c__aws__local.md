---
qid: ing_017587d67c__aws__local
question: How do you measure faithfulness - whether the model's answer is actually
  grounded in retrieved context?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 747
total_tokens: 985
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:27:32-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led a project that added an LLM‑powered FAQ bot for a SaaS product. One of our biggest concerns was *faithfulness*—making sure the model’s responses were grounded in the knowledge base we retrieved from, rather than hallucinating.

**Task (T)**  
I had to build a measurement framework that could quantify faithfulness at scale and feed it back into training and inference pipelines.

**Action (A)**  

1. **Define ground‑truth alignment** – I formalized *faithfulness* as the proportion of tokens in the answer that map to an entity or fact present in the retrieved context.  
2. **Annotation pipeline** – Leveraged Amazon Mechanical Turk with a custom UI: workers were shown the question, the retrieved snippets (Amazon DynamoDB for fast lookup), and the model output. They labeled each sentence as *faithful* or *hallucinated*. This produced 12k labeled examples in 3 weeks.  
3. **Automated metric** – Built a Lambda function that uses AWS Comprehend to extract entities from both context and answer, then computes an *Entity Overlap Score (EOS)* = |E_ctx ∩ E_ans| / |E_ans|. EOS ≥ 0.8 was considered faithful.  
4. **Continuous monitoring** – Deployed the metric as a CloudWatch custom metric; set alarms if average EOS fell below 0.75 over a rolling week.  

**Result (R)**  
After deployment, faithfulness rose from an initial 58% to 93% within two months, while overall customer satisfaction scores increased by 12 points on Net Promoter Score. The system also reduced support tickets related to misinformation by 38%.

---

### Technical & System Design

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Retrieval engine | Amazon OpenSearch + DynamoDB | Low latency, scalable search; DynamoDB for metadata. |
| LLM inference | Amazon Bedrock (Claude/LLM) | Managed scaling, pay‑per‑request cost. |
| Metric computation | Lambda + Comprehend | Serverless, auto‑scales with request volume. |
| Monitoring | CloudWatch + SNS | Real‑time alerts; integrates with Ops dashboards. |

**Scalability:**  
- OpenSearch scales horizontally via shard replication.  
- Bedrock’s concurrency limits are adjustable; we burst to 5k QPS during peak hours.  

**Availability:**  
- All services run in a Multi‑AZ VPC, ensuring <0.1% downtime.  

**Cost Trade‑offs:**  
- Using Comprehend for entity extraction adds ~$0.001 per 1000 tokens, negligible compared to Bedrock usage.  
- Lambda cold starts are mitigated by provisioned concurrency of 50.

---

### Bar‑Raiser Signals

| Signal | Why it matters |
|--------|----------------|
| **Ownership** | I drove the entire pipeline from definition to production, owning metrics and alerts. |
| **Dive Deep** | Created a custom Entity Overlap Score and validated it against human labels. |
| **Quantified Impact** | Measured lift in faithfulness and NPS; tied directly to business outcomes. |
| **Learning from Failure** | Early tests showed high hallucination; I iterated the metric definition after stakeholder feedback, improving precision by 15%. |

This approach blends customer obsession (accurate answers), ownership, and data‑driven bias for action—core Amazon Leadership Principles that resonate with any AWS interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
