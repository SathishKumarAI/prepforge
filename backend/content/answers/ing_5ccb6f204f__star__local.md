---
qid: ing_5ccb6f204f__star__local
question: 'Explain: Chapter Quizzes — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 347
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:33:23-05:00'
sources: []
---

**Situation:**  
During my senior capstone project I was tasked with designing a web‑based learning platform for an online university that needed to deliver interactive chapter quizzes on every course page. The client required the system to support thousands of concurrent users while keeping response times under 300 ms and ensuring quiz data integrity.

**Task:**  
I had to architect a scalable, low‑latency service that could fetch quiz metadata, randomize question order, record student responses, and update progress in real time without overloading the database or violating GDPR privacy rules.

**Action:**  
I chose a microservices stack: a FastAPI backend with async SQLAlchemy connected to a PostgreSQL read replica for quiz data, and a Redis cache for session state. For randomization I used a cryptographically secure shuffle seeded per student to avoid cheating. I exposed a REST endpoint that returned a single JSON payload containing all questions and answer choices, reducing round‑trips. To handle high concurrency I deployed the service behind an NGINX load balancer with HTTP/2 and set up horizontal scaling via Kubernetes autoscaler. All user data was encrypted at rest using AWS KMS, and audit logs were stored in S3.

**Result:**  
The prototype handled 5,000 simultaneous users during a live demo, maintaining 250 ms average latency. Quiz completion rates rose by 18% compared to the legacy LMS due to faster load times. I learned how careful caching, stateless design, and proper sharding can meet strict performance goals while preserving data security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
