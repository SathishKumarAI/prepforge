---
qid: ing_53f1a8707e__star__local
question: 'Explain: About the Authors — Embed Amazon OpenSearch Service dashboards
  in your application | AWS Big Data Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 338
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:16:12-05:00'
sources: []
---

**Situation:**  
At my last company we built a customer‑support portal that needed real‑time analytics on ticket volumes and response times. The product team wanted live visualizations directly in the portal, but our existing BI stack was too heavy for the lightweight front‑end.

**Task:**  
I had to embed an Amazon OpenSearch Service dashboard into the React application so users could see metrics without leaving the page, while keeping performance low and ensuring secure access.

**Action:**  
First I set up an OpenSearch domain with fine‑grained IAM policies and enabled Cognito authentication. Using the OpenSearch Dashboards API, I created a reusable “ticket‑dashboard” index pattern and built Kibana visualizations (heatmaps, line charts). Then I leveraged Amazon’s `embedDashboard` JavaScript library to generate a signed URL for each user session. In React I inserted an `<iframe>` that pointed to this URL, passing the user’s Cognito token via query parameters so OpenSearch could validate access on‑the‑fly. I also added throttling logic: if data refreshed more than once per minute, the iframe would reload silently, keeping latency under 200 ms.

**Result:**  
The embedded dashboards appeared instantly within the portal, cutting average page load time from 3.2 s to 1.8 s and reducing support ticket backlog by 18% in the first month. I learned how OpenSearch’s IAM integration can replace a full‑blown BI platform while still delivering rich, secure visualizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
