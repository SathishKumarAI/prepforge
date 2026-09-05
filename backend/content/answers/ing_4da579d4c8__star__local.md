---
qid: ing_4da579d4c8__star__local
question: 'Explain: Enterprise-Grade Security and Controls — Harvey | AI software
  for legal and professional services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 344
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:03:56-05:00'
sources: []
---

**Situation:**  
I was leading the integration of a new AI document‑review engine into our client’s flagship legal practice management platform. The product handled sensitive case files and had to meet strict GDPR, HIPAA, and ISO 27001 compliance standards.

**Task:**  
My goal was to design an end‑to‑end security architecture that protected data in transit and at rest, enforced role‑based access controls, and enabled auditable logging—all while keeping inference latency under 1 s for real‑time user feedback.

**Action:**  
I adopted a zero‑trust model: encrypted TLS for all traffic, token‑based authentication via Azure AD with MFA, and a fine‑grained policy engine using Open Policy Agent to enforce role rules. Data was stored in an Azure Key Vault‑backed PostgreSQL instance; the AI models ran inside isolated Docker containers orchestrated by Kubernetes, with network policies limiting inter‑pod communication. I implemented immutable audit logs via Azure Monitor, then automated alerts for anomalous access patterns. To satisfy regulatory audits, I produced a comprehensive data flow diagram and conducted penetration testing that uncovered no critical vulnerabilities.

**Result:**  
The deployment met all compliance checks in the first external audit, with zero security incidents over 18 months. User latency stayed at 0.8 s on average, and adoption grew by 35% because partners trusted the platform’s data safety. I learned how to balance strict security controls with performance demands in a regulated industry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
