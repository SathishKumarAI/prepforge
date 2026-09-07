---
qid: ing_b28f950e26__aws__local
question: 'Explain: Polymorphism — The Fundamental Pillars of Object-Oriented Programming'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 489
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:08:33-05:00'
sources: []
---

**Situation (Customer Obsession & Ownership)**  
At my last role I led a recommendation engine for a large e‑commerce site that had to serve 2 M daily users while keeping latency under 200 ms. The team was stuck on hard‑coded “genre” logic that made it impossible to add new content types without code churn.

**Task**  
Redesign the core recommendation pipeline using pure OOP so new algorithms could be plugged in with zero regression risk, and prove the change improved performance.

**Action (Dive Deep & Bias for Action)**  
I introduced **polymorphism**: defined an abstract `Recommender` interface (`predict(user)`) and implemented concrete subclasses (`CollaborativeFiltering`, `ContentBased`, `Hybrid`). This allowed us to swap algorithms at runtime via a simple config, eliminating the need for if‑else chains. I added unit tests that used mocks to validate each implementation independently.

*Technical stack*:  
- **AWS Lambda** (Python 3.10) invoked by API Gateway for on‑demand predictions.  
- **Amazon SageMaker endpoints** hosted the heavy ML models; Lambda forwards requests and aggregates results.  
- **DynamoDB** stores user–item interactions, with provisioned capacity tuned via Auto Scaling.

The polymorphic design cut code complexity from 1 200 LOC to 540 LOC (45 % reduction). In A/B testing, latency dropped from 210 ms to 165 ms (21 % improvement), and deployment frequency increased from once a month to weekly—meeting our *Deliver Results* metric.

**Result**  
The new architecture allowed us to add a fourth recommender in just two days with zero downtime. Post‑deployment, the recommendation click‑through rate rose by **12 %**, translating to an estimated $1.3 M incremental revenue per year.  

---

**Bar‑raiser cues I’d hear**:  
- Clear ownership of the problem space.  
- Deep dive into OOP fundamentals and AWS service trade‑offs.  
- Quantified impact (latency, code size, revenue).  
- Learning loop: we iterated on feedback to reduce cold‑start latency further.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
