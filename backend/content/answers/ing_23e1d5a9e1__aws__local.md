---
qid: ing_23e1d5a9e1__aws__local
question: This coding round is AI-assisted - use Cursor/Claude however you like. How
  do you approach it, and what do you think we're evaluating?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 425
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:47:46-05:00'
sources: []
---

**Situation & Task**  
In the coding round I was given a data‑processing pipeline that had to run on millions of records daily while keeping latency under 200 ms. The interviewer asked how I would use an AI assistant (Cursor/Claude) and what they were really testing.

**Approach (Action)**  
1. **Customer Obsession + Ownership** – I first mapped the user story: *“Users need real‑time sentiment analysis of product reviews.”*  
2. **Dive Deep** – I broke the problem into ingest, transform, inference, and serve layers.  
3. **AWS Services** –  
   - **SQS** for decoupled ingestion (high throughput).  
   - **Lambda + Step Functions** for stateless processing and retries.  
   - **Amazon SageMaker endpoint** for the transformer model; I used *Inference Scheduler* to autoscale based on queue depth.  
   - **DynamoDB Global Tables** for low‑latency storage, replicated in 2 AZs.  
4. **AI Assistant Use** – I fed the prompt “Propose a cost‑effective design for real‑time sentiment analysis with <200 ms latency” to Claude; it returned a concise diagram and suggested using *Amazon API Gateway + Lambda@Edge* to cache results, which I incorporated after validating the 95th percentile latency in my simulation.  
5. **Deliver Results** – I simulated 5 M records/day: achieved 92 % throughput at <190 ms, cost $0.12 per inference vs $0.30 baseline.

**Evaluation Focus**  
- Ownership of end‑to‑end design.  
- Depth in trade‑off analysis (cost vs latency).  
- Ability to leverage AI tools responsibly and validate their output.  

*Metrics:* 92 % throughput, <190 ms latency, cost ↓ 60%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
