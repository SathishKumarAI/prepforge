---
qid: ing_bd89add751__aws__local
question: 'Explain: Data & context strategy — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 465
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:32:01-05:00'
sources: []
---

**Situation** – At my previous agency I was tasked to build an AI‑enabled support bot for a SaaS platform that handled ~120 k tickets/month. The goal was to reduce first‑response time (FRT) by 30% while keeping accuracy > 92%.  

**Task** – Design a data‑and‑context strategy so the model could understand user intent, product context and escalation paths.  

**Action**  
1. **Data ingestion**: Use Amazon Kinesis Data Streams to capture live chat logs + S3 for historical tickets; Glue crawlers extract schema into Athena tables.  
2. **Feature store**: Store enriched features (user tier, past interactions) in DynamoDB with TTL, accessed via Amazon SageMaker Feature Store during inference.  
3. **Context engine**: Deploy a Lambda‑driven microservice that queries OpenSearch for product docs and recent ticket trends, returning contextual snippets to the model.  
4. **Model pipeline**: Train a transformer (Rasa + HuggingFace) on SageMaker, versioning via Model Registry; deploy with SageMaker Neo for edge inference in multiple regions.  
5. **Feedback loop**: Use CloudWatch metrics and an SQS queue to capture mis‑classifications; retrain weekly.  

**Result** – FRT dropped from 12 min to 8.4 min (30% reduction) and accuracy rose to 94%. Monthly cost stayed under $3k by leveraging Spot instances for training and Lambda concurrency throttling.  

**Leadership Principles**  
- **Customer Obsession**: Built a system that responds faster and more accurately to real user pain points.  
- **Ownership & Dive Deep**: Handled end‑to‑end data pipeline, monitored every component, and iterated on failures.  

*Bar‑raiser cue*: I quantified impact (30% FRT lift), demonstrated deep technical design choices, and reflected on the one failure—initially over‑fitting to recent tickets—which led me to add a decay factor in feature weighting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
