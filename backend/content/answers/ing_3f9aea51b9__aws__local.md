---
qid: ing_3f9aea51b9__aws__local
question: How is distributed tracing different from logging?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 500
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:49:28-05:00'
sources: []
---

**Situation (S)** – While building a server‑less recommendation engine for an e‑commerce platform, we hit a spike in latency after a new feature rollout. **Task (T)** – Diagnose the root cause across hundreds of Lambda functions and DynamoDB streams without adding extra cost.

**Action (A)** –  
- Adopted **AWS X-Ray** for distributed tracing: automatically instruments every request, capturing *service‑level* latencies, error rates, and dependency graphs.  
- Continued **CloudWatch Logs** for fine‑grained debug output from each function.  
- Built a Grafana dashboard that correlates trace IDs with log snippets in real time.

**Result (R)** –  
- Tracing isolated a cold‑start bottleneck in the `UserProfile` Lambda, reducing average end‑to‑end latency by **35 %** and cutting 99th‑percentile latency from 1.2 s to 0.8 s.  
- Logging remained essential for audit trails; tracing eliminated the need to sift through terabytes of logs, saving **$3k/month** in storage.

---

### Why Tracing ≠ Logging  

| Aspect | Distributed Tracing (X‑Ray) | Logging (CloudWatch Logs) |
|--------|-----------------------------|---------------------------|
| **Granularity** | Request‑level spans across services | Event or line‑by‑line output |
| **Purpose** | Performance & fault‑localization; visual dependency map | Diagnostics, audit, business metrics |
| **Overhead** | Minimal (SDK instrumentation) | Variable (log volume) |
| **Cost** | $0.30 per trace segment (low for 10k traces/day) | Storage‑based pricing ($0.50/GB‑month) |

---

#### Leadership Principles  
- **Customer Obsession** – Delivered a smoother user experience by cutting latency.  
- **Ownership & Dive Deep** – Took end‑to‑end ownership, dug into trace data, and applied actionable insights.

*Bar‑raiser note:* Look for *ownership*, *deep technical insight*, *quantified impact*, and evidence of learning from earlier debugging attempts (e.g., we first tried raw logs, then switched to tracing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
