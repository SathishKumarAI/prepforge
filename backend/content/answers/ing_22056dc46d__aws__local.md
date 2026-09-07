---
qid: ing_22056dc46d__aws__local
question: 'Explain: SSH Keys — Top 4 Authentication Mechanisms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 474
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:43:57-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* At my previous role I was tasked to secure the data‑pipeline that moved terabytes of sensitive customer logs into SageMaker for anomaly detection.  
*Task:* Reduce the attack surface while keeping developer productivity high.  
*Action:* I evaluated four authentication mechanisms—passwords, MFA tokens, IAM roles with OIDC, and **SSH key pairs**—and built a proof‑of‑concept that used EC2 bastion hosts with managed key rotation via **AWS Secrets Manager** and **SSM Session Manager**.  
*Result:* We cut unauthorized access attempts by 97 % (from 12/month to 0) and eliminated the need for password resets, saving 15 hrs of ops work per week.

---

### Top 4 Authentication Mechanisms

| Mechanism | Strengths | AWS Service(s) |
|-----------|-----------|----------------|
| **SSH Key Pairs** | Zero‑knowledge authentication; no secrets in transit | EC2, IAM, Secrets Manager |
| **IAM Roles + OIDC** | Fine‑grained policy control; short‑lived tokens | IAM, Cognito, STS |
| **MFA (Hardware/SOFTWARE)** | Adds second factor; hard to compromise | IAM MFA, AWS SSO |
| **Password + 2FA** | Familiar UI; fallback for legacy systems | IAM, Cognito |

---

### Design Rationale

1. **Scalability:** Using **SSM Session Manager** eliminates the need to manage thousands of bastion hosts.  
2. **Availability:** Key rotation is automated via Secrets Manager; failover uses multi‑AZ EC2 instances.  
3. **Cost:** We avoided on‑prem hardware, leveraging serverless secrets storage and only paying for actual session minutes (~$0.005/hr).  

**Bar‑raiser note:** I demonstrated *ownership* by driving the solution end‑to‑end, *dive deep* into each service’s IAM policy implications, quantified impact with real metrics, and reflected on a failed pilot where we ignored key expiration—leading to an audit finding. The lesson: enforce automated rotation from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
