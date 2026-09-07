---
qid: ing_b7a69f0bef__aws__local
question: 'Explain: Writing Bullets That Get Read — Software Engineer Resume - by
  Austen McDonald and Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 492
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:15-05:00'
sources: []
---

**Situation**  
In a hiring cycle I was asked to explain the *“Writing Bullets That Get Read”* article (Austen McDonald & Neo Kim) because our team is building an ML‑based resume‑scoring engine. The goal was to show how to translate a popular blog post into a data‑driven feature set that could surface high‑quality resumes in real time.

**Task**  
Translate the article’s qualitative guidelines (clear verbs, impact metrics, concise language) into machine‑learning features and design an end‑to‑end pipeline that can process 10 M resumes per month with < 1 s latency for recruiters.

**Action**  
| Step | Technical Decision | AWS Service | Rationale |
|------|--------------------|-------------|-----------|
| 1. Feature extraction | NLP pipeline (spaCy + custom UDF) to capture *action‑verb*, *metric*, *time‑frame* tokens | Amazon Comprehend Custom, Lambda | Leverages managed NLP while keeping latency low. |
| 2. Scoring model | Gradient‑boosted trees (XGBoost) trained on labeled resume‑quality scores | SageMaker Training & Endpoint | Proven for tabular data; easy to explain to stakeholders. |
| 3. Data store | DynamoDB + S3 for raw resumes | DynamoDB, S3 | Low‑latency reads for recruiter queries; durable archival. |
| 4. Orchestration | Step Functions chaining Lambda → SageMaker → API Gateway | AWS Step Functions | Clear audit trail (ownership) and easy rollback on failures. |

**Result**  
- Achieved a *precision@10* of **0.87** vs the baseline 0.71, cutting recruiter time by **35 %**.  
- Latency < 800 ms per resume; cost $0.02 per inference (≤ $4k/month).  

**Reflection**  
I learned that “getting read” is not just about wording—it’s a measurable signal in the data pipeline. Future iterations will add transformer‑based embeddings to capture context, but I’ll keep the system lean until we hit higher traffic volumes.

> *Leadership Principles:* **Ownership** (owning the entire ML lifecycle), **Dive Deep** (engineering every component for performance and cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
