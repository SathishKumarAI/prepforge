---
qid: ing_9be3bb25cf__star__local
question: 'Explain: Setting Up Phoenix (Open-Source, Self-Hosted)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 423
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:43:44-05:00'
sources: []
---

**Situation:**  
When my team was building a real‑time dashboard for IoT sensor data, our existing SaaS messaging layer couldn’t keep up with the 50k messages per second spike during peak hours. We needed an on‑prem solution that offered low latency and full control over user authentication.

**Task:**  
I had to deploy a self‑hosted Phoenix (the open‑source web framework) cluster, configure it for high throughput, integrate it with our PostgreSQL database, and expose it behind our corporate firewall while maintaining end‑to‑end encryption.

**Action:**  
First, I set up two Ubuntu 22.04 VMs in a private subnet and installed Erlang/OTP 26 and Phoenix 1.7. Using Docker Compose I containerized the Phoenix app and its dependencies (PostgreSQL, Nginx as reverse proxy). I enabled Phoenix’s built‑in channel support, tuned the `max_connections` to 2000, and used `:inet_tcp` options for 10 ms keepalive intervals. For authentication, I integrated Guardian JWT with LDAP to sync corporate users. To guarantee high availability, I configured a Kubernetes StatefulSet with two replicas and an external load balancer that performed health checks on the `/healthz` endpoint. Finally, I scripted automated backups using `pg_dumpall` scheduled via cron and set up Prometheus exporters for metrics.

**Result:**  
Within 48 hours of deployment, the system handled 70k messages per second with sub‑30 ms latency, a 40% improvement over our previous SaaS tier. Uptime was 99.9% during load tests, and we reduced operational costs by 35% compared to cloud hosting. I learned that careful tuning of Erlang VM parameters and leveraging Phoenix’s channel model are critical for real‑time workloads in a self‑hosted environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
