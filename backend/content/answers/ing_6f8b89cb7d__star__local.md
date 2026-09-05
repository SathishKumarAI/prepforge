---
qid: ing_6f8b89cb7d__star__local
question: 'Explain: Clarifying Requirements — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 327
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:10:03-05:00'
sources: []
---

**Situation:**  
During a mock system‑design session at my previous internship, the interviewer asked me to design a scalable URL shortener. The initial brief was vague: “create a service that can shorten URLs and handle millions of requests per day.” I realized I needed more detail before diving into architecture.

**Task:**  
My goal was to unearth all critical non‑functional requirements—availability, latency, analytics, security, and compliance—so the design would be realistic and defensible in an interview setting.

**Action:**  
I started by asking targeted questions: “What is the expected traffic distribution? Do we need click‑through analytics or just a simple redirect?” I then mapped out user scenarios: internal team usage versus public API, rate limits per IP, GDPR retention rules. I documented constraints such as a 10 ms average response time and 99.9% uptime, plus a 1 % error budget for batch operations. With this clarified data, I sketched the URL table schema (hash key, original URL, TTL), chose Redis for fast lookups, PostgreSQL for durability, and Kafka for click‑streaming analytics.

**Result:**  
The interviewers appreciated my structured approach; we built a design that supported 5 million requests/day with <8 ms latency and 99.95% availability. I learned the power of turning ambiguous prompts into concrete specs—turning a vague question into a defensible architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
