---
qid: ing_120314fe61__aws__local
question: 'Explain: Configure the Logging Levels — GitHub - Anshul619/SpringBoot:
  About This repo contains java \"how to to-dos\", concepts in Spring Boot \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 576
total_tokens: 836
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:06:10-05:00'
sources: []
---

**Context (S)**  
I was tasked with adding robust observability to a Spring‑Boot microservice that served as the core recommendation engine for our e‑commerce platform. The existing code logged everything at `INFO`, which clogged CloudWatch and made troubleshooting slow.

**Task (T)**  
Design and implement a fine‑grained logging strategy that balances visibility, cost, and performance while meeting SLA requirements (≤ 200 ms latency).

**Action (A)**  

1. **Define Levels** –  
   * `ERROR` for failures that affect customers.  
   * `WARN` for recoverable issues (e.g., cache miss).  
   * `INFO` for high‑level flow control.  
   * `DEBUG` for detailed diagnostics, enabled only in staging via a feature flag.

2. **Configure Logback** – Use `logback-spring.xml` with property placeholders from AWS Parameter Store (`/app/loggingLevel`). This allows dynamic updates without redeploying.

3. **Centralize Logs** – Forward logs to CloudWatch Logs using the AWS SDK, tagging each log stream by service instance ID and region for easy correlation.

4. **Cost & Scalability** –  
   * Enable `DEBUG` only in a single AZ; other instances stay at `INFO`.  
   * Use CloudWatch Insights queries with `filter` expressions to surface patterns quickly.  
   * Set retention to 30 days, reducing storage costs by 35 % compared to the prior 90‑day policy.

**Result (R)**  

* Reduced log volume by **62 %**, cutting ingestion costs from $1.20/hr to $0.45/hr.  
* Latency dropped from 240 ms to **190 ms** due to less I/O on hot paths.  
* Incident response time improved from 12 min to **3 min** for cache‑related outages, as `WARN` logs surfaced instantly in CloudWatch dashboards.

---

### Leadership Principles Highlighted  

- **Customer Obsession** – Faster issue detection leads to smoother user experience.  
- **Ownership** – I assumed full responsibility for the logging strategy and its operational impact.  
- **Dive Deep** – Analyzed log volume, cost metrics, and latency traces to justify trade‑offs.

### What a Bar‑raiser Looks For  

* Demonstrated ownership of end‑to‑end observability.  
* Quantified performance and cost improvements.  
* Clear understanding of AWS services (CloudWatch Logs, Parameter Store) and their scaling characteristics.  
* Learning from the previous monolithic logging approach: “If we keep everything at INFO, we lose critical signals; if we log too much, we pay for noise.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
