---
qid: ing_d6dc72006a__eli5__local
question: 'Explain: Access OpenSearch Dashboards using the NGINX proxy and set it
  up for embedding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 370
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:14:58-05:00'
sources: []
---

Imagine you have a secret library (OpenSearch Dashboards) that only opens its doors to people who show a special key (the NGINX proxy).  
**NGINX** is like a friendly guard at the entrance; it receives visitors’ requests, checks they’re allowed, and then hands them over to the library.  

1. **Install NGINX** on the same server that runs OpenSearch Dashboards or on a separate one.  
2. In NGINX’s configuration file (e.g., `/etc/nginx/conf.d/opensearch.conf`), create a *server* block that listens on the public port (usually 80 or 443). Inside, add a *location* directive pointing to OpenSearch Dashboards’ internal address (`http://localhost:5601`).  
3. Add `proxy_set_header Host $host;` and `proxy_set_header X-Real-IP $remote_addr;` so the library knows who’s visiting.  
4. Reload NGINX (`nginx -s reload`) to activate the change.

**Embedding** means putting a small window of that library inside another web page. In your HTML, use an `<iframe src="https://your‑domain.com/opensearch"></iframe>` tag; the iframe loads through NGINX and shows only what you allow.

*Terms:*  
- **Proxy**: A middleman that forwards traffic from one address to another.  
- **Embedding**: Displaying content from one site inside another, usually via an `<iframe>`.  

Now your OpenSearch Dashboards are safely reachable from the outside world and can be shown inside other pages with just a few lines of code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
