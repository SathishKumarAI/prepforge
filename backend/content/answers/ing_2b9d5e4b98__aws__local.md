---
qid: ing_2b9d5e4b98__aws__local
question: 'Explain: LLM and AI Engineering Questions (2026 Updates)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 503
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:03:42-05:00'
sources: []
---

**Situation & Task**  
When I led the *Next‑Gen Chatbot* project at a fintech startup, we needed to migrate from a rule‑based system to an LLM that could handle 50k concurrent users while staying under $200 K/month. The goal was to reduce ticket volume by 40% and improve NPS.

**Action (Design & Execution)**  
- **Model Selection:** Chose Anthropic’s Claude via *Bedrock* for its low‑latency inference (<150 ms) and built a fine‑tuned “CustomerSupport” model.  
- **Infrastructure:** Deployed on **SageMaker Endpoint** with auto‑scaling (min 2, max 20 instances).  
- **Cost Control:** Integrated **AWS Lambda** to gate requests; only the top 5% of queries hit the endpoint, cutting usage by ~70%.  
- **Observability:** Employed **CloudWatch Metrics** and **X-Ray** for end‑to‑end latency, with alerts on SLA drift.  
- **Security & Compliance:** Used **Secrets Manager** for API keys and **IAM roles** scoped to least privilege.

**Result (Data‑driven Impact)**  
- Reduced ticket volume by 42% (from 12k/month to 7k).  
- Cut operating cost from $350 K to $180 K/month.  
- Improved NPS by 15 points in 3 months.

---

### Leadership Principles Anchored
- **Customer Obsession:** Built a bot that answered real user pain points, evidenced by the NPS lift.  
- **Dive Deep & Ownership:** Hand‑crafted scaling logic and monitored every metric; when latency spiked, I traced it to a specific instance type and adjusted right away.

---

### Bar‑Raiser Takeaways
- Demonstrated *ownership* by owning cost, performance, and compliance end‑to‑end.  
- Showed *depth* with architecture choices (Bedrock vs SageMaker, Lambda gating).  
- Quantified impact (42% ticket reduction, $170 K savings).  
- Learned from a failed early prototype that over‑scaling caused runaway costs; pivoted to gated scaling and re‑measured success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
