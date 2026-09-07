---
qid: ing_b897811280__aws__local
question: 'Explain: Rate Limiting — What is an API Gateway? - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 538
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:21:19-05:00'
sources: []
---

**Answer – Rate Limiting & API Gateway (Amazon Way)**  

**Leadership Principles:** *Customer Obsession* – we protect users from abusive traffic; *Ownership* – I own the end‑to‑end flow.

---

### **Situation / Task**
Our public ML inference service (predicting image tags) was hit by a sudden 200× surge in requests during a marketing campaign. Clients experienced 5 s latency, and we risked violating SLAs and incurring extra compute costs.

### **Action**
1. **Implemented an API Gateway** (Amazon API Gateway) to expose the inference endpoint.  
2. Added *rate‑limit* policies: 100 req/s per IP, burst up to 200, with a *differentiated* limit for authenticated users (500 req/s).  
3. Leveraged **AWS WAF** rules to block known malicious IPs and set a global throttling rule at the gateway level.  
4. Configured **Lambda@Edge** to log metrics to CloudWatch and trigger an SNS alert if the average latency >1 s.

### **Result**
- Latency dropped from 5 s to <200 ms for 95% of requests within 10 min.  
- Prevented a projected $3,000/month in excess EC2 usage.  
- Maintained 99.9% uptime during the spike; post‑incident SLA audit score rose from 96% to 99.7%.

---

### **Dive Deep – Design Choices**
| Requirement | AWS Service | Rationale |
|-------------|-------------|-----------|
| Throttling & authentication | API Gateway + Cognito | Built‑in quota control, zero‑code scaling |
| Global low‑latency logs | CloudWatch + Lambda@Edge | Edge execution reduces log lag |
| Cost predictability | Request‑based billing + DynamoDB throttling rules | Avoid overprovisioning; fine‑grained limits |

**Trade‑offs:** Using API Gateway adds ~$0.003 per 1,000 requests (minimal vs. EC2 overhead). The WAF rule set increases initial setup time but yields long‑term security posture.

---

**Bar‑raiser cues:** I demonstrated ownership by designing a self‑healing rate‑limit, quantified impact with latency & cost metrics, and learned from the failure to pre‑configure dynamic quotas for future spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
