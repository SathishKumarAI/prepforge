---
qid: ing_0df600dad2__aws__local
question: 'Explain: Authentication — GitHub - lib/pq: Go PostgreSQL driver for database/sql
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 530
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:57:18-05:00'
sources: []
---

**Situation / Task**  
I was tasked to add a secure PostgreSQL backend for our micro‑service that exposed GitHub OAuth as the identity provider. The goal was to store user sessions in Postgres while keeping credentials out of code and meeting AWS compliance.

**Action**  
1. **Design** – I chose `github.com/lib/pq` because it implements `database/sql` with full TLS support, matching our existing Go stack.  
2. **Authentication Flow**  
   * GitHub OAuth callback gives us an access token.  
   * We exchange the token for a GitHub user ID via GitHub’s API.  
   * The service stores that ID in Postgres as `user_id`.  
3. **Connection String** – I built it from environment variables (`PGHOST`, `PGPORT`, `PGUSER`, `PGPASSWORD`, `PGDATABASE`) and appended `?sslmode=verify-full` to enforce TLS.  
4. **AWS Integration** – The RDS instance is in a private subnet; the Lambda function (or EC2) retrieves secrets from AWS Secrets Manager, injects them into the env vars, and uses IAM roles for least‑privilege access.  
5. **Scalability / Cost** – Using read replicas behind an Application Load Balancer keeps write traffic to the primary while scaling reads horizontally. Connection pooling with `pgxpool` reduces per‑request overhead.

**Result**  
Within two weeks I deployed a fully tested, end‑to‑end flow that handled 3 k OAuth logins/day with <0.5 s latency and zero downtime during peak traffic. The cost of the RDS cluster dropped by 18 % due to better connection reuse, and we met SOC‑2 compliance.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Seamless login experience for GitHub users.  
- **Ownership** – Designed end‑to‑end flow, secured credentials, and monitored performance.  
- **Dive Deep** – Tuned TLS settings, connection pooling, and analyzed latency data to iterate quickly.

**Bar‑raiser notes** – The interviewer will expect you to articulate why `lib/pq` was chosen over alternatives, how IAM roles replace hardcoded creds, and the trade‑off between read replicas vs. a single instance under load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
