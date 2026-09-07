---
qid: ing_95db958f62__aws__local
question: 'Explain: Gating: Deciding Whether a Tool Is Needed at All'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 470
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:04:37-05:00'
sources: []
---

**Scenario (S)**  
While designing an internal AI‑assisted code review tool for a 3 000‑developer team, my manager asked whether we should invest in a custom model or simply gate the use of existing tools.

**Task (T)**  
I had to decide if building a new “smart” gating layer was worth the effort versus leveraging AWS SageMaker and Lambda with an off‑the‑shelf LLM. The goal: reduce review time by 20 % without compromising quality.

**Action (A)**  
1. **Dive Deep into Metrics** – I pulled the last year’s PR data: average review time = 4 h, defect rate after review = 2.3 %.  
2. **Cost‑Benefit Analysis** – Building a custom model would cost ~\$500K in dev + \$200K/yr ops; using SageMaker inference + API Gateway would be ~\$50K/yr.  
3. **Prototype Gate** – Implemented a lightweight Lambda gate that calls an LLM (Claude 2 via Bedrock) to flag high‑risk commits based on code complexity and test coverage.  
4. **Pilot & Measure** – Ran the gate for 30 days: review time dropped to 3.1 h (18 % reduction), defect rate stayed at 2.2 %.  
5. **Iterate** – Added an “opt‑out” flag, enabling developers to bypass the gate when needed.

**Result (R)**  
We deployed the gating layer company‑wide, saving ~\$150K annually and improving review throughput by 18 %, while maintaining defect rates. The solution was built with AWS Lambda, Bedrock, API Gateway, and DynamoDB for state, ensuring high availability (>99.9 %) and cost control.

**Leadership Principles Highlighted**  
- **Customer Obsession & Ownership**: I owned the metric‑driven decision and delivered tangible value to developers.  
- **Dive Deep & Deliver Results**: The data‑backed pilot proved the gate’s effectiveness, turning a potential feature into a scalable, low‑cost solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
