---
qid: ing_5ab9187b84__faang__local
question: 'Explain: III. Config — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 398
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:14:25-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of the “Config” principle in the 12‑Factor App methodology—how an app should externalize configuration so that it can run identically across environments (dev, test, prod). I’ll assume we’re talking about a cloud‑native web service.

**Approach**  
1. Define the purpose of Config in 12‑Factor terms.  
2. List typical mechanisms used to provide config at runtime.  
3. Explain why this separation matters for scalability and reliability.  

**Depth**  
- **Externalization**: All environment‑specific settings (DB URLs, API keys, feature flags) must be stored outside the codebase, typically in environment variables or a secrets manager.  
- **Immutable & One‑Way**: The app reads config once on startup; changing it requires redeployment.  
- **Uniformity**: By keeping the same binary across environments, you avoid “works on my machine” bugs and simplify CI/CD pipelines.  
- **Security**: Secrets are injected at runtime, reducing exposure in source control and container images.  

**Edge Cases**  
- Large config files can bloat environment variable limits; use a vault or config service instead.  
- Some languages (e.g., Java) may need custom loaders for structured data; ensure the loader is testable.  
- Runtime changes (feature toggles) require hot‑reload support—this breaks the “immutable” rule unless handled via external services.

**Optimize & Communicate**  
I’d recommend a lightweight config service (e.g., Consul, Spring Cloud Config) coupled with environment variables for secrets. This gives fast lookup while keeping deployment immutable. In an interview I’d conclude by noting that proper config management reduces operational friction and aligns with the 12‑Factor goal of treating apps as disposable, scalable units.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
