---
qid: ing_90ee9502ae__faang__local
question: 'Explain: Clean up — Embed Amazon OpenSearch Service dashboards in your
  application | AWS Big Data Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 450
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:21:20-05:00'
sources: []
---

**Clarify**  
You’re asked to explain how to embed an Amazon OpenSearch Service (OSS) dashboard—specifically a Kibana‑style visualisation—directly inside your web application. Confirm that the goal is:  
1. **Authentication** – users see only data they’re authorized for.  
2. **Seamless UX** – no page‑break or external navigation.  
3. **Performance & security** – minimal load, protected from XSS/CSRF.

**Approach**  
1. Create an OSS domain and set up the dashboards in Kibana.  
2. Enable *cross‑origin* (CORS) on the domain for your app’s origin.  
3. Generate a signed URL or use IAM roles with AWS SigV4 to embed the dashboard iframe.  
4. Wrap the iframe inside a responsive container, passing any required query params (e.g., filters).  

**Depth**  
- **Auth**: Use AWS Cognito + IAM identity pools; attach an OpenSearch policy that grants *read* access only to the user’s indices.  
- **Embedding**: `iframe src="<signed-url>"` where `<signed-url>` is a temporary pre‑signed URL containing the Kibana endpoint and optional query string.  
- **Security**: Set `sandbox="allow-scripts allow-same-origin"`; add CSP headers (`frame-src`) to restrict sources.  
- **Performance**: Cache the signed URLs server‑side, limit TTL (e.g., 5 min).  

**Edge Cases**  
- Network failures → fallback placeholder with error message.  
- Index permissions revoked mid‑session → iframe reloads and shows “Access Denied”.  
- Mobile viewport → ensure responsive CSS or a mobile‑friendly Kibana theme.

**Optimize & Communicate**  
Explain trade‑offs: longer TTL = fewer calls but higher risk if credentials leak; stricter CSP = better security but may block legitimate resources. Emphasise that this pattern keeps analytics tightly coupled to your app while leveraging OSS’s scalability and AWS’ unified auth stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
