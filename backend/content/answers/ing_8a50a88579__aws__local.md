---
qid: ing_8a50a88579__aws__local
question: 'Explain: Problem statement — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 438
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:38:32-05:00'
sources: []
---

**Situation (Customer Obsession)**  
Our client, a Fortune‑500 SaaS company, reported that sales reps spent ~25 % of each meeting on note‑taking and follow‑up tasks instead of selling. The goal: reduce manual effort by 70 % while improving accuracy of action items.

**Task**  
Design an AI‑powered Meeting Assistant that records, transcribes, extracts key decisions, and auto‑generates tickets in Jira/Slack with confidence scores.

**Action (Dive Deep & Ownership)**  
1. **Data ingestion** – use Amazon Kinesis Video Streams to capture high‑quality audio/video from Zoom/Webex.  
2. **Transcription** – feed streams into Amazon Transcribe Medical (custom vocabularies for industry terms) → ~98 % accuracy.  
3. **NLP extraction** – run the transcript through an AWS Lambda pipeline that calls Amazon Comprehend Custom Entities to pull actions, owners, and due dates.  
4. **Integration** – use Step Functions to orchestrate Lambda functions, push results to DynamoDB (schema‑flexible), and trigger SNS notifications to Jira via a REST API.  
5. **Feedback loop** – store misclassifications in S3, retrain the model monthly with SageMaker AutoPilot for continuous improvement.

**Result**  
- Reduced rep meeting overhead from 25 % to 7 % (≈ 68 % savings).  
- Action‑item completion rate rose from 60 % to 92 %.  
- Infrastructure cost stayed < $2k/month, leveraging spot instances for Lambda and DynamoDB on-demand capacity.

**Learnings**  
Early beta tests exposed latency issues; we added a caching layer with ElastiCache Redis, cutting average response time from 4.3 s to 1.8 s. This iteration demonstrated ownership, depth of analysis, and a bias for action—hallmarks of an Amazon bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
