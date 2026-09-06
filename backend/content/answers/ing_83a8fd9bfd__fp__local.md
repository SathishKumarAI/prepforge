---
qid: ing_83a8fd9bfd__fp__local
question: Define SLOs for a customer support agent. Every span returns 200 and latency
  is fine. What do you actually alert on?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 391
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:45:10-05:00'
sources: []
---

**SLOs for a Customer‑Support Agent (derived from first principles)**  
The *goal* of any support team is to convert incoming inquiries into satisfied customers while keeping operational costs bounded. From an optimization standpoint this translates to **maximising the expected value of customer goodwill per unit effort**.  

1. **First‑Response Time (FRT)** – The objective is that 95 % of tickets are answered within *X* minutes. A shorter FRT reduces the *waiting‑cost* function \(C(t)=\alpha e^{\beta t}\), which grows exponentially with time.  
2. **Resolution Rate** – At least 90 % of tickets closed on first contact. Each unresolved ticket incurs a *future‑support cost* and lowers CSAT, so the SLO bounds the expected future effort.  
3. **Customer Satisfaction (CSAT)** – Target ≥ 4.5/5. This is the direct reward signal in our value function; it also feeds back into churn probability \(p_{\text{churn}}\propto e^{-\gamma \text{CSAT}}\).  

**What to alert on?**  
- *FRT* breaches (95 % percentile > X) – indicates bottleneck or staffing issue.  
- *Resolution‑rate* dips below 90 % – signals knowledge gaps or escalation overload.  
- *CSAT* falls under threshold – triggers review of agent performance or content quality.  

These alerts are the control knobs that keep the value function above a desired baseline; they’re not about HTTP status codes but about the *human‑centric cost‑benefit trade‑off* that drives service quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
