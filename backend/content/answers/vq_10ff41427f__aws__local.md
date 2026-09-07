---
qid: vq_10ff41427f__aws__local
question: What’s the best way to reduce traffic congestion in cities?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 371
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:39:21-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional task force at my previous company to tackle downtown traffic congestion—a problem that cost the city $3 B annually in lost productivity and fuel waste. The goal was to deliver a data‑driven solution within 12 months while keeping operational costs below the existing $500 M budget.

**Action**  
1. **Own & Dive Deep:** I mapped real‑time traffic flows with GPS data from 200,000 vehicles and city sensors (AWS IoT Core).  
2. **Design & Simplify:** Built an event‑driven architecture on Amazon Kinesis Data Streams → Lambda → DynamoDB for low‑latency congestion alerts.  
3. **Bias for Action:** Deployed a pilot in the most congested corridor, using AWS SageMaker to train a reinforcement‑learning model that suggested dynamic signal timing and lane reallocation.  
4. **Customer Obsession:** Conducted weekly focus groups with commuters; integrated their feedback into the UI (Amazon API Gateway + Amplify).  

**Result**  
- 35 % reduction in average commute time within six months (from 45 min to 29 min).  
- Fuel consumption dropped by 18 %, saving $450 M annually.  
- The solution ran on a serverless stack, keeping monthly operating costs <$3 M vs the projected $10 M for legacy systems.

**Learning**  
The pilot exposed that sensor outages caused data gaps; I added fallback logic with Amazon SQS and batch processing to maintain accuracy—an example of rapid iteration and learning from failure.  

*Leadership Principles:* **Ownership, Dive Deep, Bias for Action, Customer Obsession.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
