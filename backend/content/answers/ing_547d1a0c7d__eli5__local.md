---
qid: ing_547d1a0c7d__eli5__local
question: 'Explain: Deploy an EC2 instance to act as the NGINX proxy to the OpenSearch
  Service domain and OpenSearch Dashboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 234
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:50:42-05:00'
sources: []
---

Think of your OpenSearch cluster like a **back‑office library** that only accepts book requests through its own door (the OpenSearch Service domain). If you want visitors (your apps) to ask for books but keep the library’s address hidden, you can put a friendly **lobby guard** in front—this is the EC2 instance running NGINX.  

The lobby guard receives all visitor questions (HTTP requests), checks that they’re allowed, and then forwards them to the back‑office door while hiding its exact location. When visitors want to see the library’s catalog (OpenSearch Dashboards), the same guard passes those requests on too.  

So you launch an EC2 machine, install NGINX, configure it as a reverse proxy that maps specific URLs (e.g., `/search`, `/dashboards`) to the OpenSearch Service endpoints, and set up TLS if needed. The guard keeps your cluster secure and lets you control who can enter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
