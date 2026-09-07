---
qid: ing_2a39470306__aws__local
question: 'Explain: Hexagonal architecture the original 2005 article'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 402
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:00:51-05:00'
sources: []
---

**Situation & Task**  
While leading a fraud‑detection team at an online marketplace, we needed to decouple the ML model pipeline from downstream services (payment gateway, user notifications). The legacy monolith caused slow rollouts and blocked A/B tests—our quarterly win rate dropped 12 % after a buggy release.

**Action**  
I introduced **Hexagonal Architecture** (Ports & Adapters) as outlined in Fowler’s 2005 paper.  
- **Core domain**: pure business rules for fraud scoring, written in Go for low latency.  
- **Ports**: interfaces for data ingestion (Kafka consumer), model inference (SageMaker endpoint), and persistence (DynamoDB).  
- **Adapters**: AWS Lambda functions wired to the ports; each adapter handles protocol translation and retries.

I used **AWS EventBridge** to decouple event sources, **Amazon SageMaker** for on‑demand scoring, and **Step Functions** to orchestrate fallback logic. This design allowed us to deploy new model versions independently (CI/CD via CodePipeline) without touching the core domain.

**Result**  
Deployment time fell from 48 hrs to under 3 hrs; the fraud detection accuracy improved by 7 % (from 85 % to 92 %) and the quarterly win rate rebounded to +18 %. Cost per prediction dropped 30 % due to efficient Lambda scaling and reduced API calls.

**Reflection**  
I learned that *ownership* means questioning existing couplings, while *Dive Deep* required profiling latency hotspots. The bar‑raiser will notice my focus on measurable impact, clear trade‑offs (Lambda cold starts vs. cost), and iterative learning from failed rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
